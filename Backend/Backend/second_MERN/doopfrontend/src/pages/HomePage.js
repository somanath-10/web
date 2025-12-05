import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {

  const [empData, setEmpData] = useState();

  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getusers`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      setEmpData(res);
      console.log(empData)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);
  console.log(empData);
  return (
    <section>
      <div className=' flex justify-between flex-row'>

            <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Employees
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p>
              
            </div>
            <div className='text-white'>
      
                <Link to={"/addemployee"}>
                addemployee
                </Link>
            </div>

      </div>
    <div className='text-white'>


    {empData?.post.map((person) => (
          <div key={person._id} className="text-white">
            <p>Name: {person.name}</p>
            <p>Email: {person.email}</p>
            <p>Title: {person.title}</p>
            <p>Department: {person.department}</p>
            <p>Role: {person.role}</p>
            <p>Image: {person.image}</p>
          </div>
        ))}
      

        
    </div>
    </section>
  )
}

export default HomePage