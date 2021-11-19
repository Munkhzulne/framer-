import React, { useState } from 'react';
import { Queue } from '..';
import _ from 'lodash';
import { Border, Text } from '../basic';
import { Center, Margin, Overlay, Padding, Stack } from '../layout';
import { ChevronDownIcon, CloseIcon } from '../../assets';
import { AnimatedSlideDownView } from '../animation';
import styled from 'styled-components';
import { InteractiveIcon } from '../utility';

const RotatableIcon = styled(ChevronDownIcon)`
    transform: ${({ clicked }) => (clicked ? `rotate(180deg)` : `0`)};
    transition: all 0.2s;
`;

export const DropdownPill = (props) => {
    const { description, selectedItems } = props;
    if (_.isEmpty(selectedItems)) {
        return <Text>{description || 'Show All'}</Text>;
    }
    return (
        <Queue size={4}>
            {_.flow((selectedItems) =>
                _.map(selectedItems, (item, index) => {
                    return (
                        <Border
                            borderSize={[1]}
                            role="primary"
                            radius="xlarge"
                            key={index}
                        >
                            <Padding size={[0, 3]}>
                                <Queue>
                                    <Text>{_.upperCase(item)}</Text>
                                    <Margin size={[0, 0, 0, 4]}>
                                        <InteractiveIcon>
                                            <CloseIcon
                                                height={24}
                                                width={24}
                                                role="dark"
                                            />
                                        </InteractiveIcon>
                                    </Margin>
                                </Queue>
                            </Padding>
                        </Border>
                    );
                })
            )(selectedItems)}
        </Queue>
    );
};

export const DropdownWithPill = (props) => {
    const { children } = props;
    const [toggleClicked, setToggleClicked] = useState(false);
    return (
        <Stack size={2}>
            <div style={{ position: 'relative' }}>
                <Border
                    role="secondary"
                    borderSize={[0, 0, 1, 0]}
                    onClick={() => setToggleClicked(!toggleClicked)}
                >
                    <Padding size={[5, 2]}>
                        <Overlay top={0} bottom={0}>
                            <Center>
                                <DropdownPill />
                            </Center>
                        </Overlay>
                    </Padding>
                </Border>
                <Overlay right={0} top={0} bottom={0}>
                    <Center>
                        <RotatableIcon />
                    </Center>
                </Overlay>
            </div>
            <AnimatedSlideDownView visible={toggleClicked}>
                <Stack size={3} maxHeight={'30vh'}>
                    <Padding>{children}</Padding>
                </Stack>
            </AnimatedSlideDownView>
        </Stack>
    );
};
