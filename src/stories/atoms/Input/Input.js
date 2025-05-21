import { html } from "lit";

import "./Input.css";

export default function Input({ id, label, name, required, type }) {
  return html`
    <div class="input__container">
      <label class="input__label" for="${id}">${label}</label>
      <input
        class="input"
        type="${type}"
        name="${name}"
        id="${id}"
        ${required && "required"}
      />
    </div>
  `;
}
