import Check from '../components/check/index';
import Checklist from '../components/checklist';

export default function Locations({children, ...restProps}) {
    return <>
        <div style={{display: 'flex',
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
            }}>
        <Checklist.UL>
            <Checklist.LI>
            <Check.Label>
                <Check.Input/>
                Salt Lake
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input/>
                Buckeye
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input/>
                Deland
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input/>
                Glendive
            </Check.Label>
            </Checklist.LI>
            <Checklist.LI>
            <Check.Label>
                <Check.Input/>
                Williamson
            </Check.Label>
            </Checklist.LI>
        </Checklist.UL>
        </div>
        </>}