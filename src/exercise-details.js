import React from 'react';

export function DetailsPage(props) {

    const exerciseObj = props.exerciseObj;
    
    const {name, img, equipment, summary, howTo} = exerciseObj;

    return (
        <main className="info-body">
            <div className="save-to-profile btn button-col btn-lg my-5">
                <div>
                    <p>Save to Profile</p>
                    <span className="material-icons" aria-label="Save to Profile">library_add</span>
                </div>
            </div>

            <div className='exer'>
                <h1>{name}</h1>
                <img className="py-3 exercise-img" src={img} alt={name} />
                <div className="py-3">
                    <p>Equipment needed: {equipment}.</p>
                    <p>{summary}</p>
                    <p>{howTo}</p>
                </div>
            </div>
        </main>
    );

}