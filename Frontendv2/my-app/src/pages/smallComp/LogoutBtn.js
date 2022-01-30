import { signOutAcc } from '../services/firebaseUse';
import { Nav, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';

import { logoutErrorSwal } from '../utility/swalCall'

function LogoutBtn(props) {
    let navigate = useNavigate();

    function BtnFormat(){
        return( <Button className="button" variant="dark" onClick={ async () => logoutHelper() }> Sign Out </Button> );
    }

    function TextFromat(){
        return( <Nav.Link onClick={ async () => logoutHelper() }> {" "} Logout <FiLogOut/> </Nav.Link> );
    }

    async function logoutHelper(){
        try{
            await signOutAcc();
            navigate('/');
        }
        catch(e){
            logoutErrorSwal();
        }
    }

    return( props.format === "btn" ? <BtnFormat/> : <TextFromat/>);
}

export default LogoutBtn