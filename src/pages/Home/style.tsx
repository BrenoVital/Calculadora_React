import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        box-sizing: border-box;

        padding: 0;
        margin: 0;

        background-color: #66b5fa;
      }
    `}
  />
);
