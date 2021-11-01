import React from 'react';
import { ButSeriously, Round, Pill, Rec } from './styles/buttons';

export default function Buttons({ children, ...restProps }) {
    return <ButSeriously{ ...restProps }>{ children }</ButSeriously>
};

Buttons.Round = function ButtonsRound({ children, ...restProps }) {
    return <Round {...restProps}>{ children }</Round>
};

Buttons.Pill = function ButtonsPill({ children, ...restProps }) {
    return <Pill {...restProps}>{ children}</Pill>
};

Buttons.Rectangle = function ButtonsRectangle({ onClick, children, ...restProps }) {
    return <Rec onClick={onClick} {...restProps}>{ children}</Rec>
};