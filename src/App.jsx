import "./styles.css";
import { useEffect, useState } from "react";
import { ChildA } from "./ChildA";

export default function App1() {
  const [state1, setState1] = useState([]);

  useEffect(() => {
    setState1((prev) => {
      console.log("App1 prev: ", prev);
      return [...prev, "App1-1"];
    });
    setState1((prev) => {
      console.log("App1 prev: ", prev);
      return [...prev, "App1-2"];
    });
  }, []);

  console.log(`App1 state1=${state1}`);

  return (
    <div>
      App1
      <ChildA setState1={setState1} />
    </div>
  );
}
