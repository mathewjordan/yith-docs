import React from "react";
import { styled } from "@stitches/react";

export const Menu = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#usage">Usage</a>
        </li>
      </ul>
      <strong>Types</strong>
      <ul>
        <li>
          <a href="#presentation">Presentation</a>
        </li>
        <li>
          <a href="#projection">Projection</a>
        </li>
        <li>
          <a className="disabled">Progression</a>
        </li>
      </ul>
      <strong>Previews</strong>
      <ul>
        <li>
          <a href="#figure">Figure</a>
        </li>
        <li>
          <a className="disabled">Hero</a>
        </li>
        <li>
          <a href="#interstitial">Interstitial</a>
        </li>
      </ul>
      <strong>Plugins</strong>
      <ul>
        <li>
          <a className="disabled">Omeka S</a>
        </li>
        <li>
          <a className="disabled">WordPress</a>
        </li>
      </ul>
      <hr />
      <strong>Examples</strong>
      <ul>
        <li>
          <a href="#buddha">Six Impressions of Buddha</a>
        </li>
        <li>
          <a className="disabled">Nimíipuu, The Nez Percé</a>
        </li>
        <li>
          <a className="disabled">Odilon Redon (1840-1916)</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled("nav", {
  margin: "1rem 0 0.5rem",

  strong: {
    display: "flex",
    margin: "1rem 0 0.5rem",
    fontWeight: "700",
    fontSize: "0.7222rem",
    textTransform: "uppercase",
    letterSpacing: "0.025em",
  },

  ul: {
    padding: "0",
    margin: "0 0 1rem",
    listStyle: "none",

    li: {
      marginBottom: "0.25rem",
    },
  },

  hr: {
    display: "block",
    border: "none",
    backgroundColor: "#47495d11",
    width: "100%",
    height: "2px",
    margin: "2rem 0",
    fontWeight: "300",
  },

  "a, a:visited": {
    color: "#653787",
    textDecoration: "none",
    fontWeight: "700",

    "&:hover, &:focus": {
      color: "#00506d",
    },

    "&.disabled": {
      fontWeight: "300",
      color: "#47495d",
      opacity: "0.5",
    },
  },
});
