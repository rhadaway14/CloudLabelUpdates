import React from 'react';

import {ListContainer, UL, LI, Label, Input, Check} from "./styles/checklist"


export default function Checklist({ children, ...restProps }) {
    return <ListContainer {...restProps}>{ children }</ListContainer>
}

Checklist.UL = function ULChecklist({ children, ...restProps }) {
    return <UL {...restProps}>{children}</UL>
}

Checklist.LI = function LIChecklist({ children, ...restProps }) {
    return <LI {...restProps}>{children}</LI>
}

Checklist.Label = function LabelCheckList({ children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}

Checklist.Input = function InputCheckList({ ...restProps}) {
    return <Input {...restProps}/>
}

Checklist.Check = function CheckCheckList({ children, ...restProps}) {
    return <Check {...restProps}>{children}</Check>
}