import React from 'react';
import { Background, Overlay, Title, Words } from './styles/backgrounds';



export default function Backgrounds({ children, ...restProps }) {
    return <Background { ...restProps }/>
};

Backgrounds.Overlay = function BackgroundOverlay({ children, ...restProps }) {
    return <Overlay {...restProps}>{ children }</Overlay>
}

Backgrounds.Text = function BackgroundText({children, ...restProps}) {
    return <Words {...restProps}>{ children }</Words>
}

Backgrounds.Title = function BackgroundTitle({children, ...restProps}) {
    return <Title {...restProps}>{ children }</Title>
}