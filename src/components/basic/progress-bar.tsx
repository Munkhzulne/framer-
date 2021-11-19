import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Overlay, Grid, Stack, BackgroundRoleType } from '../layout';
import { Border } from './border';
import { Text, TextRoleType } from './text';
import _ from 'lodash';

export type ProgressBarRole =
    | 'error'
    | 'active'
    | 'success'
    | 'draft'
    | 'warning'
    | 'running';
interface ProgressBarProps {
    progress?: number;
    role?: ProgressBarRole;
    label?: string;
    className?: any;
    height?: number;
}

const mapRoleToBackgroundRole: Record<ProgressBarRole, BackgroundRoleType> = {
    error: 'error',
    active: 'primary',
    success: 'success',
    warning: 'alert',
    draft: 'transparent',
    running: 'success',
};

const mapRoleToTextRole: Record<ProgressBarRole, TextRoleType> = {
    error: 'error',
    active: 'primary',
    success: 'success',
    warning: 'alert',
    draft: 'secondary',
    running: 'success',
};

const StyledProgress = css`
    content: '';
    background-image: linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
    ) !important;
    z-index: 9;
    background-size: 25px 25px;
    animation: move 3s linear infinite;

    @keyframes move {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 50px 50px;
        }
    }
`;

const RawProgress: FC<ProgressBarProps> = (props) => {
    const { height, progress, role, className } = props;
    return (
        <Border
            className={className}
            radius="small"
            borderSize={[0]}
            width={`${progress}%`}
            animationDelay={0.2}
            height={height || 3}
            backgroundRole={_.get(mapRoleToBackgroundRole, `${role}`)}
        />
    );
};

export const Progress = styled(RawProgress)`
    ${({ role }) => role == 'running' && StyledProgress};
`;

export const ProgressBar: FC<ProgressBarProps> = (props) => {
    const { height, ...rest } = props;
    return (
        <Border
            radius="small"
            borderSize={[0]}
            role="primary"
            width="100%"
            height={height || 3}
            backgroundColor="purple.light"
        >
            <Overlay top={0} left={0} height="100%" width="100%">
                <Progress {...rest} />
            </Overlay>
        </Border>
    );
};

type ProgressBarWithLabelType = {
    progress: number;
    progressBarRole?: ProgressBarRole;
    label: string;
};

export const ProgressBarWithLabel: FC<ProgressBarWithLabelType> = ({
    progress,
    progressBarRole,
    label,
}) => {
    return (
        <Grid columns={2}>
            <Stack size={2} width={'100%'}>
                <Text
                    type="tertiary2"
                    role={
                        progressBarRole
                            ? mapRoleToTextRole[progressBarRole]
                            : 'default'
                    }
                >
                    {label}
                </Text>
                <ProgressBar progress={progress} role={progressBarRole} />
            </Stack>
            <Text
                type="primary2"
                role={
                    progressBarRole
                        ? mapRoleToTextRole[progressBarRole]
                        : 'default'
                }
            >{`${Math.trunc(progress)}%`}</Text>
        </Grid>
    );
};
