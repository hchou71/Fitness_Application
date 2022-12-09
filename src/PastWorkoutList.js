import React from "react";
import { PastWorkoutCard } from "./PastWorkoutCard";

export function PastWorkoutList(props) {

  return (
    <section className="past-content">
      <div className="container-lg container-sm">
        <PastWorkoutCard url={props.url}/>
      </div>
    </section>
  )
}