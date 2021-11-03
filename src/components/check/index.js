import React from 'react';

import { ListContainer, Center, Label, Input } from './styles/check';


export default function Check({ children, ...restProps }) {
    return <ListContainer {...restProps}>{ children }</ListContainer>
}

Check.Center = function CheckCenter({children, ...restProps}) {
    return <Center {...restProps}>{children}</Center>
}

Check.Label = function CheckLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}

Check.Input = function CheckInput({children, ...restProps}) {
    return <Input type={"checkbox"} name={""} {...restProps}/>
}