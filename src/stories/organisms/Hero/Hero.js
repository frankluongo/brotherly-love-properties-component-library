import { html } from "lit";

import { MOCK_FIELDS } from "../../../utilities/constants/constants.form";

import Form from "../../molecules/Form/Form";

import "./Hero.css";

export default function Hero({ image, order = "default", title, subtitle }) {
  return html`
    <section class="hero hero--${order}">
      <img src="${image}" alt="" class="hero__image" />
      <div class="hero__image-overlay"></div>
      <div class="global:container hero__container">
        <div class="hero-container__column hero-container__column--left">
          ${Form({ fields: MOCK_FIELDS, id: "mock-form" })}
        </div>
        <div class="hero-container__column hero-container__column--right">
          <div class="hero-container-column__text">
            <h2 class="hero-content__title">${title}</h2>
            <p class="hero-content__subtitle">${subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
