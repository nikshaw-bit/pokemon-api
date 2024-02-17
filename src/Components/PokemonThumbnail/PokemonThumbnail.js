//PokemonThumbnail.js
import React, { useState } from "react";
import Description from "../Description/Description";
import { PokemonThumbnailStyle } from "./PokemonThumbnail.styles";
import clsx from "clsx";

const PokemonThumbnail = ({
  id,
  name,
  image,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  const style = `thumb-container ${type}`;
  const [show, setShow] = useState(false);
  const colorHandler = (type) => {
    switch (type) {
      case "bug":
        return ["yellow", "black"];
      case "grass":
        return ["green", "black"];
      case "water":
        return ["blue", "white"];
      case "fire":
        return ["orange", "black"];
      case "poison":
      case "rock":
        return ["grey", "black"];
      case "electric":
        return ["gold", "black"];
      case "fairy":
        return ["pink", "black"];
      case "ground":
        return ["brown", "black"];
      case "fighting":
        return ["purple", "black"];
      case "psychic":
      case "dark":
        return "black";
      case "ghost":
        return ["black", "white"];
      case "steel":
        return ["silver", "black"];
      case "ice":
        return ["light blue", "black"];
      case "normal":
        return ["violet", "black"];
      default:
        return ["white", "black"];
    }
  };
  //modal handler
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <PokemonThumbnailStyle colorType={colorHandler(type)}>
      <div
        className={clsx(style, "pokemon-card mx-3 mb-3 p-2")}
        key={id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="number"></div>
        <div className="pokemon-card__image">
          <img src={image} alt={name} />
        </div>
        <div className="detail-wrapper">
          <h3>{name.toUpperCase()}</h3>
          <div>Type : {type}</div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <button
              className="pokemon-card__btn btn btn-primary"
              onClick={() => setShow(!show)}
              onBlur={() => setShow(false)}
            >
              {show === true ? "Know less..." : "Know more..."}
            </button>
          </div>
          {show === true && (
            <div className={clsx("dropdown-content", show && "d-block")}>
              <Description
                weightpok={weight}
                heightpok={height}
                pokstat1={stat1}
                pokstat2={stat2}
                pokstat3={stat3}
                pokstat4={stat4}
                pokstat5={stat5}
                pokstat6={stat6}
                posbs1={bs1}
                posbs2={bs2}
                posbs3={bs3}
                posbs4={bs4}
                posbs5={bs5}
                posbs6={bs6}
              />
            </div>
          )}
        </div>
      </div>
    </PokemonThumbnailStyle>
  );
};

export default PokemonThumbnail;
