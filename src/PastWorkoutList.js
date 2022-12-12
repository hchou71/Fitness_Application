import React, { useState, useEffect } from "react";
import { PastWorkoutCard } from "./PastWorkoutCard";
import { getDatabase, ref, onValue } from 'firebase/database'; //realtime
import { PastWorkoutModal } from "./pastWorkoutModal";

export function PastWorkoutList(props) {
  const [past, setPast] = useState([]);

  useEffect(() => {

    const db = getDatabase();
    const currentUser = props.currentUser;
    const userRef = ref(db, "Users/" + currentUser.uid + "/past");

    //when db value changes
    onValue(userRef, (snapshot) => {
      const valueObj = snapshot.val();
      //convert object into array
      const objKeys = Object.keys(valueObj);
      const objArray = objKeys.map((keyString) => {
        const theMessageObj = valueObj[keyString];
        theMessageObj.key = keyString;
        return theMessageObj;
      })
      setPast(objArray);
    })


  }, [])

  const PastList = past.map((element, i) => {
    const post = (
      <PastWorkoutCard
        key={i}
        stuff={element}
      />
    )
    return post;
  });

  return (
    PastList
  )
}