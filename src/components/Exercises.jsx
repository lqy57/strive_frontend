import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [muscle, setMuscle] = useState('');
    const [updated, setUpdated] = useState(false);
    const [apiKey, setApiKey] = useState('bdlU1S+eNDwchHsZpo1iCA==a5WqVnw7wK9xHQZ0');
    const [showDetails, setShowDetails] = useState({});

    const getExercises = (muscle) => {
        axios
            .get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
                headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                setExercises(response.data);
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        getExercises(muscle);
        setUpdated(!updated);
    };

    const toggleDetails = (id) => {
        setShowDetails(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    useEffect(() => {
		getExercises(muscle);
	}, [updated]);

    return (
        <div className="bg-red-600 bg-opacity-20 min-h-screen w-screen">
            <div className='bg-red-200 bg-opacity-20 mx-auto w-8/12 py-8 px-6 shadow-xl rounded-lg sm:px-10'>
                <h1 className='mb-3 block text-[25px] font-medium text-gray-700 text-center'>Search for Exercises</h1>
                <form className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10" onSubmit={handleSubmit}>
                    <label className='block text-xl font-medium text-gray-700' htmlFor="muscle">Muscle:&nbsp;
                        <select value={muscle} onChange={(event) => setMuscle(event.target.value)} className="flex-1 px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-lg border-2 border-red-500 text-left">
                            <option value="">Select a Muscle</option>
                            <option value="Abdominals">Abdominals</option>
                            <option value="Abductors">Abductors</option>
                            <option value="Biceps">Biceps</option>
                            <option value="Calves">Calves</option>
                            <option value="Chest">Chest</option>
                            <option value="Forearms">Forearms</option>
                            <option value="Glutes">Glutes</option>
                            <option value="Hamstrings">Hamstrings</option>
                            <option value="Lats">Lats</option>
                            <option value="Lower_back">Lower_back</option>
                            <option value="Middle_back">Middle_back</option>
                            <option value="Quadriceps">Quadriceps</option>
                            <option value="Traps">Traps</option>
                            <option value="Triceps">Triceps</option>
                        </select>
                    </label>
                    <br/>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">Search</button>
                </form>
                <br/>
                <h1 className='block text-xl font-medium text-gray-700'> {muscle ? `Exercises For: ${muscle}` : 'Random Exercises!'}</h1>
                <ul>
                    {exercises.map((exercise, index) => (
                    <li key={index} className="border border-red-500 p-4 my-4 bg-gray-100 rounded-lg p-4 mb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <label className='block text-xl font-medium text-gray-700' htmlFor="name">Name: {exercise.name}</label>
                                <label className='block text-xl font-medium text-gray-700' htmlFor="muscle">Muscle: {exercise.muscle.charAt(0).toUpperCase() + exercise.muscle.slice(1)}</label>
                                <label className='block text-xl font-medium text-gray-700' htmlFor="difficulty">Difficulty: {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}</label>
                            </div>
                            <button
                                className="text-blue-500 hover:text-blue-700 font-medium focus:outline-none"
                                onClick={() => toggleDetails(index)}
                            >
                                {showDetails[index] ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        {showDetails[index] && (
                        <div>
                            <label className='block text-xl font-medium text-gray-700' htmlFor="type">Type: {exercise.type.charAt(0).toUpperCase() + exercise.type.slice(1)}</label>
                            <label className='block text-xl font-medium text-gray-700' htmlFor="equipment">Equipment: {exercise.equipment.charAt(0).toUpperCase() + exercise.equipment.slice(1)}</label>
                            <label className='block text-xl font-medium text-gray-700' htmlFor="instructions">Instructions: {exercise.instructions}</label>
                        </div>
                    )}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExerciseList;