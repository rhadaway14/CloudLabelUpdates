import React, {useState} from "react";
import Background from "../components/backgrounds";
import geo from '../images/misc/launch_background.jpg';
import Buttons from "../components/buttons";
// import Submit from "../components/forms";
import Cards from "../containers/cards";


export default function Launch() {
    const [form, setForm] = useState('')

    return(
        <>
            <div style={{overflow: 'hidden'}}>
            <Background src={geo } alt='geo'>
            </Background>
            <Background.Overlay>
                    
            </Background.Overlay>
                <div style={{position: 'absolute'}}>
                    <Buttons>
                        <Buttons.Pill onClick={() => setForm('Create')} style={{ marginLeft: '10vw'}}>Create</Buttons.Pill>
                        <Buttons.Pill onClick={() => setForm('Read')} style={{ marginLeft: '3vw'}}>Read</Buttons.Pill>
                        <Buttons.Pill onClick={() => setForm('Update')} style={{ marginLeft: '15vw'}}>Update</Buttons.Pill>
                        <Buttons.Pill onClick={() => setForm('Delete')} style={{ marginLeft: '0vw'}}>Delete</Buttons.Pill>
                    </Buttons> 
                </div>
                <Background.Title>CloudLabel</Background.Title>
                { form === 'Create'?
                <Cards.Create onClick={() => setForm('')}></Cards.Create> : ''}
                { form === 'Read'?
                <Cards.Read onClick={() => setForm('')}></Cards.Read> : ''}
                { form === 'Update'?
                <Cards.Update onClick={() => setForm('')}></Cards.Update> : ''}
                { form === 'Delete'?
                <Cards.Delete onClick={() => setForm('')}></Cards.Delete> : ''}
            </div>
            
            
        </>
    )
};

