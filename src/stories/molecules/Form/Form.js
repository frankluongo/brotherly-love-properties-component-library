import { html } from "lit";

import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

import formScript from "./FormScript";
import "./Form.css";

export default function Form({
  action,
  id,
  enctype,
  fields,
  method,
  target,
  title,
}) {
  formScript(id);

  return html`
    <div class="form__container">
      <header class="form__header">
        <h3 class="form-header__title">${title}</h3>
      </header>
      <form
        id="${id}"
        action="${action}"
        class="form"
        enctype="${enctype}"
        method="${method}"
        target="${target}"
      >
        ${fields.map(Input)}
        <div class="form__footer">
          ${Button({
            text: "Get Your Offer!",
            type: "submit",
            variant: "primary",
          })}
        </div>
        <div
          class="form-submit-message"
          data-active="false"
          data-form-message=""
        >
          <div
            class="form-submit-message__content"
            data-form-message-content=""
          ></div>
        </div>
      </form>
    </div>
  `;
}
