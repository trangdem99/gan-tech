import React from "react";

export default function Loader() {
  return (
    <React.Fragment>
      <div id="global-loader">
        <img src={process.env.REACT_APP_PUBLIC_URL + "/assets/images/loader.svg"} alt="Loading..." />
      </div>
    </React.Fragment>
  )
}