import Cards from "../containers/cards";
import Links from "../containers/links";
import Inputs from "../components/inputs";
import Forms from "../containers/forms";
import Features from "../components/features";

export default function Test() {

    // return(<Cards.Test></Cards.Test>)}
    // return( <Links.Button>UPDSA</Links.Button>)}
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
            <Inputs.Title>Item Number: 1111</Inputs.Title>
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
                    <Inputs.Submit/>
                </Inputs.Col>
            </Inputs.Row>
        </Inputs>
        </div>

    )
};