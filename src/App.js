import React, {useState, useRef} from "react";
import WorkoutAgenda from "./WorkoutAgenda";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Input from '@mui/material/Input';

import WorkoutCreation from "./WorkoutCreation";
//import { TextField } from "@material-ui/core";

function App() {
  
  //const [open, setOpen] = useState(false);
  

  
  

  // function toggleWorkout(id){
  //   const newWorkouts = [...workouts]
  //   const workout = newWorkouts.find(workout => workout.id === id)
  //   workout.complete = !workout.complete
  //   setWorkouts(newWorkouts) 
  // }


  

  return(
    <>
      <h1>WorkoutAgenda</h1>
      <h2>Insert Date here</h2>
      {/* <WorkoutAgenda workouts={workouts} toggleWorkout={toggleWorkout}/> */}
      <WorkoutCreation />
    </>
  )
}

export default App;


{/* <Button variant="outlined" color="primary" 
          onClick={handleClickToOpen}>
          Open Demo Dialog
      </Button>
      <Dialog open={open} onClose={handleToClose}>
      <DialogTitle>{"How are you?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          I am Good, Hope the same for you!
        </DialogContentText>
        <div>
            <Input inputRef={workoutNameRef} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleToClose} 
                color="primary" autoFocus>
        Close
        </Button>
        <Button onClick={handleAddWorkout} 
                color="primary" autoFocus>
        Create Workout
        </Button>
      </DialogActions>
      </Dialog> */}