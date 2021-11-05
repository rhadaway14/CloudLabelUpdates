import Check from '../components/check/index';
import Checklist from '../components/checklist';

export default function Locations({faci, onClick, children, ...restProps}) {
    return <>
        {/* <div style={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            // minHeight: '100vh',
            background: '#000',
            margin: '0',
            padding: '0',
            boxSizing: 'border-box',
            fontFamily:"'Poppins', sans-serif",
            borderRadius: '15px'
            }}> */}
        <Checklist.UL>
            <Checklist.LI>
            <Check.Label>
                <Check.Input faci={faci}/>
                Salt Lake
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input faci={faci}/>
                Buckeye
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input faci={faci}/>
                Deland
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input faci={faci}/>
                Glendive
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input faci={faci}/>
                Williamson
            </Check.Label>
            </Checklist.LI>
        </Checklist.UL>
        {/* </div> */}
        </>}