import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Workout = () => {
    const [workouts, setWorkouts] = useState([]);
    const [updated, setUpdated] = useState(false);

    const {id} = useParams()
    
    const getWorkouts = () => {
    axios.get('http://localhost:3000/api/v1/workouts')
        .then((response) => {
            console.log(response.data);
            setWorkouts(response.data)
        }, 
        (err) => console.log(err))
        .catch((error) => console.log(error))
    }

    const getOneWorkout = (id) => {
        return axios.get(`http://localhost:3000/api/v1/workouts/${id}`)
            .then((response)=>{
                return response.data
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    useEffect(() => {
    getWorkouts();
}, [updated]);

    return(
        <>
            <div className="bg-red-600 bg-opacity-20 h-screen w-screen">
                <h3 className="text-[50px] text-center mb-5">Workouts</h3>
                <div className="mt-28 mx-auto max-w-[1500px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {workouts.map((workout)=> {
                        return (
                            <div>
                                <div>
                                    <Link to={`/oneWorkout/${workout.id}`} onClick={() => getOneWorkout(workout.id)}>
                                        <div className="relative">
                                            <div className="absolute inset-0 flex flex-col justify-end px-4 py-6">
                                                <div className="border border-red-500 p-4 my-4 bg-gray-100 rounded-lg">
                                                    <p className="text-black text-xl"><strong>{workout.name}</strong></p>
                                                    <p className="text-black">{workout.date}</p>
                                                    <p className="text-black">{workout.exercises}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Workout