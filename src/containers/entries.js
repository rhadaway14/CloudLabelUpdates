import { Input } from "../components/forms/styles/forms";
import Inputs from "../components/inputs";
import Forms from "../containers/forms";
import Locations from "./locations";
import Links from "./links";
import React, {useState} from 'react';

let temps = ["I_LRG", "I_SML", "Custom", "Waikato", "SD_LRG", "F&D_LRG", "F&D_SML"]
let imageLogo = ['Leedstone_Logo.jpg', "becco.png", "hatTrick.jpg"]
export default function Entries({children, ...restProps}) {
    return <></>
}

Entries.Write = function EntriesWrite({ dname, cbar, cont, desc, comp, addr, phon, ccn, inst, faci, onClick, form, children, template, file, image, ...restProps}) {
    const [searchText, setSearchText] = useState('')
    const [results, setResults] = useState([])

    const [searchLogo, setSearchLogo] = useState('')
    const [logoResult, setLogoResult] = useState([])
    
    let text = ''
    let logoText = ''


    function findResults(itemList) {
        if (text.length) {
            setResults(itemList.filter((item) => {
              return item.toLocaleLowerCase().includes(text.toLowerCase())
            }))
        } else {setResults([])}
        setSearchText(text)
        console.log(text)
      }


      function findLogo(itemList) {
        if (text.length) {
            setLogoResult(itemList.filter((item) => {
              return item.toLocaleLowerCase().includes(text.toLowerCase())
            }))
        } else {setLogoResult([])}
        setSearchLogo(text)
        console.log(text)
      }

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
                <Forms.Search results={results} value={searchText} clear={setResults} text={setSearchText} image={image} temp={template} onChange={(e) => { text = e.target.value; template(text); findResults(temps); }}>Template</Forms.Search>
            </Inputs.Row>

            <Inputs.Row>
                <Inputs.Col>
                {form !== 'Read' &&
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Links.Button onClick={onClick}>{form}</Links.Button>
                </div>}
                </Inputs.Col>
            </Inputs.Row>
            
        </Inputs>
        <Inputs.Col>
        <Locations faci={faci}></Locations>
        {image(searchLogo)}
        {console.log(file)}
        <Forms.Search style={{fontSize: '16px'}} results={logoResult} value={searchLogo} clear={setLogoResult} text={setSearchLogo} temp={image} onChange={(e) => { text = e.target.value; findLogo(imageLogo); }}>Logo Image</Forms.Search>
        <Links.ReadFile style={{cursor: 'default'}} file={searchLogo}></Links.ReadFile>
        </Inputs.Col>
        </Inputs.Wrapper>

        </>
    )
};

Entries.Read = function EntriesRead({ faci, readonly, children, ...restProps}) {
    // console.log(readonly)
    return(
        <>
        <Inputs.Wrapper>
        <Inputs>
            <Inputs.Title>Item Number: {children}</Inputs.Title>
            <Inputs.Row>
                <Forms.ReadText style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['DisplayName']}>Display Name</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['ColorBar']}>Color Bar</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomContains']}>Custom Contains</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomDescription']}>Custom Description</Forms.ReadText>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.ReadText style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomCompany']}>Custom Company</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomAddress']}>Custom Address</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomPhone']}>Custom Phone</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomCCN']}>Custom CCN</Forms.ReadText>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.ReadTextArea style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['UsageIndstructions']}>Usage Instructions</Forms.ReadTextArea>
                <Forms.ReadText style={{cursor: 'default'}} value={readonly['Template']}>Template</Forms.ReadText>
            </Inputs.Row>
            <Inputs.Row>
                <Inputs.Col>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    
                    </div>
                </Inputs.Col>
            </Inputs.Row>

            
        </Inputs>
        <Inputs.Col>
        <Locations.Display readonly={readonly} faci={faci}></Locations.Display>
        <Links.ReadFile style={{cursor: 'default'}} file={readonly['Logo']}></Links.ReadFile>
        </Inputs.Col>
        </Inputs.Wrapper>

        
        </>

    )
};

Entries.Update = function EntriesUpdate({ dname, cbar, cont, desc, comp, addr, phon, ccn, inst, image, file, faci, readonly, onClick, template, form, children, ...restProps}) {
    
    const [searchText, setSearchText] = useState(readonly['Template'])
    const [results, setResults] = useState([])
    const [searchLogo, setSearchLogo] = useState(readonly['Logo'])
    const [logoResult, setLogoResult] = useState([])

    let text = ''

      
    function findResults(itemList) {
        if (text.length) {
            setResults(itemList.filter((item) => {
              return item.toLocaleLowerCase().includes(text.toLowerCase())
            }))
        } else {setResults([])}
        setSearchText(text)
        console.log(text)
      }


      function findLogo(itemList) {
        if (text.length) {
            setLogoResult(itemList.filter((item) => {
              return item.toLocaleLowerCase().includes(text.toLowerCase())
            }))
        } else {setLogoResult([])}
        setSearchLogo(text)
        console.log(text)
      }

    image(readonly['Logo'])
    return(
        <>
        <Inputs.Wrapper>
        <Inputs>
            <Inputs.Title>Item Number: {children}</Inputs.Title>
            <Inputs.Row>
                <Forms.Text onChange={(e) => {dname(e.target.value)}} defaultValue={readonly['ListAttributes'][0]['CustomAttributes']['DisplayName']}>Display Name</Forms.Text>
                <Forms.Text onChange={(e) => {cbar(e.target.value)}} defaultValue={readonly['ListAttributes'][0]['CustomAttributes']['ColorBar']}>Color Bar</Forms.Text>
                <Forms.Text onChange={(e) => {cont(e.target.value)}} defaultValue={readonly['ListAttributes'][0]['CustomAttributes']['CustomContains']}>Custom Contains</Forms.Text>
                <Forms.Text onChange={(e) => {desc(e.target.value)}} defaultValue={readonly['ListAttributes'][0]['CustomAttributes']['CustomDescription']}>Custom Description</Forms.Text>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.Text onChange={(e) => {comp(e.target.value)}}  defaultValue={readonly['ListAttributes'][0]['CustomAttributes']['CustomCompany']}>Custom Company</Forms.Text>
                <Forms.Text onChange={(e) => {addr(e.target.value)}}  defaultValue={readonly['ListAttributes'][0]['CustomAttributes']['CustomAddress']}>Custom Address</Forms.Text>
                <Forms.Text onChange={(e) => {phon(e.target.value)}}  defaultValue={readonly['ListAttributes'][0]['CustomAttributes']['CustomPhone']}>Custom Phone</Forms.Text>
                <Forms.Text onChange={(e) => {ccn(e.target.value)}}  defaultValue={readonly['ListAttributes'][0]['CustomAttributes']['CustomCCN']}>Custom CCN</Forms.Text>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.TextArea onChange={(e) => {inst(e.target.value)}} defaultValue={readonly['ListAttributes'][0]['CustomAttributes']['UsageIndstructions']}>Usage Instructions</Forms.TextArea>
                <Forms.Search results={results} value={searchText} clear={setResults} text={setSearchText} temp={template} onChange={(e) => { text = e.target.value; template(text); findResults(temps); }}>Template</Forms.Search>
                {/* <Forms.Search results={results} value={searchText} clear={setResults} text={setSearchText} temp={template} onChange={(e) => { text = e.target.value; template(text); findResults(imageLogo); }}>Logo Image</Forms.Search> */}
            </Inputs.Row>

            <Inputs.Row>
                <Inputs.Col>
                {form !== 'Read' &&
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Links.Button onClick={onClick}>{form}</Links.Button>
                </div>}
                </Inputs.Col>
            </Inputs.Row>

        </Inputs>
        <Inputs.Col>
        <Locations.Update readonly={readonly} faci={faci}></Locations.Update>
        {image(searchLogo)}
        {console.log(file)}
        <Forms.Search style={{fontSize: '16px'}} results={logoResult} value={searchLogo} clear={setLogoResult} text={setSearchLogo} temp={image} onChange={(e) => { text = e.target.value; findLogo(imageLogo); }}>Logo Image</Forms.Search>
        <Links.ReadFile style={{cursor: 'default'}} file={searchLogo}></Links.ReadFile>
        </Inputs.Col>
        </Inputs.Wrapper>

        </>
    )
};

Entries.Delete = function EntriesRead({ onClick, faci, readonly, form, children, ...restProps}) {
    return(
        <>
        <Inputs.Wrapper>
        <Inputs>
            <Inputs.Title>Item Number: {children}</Inputs.Title>
            <Inputs.Row>
                <Forms.ReadText style={{cursor: 'default'}} style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['DisplayName']}>Display Name</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['ColorBar']}>Color Bar</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomContains']}>Custom Contains</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomDescription']}>Custom Description</Forms.ReadText>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.ReadText style={{cursor: 'default'}} style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomCompany']}>Custom Company</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomAddress']}>Custom Address</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomPhone']}>Custom Phone</Forms.ReadText>
                <Forms.ReadText style={{cursor: 'default'}} style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['CustomCCN']}>Custom CCN</Forms.ReadText>
            </Inputs.Row>
            <Inputs.Row>
                <Forms.ReadTextArea style={{cursor: 'default'}} value={readonly['ListAttributes'][0]['CustomAttributes']['UsageIndstructions']}>Usage Instructions</Forms.ReadTextArea>
                <Forms.ReadText style={{cursor: 'default'}} value={readonly['Template']}>Template</Forms.ReadText>
            </Inputs.Row>
            <Inputs.Row>
                <Inputs.Col>
                {form !== 'Read' &&
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Links.Button onClick={onClick}>{form}</Links.Button>
                    
                    </div>}
                </Inputs.Col>
            </Inputs.Row>

        </Inputs>
        <Inputs.Col>
        <Locations.Update readonly={readonly} faci={faci}></Locations.Update>
        <Links.ReadFile style={{cursor: 'default'}} file={readonly['Logo']}></Links.ReadFile>
        </Inputs.Col>
        </Inputs.Wrapper>

        
        </>

    )
};