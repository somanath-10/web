import React from 'react'
import EmployeeForm from '../components/EmployeeForm'
import { Link } from 'react-router-dom'

import { FaBackward } from 'react-icons/fa'

function CreateEmployeePage() {
  return (
    <section className=''>
        <div>
            <div>

                <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

            </div>
            <div>

                <h3 className='text-white'>
                Empower your business with our employee creation!

                </h3>

            </div>

        </div>
        <div>
            <div>

                <h2 className=' text-white'>Create a Employee</h2>
                <p className=' text-white'>
                <Link to={"/"}>

                <FaBackward />
                Back to all Employee List


                </Link>
                </p>


            </div>
            <div>
                <EmployeeForm/>
            </div>

        </div>
    </section>
  )
}

export default CreateEmployeePage