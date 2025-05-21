import { html } from "lit";

import "./Author.css";

export default function Author({ avatar, bio, name }) {
  return html`
    <article class="author">
      <figure class="author__column author__column--left">
        <img src="${avatar}" alt="${name}" class="author__avatar" />
      </figure>
      <div class="author__column author__column--right">
        <h3 class="author__name">${name}</h3>
        <p>${bio}</p>
      </div>
    </article>
  `;
}
