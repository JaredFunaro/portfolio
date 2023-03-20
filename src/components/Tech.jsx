import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {

  const handleMouse = (e) => {
    console.log(e);
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div  className='w-28 h-28 items-center technology' key={technology.name}>
          <div style={{visibility:'hidden'}} className='flex flex-row flex-wrap text-center justify-evenly content-evenly tooltip' id={technology.name}>{technology.name}</div>
          <BallCanvas onMouseOver={handleMouse} icon={technology.icon} tech={technology.name}  />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");