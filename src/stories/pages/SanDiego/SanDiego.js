import { html } from "lit";

import image from "../../../assets/images/hero-bg.jpg";

import { MOCK_REVIEW } from "../../../utilities/constants/constants.review";

import Hero from "../../organisms/Hero/Hero";
import Video from "../../molecules/Video/Video";
import Review from "../../molecules/Review/Review";

export default function SanDiego({}) {
  return html`
    <div class="global:page-wrapper">
      ${Hero({
        image,
        title: "How to Sell My House Fast in San Diego CA",
        subtitle:
          "A complete guide on how to sell a home for cash. We buy houses as-is! No Fees, No Commissions, No Hassle!",
      })}
      <div class="global:container global:section global:grid-row">
        <div
          class="global:grid-column global:grid-column--6 global:flex-column"
        >
          <p>
            Deciding how to sell your house fast in San Diego is challenging.
            You’re required to deal with realtors, banks, title companies, etc.
            It can become tedious, time-consuming, and expensive to sell a home
            on the market, especially as a California resident. If you have
            wondered how can I sell my house for cash in San Diego, our company
            is here to help. Selling your home doesn’t have to be a hassle. Skip
            the middlemen, avoid open houses, and don’t worry about getting
            things in “market-ready” condition.
            <strong>We buy houses in San Diego CA as-is</strong>, which means
            you don’t have to fix anything before selling it to us.
            <a
              href="https://brotherlyloveproperties.com/about-us/"
              target="_blank"
              rel="noopener"
              >Our company</a
            >
            pays in cash and closes within 21 days, saving you tons of time and
            thousands of dollars.
          </p>
          <p>
            For those that have thought that I need to sell my house fast in San
            Diego, our company is here to help you do that.
          </p>
        </div>
        <div class="global:grid-column global:grid-column--6">
          ${Video({
            src: "https://www.youtube.com/embed/zOFBt1aDvLY?rel=0",
            title: "We buy houses in San Diego - Sell Your House for Cash",
          })}
        </div>
      </div>
      <section
        class="global:container global:section global:section--color-alternate global:flex-column"
      >
        <header class="global:flex-column global:flex-column--gap-sm">
          <h2 id="ways-to-sell-my-house-fast-in-san-diego">
            Ways to Sell My House Fast in San Diego
          </h2>
          <p>
            The biggest challenge when trying to sell a house fast in
            <a
              href="https://en.wikipedia.org/wiki/San_Diego"
              target="_blank"
              rel="noopener"
              >the city of San Diego</a
            >
            is finding the right homebuyer. Ask anyone who’s tried to sell a
            home on the market, and they’ll tell you how EXHAUSTING and
            FRUSTRATING the wait can be. Even if they get the property listed,
            working with real estate agents can take months to close the sale.
            It feels like the opposite of <strong>fast</strong>. Sometimes
            homebuyers will even back out in the middle of negotiations because
            they changed their mind or couldn’t get approved for their mortgage.
            We will buy your house in San Diego for cash. Our buying process is
            as fast as it gets. Brotherly Love Real Estate can close on your
            house within a 21-day period with a cash offer.
          </p>
        </header>
        <div class="global:flex-row">
          ${Review(MOCK_REVIEW)} ${Review(MOCK_REVIEW)} ${Review(MOCK_REVIEW)}
          ${Review(MOCK_REVIEW)} ${Review(MOCK_REVIEW)}
        </div>
        <div class="global:flex-column global:flex-column--gap-sm">
          <h2>Can I Sell a House for Cash in San Diego</h2>
          <p>
            Getting cash for your house in San Diego speeds up the process and
            saves you money. Brotherly Love Real Estate is a company that buys
            houses for cash in San Diego and the surrounding cities. We will buy
            your home as-is and fast. That means you don’t need to add a fresh
            coat of paint, clean the carpets, or remove any trash being selling
            your property to us. The real estate process is simple and fast! Our
            company closes within 21 days (or sooner), and we work around your
            schedule to find a convenient closing date for you and your family.
            If you have thought that I need to
            <a href="#sell-your-house-for-cash-in-san-diego-today"
              >sell my house for cash</a
            >&nbsp;in San Diego, give us a call today to receive your
            no-obligation offer.
          </p>
          <p>
            We buy houses in San Diego regardless of their shape, size, and
            condition. Do you need to get rid of your home fast? Brotherly Love
            Real Estate can help. When we buy homes, our goal is to speed up the
            process as much as possible to help save homeowners time. How fast
            do you need to close? Let us know! We work around your schedule and
            close on your time. When we buy houses, we pay in cash. This enables
            us to close fast, usually within 3 weeks.
          </p>
        </div>
      </section>
    </div>
  `;
}
