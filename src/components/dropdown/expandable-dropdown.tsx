import React, { createContext, useContext, useRef, useState } from 'react';
import { AnimatedSlideDownView } from '../animation';
import { useOutsideClick } from '../utility';

export const ExpandableDropDownContext = createContext<{
    expanded: boolean;
    setExpanded: (visible: boolean) => void;
}>({
    expanded: false,
    setExpanded: () => {},
});

export const ExpandableDropDown = {
    Provider: ({ children }) => {
        const [expanded, setExpanded] = useState<boolean>(false);
        return (
            <ExpandableDropDownContext.Provider
                value={{ expanded, setExpanded }}
            >
                {children}
            </ExpandableDropDownContext.Provider>
        );
    },
    Container: ({ children }) => {
        const { expanded, setExpanded } = useContext(ExpandableDropDownContext);

        const element = useRef();
        useOutsideClick(element, () => {
            setExpanded(false);
        });
        return (
            <div ref={element} onClick={() => setExpanded(!expanded)}>
                {children}
            </div>
        );
    },
    Detail: ({ children }) => {
        const { expanded } = useContext(ExpandableDropDownContext);
        return (
            <AnimatedSlideDownView visible={expanded}>
                {children}
            </AnimatedSlideDownView>
        );
    },
};
