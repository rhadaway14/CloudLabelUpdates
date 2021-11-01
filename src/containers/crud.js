import React from "react";

import Background from "../components/backgrounds";
import geo from '../images/misc/launch_background.jpg';
import Buttons from "../components/buttons";
import Cards from "../containers/cards";
import Features from "../components/features";
import create from '../images/misc/create.jpg';
import read from '../images/misc/read.jpg';
import update from '../images/misc/update.jpg';
import del from '../images/misc/delete.jpg';
import Submit from "../components/forms";

export default function Crud({children, ...restProps}) {
    return <></>
}

Crud.Search = function CrudSearch({ onKeyDown, value, onChange, children, ...restProps}){
    return <>
        <Background.Search>
            Search:
            <Submit.Input placeholder={'Item Number'} value={value} onChange={onChange} onKeyDown={onKeyDown}/>
        </Background.Search>
        </>
};

Crud.Card = function CrudCard({ onClick, style, src, x, y, z, children, ...restProps}){
    return <Features.Card onClick={onClick} style={style}>
        <Features.Image src={src}/>
        {/* <Features.Section> */}
            {/* <div>
                <Features.Statement>{x}</Features.Statement>
                {children}   
            </div>
            <Features.Sub>{y}</Features.Sub> */}
            {children}
        {/* </Features.Section> */}
        {/* <Features.Sub>ok</Features.Sub> */}
    </Features.Card>
};
