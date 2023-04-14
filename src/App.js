import { Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Update from './components/Update';
import NavBar from './components/NavBar';
import Workout from './components/Workout';
import Exercises from './components/Exercises'
import HomePage from './components/HomePage';
import OneWorkout from './components/OneWorkout';


function App() {
  return (
    <>
    <NavBar/>
    <div className='ml-auto mr-auto'>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/workouts' element={<Workout/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/exercises' element={<Exercises/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route exact path='/oneWorkout/:id' element={<OneWorkout/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
