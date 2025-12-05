import { useNavigate } from "react-router-dom";

const Support=()=>{

    const navigate=useNavigate();

    
    function clickHandler(){


        navigate("/labs");
    }

    function goback( ) {
        navigate(-1);
      }
    return(
        <div>
            This is Support page
            <button onClick={clickHandler}>Move to labs page</button>
            <button onClick={goback}>GO BACK</button>
        </div>
    );
}
export default Support;