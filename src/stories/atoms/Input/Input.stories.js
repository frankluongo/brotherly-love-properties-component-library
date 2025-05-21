import { html } from "lit";
import Input from "./Input";

import { MOCK_FIELDS } from "../../../utilities/constants/constants.form";

export default {
  title: "Atoms/Input",
  tags: ["autodocs"],
  render: (args) => html`<div style="padding: 30px">${Input(args)}</div>`,
  args: {
    ...MOCK_FIELDS[0],
  },
};
export const Default = {};
