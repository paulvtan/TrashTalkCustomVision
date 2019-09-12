import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./styles.scss";

export const FactCard = ({ content, image }) => {
  return (
    <Card className="card" style={{ width: "100%", minHeight: "10vh", height:"100%"}}>
      <CardContent style={{ textAlign: "center" }}>
        {image}
        <br/>
        <br/>
        <br/>
        <br/>
        

        <h4>{content}</h4>
        <br/>
        <br/>
        <br/>
        <br/>
      </CardContent>
    </Card>
  );
};
