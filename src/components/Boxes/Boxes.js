import React, { useState } from "react";
import "./Boxces.css";

const Boxes = () => {
  const initialBoxes = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
  ];
  const [boxes, setBoxes] = useState(initialBoxes);
  const [selectBox, setSelectBox] = useState([]);

  const selectHandler = (box) => {
    if (box.name) {
      const newBox = selectBox.filter((initBox) => initBox.name === box.name);
      if (newBox[0].bg === "red-bg") {
        box.bg = "green-bg";
      } else {
        box.bg = "red-bg";
      }
      newBox.bg = "red-bg";
      setSelectBox([...selectBox]);
      return;
    }

    if (!selectBox.length) {
      box.name = "Box#1";
      box.bg = "red-bg";
    } else {
      box.name = `Box#${selectBox.length + 1}`;
      box.bg = "red-bg";
    }
    if (selectBox.length >= 2) {
      for (let box of boxes) {
        box.bg = "green-bg";
      }
      selectBox[selectBox.length - 1].bg = "red-bg";
      box.bg = "red-bg";
      setSelectBox([...selectBox, box]);
      console.log(selectBox);
      return;
    }

    setSelectBox([...selectBox, box]);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Question 1: Matrix Game:</h1>
      <div className="box-container">
        {boxes.map((box) => (
          <div
            onClick={() => selectHandler(box)}
            className={`single-box ${box.bg || "green-bg"}`}
          >
            {box?.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Boxes;
