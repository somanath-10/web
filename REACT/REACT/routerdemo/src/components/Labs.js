import { useNavigate } from "react-router-dom";

const Labs=()=>{
    const navigate=useNavigate();

    
    function clickHandler(){


        navigate("/about");
    }
    return(

        <div>
            <div>
            This is Labs page
            </div>
            <button onClick={clickHandler}>Move to about Page</button>
        </div>
        
    );
}
export default Labs;