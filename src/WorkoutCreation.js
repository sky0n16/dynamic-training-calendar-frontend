import React, {useRef, useState} from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Input from '@mui/material/Input';

export default function WorkoutCreation( handleAddWorkout, open, handleToClose, handleClickToOpen , workoutNameRef) {
    //const [open, setOpen] = useState(false);
    //const workoutNameRef = useRef()


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
