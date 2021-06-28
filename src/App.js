import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <section>
        <h3 className="card-left">questions and answers about login</h3>
        <div className="card-right">
          {data.map(({ id, title, info }) => {
            return <SingleQuestion key={id} title={title} info={info} />;
          })}
        </div>
        <div className="red-box"></div>
        <div className="red-box__secondary"></div>
        <div className="purple-box__secondary"></div>
      </section>
    </main>
  );
}

export default App;
