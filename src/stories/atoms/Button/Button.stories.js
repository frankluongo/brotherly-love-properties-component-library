import { html } from "lit";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  tags: ["autodocs"],
  render: (args) => html`<div style="padding: 30px">${Button(args)}</div>`,
  args: {
    variant: "primary",
    text: "I am a button",
    type: "button",
  },
};
export const Primary = {};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};
