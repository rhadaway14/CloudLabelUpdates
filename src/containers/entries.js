import { Input } from "../components/forms/styles/forms";
import Inputs from "../components/inputs";
import Forms from "../containers/forms";
import Locations from "./locations";
import Links from "./links";

export default function Entries({children, ...restProps}) {
    return <></>
}

Entries.Write = function EntriesWrite({ faci, onClick, form, children, ...restProps}) {
    return(
        <>
        <Inputs.Wrapper>
        <Inputs>
            <Inputs.Title>Item Number: {children}</Inputs.Title>
            <Inputs.Row>
                <Forms.Text onChange={(e) => {console.log(e.target.value)}}>Display Name</Forms.Text>
                <Forms.Text>Color Bar</Forms.Text>
                <Forms.Text>Custom Contains</Forms.Text>
                <Forms.Text>Custom Description</Forms.Text>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.Text>Custom Company</Forms.Text>
                <Forms.Text>Custom Address</Forms.Text>
                <Forms.Text>Custom Phone</Forms.Text>
                <Forms.Text>Custom CCN</Forms.Text>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.TextArea>Usage Instructions</Forms.TextArea>
            </Inputs.Row>
            <Inputs.Row>
                <Inputs.Col>
                {form !== 'Read' &&
                    <Links.Button onClick={onClick}>{form}</Links.Button>}
                </Inputs.Col>
            </Inputs.Row>
            
        </Inputs>
        <Locations faci={faci}></Locations>
        </Inputs.Wrapper>

        
        </>

    )
};