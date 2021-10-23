import React, {useState} from "react";
import Background from "../components/backgrounds";
import geo from '../images/misc/launch_background.jpg';

export default function Launch() {

    return(
        <>
            <div style={{overflow: 'hidden'}}>
            <Background src={geo } alt='geo'>
            </Background>
            <Background.Overlay>
                    
            </Background.Overlay>
                <div style={{position: 'absolute'}}>
                    <Background.Text style={{ marginTop: '10px', marginLeft: '10vw'}}>Change these to buttons</Background.Text>
                    <Background.Text style={{ marginTop: '10px', marginLeft: '15vw'}}>Update</Background.Text>
                    <Background.Text style={{ marginTop: '10px', marginLeft: '3vw'}}>Commit</Background.Text>
                </div>
            </div>
            <Background.Title>CloudLabel</Background.Title>
        </>
    )
};

