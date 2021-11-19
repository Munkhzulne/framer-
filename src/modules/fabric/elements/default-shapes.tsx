export const STROKE = '#000000';
export const FILL = 'rgba(255, 255, 255, 0.0)';

export const CIRCLE = {
    radius: 50,
    left: 100,
    top: 100,
    fill: FILL,
    stroke: STROKE,
    perPixelTargetFind: true,
};

export const RECTANGLE = {
    left: 100,
    top: 100,
    fill: FILL,
    stroke: STROKE,
    width: 100,
    height: 100,
    angle: 0,
    perPixelTargetFind: true,
};

export const LINE = {
    points: [100, 100, 300, 100],
    options: {
        left: 170,
        top: 150,
        stroke: STROKE,
        perPixelTargetFind: true,
    },
};

export const TEXT = {
    type: 'text',
    left: 100,
    top: 100,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: STROKE,
    perPixelTargetFind: true,
};

export const TRIANGLE = {
    width: 100,
    height: 100,
    fill: FILL,
    left: 100,
    stroke: STROKE,
    top: 100,
    perPixelTargetFind: true,
};

export const PATH = {
    points:
        'M 272.70141,238.71731 \
    C 206.46141,238.71731 152.70146,292.4773 152.70146,358.71731  \
    C 152.70146,493.47282 288.63461,528.80461 381.26391,662.02535 \
    C 468.83815,529.62199 609.82641,489.17075 609.82641,358.71731 \
    C 609.82641,292.47731 556.06651,238.7173 489.82641,238.71731  \
    C 441.77851,238.71731 400.42481,267.08774 381.26391,307.90481 \
    C 362.10311,267.08773 320.74941,238.7173 272.70141,238.71731  \
    z ',
    config: {
        left: 100,
        top: 100,
        scaleX: 0.3,
        scaleY: 0.3,
        fill: FILL,
        stroke: STROKE,
        perPixelTargetFind: true,
    },
};
