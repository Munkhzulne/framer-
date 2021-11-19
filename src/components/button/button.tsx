import { Fade } from '@material-ui/core';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Border, Text, LoadingDots } from '../basic';
import {
    Center,
    InteractiveStyle,
    mapColorToBackground,
    Overlay,
    Padding,
    Queue,
} from '../layout';
import { ButtonType } from './button.d';

const RawButton = ({
    leftIcon,
    rightIcon,
    loading,
    paddingSize,
    queueSize,
    textType,
    textRole,
    children,
    ...props
}) => {
    return (
        <Border {...props}>
            <Center height="100%">
                <Padding
                    size={[
                        1,
                        rightIcon || loading ? 6 : 5,
                        1,
                        leftIcon ? 6 : 5,
                    ]}
                >
                    <Queue size={queueSize || 4}>
                        {leftIcon && (
                            <Overlay top={0} bottom={0} left={4.5}>
                                <Center>{leftIcon}</Center>
                            </Overlay>
                        )}
                        <Text
                            nowrap
                            type={textType || 'primary3'}
                            role={textRole}
                        >
                            {children}
                        </Text>
                    </Queue>
                </Padding>
            </Center>
            <Fade in={loading}>
                <Overlay top={0} bottom={0} right={4}>
                    <Center>
                        <LoadingDots />
                    </Center>
                </Overlay>
            </Fade>
            {!loading && rightIcon && (
                <Overlay top={0} bottom={0} right={4}>
                    <Center>{rightIcon}</Center>
                </Overlay>
            )}
        </Border>
    );
};

const DisabledStyleButton = css`
    opacity: ${({ disabled }: any) => (disabled ? '0.5' : 1)};
    pointer-events: ${({ disabled }: any) => (disabled ? 'none' : 'all')};
`;

export const RawStyledButton = styled(RawButton)`
    ${({ loading }) => !loading && InteractiveStyle};
    ${DisabledStyleButton};
    pointer-events: ${({ loading }) => loading && 'none'};
    :hover {
        background-color: ${({ loading, backgroundHoverColor }) =>
            !loading && mapColorToBackground(backgroundHoverColor)};
    }
`;

export const StyledButton = (props) => {
    const { textRole } = props;
    return (
        <RawStyledButton
            maxWidth={'200px'}
            {...props}
            borderSize={[2]}
            radius="xlarge"
            textRole={textRole || 'light'}
        />
    );
};

export const Button: FC<ButtonType> = (props) => {
    const { type, role, backgroundHoverColor } = props;
    const isButtonSecondary = role === 'secondary' ? 'pink' : 'darkBlue';

    switch (type) {
        default:
            return (
                <StyledButton
                    {...props}
                    color={isButtonSecondary}
                    textRole={role || 'primary'}
                    paddingSize={[2, 5]}
                    backgroundColor="transparent.main"
					backgroundHoverColor={backgroundHoverColor}
                />
            );
        case 'primary':
            return (
                <StyledButton
                    {...props}
                    color='darkBlue'
                    paddingSize={[2, 5]}
                    backgroundColor='darkBlue'
					backgroundHoverColor={backgroundHoverColor}
                />
            );
        case 'secondary':
            return (
                <StyledButton
                    {...props}
                    color={'pink'}
                    paddingSize={[2, 5]}
                    backgroundColor="pink"
					backgroundHoverColor={backgroundHoverColor}
                />
            );
        case 'small':
            return (
                <StyledButton
                    {...props}
                    color={isButtonSecondary}
                    textRole={role || 'primary'}
                    textType="primary6"
                    paddingSize={[0, 4]}
                    backgroundColor="transparent.main"
                />
            );
        case 'error':
            return (
                <StyledButton
                    {...props}
                    role="error"
                    textRole="error"
                    paddingSize={[2, 5]}
                />
            );
    }
};
