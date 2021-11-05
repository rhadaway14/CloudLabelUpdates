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


export default function Test() {

    

    

    function remove(get) {
        let list = [1,2,3,"cow",4,"frog",5]
        console.log(list)
        for (let i = 0; i < list.length; i++) {
            if (list[i] === "cow") {console.log(list[i]);
            list.splice(i,1)}
        }
        console.log(list)
    }

    return(<>
            <Flip.Wrapper>
            <Flip.Check/>
            <Flip>
                <Flip.Front>
                    <Flip.Img src={img}/>
                    
                </Flip.Front>
                <Flip.Back onClick={() => remove("cow")}>

                    <Flip.Details>
                        <h2>Rob Hadaway<br/><span>Solution Architect</span></h2>
                    </Flip.Details>
                </Flip.Back>
            </Flip>
            </Flip.Wrapper>
            </>
        
    // <Inputs.CheckButton>
    // <Inputs.Submit/>
    // hi
    // </Inputs.CheckButton>
    // <Locations></Locations>



    )}
    // return( <Links.Button>UPDSA</Links.Button>)}