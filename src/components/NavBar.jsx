import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className='flex flex-row items-center justify-between flex-wrap bg-red-500 p-2'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/'>
                <span className='font-bold italic text-4xl tracking-tight text-[45px] ml-3'>STRIVE</span>
            </Link>
            </div>

            <div className="flex-grow flex items-center w-auto">
                <div class="text-sm content-center flex flex-grow mb-3">
                <Link to="/workouts" className="block mt-4 inline-block mt-0 text-black-200 hover:text-white mr-6 text-[20px] md:ml-9">
                    Workouts
                </Link>
                <Link to="/create" className="block mt-4 inline-block mt-0 text-black-200 hover:text-white mr-6 text-[20px]">
                    New Workout
                </Link>
                <Link to="/exercises" className="block mt-4 inline-block mt-0 text-black-200 hover:text-white mr-6 text-[20px]">
                    Find Exercises
                </Link>
                </div>
            </div>
            <div className="flex-grow flex justify-end w-auto mt-1 md:mt-0 xl:flex-end xl:ml-[300px] mb-3">
                <div className="flex">
                    <button className="inline-block text-[15px] md:text-[18px] px-6 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-3 mt-0 ">Log In</button>
                    <button className="inline-block text-[15px] md:text-[18px] px-6 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-3 mt-0 ml-3">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
