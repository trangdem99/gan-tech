import React from "react";

export default function Img(props) {
  return (
    <React.Fragment>
      <img 
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={props.className} 
      />
    </React.Fragment>
  )
}