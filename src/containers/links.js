import React from "react"

import BTest from "../components/buttonTest"
import { Background } from "../components/backgrounds/styles/backgrounds";
import Buttons from "../components/buttons";

export default function Links({children, ...restProps}) {
    return <></>
}

Links.Button = function LinksButton({ children, ...restProps}){
    return <>
        <BTest.Anchor>
            <BTest.Span>
                {children}
            </BTest.Span>
        </BTest.Anchor>
        </>
};

Links.Search = function LinksSearch({ onClick ,children, ...restProps}){
    return <>
    <div style={{textAlign: 'center', padding: '25vh 5px'}}>
        <Background.Search style={{color: 'black'}}>This Item Already Exists.</Background.Search>
        <Background.Search style={{color: 'black'}}>Would You Like To Update This Item?</Background.Search>
        <Buttons.Rectangle onClick={onClick}>Update</Buttons.Rectangle>
    </div>
    </>
}