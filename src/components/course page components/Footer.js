import React from "react";
import "../components styles/course page styles/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div>
        Top companies choose <span>Udemy Business</span> to build in-demand
        career skills.
      </div>
      <div>
        <img
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
          alt="Nasdaq"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          alt="Volkswagen"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          alt="Box"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
          alt="Netapp"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          alt="Evenbrite"
        />
      </div>
    </footer>
  );
};
