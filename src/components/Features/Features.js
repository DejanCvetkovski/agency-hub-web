import React from "react";
import "./Features.css";
import sections from "../../constants/data";
import SingleFeature from "./SingleFeature";

const Features = () => {
  return (
    <section className="features section-p bg-black" id="features">
      <div className="container">
        <div className="features-content">
          <div className="item-list text-white grid">
            {sections.features.map((feature) => {
              return <SingleFeature key={feature.id} {...feature} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
