import Inputs from "../components/inputs";
import Forms from "../containers/forms";

export default function Entries({children, ...restProps}) {
    return <></>
}

Entries.Write = function EntriesWrite({form, children, ...restProps}) {
    return(

        <div style={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            // minHeight: '100vh',
            background: '#000',
            margin: '0',
            padding: '0',
            boxSizing: 'border-box',
            fontFamily:"'Poppins', sans-serif",
            borderRadius: '15px'
            }}>

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
                    <Inputs.Submit value={form}/>}
                </Inputs.Col>
            </Inputs.Row>
        </Inputs>
        </div>

    )
};