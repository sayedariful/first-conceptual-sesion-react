import React from "react";

const Card = () => {
  const title = "Hello my custom Title";
  const myObj = {
    views: "100k",
  };
  const myStyle = {
    color: "red",
    fontSize: "18px",
    fontWeight: "500",
  };

  function myResult(a, b) {
    return a + b;
  }
  const myResults = (a, b) => {
    return a + b;
  };
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="Photo" />
        </figure>

        <div className="card-body">
          <h2 className="card-title my-custom-class">{title ? title : 'not found'}</h2>
          <p style={myStyle}>
            If a dog chews shoes whose shoes does he choose?
          </p>
          <p
            style={{
              color: "red",
              fontSize: "18px",
              fontWeight: "500",
              margin: "10px 0",
            }}
          >
            {myObj.views}
          </p>
          <p>{myResult(100, 200)}</p>
          <p>{myResults(300, 200)}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
