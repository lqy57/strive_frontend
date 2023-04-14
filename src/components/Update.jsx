import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = (props) => {
    const [workout, setWorkout] = useState({});
    const [formData, setFormData] = useState({...workout}); 
    const { id } = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        handleUpdate(formData)
    };

    const handleUpdate = (editWorkout) => {
        axios
                .put(`https://strive-backend.onrender.com/api/v1/workouts/${editWorkout.id}`, 
                    editWorkout
                )
                .then((response) => {
                    navigate('/');
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    useEffect(() => {
        axios
        .get(`https://strive-backend.onrender.com/api/v1/workouts/${id}`)
        .then((response) => {
            setWorkout(response.data);
            setFormData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    return (
        <div className="bg-red-600 bg-opacity-20 h-screen w-screen">
            <div className='bg-red-200 bg-opacity-20 mx-auto w-8/12 py-8 px-6 shadow-xl rounded-lg sm:px-10'>
                <h1 className='mb-3 block text-[25px] font-medium text-gray-700 text-center'>Edit Workout</h1>
                <form className="bg-red-100 bg-opacity-20 bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10" onSubmit={handleSubmit}>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="name">Name: </label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="name" placeholder={workout.name} onChange = {handleChange}/>
                    <br />
                    <br />
                    <label className='block text-xl font-medium text-gray-700' htmlFor="date">Date: </label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="date" placeholder={workout.date} onChange = {handleChange}/>
                    <br />
                    <br />
                    <label className='block text-xl font-medium text-gray-700' htmlFor="time">Time: </label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="time" placeholder={workout.time} onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="duration">Duration:</label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="duration" placeholder={workout.duration} onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="difficulty">Difficulty:</label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="difficulty" placeholder={workout.difficulty} onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="exercises">Exercises:</label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="exercises" placeholder={workout.exercises} onChange={handleChange} />
                    <br/>
                    <br/>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="notes">Notes:</label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="notes" placeholder={workout.notes} onChange={handleChange} />
                    <br/>
                    <br/>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-300' type="submit" onChange={handleChange} value="Update Workout"/>
                </form>
            </div>
        </div>
    )
}

export default Update