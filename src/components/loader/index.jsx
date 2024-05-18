import React from "react";

export default function Loader() {
  return (
    <React.Fragment>
      <div id="global-loader">
        <img src={process.env.PUBLIC_URL + "/assets/img/loader.gif"} alt="Loading..." />
      </div>
    </React.Fragment>
  )
}