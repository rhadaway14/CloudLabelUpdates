import React from "react"

import BTest from "../components/buttonTest"
import { Background } from "../components/backgrounds/styles/backgrounds";
import Buttons from "../components/buttons";
import Forms from "./forms";

export default function Links({children, ...restProps}) {
    return <></>
}

Links.Button = function LinksButton({ onClick, children, ...restProps}){
    return <>
        <BTest.Anchor>
            <BTest.Span onClick={onClick}>
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

Links.File = function LinksFile({ image, file, children, ...restProps}){
    console.log(file)
    return  <>
    <BTest.Anchor>
        <BTest.Span>
        <input
            type="file"
            id="file"
            name="file"
            style={{opacity: '0', width: '0.1px', height: '0.1px', position: 'absolute'}}
            onChange={(event) => {
            if (event.target.files !== ''){
            image(event.target.files);}
            }}
            />
            {console.log('File')}
            {console.log(file)}
            <label for='file' style={{color: 'white',  position: 'relative'}}>{file === null ? 'Select Image': file[0]['name']}</label>
        </BTest.Span>
    </BTest.Anchor>
    { file !== null &&
    <>
    <img alt="not found" height={'75px'} width={'150px'} style={{objectFit: 'contain'}} src={URL.createObjectURL(file[0])} />
    <BTest.Anchor>
        <BTest.Span>
            <label style={{color: 'white',  position: 'relative'}} onClick={() => {
            image(null);
            }}>Remove Image</label>
        </BTest.Span>
    </BTest.Anchor>
    </>}
    </>
}

Links.ReadFile = function LinksReadFile({ file, children, ...restProps}){
    // let image = ''
    // function getImage() {
    //     console.log('hello')
    //     console.log(file)
    //     let url = `http://localhost:5015/ReadFile/${file}`
    //     console.log(url)
    //     image = fetch(url)
    //     console.log(image)
    //     return image
    // }
    // image = getImage()
    // console.log("logo, " + file)
    return  <>
    {/* {file !== '' &&
    <BTest.Anchor>
        <BTest.Span>
        <input
            type="file"
            id="file"
            style={{opacity: '0', width: '0.1px', height: '0.1px', position: 'absolute'}}
            disabled/>
            <label for='file' style={{color: 'white',  position: 'relative'}}>{file === null ? '': file}</label>
        </BTest.Span>
    </BTest.Anchor>} */}
    { file !== '' && typeof file === 'object' &&
    <img alt="not found" height={'82.5px'} width={'165px'} style={{objectFit: 'contain', margin: '0px 15px'}} src={URL.createObjectURL(file[0])} />}
    { file.length > 0 && typeof file !== 'object' &&
    <img alt="not found" height={'82.5px'} width={'165px'} style={{margin: '0px 15px', objectFit: 'contain'}} 
    src={`http://localhost:5015/ReadFile/${file}`} />}
    </>
}