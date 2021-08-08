import React from "react";
import { Card } from "../card/card.component";
import "./card-list.style.css";

export const CardList = ({ monsters, search }) => {
  return (
    <div className="card-list">
      {monsters
        .filter((monster) => monster.name.toLowerCase().includes(search))
        .map((monster, idx) => (
          <Card key={idx} monster={monster}></Card>
        ))}
    </div>
  );
};
