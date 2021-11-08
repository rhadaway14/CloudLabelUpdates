import Check from '../components/check/index';
import Checklist from '../components/checklist';

export default function Locations({faci, onClick, children, ...restProps}) {
    return <>
        <Checklist.UL>
            <Checklist.LI>
            <Check.Label>
                <Check.Input wh={"101"} faci={faci}/>
                Salt Lake
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input wh={"201"} faci={faci}/>
                Buckeye
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input wh={"301"} faci={faci}/>
                Deland
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input wh={"401"} faci={faci}/>
                Glendive
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input wh={"501"} faci={faci}/>
                Williamson
            </Check.Label>
            </Checklist.LI>
        </Checklist.UL>
        </>}

Locations.Display = function LocationsDisplay({readonly, faci, children, ...restProps}){

    function checkForCheck(loc) {
        for (let i = 0; i < readonly['ListAttributes'].length; i++) {
            if (readonly['ListAttributes'][i]['Facility'] === loc) {
                return "checked"
            }
        };
        return ""
    };

    return <>
    <Checklist.UL>
            <Checklist.LI>
            <Check.Label>
                <Check.Input faci={() => console.log("salt lake, utah")} checked={checkForCheck("101")}/>
                Salt Lake
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input faci={() => console.log("buckeye, nevada")} checked={checkForCheck("201")}/>
                Buckeye
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input faci={() => console.log("deland, florida")} checked={checkForCheck("301")}/>
                Deland
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input faci={() => console.log("glendive, arizona")} checked={checkForCheck("401")}/>
                Glendive
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input faci={() => console.log("williamson, new york")} checked={checkForCheck("501")}/>
                Williamson
            </Check.Label>
            </Checklist.LI>
        </Checklist.UL>
    </>
};

Locations.Update = function LocationsUpdate({readonly, faci, children, ...restProps}){

    function checkForCheck(loc) {
        for (let i = 0; i < readonly['ListAttributes'].length; i++) {
            if (readonly['ListAttributes'][i]['Facility'] === loc) {
                return "checked"
            }
        };
        return ""
    };

    return <>
    <Checklist.UL>
            <Checklist.LI>
            <Check.Label>
                <Check.Input wh={"101"} faci={faci} defaultChecked={checkForCheck("101")}/>
                Salt Lake
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input wh={"201"} faci={faci} defaultChecked={checkForCheck("201")}/>
                Buckeye
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input wh={"301"} faci={faci} defaultChecked={checkForCheck("301")}/>
                Deland
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input wh={"401"} faci={faci} defaultChecked={checkForCheck("401")}/>
                Glendive
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input wh={"501"} faci={faci} defaultChecked={checkForCheck("501")}/>
                Williamson
            </Check.Label>
            </Checklist.LI>
        </Checklist.UL>
    </>
};