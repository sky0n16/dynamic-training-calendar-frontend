import React from 'react'
import Workout from './Workout'

export default function WorkoutAgenda({ workouts, toggleWorkout }) {
    return(
        workouts.map(workout => {
            return <Workout key={workout.id} toggleWorkout={toggleWorkout} workout={workout}/>
        })
    )
}
