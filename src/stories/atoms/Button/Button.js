import { html } from "lit";

import "./Button.css";

export default function Button({ disabled, text, type, variant = "primary" }) {
  return html`
    <button
      class="button"
      ${disabled && disabled}
      type="${type}"
      data-variant="${variant}"
    >
      ${text}
    </button>
  `;
}
