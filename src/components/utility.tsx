import { useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { mapRoleToBackgroundColor } from './layout/background';

export const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
        if (!ref.current) {
            return;
        }
        if (ref.current.contains(e.target)) {
            return;
        }

        callback();
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick, true);
        return () => {
            document.removeEventListener('mousedown', handleClick, true);
        };
    }, [ref, callback]);
};

export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            const r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
};

export const IndicatorBar = styled.div`
    height: 6px;
    width: 30px;
    background-color: ${({ role }: any) =>
        mapRoleToBackgroundColor(role || 'primary')};
    border-radius: 4px;
`;

export const InteractiveIcon = styled.div`
    cursor: pointer;
    outline: none;
`;

export const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fibonacci = _.memoize(function (n = 0) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

export const omitDeepBy = (object, iteratee) => {
    _.each(object, (value, key) => {
        if (iteratee(value, key)) {
            _.unset(object, key);
        } else if (_.isObject(value)) {
            omitDeepBy(value, iteratee);
        }
    });
    return object;
};
