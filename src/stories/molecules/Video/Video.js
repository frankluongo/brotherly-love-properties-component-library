import { html } from "lit";

import "./Video.css";

export default function Video({ src, title }) {
  return html`
    <div class="video-wrapper">
      <iframe
        class="video"
        src="${src}"
        title="${title}"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  `;
}
