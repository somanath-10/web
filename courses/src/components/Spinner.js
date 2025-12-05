import './Spinner.css'

function Spinner
(){
    return(
        <div className='flex flex-col justify-center space-y-2'>
            <div className="spinner">

            </div>
            <p className='text-lg text-blue-950 font-semibold'>Loading...</p>
        </div>
    );
}
export default Spinner;