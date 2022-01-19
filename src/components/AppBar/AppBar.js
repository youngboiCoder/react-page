import React from "react";
import AppIcons from "../AppIcons/AppIcons";
import styled from "styled-components";

import "./AppBar.css";

const AppBar = ({ websiteOptions, socialMedia, theme, changeTheme }) => {
  return (
    <div className="container">
      <div className="AppBar">
        <div className="section ">
          <AppIcons icon="fas fa-home icon" name="Home" theme={theme} />
        </div>

        <Spacer />

        <div className="section ">
          {websiteOptions.map((item) => (
            <AppIcons icon={item.icon} name={item.name} theme={theme} />
          ))}
        </div>

        <Spacer />

        <div className="section ">
          {socialMedia.map((item) => (
            <AppIcons icon={item.icon} name={item.name} theme={theme} />
          ))}
        </div>

        <Spacer />

        <div className="section ">
          <AppIcons
            icon="fas fa-adjust icon"
            name="Change Theme"
            theme={theme}
            changeTheme={changeTheme}
          />
        </div>
      </div>
    </div>
  );
};

const Spacer = styled.div`
  height: 40px;
  border-right: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;

  margin: 0px 5px;
`;

export default AppBar;
