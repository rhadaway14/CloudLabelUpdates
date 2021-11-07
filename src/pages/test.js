import React, {useState} from "react";

import Cards from "../containers/cards";
import Links from "../containers/links";
import Inputs from "../components/inputs";
import Forms from "../containers/forms";
import Features from "../components/features";
import Check from "../components/check";
import Locations from "../containers/locations";
import Entries from "../containers/entries";
import Flip from "../components/flip";

import img from "../images/misc/bike.jpg";

let items = []

export default function Test() {

    const [itemList, setItemList] = useState([])

    

    function addItem(num) {
        items.push(num)
        setItemList(items)
    }

    function removeItem(num) {
        for (let i = 0; i < items.length; i++) {
            if (items[i] === num) {
                items.splice(i,1)
            }
            setItemList(items)
        }
    }

    return(<>
        <h1>itemList</h1>
        <h2>{itemList}</h2>
        <input type={'text'} name={'add'}/>
            <button onClick={() => {console.log('add'); addItem(5); console.log(itemList)}}>add</button>
        <input type={'text'} name={'remove'}/>
            <button onClick={() =>{console.log('remove'); removeItem(4); console.log(itemList)}}>remove</button>
        </>

    )}
    // <>
    //         <Flip.Wrapper>
    //         <Flip.Check/>
    //         <Flip>
    //             <Flip.Front>
    //                 <Flip.Img src={img}/>
                    
    //             </Flip.Front>
    //             <Flip.Back onClick={() => remove("cow")}>

    //                 <Flip.Details>
    //                     <h2>Rob Hadaway<br/><span>Solution Architect</span></h2>
    //                 </Flip.Details>
    //             </Flip.Back>
    //         </Flip>
    //         </Flip.Wrapper>
    //         </>
        
    // <Inputs.CheckButton>
    // <Inputs.Submit/>
    // hi
    // </Inputs.CheckButton>
    // <Locations></Locations>



    // )}
    // return( <Links.Button>UPDSA</Links.Button>)