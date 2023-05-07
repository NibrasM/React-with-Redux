import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export default function IcecreamView() {
  const [value, setvalue] = useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Number of icecream - {numOfIcecreams} </h2>
        <button onClick={() => dispatch(ordered())}>Order icecream</button>
        <input
          type="number"
          value={value}
          onChange={(e) => setvalue(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(restocked(value))}>
          Restock icecreams
        </button>
      </div>
    </div>
  );
}
