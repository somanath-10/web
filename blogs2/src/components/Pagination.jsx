import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Pagination() {
  const {page,handlePagechanger,totalpages}=useContext(AppContext);
  return (
    <div className='w-full flex justify-center border-2 fixed bottom-0 bg-white'>

      
      <div className=' flex justify-between w-11/12 max-w-[670px] py-2 '>
        { page>1 &&
          <button className=' rounded-md border border-black px-4 py-1' onClick={()=>handlePagechanger(page-1)}>Previous</button>
        }

        {
          page<totalpages &&
          <button className=' rounded-md border border-black px-4 py-1'  onClick={()=>handlePagechanger(page+1)}>Next</button>
        }

        <p>
          Page {page} of {totalpages}
        </p>
      </div>
    </div>
  )
}

export default Pagination