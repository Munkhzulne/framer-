import React from 'react';
import { Border, Text } from '../basic';
import { DropDown } from '.';
import { Padding, Queue } from '../layout';

export const DropDownButton = (props) => {
    const { children, leftIcon, rightIcon, space, label } = props;
    return (
        <DropDown.Provider>
            <DropDown.Trigger>
                <Border borderSize={[1]} role="secondary" radius="small">
                    <Padding size={[1, 3]}>
                        <Queue size={space || 3}>
                            {leftIcon}
                            {label && (
                                <Text nowrap type="primary2">
                                    {label}
                                </Text>
                            )}
                            {rightIcon}
                        </Queue>
                    </Padding>
                </Border>
            </DropDown.Trigger>
            <DropDown.Content>
                {children && (
                    <Border borderSize={[1]} role="secondary" radius="small">
                        <Padding size={[4]}>{children}</Padding>
                    </Border>
                )}
            </DropDown.Content>
        </DropDown.Provider>
    );
};
