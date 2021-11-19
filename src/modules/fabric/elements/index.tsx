import React, { useContext } from 'react';
import {
    avatars,
    CircleIcon,
    flowers,
    HeartIcon,
    LineIcon,
    mails,
    RectangleIcon,
    socials,
    travels,
    TriangleIcon,
} from '../../../assets/shapes';
import {
    Center,
    InteractiveIcon,
    Padding,
    Queue,
    Stack,
    Text,
} from '../../../components';
import { FabricContext } from '../fabric-provider';
import { TRIANGLE, CIRCLE, LINE, RECTANGLE, PATH } from './default-shapes';
import styled from 'styled-components';
import _ from 'lodash';
const ContainerX = styled.div`
    width: 100%;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        -webkit-appearance: none;
    }
    ::-webkit-scrollbar:horizontal {
        padding-top: 2px;
        height: 4px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;
export const FabricShapes = () => {
    const {
        addHeart,
        addLine,
        initCanvas,
        addBasicShape,
        addSvgElement,
    } = useContext(FabricContext);

    return (
        <Padding size={5}>
            <Stack size={5}>
                <Text role="light" type="primary3">
                    Basic Shapes
                </Text>
                <ContainerX>
                    <Queue size={5}>
                        <InteractiveIcon
                            onClick={() =>
                                addBasicShape({
                                    type: 'Circle',
                                    config: { ...CIRCLE },
                                })
                            }
                        >
                            <CircleIcon />
                        </InteractiveIcon>

                        <InteractiveIcon
                            onClick={() =>
                                addBasicShape({
                                    type: 'Triangle',
                                    config: { ...TRIANGLE },
                                })
                            }
                        >
                            <TriangleIcon />
                        </InteractiveIcon>

                        <InteractiveIcon
                            onClick={() =>
                                addBasicShape({
                                    type: 'Rect',
                                    config: { ...RECTANGLE },
                                })
                            }
                        >
                            <RectangleIcon />
                        </InteractiveIcon>
                        <InteractiveIcon
                            onClick={() =>
                                addLine({
                                    points: [...LINE.points],
                                    config: LINE.options,
                                })
                            }
                        >
                            <LineIcon />
                        </InteractiveIcon>
                        <InteractiveIcon
                            onClick={() =>
                                addHeart({
                                    points: PATH.points,
                                    config: PATH.config,
                                })
                            }
                        >
                            <HeartIcon />
                        </InteractiveIcon>
                    </Queue>
                </ContainerX>
                <Text role="light" type="primary3">
                    Flowers
                </Text>
                <ContainerX>
                    <Queue size={5}>
                        {_.map(flowers, (flower, key) => {
                            return (
                                <InteractiveIcon
                                    onClick={() =>
                                        addSvgElement(
                                            _.toString(flower.svgString),
                                            { name: `flower-${key}` }
                                        )
                                    }
                                >
                                    {flower.node}
                                </InteractiveIcon>
                            );
                        })}
                    </Queue>
                </ContainerX>
                <Text role="light" type="primary3">
                    Avatars
                </Text>
                <ContainerX>
                    <Queue size={5}>
                        {_.map(avatars, (flower, key) => {
                            return (
                                <InteractiveIcon
                                    onClick={() =>
                                        addSvgElement(
                                            _.toString(flower.svgString),
                                            { name: `avatar-${key}` }
                                        )
                                    }
                                >
                                    {flower.node}
                                </InteractiveIcon>
                            );
                        })}
                    </Queue>
                </ContainerX>
                <Text role="light" type="primary3">
                    Social media
                </Text>
                <ContainerX>
                    <Queue size={5}>
                        {_.map(socials, (flower, key) => {
                            return (
                                <InteractiveIcon
                                    onClick={() =>
                                        addSvgElement(
                                            _.toString(flower.svgString),
                                            { name: `social-${key}` }
                                        )
                                    }
                                >
                                    {flower.node}
                                </InteractiveIcon>
                            );
                        })}
                    </Queue>
                </ContainerX>
                <Text role="light" type="primary3">
                    Travel
                </Text>
                <ContainerX>
                    <Queue size={5}>
                        {_.map(travels, (flower, key) => {
                            return (
                                <InteractiveIcon
                                    onClick={() =>
                                        addSvgElement(
                                            _.toString(flower.svgString),
                                            { name: `travel-${key}` }
                                        )
                                    }
                                >
                                    {flower.node}
                                </InteractiveIcon>
                            );
                        })}
                    </Queue>
                </ContainerX>
                <Text role="light" type="primary3">
                    Mail
                </Text>
                <ContainerX>
                    <Queue size={5}>
                        {_.map(mails, (flower, key) => {
                            return (
                                <InteractiveIcon
                                    onClick={() =>
                                        addSvgElement(
                                            _.toString(flower.svgString),
                                            { name: `mail-${key}` }
                                        )
                                    }
                                >
                                    {flower.node}
                                </InteractiveIcon>
                            );
                        })}
                    </Queue>
                </ContainerX>
            </Stack>
        </Padding>
    );
};
