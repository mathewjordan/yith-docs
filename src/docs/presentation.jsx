import { Anchor, Pre } from "./about";
import React from "react";
import Yith from "@yith/yith";

export const Presentation = () => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Anchor id="presentation" />
      <h3>Presentation</h3>
      <h5>Single Manifest</h5>
      <Yith type="presentation">
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
      </Yith>

      <Pre>
        <code className="language-html">
          {`
/**
 * A single manifest with a presentation type
 */

<Yith type="presentation">
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/76395/manifest.json" />
</Yith>
`}
        </code>
      </Pre>

      <h5>Multiple Manifests</h5>
      <Yith type="presentation">
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/21090/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/21101/manifest.json" />
        <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/14813/manifest.json" />
      </Yith>
      <Pre>
        <code className="language-html">
          {`
/**
 * Three manifests with a presentation type
 */

<Yith type="presentation">
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/21090/manifest.json" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/21101/manifest.json" />
  <Yith.Manifest id="https://api.artic.edu/api/v1/artworks/14813/manifest.json" />
</Yith>
`}
        </code>
      </Pre>
    </>
  );
};
