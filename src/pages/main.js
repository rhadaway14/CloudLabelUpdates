import React, {useState, useEffect, useRef} from "react";
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
import Crud from "../containers/crud";
import Links from "../containers/links";
import Entries from "../containers/entries";
import Locations from "../containers/locations";


var facilities = []

export default function Main() {
    const [form, setForm] = useState('');
    const [cardStyle, setCardStyle] = useState({})
    const [directions, setDirections] = useState('Choose an action to get started.')
    const [itemNo, setItemNo] = useState('')
    const [data, setData] = useState({"Item": ''})
    const [entry, setEntry] = useState(false)
    const [faciList, setFaciList] = useState(new Array)
    const [displayName, setDisplayName] = useState('');
    const [colorBar, setColorBar] = useState('');
    const [contains, setContains] = useState('');
    const [description, setDescription] = useState('')
    const [company, setCompany] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('');
    const [ccn, setCcn] = useState('');
    const [instructions, setInstructions] = useState('')
    const isMounted = useRef(false);
    const isClicked = useRef(false);
    const [selectedImage, setSelectedImage] = useState(null)
    const [template, setTemplate] = useState('')

    let fullStyle = {marginRight: '0px', height: '90vh', width: '70vw'}
    
    function facilitiesData(data) {
        if (data['Item'] !== '') {
            for (let i = 0; i < data['ListAttributes'].length; i++) {
                facilities.push(data['ListAttributes'][i]['Facility'])
                console.log(facilities)
        }} else {
            facilities = []
        }
    }

    function searchITNO(Item) {
        let url = `http://localhost:5015/search/${Item}`
        console.log("get: " + Item)
        fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
    }
    
    useEffect(() => {
        console.log(data)
        if (isMounted.current) {
            setEntry(true)
            facilitiesData(data)
        } else {
            isMounted.current = true;
            setEntry(false)
        }
        isClicked.current = false
    }, [data])

    function cardSelect(crud){
        setForm(crud);
        setCardStyle(fullStyle);
        switch(crud) {
            case 'Create':
                setDirections('Search for the item you want to create. Then enter info about the item.')
                break;
            case 'Read':
                setDirections('Search for the item you want to review.');
                break;
            case 'Update':
                setDirections('Search for the item you want to update. Then change info about the item.');
                break;
            case 'Delete':
                setDirections('Search for the item you want to delete');
                break;
            default:
                setDirections('Choose an action to get started.')
        }
    }


    function keyDown(e, crud) {
        if(e.key==='Enter'){
            facilities = []
            searchITNO(itemNo)
            cardSelect(crud)
        }
        if (crud === 'Update' && data['Item'] !== '') {
                console.log("initial")
                setDisplayName(data['ListAttributes'][0]['CustomAttributes']['DisplayName'])
                setColorBar(data['ListAttributes'][0]['CustomAttributes']['ColorBar'])
                setContains(data['ListAttributes'][0]['CustomAttributes']['CustomContains'])
                setDescription(data['ListAttributes'][0]['CustomAttributes']['CustomDescription'])
                setCompany(data['ListAttributes'][0]['CustomAttributes']['CustomCompany'])
                setAddress(data['ListAttributes'][0]['CustomAttributes']['CustomAddress'])
                setPhone(data['ListAttributes'][0]['CustomAttributes']['CustomPhone'])
                setCcn(data['ListAttributes'][0]['CustomAttributes']['CustomCCN'])
                setInstructions(data['ListAttributes'][0]['CustomAttributes']['UsageIndstructions'])
        }
    };

    function buttonClick(e) {
        isMounted.current = false;
        setForm('');
        setData({"Item": ''})
        setItemNo('');
        facilities = []
        
        
        setDirections('Choose an action to get started.');
        setCardStyle({});
        e.stopPropagation()
    };

    function linkClick(e, newForm){
        setForm(newForm)
        console.log(form)
        e.stopPropagation()
    }

    function createData() {
        let logo
        if (!isClicked.current){
        console.log(isMounted.current)
        if(isMounted.current) {
        const header = new Headers()
        // header.append('Access-Control-Allow-Origin', 'http://dockerhost:3001')
        header.append('Access-Control-Allow-Origin', 'http://localhost:3001')
        header.append('Enctype', "multipart/form-data")
        console.log(selectedImage)
        if (selectedImage !== null) {
            logo = selectedImage[0]['name']
        let data = new FormData();
        data.append('files', selectedImage[0])

        fetch('http://localhost:5015/CreateFile', {
            method: "POST",
            body: data,
            headers: header
        })} else { logo = ''}

        let listAttributes = []
        for (let i = 0; i < facilities.length; i++) {
            listAttributes.push({
                "Facility": facilities[i],
                "CustomAttributes": {
                 "CustomPhone": phone,
                 "CustomCompany": company,
                 "DisplayName": displayName,
                 "UsageIndstructions": instructions,
                 "CustomAddress": address,
                 "CustomDescription": description,
                 "CustomCCN": ccn,
                 "ColorBar": colorBar,
                 "CustomContains": contains
                },
                "Printer": "PrinterNo2"
                
            }
                )
        }

        let jbody = JSON.stringify(
            {
            "Item": itemNo,
            "ListAttributes": listAttributes,
            "Template": template,
            "Logo": logo
           });
        console.log(jbody)



        const header2 = new Headers;
            header.append('Content-type','application/json');
            // header.append('Access-Control-Allow-Origin', 'http://dockerhost:3001')
            header.append('Access-Control-Allow-Origin', 'http://localhost:3001')

        fetch('http://localhost:5015/Create', {
            method: "POST",
            body: jbody,
            headers: header
        })

        .then(() => {
        isMounted.current = false;
        setForm('');
        setData({"Item": ''})
        setItemNo('');
        })
        .then(() => {  
        setDirections('Choose an action to get started.');
        setCardStyle({});
        })
        .then(facilities = [])
        .then(isClicked.current = true)
    }
    }
    };

    function updateData() {
        let logo
        console.log("update")
        if (!isClicked.current){
        console.log(isMounted.current)
        if(isMounted.current) {
        const header = new Headers()
        header.append('Content-type','application/json')
        // header.append('Access-Control-Allow-Origin', 'http://dockerhost:3001')
        header.append('Access-Control-Allow-Origin', 'http://localhost:3001')
        console.log(selectedImage)
        if (selectedImage !== null) {
            logo = selectedImage[0]['name']
        let data = new FormData();
        data.append('files', selectedImage[0])

        fetch('http://localhost:5015/CreateFile', {
            method: "POST",
            body: data,
            headers: header
        })} else { logo = ''}

        let listAttributes = []
        for (let i = 0; i < facilities.length; i++) {
            listAttributes.push({
                "Facility": facilities[i],
                "CustomAttributes": {
                 "CustomPhone": phone,
                 "CustomCompany": company,
                 "DisplayName": displayName,
                 "UsageIndstructions": instructions,
                 "CustomAddress": address,
                 "CustomDescription": description,
                 "CustomCCN": ccn,
                 "ColorBar": colorBar,
                 "CustomContains": contains
                },
                "Printer": "PrinterNo2"
            }
                )
        }
        
        let jbody = JSON.stringify(
            {
            "Item": itemNo,
            "ListAttributes": listAttributes,
            "Template": template,
            "Logo": logo
           });

        // fetch('http://dockerhost:5010/ST/Submit/OP', {
        fetch('http://localhost:5015/Update', {
            method: "POST",
            body: jbody,
            headers: header
        })
        .then(() => {
        isMounted.current = false;
        setForm('');
        setData({"Item": ''})
        setItemNo('');
        })
        .then(() => {  
        setDirections('Choose an action to get started.');
        setCardStyle({});
        })
        .then(facilities = [])
        .then(isClicked.current = true)
    }
    }
    
    };

    function deleteData() {
        console.log("delete")
        if (!isClicked.current){
        console.log(isMounted.current)
        if(isMounted.current) {
        const header = new Headers()
        header.append('Content-type','application/json')
        // header.append('Access-Control-Allow-Origin', 'http://dockerhost:3001')
        header.append('Access-Control-Allow-Origin', 'http://localhost:3001')

        
        let jbody = JSON.stringify(
            {
            "Item": itemNo
           });

        // fetch('http://dockerhost:5010/ST/Submit/OP', {
        fetch('http://localhost:5015/Delete', {
            method: "POST",
            body: jbody,
            headers: header
        })
        .then(() => {
        isMounted.current = false;
        setForm('');
        setData({"Item": ''})
        setItemNo('');
        })
        .then(() => {  
        setDirections('Choose an action to get started.');
        setCardStyle({});
        })
        .then(facilities = [])
        .then(isClicked.current = true)
    }
    }
    };
    
    function remove(faci) {
        
        for (let i = 0; i < facilities.length; i++) {
            if (facilities[i] === faci) {
            facilities.splice(i,1)}
        }
    }


    const faci = (faci, checked) => {


            console.log("1", facilities)
        if (checked) {
            console.log(checked, faci)
            facilities.push(faci)
            setFaciList(facilities)
            
        } else {
            console.log(checked)
            remove(faci)
            setFaciList(facilities)
        }
    
        console.log(facilities)
        }
        


    return(
        <>
            <div style={{overflow: 'hidden'}}>
                
                <div style={{display: 'flex', justifyContent: 'space-between', minWidth: '800px'}}>
                    <div style={{marginLeft: '30px', borderRight: '2px solid black', width: '300px', padding: ' 0px 40px',
                     position: '-webkit-sticky', top: '70px',left: '0', margin: '40px 0px', height: '600px' }}>
                        <Background.TitleTop>CloudLabel</Background.TitleTop>
                        <Background.Text>{directions}</Background.Text>
                    </div>

                    <Features>
                        
                        { (form === 'Create' || form === '') &&
                        <Crud.Card onClick={() => cardSelect('Create')} style={cardStyle} src={create}>
                            <Features.Section>
                                <div style={{padding: '20px'}}>
                                    <Features.Statement>
                                        Create
                                    </Features.Statement>
                                    {form === 'Create' &&
                                        <Crud.Search value={itemNo} onChange={(e) => {setItemNo(e.target.value); setEntry(false); setSelectedImage(null)}} onKeyDown={(e) => keyDown(e,'Create')}/>}
                                </div>
                                { form === 'Create' && data['Item'] !== ''&&
                                <div style={{textAlign: 'center', padding: '25vh 5px'}}>
                                    <Background.Search style={{color: 'black'}}>This Item Already Exists.</Background.Search>
                                    <Background.Search style={{color: 'black'}}>Would You Like To Update This Item?</Background.Search>
                                    <Buttons.Rectangle onClick={(e) => {linkClick(e, 'Update')}}>Update</Buttons.Rectangle>
                                </div>}

                                {entry && data["Item"] === '' && itemNo !== ''&&
                                
                                <Entries.Write faci={faci} form={form} dname={setDisplayName} 
                                    cbar={setColorBar} cont={setContains} desc={setDescription} 
                                    comp={setCompany} addr={setAddress} phon={setPhone} ccn={setCcn} inst={setInstructions}
                                    onClick={() => createData()} image={setSelectedImage} template={setTemplate} file={selectedImage}>{itemNo}</Entries.Write>}
                                {/* <Entries.Write faci={setFaciList} form={form} onClick={() => createData()}>{itemNo}</Entries.Write>} */}
                                
                                {form === 'Create' &&
                                <div>
                                    <Buttons.Round onClick={(e) => buttonClick(e)}>x</Buttons.Round>
                                </div>}

                            </Features.Section>
                            <Features.Sub>Create Label Content For New Items</Features.Sub>
                        </Crud.Card>}

                        { (form === 'Read' || form === '') &&
                        <Crud.Card onClick={() => cardSelect('Read')} style={cardStyle} src={read}>
                            <Features.Section>
                                <div style={{padding: '20px'}}>
                                    <Features.Statement>
                                        Read
                                    </Features.Statement>
                                    {form === 'Read' &&
                                        <Crud.Search value={itemNo} onChange={(e) => {setItemNo(e.target.value); setEntry(false)}} onKeyDown={(e) => keyDown(e, 'Read')}/>}
                                </div>
                                { form === 'Read' && data['Item'] === '' && itemNo !== '' &&
                                <div style={{textAlign: 'center', padding: '25vh 5px'}}>
                                    <Background.Search style={{color: 'black'}}>This Item Does Not Exists.</Background.Search>
                                    <Background.Search style={{color: 'black'}}>Would You Like To Create This Item?</Background.Search>
                                    <Buttons.Rectangle onClick={(e) => {linkClick(e, 'Create')}}>Create</Buttons.Rectangle>
                                </div>}

                                
                                {entry && data["Item"] !== '' && itemNo !== ''&&
                                <Entries.Read readonly={data} faci={faci}>{itemNo}</Entries.Read>}
                                {form === 'Read' &&
                                <div>
                                    <Buttons.Round onClick={(e) => buttonClick(e)}>x</Buttons.Round>
                                </div>}

                            </Features.Section>
                            <Features.Sub>Review Label Content On Existing Items</Features.Sub>
                        </Crud.Card>}

                        { (form === 'Update' || form === '') &&
                        <Crud.Card onClick={() => cardSelect('Update')} style={cardStyle} src={update}>
                            <Features.Section>
                                <div style={{padding: '20px'}}>
                                    <Features.Statement>
                                        Update
                                    </Features.Statement>
                                    {form === 'Update' &&
                                        <Crud.Search value={itemNo} onChange={(e) => {setItemNo(e.target.value); setEntry(false)}} onKeyDown={(e) => keyDown(e, 'Update')}/>}
                                </div>
                                { form === 'Update' && data['Item'] === '' && itemNo !== '' &&
                                <div style={{textAlign: 'center', padding: '25vh 5px'}}>
                                    <Background.Search style={{color: 'black'}}>This Item Does Not Exists.</Background.Search>
                                    <Background.Search style={{color: 'black'}}>Would You Like To Create This Item?</Background.Search>
                                    <Buttons.Rectangle onClick={(e) => {linkClick(e, 'Create')}}>Create</Buttons.Rectangle>
                                </div>}
                                
                                {entry && data["Item"] !== '' &&
                                <Entries.Update faci={faci} form={form} dname={setDisplayName} 
                                cbar={setColorBar} cont={setContains} desc={setDescription} 
                                comp={setCompany} addr={setAddress} phon={setPhone} ccn={setCcn} inst={setInstructions}
                                image={setSelectedImage} template={setTemplate} file={selectedImage}
                                onClick={() => updateData()} readonly={data}>{itemNo}</Entries.Update>}
                                {form === 'Update' &&
                                <div>
                                    <Buttons.Round onClick={(e) => buttonClick(e)}>x</Buttons.Round>
                                </div>}

                            </Features.Section>
                            <Features.Sub>Change Content On Existing Items</Features.Sub>
                        </Crud.Card>}

                        { (form === 'Delete' || form === '') &&
                        <Crud.Card onClick={() => cardSelect('Delete')} style={cardStyle} src={del}>
                            <Features.Section>
                                <div style={{padding: '20px'}}>
                                    <Features.Statement>
                                        Delete
                                    </Features.Statement>
                                    {form === 'Delete' &&
                                        <Crud.Search value={itemNo} onChange={(e) => {setItemNo(e.target.value); setEntry(false)}} onKeyDown={(e) => keyDown(e, 'Delete')}/>}
                                </div>
                                { form === 'Delete' && data['Item'] === '' && itemNo !== '' &&
                                <div style={{textAlign: 'center', padding: '25vh 5px'}}>
                                    <Background.Search style={{color: 'black'}}>This Item Does Not Exists.</Background.Search>
                                    <Background.Search style={{color: 'black'}}>Would You Like To Create This Item?</Background.Search>
                                    <Buttons.Rectangle onClick={(e) => {linkClick(e, 'Create')}}>Create</Buttons.Rectangle>
                                </div>}
                                
                                {entry && data["Item"] !== '' &&
                                <Entries.Delete faci={faci} form={form}
                                onClick={() => deleteData()} readonly={data}>{itemNo}</Entries.Delete>}
                                {form === 'Delete' &&
                                <div>
                                    <Buttons.Round onClick={(e) => buttonClick(e)}>x</Buttons.Round>
                                </div>}

                            </Features.Section>
                            <Features.Sub>Delete Label Content From Existing Items</Features.Sub>
                        </Crud.Card>}

                    </Features>
                </div>
            </div>
            
            
        </>
    )
};

