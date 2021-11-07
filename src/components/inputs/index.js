import React from 'react'
import { Button } from '../forms/styles/forms';

import { Container, Title, Row, Col, InputBox, Input,
    Text, Line, TextArea, Submit, InputBoxTextArea, Wrap, Label} from './styles/inputs';


export default function Inputs({ children, ...restProps }) {
    return <Container{...restProps}>{children}</Container>
}

Inputs.Title = function InputsTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Inputs.Row = function InputsRow({ children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Inputs.Col = function InputsCol({ children, ...restProps}) {
    return <Col {...restProps}>{children}</Col>
}

Inputs.InputBox = function InputsInputBox({children, ...restProps}) {
    return <InputBox {...restProps}>{children}</InputBox>
}

Inputs.InputBoxTextArea = function InputsInputTextArea({children, ...restProps}) {
    return <InputBoxTextArea {...restProps}>{children}</InputBoxTextArea>
}

Inputs.Input = function InputsInput({value, onChange, children, ...restProps}) {
    return <Input value={value} type={"text"} name={""} onChange={onChange} required={"required"} {...restProps}/>
}

Inputs.Text = function InputsText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Inputs.Line = function InputsLine({children, ...restProps}){
    return <Line {...restProps}>{children}</Line>
}

Inputs.TextArea = function InputsTextArea({children, ...restProps}) {
    return <TextArea required={"required"} {...restProps}/>
}

Inputs.Submit = function InputSubmit({value, children, ...restProps}) {
    return <Submit {...restProps}>{children}</Submit>
}

Inputs.Wrapper = function InputsWrapper({children, ...restProps}){
    return <Wrap {...restProps}>{children}</Wrap>
}

Inputs.Label = function InputsLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}