import React from 'react';
import { Background, Overlay, Title, Words, TitleTop, Search } from './styles/backgrounds';



export default function Backgrounds({ children, ...restProps }) {
    return <Background { ...restProps }/>
};

Backgrounds.Overlay = function BackgroundOverlay({ children, ...restProps }) {
    return <Overlay {...restProps}>{ children }</Overlay>
}

Backgrounds.Text = function BackgroundText({children, ...restProps}) {
    return <Words {...restProps}>{ children }</Words>
}

Backgrounds.Search = function BackgroundSearch({children, ...restProps}) {
    return <Search {...restProps}>{ children }</Search>
}

Backgrounds.Title = function BackgroundTitle({children, ...restProps}) {
    return <Title {...restProps}>{ children }</Title>
}

Backgrounds.TitleTop = function BackgroundTitleTop({children, ...restProps}) {
    return <TitleTop {...restProps}>{ children }</TitleTop>
}