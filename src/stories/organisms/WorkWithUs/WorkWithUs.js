import { html } from "lit";

import "./WorkWithUs.css";

export const DEFAULT_REASONS = [
  {
    text: "You Choose The Closing Date",
    image:
      "https://brotherlyloveproperties.com/wp-content/uploads/2019/12/blre-photo-1520038410233-7141be7e6f97.jpg",
  },
  {
    text: "No Repairs or Cleaning",
    image:
      "https://brotherlyloveproperties.com/wp-content/uploads/2022/11/we-buy-houses.jpg",
  },
  {
    text: "No Commissions or Fees",
    image:
      "https://brotherlyloveproperties.com/wp-content/uploads/2020/04/alexander-mils-lCPhGxs7pww-unsplash-1600x1067.jpg",
  },
  {
    text: "We're a Local Company",
    image:
      "https://brotherlyloveproperties.com/wp-content/uploads/2020/06/jon-co-founder.png",
  },
];

export default function WorkWithUs(reasons = DEFAULT_REASONS) {
  return html`
    <section class="global:section" id="work-with-us">
      <div class="global:container global:flex-column">
        <header>
          <h2 id="work-with-us__title">
            4 Reasons<br />
            Why You Should<br />
            Work With Us
          </h2>
        </header>
        <ul class="global:flex-row global:flex-row--center">
          ${reasons.map(
            (reason) =>
              html`<li
                class="work-with-us__item global:flex-column global:flex-column--gap-sm"
              >
                <figure class="work-with-us__image-wrapper">
                  <img
                    class="work-with-us__image global:image global:image--square"
                    src="${reason.image}"
                    alt="${reason.text}"
                  />
                </figure>
                ${reason.text}
              </li>`
          )}
        </ul>
      </div>
    </section>
  `;
}
