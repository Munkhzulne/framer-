import styled, { css } from 'styled-components';
import { colors, FontStyle } from '../../theme';
import { InteractiveStyle } from '../layout';
import _ from 'lodash';

const mapRoleToText = {
    default: colors.darkBlue,
    primary: colors.darkGray,
    secondary: colors.darkBlue,
    success: colors.green.main,
    alert: colors.orange.main,
    error: colors.red.main,
    light: colors.white.main,
    dark: colors.black.main,
};

export type TextRoleType = keyof typeof mapRoleToText;
export type TextStyle = keyof typeof FontStyle;

type TextType = {
    role?: TextRoleType;
    color?: ColorType;
    type?: TextStyle;
    nowrap?: boolean;
    underlined?: boolean;
    alignment?: 'left' | 'right' | 'center';
    interactive?: boolean;
    onClick?: () => void;
};

const mapColorToText = (color) => {
    return _.get(colors, color || 'darkGray');
};

export const mapRoleToTextColor = (role: keyof typeof mapRoleToText) => {
    return mapRoleToText[role || 'default'];
};

export const TextStyle = css<TextType>`
    font-family: 'Poppins', sans-serif;
    text-decoration: ${({ underlined }) => underlined && 'underline'};
    ${({ type }) => {
        return FontStyle[type] || FontStyle.default;
    }}
    text-overflow: ${({ nowrap }) => nowrap && 'ellipsis'};
    overflow: ${({ nowrap }) => nowrap && 'hidden'};
    white-space: ${({ nowrap }) => nowrap && 'nowrap'};
    text-align: ${({ alignment }) => alignment || 'left'};
    cursor: ${({ onClick }) => onClick && 'pointer'};
`;

export const Text = styled.span<TextType>`
    ${TextStyle}
    color: ${({ role, color }) =>
        color ? mapColorToText(color) : mapRoleToTextColor(role)} !important;
    ${({ interactive }) => interactive && InteractiveStyle}
`;

