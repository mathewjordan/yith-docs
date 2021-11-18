import React from "react";
import { styled } from "@stitches/react";
import Yith from "@yith/yith";
import Prism from "prismjs";

export const About = () => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Anchor id="about" />
      <div style={{ display: "flex" }}>
        <h2>About</h2>
        <div
          style={{
            fontSize: "0.7222rem",
            fontWeight: "700",
            margin: "0.5rem",
            textTransform: "uppercase",
          }}
        >
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/mathewjordan/yith"
          >
            Github
          </a>
        </div>
      </div>
      <p className="lead">
        Yith is a component library that interweaves IIIF manifests and their
        content into flexible layouts in a usable, responsive, and accessible
        way.
      </p>
      <Example>
        <div>
          <div>
            <h3>Features</h3>
            <ul>
              <li>
                Blends IIIF content into modern and responsive web layouts
              </li>
              <li>Works with Presentation 2.0 and Presentation 3.0 APIs</li>
              <li>
                Empowers curators to craft narratives with IIIF manifests,
                canvases, and annotations
              </li>
              <li>Provides React JSX integration for developers</li>
            </ul>
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <Yith type="projection">
              <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/25865/manifest.json" />
              <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/299837" />
            </Yith>
          </div>
        </div>
        <Pre style={{ marginTop: "0 !important" }}>
          <code className="language-html">
            {`
/**
 * Two works by Winslow Homer wrapped in a Projection
 */         

<Yith type="projection">
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/25865/manifest.json" />
  <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/299837" />
</Yith>
`}
          </code>
        </Pre>
        <h3>Goals and Roadmap</h3>
        <div>
          <div>
            <h4 className="bullet-header">Usable</h4>
            <p>
              Interacting with IIIF content is a joy so lets make it easier for
              curators and end users to showcase and explore them
            </p>
          </div>
          <div>
            <h4 className="bullet-header">Inclusive</h4>
            <p>
              All users should be able to explore IIIF content and we must seek
              to to showcase them in a fully WCAG 2.1 conformant way
            </p>
          </div>
          <div>
            <h4 className="bullet-header">Interoperable</h4>
            <p>
              Developers and curators alike should be empowered to deliver their
              manifests of all walks to their end users
            </p>
          </div>
        </div>
      </Example>
      <Anchor id="usage" />
      <h2>Usage</h2>
      <Pre>
        <code className="language-bash">
          {`
npm install @yith/yith
`}
        </code>
      </Pre>
      <Pre>
        <code className="language-js">
          {`
import React from "react";
import Yith from "@yith/yith";
`}
        </code>
      </Pre>
      <Pre>
        <code className="language-html">
          {`
<Yith type="presentation">
  <Yith.Manifest id="https://iiif.harvardartmuseums.org/manifests/object/230326" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/24645/manifest.json" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/24645/manifest.json" />
</Yith>
`}
        </code>
      </Pre>
    </>
  );
};

const Example = styled("div", {
  display: "flex",
  flexDirection: "column",

  "> div": {
    display: "flex",
    flexDirection: "row",
    marginRight: "3rem",

    "> div": {
      marginRight: "3rem",

      "&:last-child": {
        marginRight: "0 !important",
      },
    },
  },

  ul: {
    padding: "0",
    margin: "0 0 1rem",
    listStyle: "none",

    li: {
      marginBottom: "0.75rem",
      fontWeight: "300",
      paddingLeft: "1rem",

      "&::before": {
        display: "block",
        position: "absolute",
        width: "6px",
        height: "6px",
        borderRadius: "2px",
        marginTop: "7px",
        marginLeft: "-14px",
        content: "",
        backgroundColor: "#653787",
      },
    },
  },
});

const Anchor = styled("span", {
  display: "block",
});

const Pre = styled("pre", {
  fontFamily: "'Roboto Mono', monospace",
  fontSize: "0.8333rem !important",
  backgroundColor: "#0f111a !important",
  padding: "1rem 2.5rem 2rem !important",
  borderRadius: "5px",
  margin: "2rem 0",
  marginBottom: "2em !important",
  overflow: "scroll",
  boxShadow: "2px 2px 5px #00000033",
  textShadow: "none !important",
  color: "white",

  code: { color: "white !important" },
});

export { Anchor, Example, Pre };
