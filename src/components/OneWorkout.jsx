import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OneWorkout = () => {
    const [workout, setWorkout] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    //Delete
    const handleDelete = (event) => {
        axios.delete(`http://localhost:3000/api/v1/workouts/${event.target.value}`)
        .then((response) =>{
            navigate('/workouts')
        })
        };

    //rendering data
    useEffect(() => {
        axios
        .get(`http://localhost:3000/api/v1/workouts/${id}`)
        .then((response) => {
            setWorkout(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    return (
        <>
            <div className="bg-red-600 bg-opacity-20 h-screen w-screen">
                <div className='sm:flex justify-around h-11/12 sm:w-11/12 ml-auto mr-auto'>
                    <div className='bg-red-200 bg-opacity-20 h-90 sm:w-2/5 w-full sm:border-solid border-black sm:border-2 p-2 sm:mt-10'>
                        <div className='flex justify-between border-b-4 border-black'>
                            <div>
                                <h2 className='text-[25px] font-bold'>{workout.name}</h2>
                            </div>
                            <div>
                                <p className='tracking-wider mr-5'><Link to={`/update/${workout.id}`} className='text-blue-500'>Edit</Link> || <button onClick={handleDelete} value={workout.id} className='text-red-500'>Delete</button></p>
                            </div>
                        </div>
                        <div className='flex justify-between mr-5 mt-8 '>
                        </div>
                        <div className='text-[25px] text-center '>
                            <p className='tracking-tight'>Date: {workout.date}</p>
                        </div>
                        <div className='mt-8 text-[25px] text-center '>
                            <p className='tracking-tight'>Time: {workout.time}</p>
                        </div>
                        <div className='mt-8 text-[25px] text-center '>
                            <p className='tracking-tight'>Duration: {workout.duration}</p>
                        </div>
                        <div className='mt-8 text-[25px] text-center '>
                            <p className='tracking-tight'>Difficulty: {workout.difficulty}</p>
                        </div>
                        <div className='mt-8 text-[25px] text-center '>
                            <p className='tracking-tight'>Exercises: {workout.exercises}</p>
                        </div>
                        <div className='mt-8 text-[25px] text-center'>
                            <p className='tracking-tight'>Notes: {workout.notes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OneWorkout;