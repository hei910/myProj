import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components/macro'

const defaultParams = {
    minVh: 500,
    maxVh: 1000,
    maxVw: 560,
    noCeiling: false,
    unit: 'vh',
}

const baseFontSize = 16;
const defaultMobileWidth = 375;

interface AbRWrapperProps {
    className?: string
    params?: IResponsiveParams
}

interface IResponsiveParams {
    minVh?: number
    maxVh?: number
    maxVw?: number
    baseFontSize?: number
    noCeiling?: boolean
    ratio?: number
    unit?: 'vh' | 'vw'
}

const Wrapper = styled.div`
    font-size: ${({ theme: { responsive: r } }) => (baseFontSize * 100) / (r.unit === 'vh' ? r.maxVh : defaultMobileWidth) + r.unit };
    ${ ({ theme: { responsive: r } }) => !r.noCeiling && css`
        ${ (r.unit === 'vh')
        ? `
            @media only screen and (min-height: ${r.maxVh}px) {
                font-size: ${baseFontSize}px;
            }`
        : `
            @media only screen and (min-width: ${r.maxVw}px) {
                font-size: ${baseFontSize / defaultMobileWidth * r.maxVw}px;
            }`
}
    `}
`

const MobileWrapper = styled.div`
    ${ ({ theme: { responsive: r } }) => !r.noCeiling && css`
        width: 100%;
        max-width: ${r.maxVw}px;
        margin: 0 auto;
    `}
`

export const AbRWrapper: React.FC<AbRWrapperProps> = ({ children, className, params = {} }) => {
    const finalParams = {
        ...defaultParams,
        ...params,
    }

    return (
        <ThemeProvider theme={ theme => ({ ...theme, responsive: finalParams })} >
            <Wrapper className={className}>
                { finalParams.unit === 'vw' ? <MobileWrapper>{children}</MobileWrapper> : children }
            </Wrapper>
        </ThemeProvider>
    )
}
export const px = (...px: (number | string)[]): string => {
    return px
        .join(' ')
        .toString()
        .split(' ')
        .map((val) => val.split('px')[0])
        .map((val) => (!isNaN(+val) ? +val / baseFontSize + 'em' : val))
        .join(' ')
}

export const range = (
    property: string,
    min: number,
    max: number,
    minVh?: number,
    maxVh?: number,
) => {
    return css`
        ${ ({ theme: { responsive: r } }) => css`
            /* this function is for setting min and max value upon viewport height change */
            /* currently supports Vh relative unit only */
            ${`${property}: ${min}px;`}

            @media screen and (min-height: ${minVh || r.minVh}px) {
                ${ `${property}: calc(${min}px + ${max - min} * ((100vh - ${minVh || r.minVh}px) / ${(maxVh || r.maxVh) - (minVh || r.minVh)}));`}
            }

            ${ !r.noCeiling && css`
                @media screen and (min-height: ${ maxVh || r.maxVh}px) {
                    ${`${property}: ${max}px;`}
                }
            `}
        `}
    `
}

export const fs = (val: number) => {
    return css`
        ${range('font-size', 12, val)}
    `
}
