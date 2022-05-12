import { useEffect } from "react";

export const ChildA = (props) => {
  const { setState1 } = props;

  useEffect(() => {
    setState1((prev) => {
      console.log("App1 prev: ", prev);
      return [...prev, "ChildA"];
    });
  }, []);

  return <div>ChildA</div>;
};
