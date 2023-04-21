import React from "react";
import classes from "./Card.module.css";

const Card = ({ data }) => {
  const { title, link, imageSrc, animationTime } = data;
  return (
    <>
      <div className={classes.card} style={{"--time": animationTime}}>
        <div className={classes.container}>
          <img className={classes.img} src={imageSrc} alt="" />
        </div>
        <h2 className={classes.title}>{title}</h2>
        <a className={classes.link} href={link}>
          Visit
        </a>
      </div>
    </>
  );
};

export default Card;
