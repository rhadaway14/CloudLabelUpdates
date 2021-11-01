import React from 'react'

import { Container, Title, Card, Input, Name, Button, Comment, Res, Pnum, Frame } from './styles/forms';


export default function Submit({ children, ...restProps }) {
    return <Container{...restProps}>{children}</Container>
}

Submit.Title = function SubmitTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Submit.Card = function SubmitForm({ children, ...restProps}) {
    return <Card {...restProps}>{children}</Card>
}

Submit.Frame = function SubmitForm({ children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Submit.Input = function SubmitLot({ value, placeholder, onChange, children, ...restProps }) {
    return <Input placeholder={placeholder} value={value} onChange={onChange} {...restProps}/>
}

Submit.Name = function SubmitName({ placeholder, value, onChange, children, ...restProps } ) {
    return <Name type="text" placeholder={placeholder} value={value} onChange={onChange}/>
}

Submit.Pnum = function SubmitPnum({ value, placeholder, onChange, children, ...restProps } ) {
    return <Pnum type="text" placeholder={placeholder} value={value} onChange={onChange}/>
}

Submit.Button = function SubmitButton({ onClick, children, ...restProps} ) {
    return <Button onClick={onClick} {...restProps}>Submit</Button>
}

Submit.Comment = function SubmitComment({ value, onChange, children, ...restProps}) {
    return <Comment rows="3" cols="10" maxLength="120" placeholder="Enter Comment" value={value} onChange={onChange}/>
}

Submit.Res = function SubmitRes({ children, ...restProps }) {
    return <Res {...restProps}>{children}</Res>
}