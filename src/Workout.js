import React from 'react'

export default function Workout({ workout, toggleWorkout }) {
    function handleWorkoutClick(){
        toggleWorkout(workout.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={workout.complete} onChange={handleWorkoutClick} />
                { workout.name }
            </label>
        </div>
    )
}
