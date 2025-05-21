import { html } from "lit";

import avatar from "../../../assets/images/avatar.avif";

import Review from "./Review";

export default {
  title: "Molecules/Review",
  tags: ["autodocs"],
  render: (args) => html`<div style="padding: 30px">${Review(args)}</div>`,
  args: {
    avatar,
    reviewer: "Margaret Langley",
    reviewAge: "2 Months ago",
    reviewCount: "1 review",
    description:
      "I found Jon to be knowledgeable and straight forward in making a deal on my property. Due to Covid-19, no office was involved. We went to Staples for copies and signed off at the UPS store. Most unusual but everything went well. These are unsual times and flexibility is required. Great doing business with",
  },
};
export const Default = {};
