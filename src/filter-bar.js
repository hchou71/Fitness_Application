import React from 'react';

export function FilterBar(props) {
    
    // const bodyPartArray = [...new Set(props.exercises.reduce((all, current) => {
    //     return all.concat([current.muscleWorked, current.secondaryMuscles]);
    //   }, []))].sort();

    const bodyPartArray = [...new Set(props.exercises.reduce((all, current) => {
        return all.concat([current.muscleWorked]);
      }, []))].sort();

    const buttonList = bodyPartArray.map((bodyPart) => {
        return <li className="btn button-col" key={bodyPart} onClick={handleClick} id={bodyPart}>{bodyPart}</li>
    });

    buttonList.unshift(<li className="btn button-col" key="all" onClick={handleClick} id="">All</li>)

    function handleClick(event) {
        props.sortByCallback(event.target.id);
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