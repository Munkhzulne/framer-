import React, { createContext, ReactNode, useContext, useState } from 'react';
import { AnimatedToggleView } from '../../../components/animation';
import { Border, Padding, Stack, Text } from '../../../components';
import { AlertCircleIcon, ElementIcon } from '../../../assets';

const TabContext = createContext<{
    activeTab: string | number;
    setActiveTab: (tab: string | number) => void;
}>({
    activeTab: '',
    setActiveTab: () => {},
});

export const VerticalTab = {
    Provider: ({
        children,
        defaultTab,
    }: {
        children: ReactNode;
        defaultTab: string | number;
    }) => {
        const [activeTab, setActiveTab] = useState<any>(defaultTab);
        return (
            <div>
                <TabContext.Provider value={{ activeTab, setActiveTab }}>
                    {children}
                </TabContext.Provider>
            </div>
        );
    },
    Content: ({
        children,
        name,
    }: {
        children: ReactNode;
        name: number | string;
    }) => {
        const { activeTab, setActiveTab } = useContext(TabContext);

        return (
            <AnimatedToggleView visible={activeTab == name} height="100%">
                <Padding backgroundColor="editorElement" height="100%">
                    {children}
                </Padding>
            </AnimatedToggleView>
        );
    },
    Item: ({
        children,
        name,
    }: {
        children: ReactNode;
        name: string | number;
    }) => {
        const { activeTab, setActiveTab } = useContext(TabContext);
        return (
            <Border
                backgroundColor={
                    activeTab == name ? 'editorElement' : 'transparent'
                }
                onClick={() => setActiveTab(name)}
            >
                {children}
            </Border>
        );
    },
};
