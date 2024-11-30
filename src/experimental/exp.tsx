import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export const Exp = () => {
  const [elements, setElements] = useState<number[]>(
    Array.from({ length: 13 }, (value: number, index) => index as number)
  );
  const refArray = useRef<Array<HTMLDivElement | null>>([]);
  const scrollRef = useRef(null);
  console.log(elements);

  useEffect(() => {
    refArray.current = refArray.current.slice(0, elements.length);
  }, [elements]);

  return (
    <>
      <Button
        onClick={() => {
          refArray.current[7]?.scrollIntoView();
        }}
        title="DeadPrez"
      >hjhjashjhy</Button>
      <div>
        {elements.map((el, index) => (
          <div
            style={{ height: 300 }}
            ref={(it) => (refArray.current[index] = it)}
          >
            {el}
          </div>
        ))}
      </div>
      ;
    </>
  );
};
