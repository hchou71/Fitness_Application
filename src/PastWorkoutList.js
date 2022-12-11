import React from "react";
import { PastWorkoutCard } from "./PastWorkoutCard";
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database'; //realtime

export function PastWorkoutList(props) {
  const db = getDatabase();
  const currentUser = props.currentUser;
  const userRef = ref(db, "Users/" + currentUser.uid + "/past");

  const cards = onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    for (let i = 0; i <= data.length; i++) {
      let form = data[i];
      return <PastWorkoutCard form={form} />
    }
  });
  return (
    <section className="past-content">
      <div className="container-lg container-sm">
        {cards}
      </div>
    </section>
  )
}