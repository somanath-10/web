
import { Navigate } from "react-router-dom";


const PrivateRoute=({isLoggedin})=>{
  

    if(isLoggedin){
        return <Navigate to="/dashboard"/>
    }
    else{
        return(
            <Navigate to="/login"/>
        )
        
    }

    
}

export default PrivateRoute;