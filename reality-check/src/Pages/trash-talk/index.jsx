import React, { useContext } from "react";
import { Map } from "../../Components/map/map";
import { CanData } from "../../Global/cans";
import "./styles.scss";

const TrashTalkPage = props => {
  const {
    // set default values on the right
    title = "Trash Talk"
  } = props;
  const { canData, setCanData } = useContext(CanData);
  return (
    <div className="container">
      <Map />
      {Object.keys(canData).map((key, index) => {
        return (
          <p key={index}>
            {key}: {canData[key]}
          </p>
        );
      })}
      <button
        onClick={() => {
          setCanData({ howick: 4, "bucklands beach": 10 });
        }}
      >
        Hello
      </button>
    </div>
  );
};

export default TrashTalkPage;
