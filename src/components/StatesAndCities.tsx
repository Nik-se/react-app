import React, { useEffect, useState } from "react";
import { StateName } from "../services/USQuizService";

const State = async () => {
  try {
    const response = await StateName();
    return response.data; // Assuming the API response is in the correct format
  } catch (error) {
    console.error(error);
    return {}; // Return an empty object in case of an error
  }
};

export default State;
