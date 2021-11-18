import { styled } from "@stitches/react";
import { About } from "./docs/about";
import { Projection } from "./docs/projection";
import { Presentation } from "./docs/presentation";
import { Buddha } from "./docs/examples/buddha";
import { Figure } from "./docs/previews/figure";
import { Interstitial } from "./docs/previews/interstitial";
import { Menu } from "./components/menu";

export default function Docs() {
  return (
    <Wrapper>
      <Aside>
        <h1>Yith</h1>
        <Menu />
      </Aside>
      <Main>
        <About />
        <h2>Types</h2>
        <Projection />
        <Presentation />
        <h2>Previews</h2>
        <Figure />
        <Interstitial />
        <h2>Examples</h2>
        <Buddha />
      </Main>
    </Wrapper>
  );
}

const Aside = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  width: "calc(25% - 4rem)",
  height: "100%",
  flexShrink: "0",
  padding: "2rem",
  backgroundColor: "#fff",
  boxShadow: "2px 2px 5px #00000011",
});

const Main = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  left: "25%",
  width: "calc(75% - 4rem)",
  height: "100%",
  flexShrink: "1",
  overflowX: "hidden",
  overflowY: "scroll",
  padding: "2rem 2rem",
});

const Wrapper = styled("div", {
  display: "flex",
  color: "#1f2233",
  height: "100%",
  letterSpacing: "0.01em",

  h2: {
    marginTop: "3rem",

    "&:first-of-type": {
      marginTop: "0",
    },
  },

  h3: {
    fontWeight: "900",
    fontSize: "1.25rem",
    marginTop: "2rem",

    "&.yith-article-title": {
      fontWeight: "200",
      fontFamily: "DM Serif Display",
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
  },

  h4: {
    margin: "1rem 0 1rem",
  },

  h5: {
    fontWeight: "300",
    fontSize: "1.25rem",
    marginTop: "2rem",
    borderBottom: "2px solid #47495d11",
  },

  p: {
    lineHeight: "1.5em",
    fontWeight: "300",

    code: {
      fontSize: "0.8333rem",
      padding: "0.25rem 0.5rem",
    },

    "&.subtitle": {
      fontSize: "2rem",
      fontWeight: "900",
      margin: "0.5rem 0 0.25rem",
    },

    "&.lead": {
      fontSize: "1.25rem",
      margin: "0.5rem 0 1rem",
      fontWeight: "300",
    },
  },
});
