import { useNavigate } from "react-router-dom";

const About=()=>{
    const navigate=useNavigate();

    
    function clickHandler(){


        navigate("/support");
    }
    function goback( ) {
        navigate(-1);
      }
    return(
        <div>
            This is About page
            <button onClick={clickHandler}>Move to support Page</button>
            <button onClick={goback}>GO BACK</button>
        </div>
    );
}
export default About;