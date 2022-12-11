import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database'; //realtime

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

<<<<<<< HEAD

    function handleClick() {
        const user = props.currentUser;
        const db = getDatabase(); //"the database"
        const favExercisesRef = ref(db, "Users/" + user.uid + '/favorited-exercises');
        let favExercisesArray = [];
=======
    //Button switches depending on if exercise is already saved or not, needs debugging for when refreshing page

    function getSavedExercises() {
        const user = props.currentUser;
        const db = getDatabase(); //"the database"
        const favExercisesRef = ref(db,  "Users/" + user.uid + '/favorited-exercises');
        const favExercisesArray = [];
>>>>>>> 3bc8e11c2c9911328078d8c7762dbb4f9347533c
        onValue(favExercisesRef, (snapshot) => {
            const data = snapshot.val();
            data.forEach((exercise) => {
                favExercisesArray.push(exercise);
            })
        });
        return [favExercisesArray, favExercisesRef];
    }

    let favExercisesArray = getSavedExercises();
        
    const [saved, setSaved] = useState(favExercisesArray.includes(currentExercise));

    function handleSave() {
        const favExercisesdata = getSavedExercises();
        let favExercisesArray = favExercisesdata[0];
        const favExercisesRef = favExercisesdata[1];
        let alreadyContains = false;
        favExercisesArray.forEach((favoritedExercise) => {
            if (favoritedExercise === currentExercise) {
                alreadyContains = true;
            }
        });
        if (!alreadyContains) {
            favExercisesArray = [...favExercisesArray, currentExercise];
            firebaseSet(favExercisesRef, favExercisesArray);
        }
        setSaved(true);
    }

    function handleDelete() {
        const favExercisesdata = getSavedExercises();
        let favExercisesArray = favExercisesdata[0];
        const favExercisesRef = favExercisesdata[1];
        favExercisesArray = favExercisesArray.filter((exercise) => {
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