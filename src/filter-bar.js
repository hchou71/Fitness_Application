import React from 'react';

export function FilterBar(props) {
    
    // const bodyPartArray = [...new Set(props.exercises.reduce((all, current) => {
    //     return all.concat([current.muscleWorked, current.secondaryMuscles]);
    //   }, []))].sort();

    const sortByMuscle = props.sortByMuscle;

    const bodyPartArray = [...new Set(props.exercises.reduce((all, current) => {
        return all.concat([current.muscleWorked]);
      }, []))].sort();

    const buttonList = bodyPartArray.map((bodyPart) => {
        if (sortByMuscle === bodyPart) {
            return <li className="btn button-col active" key={bodyPart}>{bodyPart}</li>
        } else {
            return <li className="btn button-col" key={bodyPart} onClick={handleClick}>{bodyPart}</li>
        }
    });

    buttonList.unshift(<li className="btn button-col" key="all" onClick={handleClick}>All</li>)

    function handleClick(event) {
        props.sortByCallback(event.target.innerHTML);
    }

    return (
        <div className="filter-bar">
            <h1 className="filter-title">Filter by Body Part</h1>
            <ul className="nav flex-column">
                {buttonList}
            </ul>
        </div>
    );

}