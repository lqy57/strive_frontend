import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const HomePage = () => {

    const [workouts, setWorkouts]= useState([]);
    const [search, setSearch]= useState("")
    const [searchField, setSearchField] = useState("")
    const [checkSearch, setcheckSearch] = useState(false)

    const handleChange = (event) => {
        setSearchField(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearch(searchField)
            setcheckSearch(true)
        }
    }

    const getOneWorkout = (id) => {
        return axios.get(`https://strive-backend.onrender.com/api/v1/workouts/${id}`)
            .then((response)=>{
                return response.data
            })
            .catch((error)=> {
                console.log(error)
            })
        }

    const getWorkouts = () => {
        axios.get('https://strive-backend.onrender.com/api/v1/workouts')
        .then((response) => setWorkouts(response.data), 
        (err) => console.log(err))
        .catch((error) => console.log(error))
        }
        
        useEffect (()=> {
            getWorkouts()
        },[])

    return(
        <>
            <div class="bg-red-600 bg-opacity-20 min-h-screen w-screen">
                <div className= "flex flex-col items-center justify-center w-screen h-96 bg-[url('https://hips.hearstapps.com/hmg-prod/images/best-luxury-gyms-london-1577449934.jpg')] bg-cover bg-no-repeat bg-center">
                    <p className="sm:text-[70px] text-[50px] text-white my-0 mx-auto text-center">STRIVE to be GREAT</p>
                    <input className="my-0 text-black border border-gray-400 rounded-md w-96 px-4 py-3 mt-4"type="text" placeholder="Search for a Workout" onChange={handleChange} onKeyDown={handleKeyDown}/>
                </div>
                <h3 className="mt-2 text-[50px] text-center">Workouts</h3>
                <div>
                    {checkSearch ? <p className="text-[15px] text-center">Search results: {search}</p> : <></>}
                </div>
                <div className="mx-auto max-w-[1500px]">
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {workouts.filter((workout) => {
                            if(search === ""){
                                return workout
                            } else if(workout.title.toLowerCase().includes(search.toLowerCase())) {
                                return workout
                            } else {
                                return workout
                            }
                        })
                        .map((workout) => {
                            return (                
                            <div key={workout.id}>
                                <Link to={`/oneWorkout/${workout.id}`} onClick={() => getOneWorkout(workout.id)}>
                                    <div className="relative flex flex-col justify-end px-4 py-1">
                                        <div className="border border-red-500 p-4 my-4 bg-gray-100 rounded-lg">
                                            <p className="text-black text-xl"><strong>{workout.name}</strong></p>
                                            <p className="text-black">{workout.date}</p>
                                            <p className="text-black">{workout.exercises}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage