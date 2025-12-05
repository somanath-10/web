import Template from "../components/Template";


import image from '../assets/login.png'

const Login=({setIsloggedin})=>{
    return(
        <div>
            <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={image}
            formtype="login"
            setIsloggedin={setIsloggedin}/>
        </div>
    );
}

export default Login;