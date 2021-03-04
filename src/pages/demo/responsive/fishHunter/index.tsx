// import useTranslation from '@hooks/useTranslation'
import styled, { css } from 'styled-components/macro'
import { AbRWrapper, range } from '@components/common/responsive'
import copyright from '@hooks/useCopyRight';
import { useSelector } from '@redux'
import useFishHunter from '@pages/fishHunter/hooks'
// import { useCallback } from 'react'
import Lottie from 'lottie-react';

import img_bg from './images/bg.jpg';
import img_title from './images/title.png';
import img_btnPlay from './images/btn-play.png';
import img_btnTrial from './images/btn-trial.png';
import img_btnTransfer from './images/btn-transfer.png';

import ani_bubble from './images/lotties/bubble';
import ani_cannon_left from './images/lotties/cannon-left';
import ani_cannon_middle from './images/lotties/cannon-middle';
import ani_cannon_right from './images/lotties/cannon-right';
import ani_fish1 from './images/lotties/fish-1';
import ani_fish2 from './images/lotties/fish-2';
import ani_fish3 from './images/lotties/fish-3';
import ani_fish4 from './images/lotties/fish-4';
import ani_fish5 from './images/lotties/fish-5';
import ani_fish6 from './images/lotties/fish-6';

interface ISLottie {
    cover?: ISLottieBgCover;
}

interface ISLottieBgCover {
    width: number;
    height: number;
}

const coverImg = (width: number, height: number) => {
    return css`
        width: 100vw;
        height: 100vh;
        min-width: calc(${width} / ${height} * 100vh);
        min-height: calc(${height} / ${width} * 100vw);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;

        @media only screen and (max-width: 1280px) {
            min-width: 1280px;
            min-height: calc(1280px * ${height} / ${width});
        }
    `
}

const LottieCanvas = (props: any) => {
    return <Lottie renderer={'canvas'} {...props} />
}

const SFishHunter = styled(AbRWrapper)`
    height: 100%;
    position: relative;
    background: center center / cover no-repeat url(${img_bg});
    overflow: hidden;
`

const SWrapper = styled.div`
    width: 200vh;
    height: 100%;
    /* min-width: 1280px; */
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`

const STitle = styled.div`
    ${range('width', 483, 1330)};
    ${range('height', 218, 600)};
    position: absolute;
    transform: translate(-50%, -50%);
    top: 35%;
    left: 50%;
    background: center center / contain no-repeat url(${img_title});
`

const SLottie = styled(LottieCanvas)<ISLottie>`
    position: absolute;
    ${ ({ cover }) => !!cover && coverImg(cover.width, cover.height) }
`

const SCannonL = styled(SLottie)`
    ${range('width', 63, 180)};
    ${range('height', 174, 498)};
    bottom: 30px;
    left: 35%;
    transform: translate(-50%, 0);
`

const SCannonC = styled(SLottie)`
    ${range('width', 79, 224)};
    ${range('height', 174, 498)};
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
`

const SCannonR = styled(SLottie)`
    ${range('width', 63, 180)};
    ${range('height', 174, 498)};
    bottom: 30px;
    left: 65%;
    transform: translate(-50%, 0);
`

const SFish = styled(SLottie)`
    width: 100%;
    height: 0;
    max-width: 1920px;
    pointer-events: none;
    transform: translate(0, -50%);

    canvas {
        position: absolute;
        top: 0;
        left: 0;
    }
`

const SFish1 = styled(SFish)`
    padding: 7.8125% 0 0;
    top: 25%;
    right: 0;
`

const SFish2 = styled(SFish)`
    padding: 7.8125% 0 0;
    top: 10%;
    left: 0;
`

const SFish3 = styled(SFish)`
    padding: 9.765625% 0 0;
    top: 40%;
    left: 0;
`

const SFish4 = styled(SFish)`
    padding: 7.8125% 0 0;
    top: 30%;
    left: 0;
`

const SFish5 = styled(SFish)`
    padding: 7.8125% 0 0;
    top: 70%;
    left: 0;
`

const SFish6 = styled(SFish)`
    padding: 15.625% 0 0;
    top: 55%;
    right: 0;
`

const SBtnPlay = styled.div`
    ${range('width', 70, 160)};
    ${range('height', 70, 160)};
    position: absolute;
    transform: translate(-50%, -50%);
    top: 70%;
    left: 43%;
    background: center center / contain no-repeat url(${img_btnPlay});
    cursor: pointer;
    z-index: 1;
`

const SBtnTrial = styled.div`
    ${range('width', 70, 160)};
    ${range('height', 70, 160)};
    position: absolute;
    transform: translate(-50%, -50%);
    top: 70%;
    left: 57%;
    background: center center / contain no-repeat url(${img_btnTrial});
    cursor: pointer;
    z-index: 1;
`

const SBtnTransfer = styled(SBtnTrial)`
    background: center center / contain no-repeat url(${img_btnTransfer});
`

const SFooter = styled.div`
    font-size: 14px;
    line-height: 1;
    color: #999;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1a1a1a;
    position: absolute;
    bottom: 0;
    left: 0;
`

export default () => {
    // const t = useTranslation()
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const { onEnterGame, onEnterTrial, directToTransfer } = useFishHunter()

    return (
        <SFishHunter params={{ maxVh: 1100, minVh: 500, noCeiling: true }}>
            <SLottie animationData={ani_bubble} cover={ { width: 2560, height: 1152 } } />
            <SFish1 animationData={ani_fish1} />
            <SFish2 animationData={ani_fish2} />
            <SFish3 animationData={ani_fish3} />
            <SFish4 animationData={ani_fish4} />
            <SFish5 animationData={ani_fish5} />
            <SFish6 animationData={ani_fish6} />
            <SWrapper>
                <SCannonL animationData={ani_cannon_left} />
                <SCannonC animationData={ani_cannon_middle} />
                <SCannonR animationData={ani_cannon_right} />
                <STitle />
                <SBtnPlay onClick={onEnterGame} data-qa={'btnAg'} />
                { isLoggedIn ? <SBtnTrial onClick={onEnterTrial} data-qa={'btnAgTrial'} /> : <SBtnTransfer onClick={directToTransfer} data-qa={'btnFishHunterTransfer'} /> }
            </SWrapper>

            <SFooter data-qa={'txtFooterCopyRight'}>{ copyright }</SFooter>
        </SFishHunter>
    )
}
