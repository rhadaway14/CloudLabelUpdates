import React from 'react'

import { Card, Front, Back, FImage, Details, Check, Wrap} from './styles/flip';


export default function Flip({ children, ...restProps }) {
    return <Card{...restProps}>{children}</Card>
}

Flip.Front = function FlipFront({ children, ...restProps}) {
    return <Front {...restProps}>{children}</Front>
}

Flip.Back = function FlipBack({children, ...restProps}) {
    return <Back {...restProps}>{children}</Back>
}

Flip.Img = function FlipImg({img, children, ...restProps}) {
    return <FImage src={img} {...restProps}/>
}

Flip.Details = function FlipDetails({children, ...restProps}) {
    return <Details {...restProps}>{children}</Details>
}

Flip.Check = function FlipCheck({children, ...restProps}) {
    return <Check type={"checkbox"} name={""} {...restProps}/>
}

Flip.Wrapper = function FlipWrapper({children, ...restProps}) {
    return <Wrap {...restProps}>{children}</Wrap>
}
