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
import Buttons from "../components/buttons";
import Checklist from "../components/checklist";

import img from "../images/misc/bike.jpg";
import { Button } from "../components/forms/styles/forms";

let items = ["I_LRG", "I_SML", "Custom", "Waikato", "SD_LRG", "F&D_LRG", "F&D_SML"]

export default function Test() {
  const [searchText, setSearchText] = useState('')
  const [results, setResults] = useState([])
  let text = ''

 

function getFile(){

  let url = 'http://localhost:5016'
            fetch(url)
            // .then(res => res.json())
            // .then(json => console.log(json))
          }

return (<>
    <Checklist style={{background: 'black'}}>
      <Checklist.UL>
        <Checklist.LI>
          <Checklist.Label>One
            
            <Checklist.Check><Checklist.Input/></Checklist.Check> 
          </Checklist.Label>
        </Checklist.LI>
      </Checklist.UL>
    </Checklist>
      
    </>
)




// return (
//   <>
//     <div style={{height: '200px', width: '300px', background: 'black', padding: '30px'}}>
//       <Forms.Search value={searchText} text={setSearchText} clear={setResults} onChange={(e) => {text = e.target.value; findResults();}} results={results}>Template</Forms.Search>
//     </div>
//   </>
// )

// return(<>
//   <div style={{height: '200px', width: '300px', background: 'black', padding: '30px'}}>
//   <Inputs.Col style={{background: 'black'}}>
//     <Inputs.InputBox>
//     <Inputs.Input value={searchText} onChange={(e) => {text = e.target.value; findResults();}} />
      
//       <Inputs.Text>Template</Inputs.Text>
//                     <Inputs.Line></Inputs.Line>
        

//     </Inputs.InputBox>
//     <Inputs.List>
//     {/* <ul style={{background: 'white', borderRadius: '2px', listStyleType: 'none', padding: '0'}}> */}
//     {results.length > 0 ? results.map(res => (
//       <Inputs.ListItem key={res} onClick={(e) => {setSearchText(res); setResults([])}}>{res}</Inputs.ListItem>
      
//     )) : ''}
//   {/* </ul> */}
//   </Inputs.List>
//   </Inputs.Col>
    
//   </div>
//   </>
//     )
}
    // return(<>
    //          <h1>Upload and Display Image usign React Hook's</h1>
    //   {selectedImage && (
    //     <div>
    //     <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
    //     <br />
    //     <button onClick={()=>setSelectedImage(null)}>Remove</button>
    //     </div>
    //   )}
    //   <br />
     
    //   <br /> 
    //   <input
    //     type="file"
    //     id="file"
    //     style={{opacity: '0', width: '0.1px', height: '0.1px', position: 'absolute'}}
    //     // value={'Click Me'}
    //     onChange={(event) => {
    //       console.log(event.target.files[0]);
    //       setSelectedImage(event.target.files[0]);
    //     }}
    //   />
    //   <label for='file' style={{position: 'relative'}}>Upload</label>
    //     </>

    // )}
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