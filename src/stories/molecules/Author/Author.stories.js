import { html } from "lit";

import avatar from "../../../assets/images/avatar.avif";

import Author from "./Author";

export default {
  title: "Molecules/Author",
  tags: ["autodocs"],
  render: (args) => html`<div style="padding: 30px">${Author(args)}</div>`,
  args: {
    avatar,
    name: "Alex Capozzolo",
    bio: "Co-founder of Brotherly Love Real Estate, Alex Capozzolo, is recognized as a trusted real estate expert in the greater Philadelphia, PA market. Alex, and his partner Jon Sanborn, have been buying houses in Philly for eight-plus years. They’ve helped +100 families successfully sell their houses. Alex and Jon continue to be viewed as reliable resources in the real estate industry.",
  },
};
export const Default = {};
