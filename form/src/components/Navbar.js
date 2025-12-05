import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';

const Navbar=(props)=>{

    let isLoggedin=props.isLoggedin;
    let setIsloggedin=props.setIsloggedin;


    return(
        <div className=' flex justify-evenly items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
            <img src={logo} width={160} height={32} loading='lazy' alt='logo'/></Link>


            <nav>
                <ul className='flex gap-x-6 text-white '>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    
                </ul>
            </nav>



            <div className='flex gap-x-4 items-center'>
                {!isLoggedin &&
                    <Link to="/login"><button className=' text-white bg-richblack-700 py-[6px] px-[12px] rounded-[8px] border border-richblack-200'>Login</button></Link>
                }
                {!isLoggedin &&
                    <Link to="/signup"><button className=' text-white bg-richblack-700 py-[6px] px-[12px] rounded-[8px] border border-richblack-200'>Signup</button></Link>
                }
                {isLoggedin &&
                    <Link to="/"><button className=' text-white bg-richblack-700 py-[6px] px-[12px] rounded-[8px] border border-richblack-200' onClick={()=>{
                        setIsloggedin(false);

                        toast.success("Logged out");
                    }}>Logout</button></Link>
                }
                {
                    isLoggedin &&
                    <Link to="/dashboard"><button className=' text-white bg-richblack-700 py-[6px] px-[12px] rounded-[8px] border border-richblack-200'>dashboard</button></Link>
                }
            </div>
        </div>

    );
}


export default Navbar;