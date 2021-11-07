import { Input } from "../components/forms/styles/forms";
import Inputs from "../components/inputs";
import Forms from "../containers/forms";
import Locations from "./locations";
import Links from "./links";

export default function Entries({children, ...restProps}) {
    return <></>
}

Entries.Write = function EntriesWrite({ dname, cbar, cont, desc, comp, addr, phon, ccn, inst, faci, onClick, form, children, ...restProps}) {
    return(
        <>
        <Inputs.Wrapper>
        <Inputs>
            <Inputs.Title>Item Number: {children}</Inputs.Title>
            <Inputs.Row>
                <Forms.Text onChange={(e) => {dname(e.target.value)}}>Display Name</Forms.Text>
                <Forms.Text onChange={(e) => {cbar(e.target.value)}}>Color Bar</Forms.Text>
                <Forms.Text onChange={(e) => {cont(e.target.value)}}>Custom Contains</Forms.Text>
                <Forms.Text onChange={(e) => {desc(e.target.value)}}>Custom Description</Forms.Text>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.Text onChange={(e) => {comp(e.target.value)}}>Custom Company</Forms.Text>
                <Forms.Text onChange={(e) => {addr(e.target.value)}}>Custom Address</Forms.Text>
                <Forms.Text onChange={(e) => {phon(e.target.value)}}>Custom Phone</Forms.Text>
                <Forms.Text onChange={(e) => {ccn(e.target.value)}}>Custom CCN</Forms.Text>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.TextArea onChange={(e) => {inst(e.target.value);}}>Usage Instructions</Forms.TextArea>
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

Entries.Read = function EntriesRead({ readonly, form, children, ...restProps}) {
    return(
        <>
        <Inputs.Wrapper>
        <Inputs>
            <Inputs.Title>Item Number: {children}</Inputs.Title>
            <Inputs.Row>
                <Forms.Text style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['DisplayName']}>Display Name</Forms.Text>
                <Forms.Text style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['ColorBar']}>Color Bar</Forms.Text>
                <Forms.Text style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomContains']}>Custom Contains</Forms.Text>
                <Forms.Text style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomDescription']}>Custom Description</Forms.Text>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.Text style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomCompany']}>Custom Company</Forms.Text>
                <Forms.Text style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomAddress']}>Custom Address</Forms.Text>
                <Forms.Text style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomPhone']}>Custom Phone</Forms.Text>
                <Forms.Text style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomCCN']}>Custom CCN</Forms.Text>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.TextArea style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['UsageIndstructions']}>Usage Instructions</Forms.TextArea>
            </Inputs.Row>
            <Inputs.Row>
                <Inputs.Col>
                
                </Inputs.Col>
            </Inputs.Row>
            {/* use map */}
                <h3 style={{color:'white'}} >{ readonly['ListAttributes'][0]['Facility']}</h3>
            
            
        </Inputs>

        </Inputs.Wrapper>

        
        </>

    )
};