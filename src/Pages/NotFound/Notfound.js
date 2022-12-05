import React from "react";
import "./style.scss";



//////// Light //////////
document.onmousemove = function (e) {
  let x = e.pageX - window.innerWidth / 2;
  let y = e.pageY - window.innerHeight / 2;


};

const titleChange =  (e) =>{
  let x = e.pageX - window.innerWidth / 2;
  let y = e.pageY - window.innerHeight / 2;

  let rad = Math.atan2(y, x).toFixed(2);
  let length = Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / 10);

  let x_shadow = Math.round(length * Math.cos(rad));
  let y_shadow = Math.round(length * Math.sin(rad));

  
};

const shadow = {'--x-shadow': 0,
'--y-shadow': 0,
'--x': '50%',
'--y': '50%'}

const Notfound = () => {
  return (
    <div className="not-found">
      {" "}
      <section class="error_section">
        <p class="error_section_subtitle">Opps Page is not available !</p>
        <h1 onMouseOver={titleChange} style={shadow} class="error_title">
          <p>404</p>
          404
        </h1>
        <a href="/" class="btn">
          Back to home
        </a>
      </section>
    </div>
  );
};

export default Notfound;
