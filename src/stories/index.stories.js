import React from "react";
import { ClickOutside } from "../../bundled-components";

export default { title: "Button" };

export const withText = () => (
  <ClickOutside
    onOutsideClick={() => console.log("yo boi, you clcked outside")}
  >
    <div>Hello div</div>
  </ClickOutside>
);
