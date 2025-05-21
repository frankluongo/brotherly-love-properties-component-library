import { html } from "lit";

import "./Review.css";

export default function Review({
  avatar,
  description,
  reviewAge,
  reviewCount,
  reviewer,
}) {
  return html`
    <article class="review">
      <header class="review__header">
        <figure class="review-header__column review-header__column--left">
          <img src="${avatar}" alt="${reviewer}" class="review__avatar" />
        </figure>
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
