import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

function Card(props) {
    let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickhandler(){
    if(likedCourses.includes(course.id)){
        setLikedCourses((prev)=>{
            prev.filter((prev!==course.id));
        })
    }
    else{
        if(likedCourses.length===0){
        setLikedCourses([course.id]);
        }else{
            setLikedCourses((prev)=>{
                [...prev,course.id]
            })
        }
    }
  }

    return(
        <div className="w-[300px] bg-blue-900 rounded-md overflow-hidden bg-opacity-70">
            <div className=" relative">
                <img src={course.image.url} ></img>

                <div className=" absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-3 grid place-items-center">
                    <button onClick={clickhandler}>
                    {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">{course.description}</p>
            </div>

        </div>
    );

  }

  export default Card;