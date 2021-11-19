import Moment from 'react-moment';
import React from 'react';

export const TimeFormat = ({ serverTimestamp, format, className }: any) => {
    if (!serverTimestamp) {
        return <span />;
    }
    return (
        <Moment className={`${className}`} format={format}>
            {new Date(serverTimestamp.toDate()).toISOString()}
        </Moment>
    );
};

export const TimeAgo = ({ serverTimestamp }: any) => {
    if (!serverTimestamp) {
        return <span />;
    }
    return (
        <Moment fromNow>
            {new Date(serverTimestamp.toDate()).toISOString()}
        </Moment>
    );
};

export const CalendarTime = ({ serverTimestamp }: any) => {
    const calendarStrings = {
        lastDay: '[Yesterday at] LT',
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        lastWeek: '[last] dddd [at] LT',
        nextWeek: 'dddd [at] LT',
        sameElse: 'L',
    };
    if (!serverTimestamp) {
        return <span />;
    }
    return (
        <Moment calendar={calendarStrings}>
            {new Date(serverTimestamp).toISOString()}
        </Moment>
    );
};
