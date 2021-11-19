type GridType = {
    space?: number;
    columns?: number | number[];
    align?: 'flex-end' | 'flex-start' | 'center';
    columnTemplate?: any;
};
type StackType = {
    size?: number;
    alignVertical?:
        | ''
        | 'stretch'
        | 'center'
        | 'start'
        | 'end'
        | 'flex-end'
        | 'flex-start';
};
type QueueType = {
    alignItems?: string;
    justifyContent?:
        | 'center'
        | 'start'
        | 'end'
        | 'flex-start'
        | 'flex-end'
        | 'left'
        | 'right'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'stretch';
    alignVertical?:
        | ''
        | 'stretch'
        | 'center'
        | 'start'
        | 'end'
        | 'flex-end'
        | 'flex-start';
    size?: number | number[];
};
type DimensionType = {
    width?: string | number;
    height?: string | number;
    maxHeight?: string | number;
    maxWidth?: string | number;
    theme?: any;
};
type PaddingType = {
    size?: number | number[];
};
type OverlayType = {
    visible?: boolean;
    relative?: boolean;
    zIndex?: number;
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
};
type BackgroundRole =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'alert'
    | 'error'
    | 'transparent'
    | 'dark'
    | 'light';
type HoverRole = 'primary' | 'secondary' | 'success' | 'alert' | 'error';
type BackgroundType = {
    background?: boolean;
    backgroundRole?: BackgroundRole;
    backgroundColor?: ColorType;
    hoverRole?: HoverRole;
};
type ContainerType = {
    theme?: any;
};
type MarginType = {
    theme?: any;
    size: number | number[];
};

type BoxType = {
    props?: any;
    image?: string;
    width?: string | number;
    ratio?: any;
    theme?: number;
};
type CircleType = {
    theme?: any;
    size?: number;
};
type ShadowType = {
    interactive?: boolean;
};
type SpacerType = {
    size?: number;
    grow?: number;
    alignment?: 'right' | 'center' | 'left';
};
type ColorType =
    | 'white.main'
    | 'dark'
    | 'pink'
    | 'gray'
    | 'darkGray'
    | 'darkBlue'
    | 'black.main'
    | 'transparent'
    | 'blue.light'
    | 'blue.dark'
    | 'blue.main'
    | 'blue.hover'
    | 'purple.light'
    | 'purple.dark'
    | 'purple.main'
    | 'purple.hover'
    | 'aqua.light'
    | 'aqua.dark'
    | 'aqua.main'
    | 'aqua.hover'
    | 'green.light'
    | 'green.dark'
    | 'green.main'
    | 'green.hover'
    | 'orange.light'
    | 'orange.dark'
    | 'orange.main'
    | 'orange.hover'
    | 'red.light'
    | 'red.dark'
    | 'red.main'
    | 'red.hover';

declare module '*.json' {
    const value: any;
    export default value;
}
