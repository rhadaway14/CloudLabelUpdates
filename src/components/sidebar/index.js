import React from 'react';
import { Background, Container, Title, SideButton } from './styles/sidebar';

export default function Sidebar({ children, ...restProps }) {
    return <Background { ...restProps }>{children}</Background>
}

Sidebar.Frame = function SidebarFrame({children, ...restProps }) {
    return <Container { ...restProps }>{children}</Container>;
}

Sidebar.Title = function SidebarTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Sidebar.Button = function SidebarButton({children, ...restProps }) {
    return (<SideButton {...restProps}>{children}</SideButton>
    )
}