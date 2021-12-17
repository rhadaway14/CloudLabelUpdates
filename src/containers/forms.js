import { ThemeProvider } from "styled-components";
import Inputs from "../components/inputs";

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
    return <>
            <Inputs.Col>
                <Inputs.InputBox style={{width : '165px'}}>
                    <Inputs.Input value={value} onChange={onChange} {...restProps}/>
                    <Inputs.Text>{children}</Inputs.Text>
                    <Inputs.Line></Inputs.Line>
                </Inputs.InputBox>
                <Inputs.List>
                    {results != null ? results.map(res => (
                    <Inputs.ListItem key={res} 
                    onClick={(e) => {temp(res); console.log(res); text(res); clear([]);}}>{res}</Inputs.ListItem>
                    )) : ''}
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