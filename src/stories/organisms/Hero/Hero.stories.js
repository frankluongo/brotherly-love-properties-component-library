import Hero from "./Hero";

import image from "../../../assets/images/hero-bg.jpg";

export default {
  title: "Organisms/Hero",
  tags: ["autodocs"],
  render: (args) => Hero(args),
  args: {},
};
export const Default = {
  args: {
    image,
    title: "We Buy Houses in Philadelphia",
    subtitle: "No repairs | Cash Offer | No commissions or fees",
  },
};

export const InverseOrder = {
  name: "Inverse Order",
  args: {
    order: "inverse",
    image,
    title: "Sell My House Fast",
    subtitle: "Get fast cash for your house",
  },
};
