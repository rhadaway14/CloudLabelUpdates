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