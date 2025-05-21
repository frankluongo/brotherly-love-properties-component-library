import { html } from "lit";

import avatar from "../../../assets/images/avatar.avif";

import Video from "./Video";

export default {
  title: "Molecules/Video",
  tags: ["autodocs"],
  render: (args) => html`<div style="padding: 30px">${Video(args)}</div>`,
  args: {
    src: "https://www.youtube.com/embed/zOFBt1aDvLY?rel=0",
    title: "We buy houses in San Diego - Sell Your House for Cash",
  },
};
export const Default = {};
