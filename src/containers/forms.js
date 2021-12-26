import { ThemeProvider } from "styled-components";
import Inputs from "../components/inputs";
import React, {useState, useEffect} from "react";

export default function Forms({ children, ...restProps }) {
    return <></>
}

Forms.Text = function FormsText({value, onChange, children, ...restProps}) {
    return <>
            <Inputs.Col>
                <Inputs.InputBox>
                    <Inputs.Input value={value} onChange={onChange} {...restProps}/>
                    <Inputs.Text>{children}</Inputs.Text>
                    <Inputs.Line></Inputs.Line>
                </Inputs.InputBox>
            </Inputs.Col>
            </>
    }

Forms.Search = function FormsSearch({value, onChange, results, text, clear, temp, image, children, ...restProps}) {
    const [show, setShow] = useState(true)
    function typedet(value){
        if (typeof value === 'object') {
            return value[0]['name']
        } else {
            return value
        }
    }

    function backspace(down){
        if (down == 'Backspace') {
            setShow(true)
        }
    }

    return <>
            <Inputs.Col>
                <Inputs.InputBox style={{width : '165px'}}>
                    <Inputs.Input value={typedet(value)} onChange={onChange} onKeyDown={(e) => backspace(e.key)} {...restProps}/>
                    <Inputs.Text>{children}</Inputs.Text>
                    <Inputs.Line></Inputs.Line>
                </Inputs.InputBox>
                <Inputs.List>
                    {results != null ? results.map(res => (
                    <Inputs.ListItem key={res} 
                    onClick={(e) => {temp(res); console.log(res); text(res); clear([]); setShow(false)}}>{res}</Inputs.ListItem>
                    )) 
                     : ''}
                    {value && typeof value !== 'object' && show === true ? 
                    <Inputs.ListItem 
                    
                    // onClick={(e) => {console.log('hello'); text('ADD NEW LOGO'); clear([]);}}
                    >
                    <input
                    type="file"
                    id="file"
                    name="file"
                    style={{opacity: '0', width: '0.1px', height: '0.1px', position: 'absolute'}}
                    onChange={(event) => {
                    if (event.target.files !== ''){
                    temp(event.target.files);
                    // text(event.target.files[0]['name']);}
                    text(event.target.files);}
                    console.log(typeof event.target.files)
                    clear([]);
                    }}
                    />
                    <label for='file' style={{color: 'black',  position: 'relative', alignContent: 'center'}}>ADD NEW LOGO</label>
                    </Inputs.ListItem> : ""}
                </Inputs.List>
            </Inputs.Col>
            </>
    }


    Forms.SearchTemp = function FormsSearchTemp({value, onChange, results, readonly, text, clear, temp, image, children, ...restProps}) {
        const [show, setShow] = useState(true)
        function typedet(value){
            if (typeof value === 'object') {
                return value[0]['name']
            } else {
                return value
            }
        }
    
        return <>
                <Inputs.Col>
                    <Inputs.InputBox style={{width : '165px'}}>
                        <Inputs.Input value={typedet(value)} onChange={onChange} {...restProps}/>
                        <Inputs.Text>{children}</Inputs.Text>
                        <Inputs.Line></Inputs.Line>
                    </Inputs.InputBox>
                    <Inputs.List>
                        {results != null ? results.map(res => (
                        <Inputs.ListItem key={res} 
                        onClick={(e) => {temp(res); console.log(res); text(res); clear([]); setShow(false)}}>{res}</Inputs.ListItem>
                        )) 
                         : ''}
                        {/* {value && typeof value !== 'object' && show === true ? 
                        <Inputs.ListItem 
                        
                        // onClick={(e) => {console.log('hello'); text('ADD NEW LOGO'); clear([]);}}
                        >
                        <input
                        type="file"
                        id="file"
                        name="file"
                        style={{opacity: '0', width: '0.1px', height: '0.1px', position: 'absolute'}}
                        onChange={(event) => {
                        if (event.target.files !== ''){
                        temp(event.target.files);
                        // text(event.target.files[0]['name']);}
                        text(event.target.files);}
                        console.log(typeof event.target.files)
                        clear([]);
                        }}
                        />
                        <label for='file' style={{color: 'black',  position: 'relative', alignContent: 'center'}}>ADD NEW LOGO</label>
                        </Inputs.ListItem> : ""} */}
                    </Inputs.List>
                </Inputs.Col>
                </>
        }

    Forms.ReadText = function FormsReadText({value, onChange, children, ...restProps}) {
        return <>
                <Inputs.Col>
                    <Inputs.InputBox>
                        <Inputs.Read value={value} onChange={onChange} {...restProps}/>
                        <Inputs.Text>{children}</Inputs.Text>
                        <Inputs.Line></Inputs.Line>
                    </Inputs.InputBox>
                </Inputs.Col>
                </>
        }

Forms.TextArea = function FormsTextArea({value, onChange, children, ...restProps}) {
    return <>
            <Inputs.Col>
                    <Inputs.InputBoxTextArea>
                        <Inputs.TextArea value={value} onChange={onChange} {...restProps}/>
                        <Inputs.Text>{children}</Inputs.Text>
                        <Inputs.Line></Inputs.Line>
                    </Inputs.InputBoxTextArea>
                </Inputs.Col>
    </>
}

Forms.ReadTextArea = function FormsReadTextArea({value, onChange, children, ...restProps}) {
    return <>
            <Inputs.Col>
                    <Inputs.InputBoxTextArea>
                        <Inputs.ReadTextArea value={value} onChange={onChange} {...restProps}/>
                        <Inputs.Text>{children}</Inputs.Text>
                        <Inputs.Line></Inputs.Line>
                    </Inputs.InputBoxTextArea>
                </Inputs.Col>
    </>
}