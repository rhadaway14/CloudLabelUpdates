import React, {useState, useEffect} from "react";
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



export default function Main() {
    const [form, setForm] = useState('')
    const [cardStyle, setCardStyle] = useState({})
    const [directions, setDirections] = useState('Choose an action to get started.')
    const [itemNo, setItemNo] = useState('')
    const [data, setData] = useState({"Item": ''})

    let fullStyle = {marginRight: '10px', height: '70vh', width: '70vw'}

    function searchITNO(Item) {
        let url = `http://localhost:5015/search/${Item}`
        console.log("get: " + Item)
        fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
    }
    
    useEffect(() => {
        console.log(data)
    }, [data])

    function cardSelect(crud){
        setForm(crud);
        setCardStyle(fullStyle);
        switch(crud) {
            case 'Create':
                setDirections('Search to find out if the item already exists.');
                break;
            case 'Read':
                setDirections('Search for the item you want to review.');
                break;
            case 'Update':
                setDirections('Search for the item you want to update.');
                break;
            case 'Delete':
                setDirections('Search for the item you want to delete');
                break;
            default:
                setDirections('')
        }
    }


    function keyDown(e) {
        if(e.key==='Enter'){
            searchITNO(itemNo)
        }
    };

    function buttonClick(e) {
        setForm('');
        setItemNo('');
        setData({"Item": ''})
        setDirections('Choose an action to get started.');
        setCardStyle({});
        e.stopPropagation()
    };

    function linkClick(e, newForm){
        setForm(newForm)
        console.log(form)
        e.stopPropagation()
    }
    
    return(
        <>
            <div style={{overflow: 'hidden'}}>
                
                <div style={{display: 'flex', justifyContent: 'center', minWidth: '800px'}}>
                    <div style={{marginLeft: '30px', borderRight: '2px solid black', width: '400px', padding: ' 0px 40px',
                     position: '-webkit-sticky', top: '70px',left: '0', margin: '40px 0px', height: '600px' }}>
                        <Background.TitleTop>CloudLabel</Background.TitleTop>
                        <Background.Text>{directions}</Background.Text>
                    </div>

                    <Features>
                        
                        { (form === 'Create' || form === '') &&
                        <Crud.Card onClick={() => cardSelect('Create')} style={cardStyle} src={create}>
                            <Features.Section>
                                <div>
                                <Features.Statement>
                                    Create
                                </Features.Statement>
                                {form === 'Create' &&
                                    <Crud.Search value={itemNo} onChange={(e) => setItemNo(e.target.value)} onKeyDown={(e) => keyDown(e)}/>}
                                
                                </div>
                                { data['Item'] !== '' &&
                                <div style={{textAlign: 'center', padding: '25vh 5px'}}>
                                    <Background.Search style={{color: 'black'}}>This Item Already Exists.</Background.Search>
                                    <Background.Search style={{color: 'black'}}>Would You Like To Update This Item?</Background.Search>
                                    <Buttons.Rectangle onClick={(e) => {linkClick(e, 'Update')}}>Update</Buttons.Rectangle>
                                </div>}
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
                                <div>
                                <Features.Statement>
                                    Read
                                </Features.Statement>
                                {form === 'Read' &&
                                    <Crud.Search value={itemNo} onChange={(e) => setItemNo(e.target.value)} onKeyDown={(e) => keyDown(e)}/>}
                                </div>
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
                                <div>
                                <Features.Statement>
                                    Update
                                </Features.Statement>
                                {form === 'Update' &&
                                    <Crud.Search value={itemNo} onChange={(e) => setItemNo(e.target.value)} onKeyDown={(e) => keyDown(e)}/>}
                                </div>
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
                                <div>
                                <Features.Statement>
                                    Delete
                                </Features.Statement>
                                {form === 'Delete' &&
                                    <Crud.Search value={itemNo} onChange={(e) => setItemNo(e.target.value)} onKeyDown={(e) => keyDown(e)}/>}
                                </div>
                                
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

