import { html } from "lit";
import Form from "./Form";

import { MOCK_FIELDS } from "../../../utilities/constants/constants.form";

export default {
  title: "Molecules/Form",
  tags: ["autodocs"],
  render: (args) => html`<div style="padding: 30px">${Form(args)}</div>`,
  args: {
    action: "FORM_ACTION_URL",
    enctype: "application/x-www-form-urlencoded",
    fields: MOCK_FIELDS,
    id: "mock-form",
    method: "POST",
    target: "TARGET_URL",
    title: "Form Title",
  },
};
export const Default = {};
