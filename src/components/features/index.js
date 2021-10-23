import React from 'react';
import { Container, Card, Section, Statement, FButton, Image, Sub } from './styles/features';
import { Link as RouterLink } from 'react-router-dom'

export default function Features({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
};


Features.Card = function FeaturesCard({ children, ...restProps}) {
    return <Card {...restProps}>{children}</Card>
};

Features.Section = function FeaturesSection({ children, ...restProps}) {
    return <Section {...restProps}>{children}</Section>
};

Features.Image = function FeaturesImage({...restProps}) {
    return <Image {...restProps} />
}

Features.Statement = function FeaturesStatement({ children, ...restProps}) {
    return <Statement {...restProps}>{children}</Statement>
};

Features.Sub = function FeaturesSub({ children, ...restProps}) {
    return <Sub {...restProps}>{children}</Sub>
};

Features.Button = function FeatureButton({ to, onClick, children, ...restProps }) {
    return (
        <RouterLink to={to} style={{textDecoration: 'None'}}>
            <FButton onClick={onClick} {...restProps}>{children}</FButton>
        </RouterLink>
        
    )
}