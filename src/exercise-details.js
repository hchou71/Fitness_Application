import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database'; //realtime

export function DetailsPage(props) {

    const urlParams = useParams();
    const currentExercise = urlParams.exercise;
    const exercises = props.exercises;
    const exercisesAsObject = {};

    exercises.forEach((exerciseObj) => {
        const name = exerciseObj.name;
        exercisesAsObject[name] = exerciseObj;
    });

    const exerciseObj = exercisesAsObject[currentExercise];
    const { name, img, equipment, summary, howTo } = exerciseObj;

    let exerciseDescription;

    if (howTo === "") {
        exerciseDescription = (
            <div className="py-3">
                <p><em>No Info</em></p>
            </div>
        );
    } else {
        exerciseDescription = (
            <div className="py-3">
                <div><p className="exercise-label">Equipment needed:</p> <p>{equipment}.</p></div>
                <div><p className="exercise-label">Summary</p><p>{summary}</p></div>
                <div><p className="exercise-label">How to Perform</p><p>{howTo}</p></div>
            </div>
        );
    }

    let favExercises = [];
    const [saved, setSaved] = useState(favExercises.includes(currentExercise));

    useEffect(() => {

        const user = props.currentUser;
        const db = getDatabase(); //"the database"
        const favExercisesRef = ref(db,  "Users/" + user.uid + '/favorited-exercises');
        const favExercisesArray = [];

        onValue(favExercisesRef, (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                data.forEach((exercise) => {
                    favExercisesArray.push(exercise);
                })
            }
            favExercises = favExercisesArray;
            if (favExercises.includes(currentExercise)) {
                setSaved(true);
            }
        });

    }, []);

    function handleSave() {
        const user = props.currentUser;
        const db = getDatabase(); //"the database"
        const favExercisesRef = ref(db,  "Users/" + user.uid + '/favorited-exercises');
        if (!favExercises.includes(currentExercise)) {
            const favExercisesArray = [...favExercises, currentExercise];
            firebaseSet(favExercisesRef, favExercisesArray);
        }
        setSaved(true);
    }

    function handleDelete() {
        const user = props.currentUser;
        const db = getDatabase(); //"the database"
        const favExercisesRef = ref(db,  "Users/" + user.uid + '/favorited-exercises');
        const updatedExercises = [];
        onValue(favExercisesRef, (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                data.forEach((exercise) => {
                    updatedExercises.push(exercise);
                })
            }
        });
        const favExercisesArray = updatedExercises.filter((exercise) => {
            return exercise !== currentExercise;
        });
        firebaseSet(favExercisesRef, favExercisesArray);
        setSaved(false);
    }

    let displayedButton;

    if (!saved) {
        displayedButton = (
            <div className="save-to-profile btn button-col btn-lg my-5" onClick={handleSave}>
                <div>
                    <p>Save to Favorites</p>
                    <span className="material-icons" aria-label="Save to Favorite">library_add</span>
                </div>
            </div>
        );
    } else {
        displayedButton = (
            <div className="save-to-profile btn btn-danger btn-lg my-5" onClick={handleDelete}>
                <div>
                    <p>Delete from Favorites</p>
                    <span className="material-icons" aria-label="Delete from Favorites">bookmark_remove</span>
                </div>
            </div>
        );
    }

    return (
        <main className="info-body d-flex flex-column min-vh-100">
            {displayedButton}

            <div className='exer'>
                <h1>{name}</h1>
                <img className="py-3 exercise-img" src={img} alt={name} />
                {exerciseDescription}
            </div>
        </main>
    );

}