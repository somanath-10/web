import { useState } from 'react';
import Democard from './democard';


const Democards=(props)=>{
    let courses=props.courses;
    let allcourses=[];

    const[likedCourses,setLikedCourses]=useState([]);

    const getCourses=()=>{
        Object.values(courses).forEach((array)=>{
            array.forEach((coursedta)=>{
                allcourses.push(coursedta);
            })
        })
        return allcourses;
    }



    return(

        <div>
            {
            getCourses().map((course)=>{
                return(
                <Democard course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                )
            })
        }
        </div>

    );
}
export default Democards;