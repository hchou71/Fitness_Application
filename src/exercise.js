import React, { useState } from 'react';

import { FilterBar } from './filter-bar';
import { ExerciseBody } from './exercise-body';

export function exercisePage(props) {

    return (
        <div>
            <FilterBar />
            <ExerciseBody />
        </div>
    );
}