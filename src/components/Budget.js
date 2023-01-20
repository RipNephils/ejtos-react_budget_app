import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondary">
      <label for="budget">Budget: £</label>
      <input type="number" id="budget" name="budget" step="10" value="2000" />
    </div>
  );
};

export default Budget;
