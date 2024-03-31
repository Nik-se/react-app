import React, { useEffect, useState } from "react";
import { StateName } from "../services/USQuizService";

const State = () => {
  const [stateName, setUSState] = useState("");

  useEffect(() => {
    StateName()
      .then((response) => {
        setUSState(response.data.state);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return stateName;
};

export default State;
