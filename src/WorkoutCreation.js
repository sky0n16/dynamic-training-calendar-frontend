import React, {useRef, useState} from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Input from '@mui/material/Input';
import { v4 as uuidv4 } from 'uuid';
const axios = require('axios');

export default function WorkoutCreation() {
    const [workouts, setWorkouts] = useState([])
    const [open, setOpen] = useState(false);
    const workoutNameRef = useRef()


    const handleClickToOpen = () => {
        setOpen(true);
    };
  
    const handleToClose = () => {
      setOpen(false);
    };



    function handleAddWorkout(e){//e = event prop ie onClick
        const name = workoutNameRef.current.value
        console.log(name)
          if(name === '') return
          setWorkouts(prevWorkouts => {
            return[...prevWorkouts, {id:uuidv4(), name: name, complete:false}]
        })
        setOpen(false);
    }


    return (
        <>
            <div style={{}}>
                <Button variant="outlined" color="primary" 
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
                </Dialog>
            </div>
        </>
    );
}
