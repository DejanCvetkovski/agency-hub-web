import React from "react";
import "./Contact.css";

const Map = () => {
  return (
    <div className="map-content">
      {/* eslint-disable-next-line */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.2429873900855!2d21.392931776605838!3d41.99506045808236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541413c80d3be9%3A0xd8df0a600984b61!2sKozle%2088%2C%20Skopje%201000!5e0!3m2!1sen!2smk!4v1704374453093!5m2!1sen!2smk"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
