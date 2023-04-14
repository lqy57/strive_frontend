import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Create = (props) => {
    let emptyWorkout = {
        name: '',
        date: '',
        time: '',
        duration: Number,
        difficulty: Number,
        exercises: '',
        notes: '',
    }

    const [newWorkout, setNewWorkout] = useState(emptyWorkout)
    const [workouts, setWorkouts] = useState([])

    const navigate = useNavigate();


    const handleChange = (event) => {
        setNewWorkout({...newWorkout, [event.target.name]: event.target.value})
    }


    const handleCreate = (newWorkout) => {
        axios
        .post('http://localhost:3000/api/v1/workouts', newWorkout)
        .then((response) => {
            console.log(response);
        });
    }

    const handleSubmit= (event) => {
        event.preventDefault()
        handleCreate(newWorkout)
        navigate('/')
    };



    return (
        <div className="bg-red-600 bg-opacity-20 min-h-screen w-screen">
            <div className='bg-red-200 bg-opacity-20 mx-auto w-8/12 py-8 px-6 shadow-xl rounded-lg sm:px-10'>
                <h1 className='mb-3 block text-[25px] font-medium text-gray-700 text-center'>Add A New Workout</h1>
                <form className="bg-red-100 bg-opacity-20 bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10" onSubmit={handleSubmit}>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="name">Name: </label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="name" onChange = {handleChange}/>
                    <br />
                    <br />
                    <label className='block text-xl font-medium text-gray-700' htmlFor="date">Date: </label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="date" onChange = {handleChange}/>
                    <br />
                    <br />
                    <label className='block text-xl font-medium text-gray-700' htmlFor="time">Time: </label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="time" onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="duration">Duration:</label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="duration" onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="difficulty">Difficulty:</label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="difficulty" onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="exercises">Exercises:</label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="exercises" onChange={handleChange} />
                    <br/>
                    <br/>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="notes">Notes:</label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="notes" onChange={handleChange} />
                    <br/>
                    <br/>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-300' type="submit" onChange={handleChange} value="Add Workout"/>
                </form>
            </div>
        </div>
    );
}

export default Create;