import React, { useState } from "react";

function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: props.mode === "dark" ? "white" : "grey",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark"?"white": "grey"
  });

  const [btntext, setbtntext] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntext("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "grey",
        border: "0.5px solid white",
      });
      setbtntext("Enable Light Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h2 style={{color: props.mode === "dark" ? "white" : "#042743"}}>About Us!</h2>
      <button className="btn btn-primary my-2" onClick={toggleStyle}>
        {btntext}
      </button>

      <div className="accordion" id="accordionExample">
        {/* Accordion Item #1 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyse your text.
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item’s accordion body.</strong> You can
              edit or style it using the toggle button above.
            </div>
          </div>
        </div>

        {/* Accordion Item #2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use.
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item’s accordion body.</strong>
            </div>
          </div>
        </div>

        {/* Accordion Item #3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item’s accordion body.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
