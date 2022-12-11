import React from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database'; //realtime
import { getAuth } from 'firebase/auth';

export function DetailsPage(props) {

    const urlParams = useParams();
    const currentExercise = urlParams.exercise;
    const exercises = props.exercises;
    const exercisesAsObject = {};
    const auth = getAuth();
    const currentUserId = auth.currentUser.uid;

    exercises.forEach((exerciseObj) => {
        const name = exerciseObj.name;
        exercisesAsObject[name] = exerciseObj;
    });

    const exerciseObj = exercisesAsObject[currentExercise];
    const { name, img, equipment, summary, howTo } = exerciseObj;
    const db = getDatabase(); //"the database"
    const UserRef = ref(db, ("Users/" + currentUserId + "/favorited-exercises"));

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

    const favExercisesRef = ref(db,  "Users/" + currentUserId + '/favorited-exercises');
    let favExercisesArray = [];
    onValue(favExercisesRef, (snapshot) => {
    const data = snapshot.val();
    favExercisesArray.push(data);
    });

    function handleClick() {
        let alreadyContains = false;
        favExercisesArray.forEach((favoritedExercise) => {
            if (favoritedExercise === currentExercise) {
                alreadyContains = true;
            }
        });
        if (!alreadyContains) {
            favExercisesArray = [...favExercisesArray, currentExercise];
            console.log(favExercisesArray);
            firebaseSet(favExercisesRef, favExercisesArray);
        }
    }

    return (
        <main className="info-body d-flex flex-column min-vh-100">
            <div className="save-to-profile btn button-col btn-lg my-5" onClick={handleClick}>
                <div>
                    <p>Save to Profile</p>
                    <span className="material-icons" aria-label="Save to Profile">library_add</span>
                </div>
            </div>

            <div className='exer'>
                <h1>{name}</h1>
                <img className="py-3 exercise-img" src={img} alt={name} />
                {exerciseDescription}
            </div>
        </main>
    );

}

// function LogInAction(props) {
//     const auth = props.auth;
//     const setUserIsLoggedInCallback = props.setUserIsLoggedInCallback;
//     const [user, loading, error] = useAuthState(auth);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     if (user) {
//         setUserIsLoggedInCallback(true);
//         return <Navigate to="" />
//     } else {
//         return <p>Please Sign In.</p>
//     }
// }