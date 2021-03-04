import Cannon9 from './images/image9.c1c818129ba237147ee581461d1476a0.png'

export default {
    v: '5.7.4',
    fr: 60,
    ip: 0,
    op: 180,
    w: 216,
    h: 360,
    nm: 'cannon-middle',
    ddd: 0,
    assets: [{ id: 'image_0', w: 115, h: 100, p: Cannon9, e: 0 }],
    layers: [
        {
            ddd: 0,
            ind: 1,
            ty: 2,
            nm: 'bullet',
            refId: 'image_0',
            sr: 1,
            ks: {
                o: {
                    a: 1,
                    k: [
                        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0], e: [100] },
                        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 15, s: [100], e: [100] },
                        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 49, s: [100], e: [0] },
                        { t: 73 },
                    ],
                    ix: 11,
                },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                    a: 1,
                    k: [
                        {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            t: 0,
                            s: [105.5, 410, 0],
                            e: [105.5, -50, 0],
                            to: [0, -76.667, 0],
                            ti: [0, 76.667, 0],
                        },
                        { t: 94 },
                    ],
                    ix: 2,
                    l: 2,
                },
                a: { a: 0, k: [57.5, 50, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            hasMask: true,
            masksProperties: [
                {
                    inv: false,
                    mode: 'f',
                    pt: {
                        a: 0,
                        k: {
                            i: [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                            ],
                            o: [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                            ],
                            v: [
                                [0, 0],
                                [115, 0],
                                [115, 100],
                                [0, 100],
                            ],
                            c: true,
                        },
                        ix: 1,
                    },
                    o: { a: 0, k: 100, ix: 3 },
                    x: { a: 0, k: 0, ix: 4 },
                    nm: 'Mask 1',
                },
            ],
            ip: 0,
            op: 180,
            st: 0,
            bm: 0,
        },
    ],
    markers: [],
}
