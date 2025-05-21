import { html } from "lit";

import firstLetter from "../../../utilities/functions/firstLetter";

import "./Review.css";

export default function Review({
  description,
  reviewAge,
  reviewCount,
  reviewer,
}) {
  return html`
    <article class="review">
      <header class="review__header">
        <div class="review-header__column review-header__column--left">
          <div title="${reviewer}" class="review__avatar">
            ${firstLetter(reviewer)}
          </div>
        </div>
        <div class="review-header__column review-header__column--right">
          <h3 class="review__title">${reviewer}</h3>
          <p class="review__subtitle">${reviewCount}</p>
        </div>
      </header>
      <div class="review__section">
        ⭐️&nbsp;⭐️&nbsp;⭐️&nbsp;⭐️&nbsp;⭐️&nbsp;${reviewAge}
      </div>
      <div class="review__section">
        <p>${description}</p>
      </div>
    </article>
  `;
}
