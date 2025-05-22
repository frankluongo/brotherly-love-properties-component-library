import { html } from "lit";

import image from "../../../assets/images/hero-bg.jpg";

import { MOCK_REVIEW } from "../../../utilities/constants/constants.review";

import Hero from "../../organisms/Hero/Hero";
import Video from "../../molecules/Video/Video";
import Review from "../../molecules/Review/Review";
import WorkWithUs from "../../organisms/WorkWithUs/WorkWithUs";

export default function SanDiego({}) {
  return html`
    <div class="global:page-wrapper">
      ${Hero({
        image:
          "https://brotherlyloveproperties.com/wp-content/uploads/2022/06/sell-my-house-fast-for-cash-San-Diego.jpg",
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

      <div class="global:section global:section--color-alternate">
        <section class="global:container global:flex-column">
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
              homebuyers will even back out in the middle of negotiations
              because they changed their mind or couldn’t get approved for their
              mortgage. We will buy your house in San Diego for cash. Our buying
              process is as fast as it gets. Brotherly Love Real Estate can
              close on your house within a 21-day period with a cash offer.
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
              houses for cash in San Diego and the surrounding cities. We will
              buy your home as-is and fast. That means you don’t need to add a
              fresh coat of paint, clean the carpets, or remove any trash being
              selling your property to us. The real estate process is simple and
              fast! Our company closes within 21 days (or sooner), and we work
              around your schedule to find a convenient closing date for you and
              your family. If you have thought that I need to
              <a href="#sell-your-house-for-cash-in-san-diego-today"
                >sell my house for cash</a
              >&nbsp;in San Diego, give us a call today to receive your
              no-obligation offer.
            </p>
            <p>
              We buy houses in San Diego regardless of their shape, size, and
              condition. Do you need to get rid of your home fast? Brotherly
              Love Real Estate can help. When we buy homes, our goal is to speed
              up the process as much as possible to help save homeowners time.
              How fast do you need to close? Let us know! We work around your
              schedule and close on your time. When we buy houses, we pay in
              cash. This enables us to close fast, usually within 3 weeks.
            </p>
          </div>
        </section>
      </div>

      <div class="global:section">
        <section class="global:container global:section global:grid-row">
          <div class="global:grid-column global:grid-column--6">
            <img
              class="global:image global:image--landscape"
              lazy
              src="https://brotherlyloveproperties.com/wp-content/uploads/2022/06/sell-my-house-fast-San-Diego.png"
              alt="Brotherly Love Real Estate"
            />
          </div>
          <div
            class="global:grid-column global:grid-column--6 global:flex-column"
          >
            <h2 id="why-sell-your-house-for-cash-in-san-diego">
              Sell Your House For Cash in San Diego: The Benefits
            </h2>
            <p>
              Trying to sell a house for cash in San Diego is the golden goose
              of real estate scenarios. You don’t have to deal with banks as the
              middleman of the transaction. Plain and simple, homeowners can
              quickly sell when receiving cash versus a mortgage. If you need
              help learning how to sell a house fast for cash in San Diego
              contact us for tips. Did you know that the most common reason that
              a buyer pulls out of a contract to purchase a property is because
              of mortgage approval issues? Buyers that are paying with a
              mortgage loan must get full approval from their bank that they
              meet all the financial requirements. Banks have strict rules in
              place when vetting homebuyers. They want to 1.) protect themselves
              and 2.) make sure that buyers don’t default on their loans. Avoid
              the hassle! Within minutes of connecting with you, our team will
              make you a cash offer to buy your house in San Diego. If you’re
              looking for a fast home sale, look no further!
            </p>
          </div>
        </section>

        ${WorkWithUs()}
        ${Hero({
          order: "inverse",
          title: "Sell Your House Fast!",
          subtitle: "21-Day Closing. NO FEES. NO COMMISSIONS. NO HASSLE.",
        })}
        <!-- -->
        <div class="global:section global:section--color-alternate">
          <section class="global:container global:grid-row">
            <div class="global:grid-column global:grid-column--6">
              <img
                class="global:image global:image--square"
                lazy
                src="https://brotherlyloveproperties.com/wp-content/uploads/2022/09/cash-home-buyer-San-Diego.jpg"
                alt="Brotherly Love Real Estate"
              />
            </div>
            <div
              class="global:grid-column global:grid-column--6 global:flex-column"
            >
              <h2 id="selling-to-a-cash-home-buyer">
                Selling to a Cash Home Buyer
              </h2>
              <p>
                Cash is King and could even be Queen! Receiving a cash offer for
                your property in San Diego makes the process immensely easier.
                You don’t have to find out weeks into the agreement that the
                buyer can’t perform because of a mortgage issue. Especially with
                real estate prices in San Diego being higher than in other areas
                of California, banks are pushed to their limits when providing
                mortgages. Listing your home on the market can take weeks (or
                months) to officially find the right buyer. Using the MLS
                (multiple listing service) is not very fast. Is there a better
                way?
              </p>
              <p>
                Sell your house fast for cash in San Diego by working with
                Brotherly Love Real Estate. We buy houses throughout San Diego
                County and North County SD. Receive a cash offer for your
                investment. Avoid the hassle and
                <a href="#sell-your-house-for-cash-versus-listing"
                  >headache of listing your home</a
                >&nbsp;on the market. Sell your house for cash in San Diego to a
                trusted and local homebuyer.
              </p>
              <h2>You Can Sell a House Fast in San Diego As-Is</h2>
              <p>
                Landlords commonly want to
                <a
                  href="https://brotherlyloveproperties.com/sell-a-house-with-tenants-san-diego/"
                  >sell their rental properties with tenants</a
                >
                because the situation gets so bad. We will purchase the home
                with a tenant occupying it! Again, we make real estate EASY. If
                you’re trying to
                <a
                  href="https://brotherlyloveproperties.com/san-diego-squatters-rights-how-to-evict/"
                  target="_blank"
                  rel="noopener"
                  >get rid of squatters</a
                >, contact us. We will buy your house with squatters so that you
                don’t have to deal with it.
              </p>
            </div>
          </section>
        </div>
        <!-- -->
        <div class="global:container global:section global:grid-row">
          <div
            class="global:grid-column global:grid-column--6 global:flex-column"
          >
            <h2 id="here-is-how-to-sell-a-house-fast-in-san-diego">
              Quickly Sell a Home in San Diego: Seller Tips
            </h2>
            <p>
              Are you still thinking that you need to sell a house fast in San
              Diego CA? We buy houses in ANY condition. No project is too big
              for our team. What should you do next? Here are the steps to
              getting a cash offer for your CA home.
            </p>
            <ul class="global:list">
              <li>Call Brotherly Love Real Estate (760) 790-4790</li>
              <li>Talk with Jon or Alex (the co-founders)</li>
              <li>Receive your cash offer</li>
              <li>Pick a closing date that works for you</li>
              <li>Get your cash fast</li>
            </ul>
            <h2>Need to Sell My House Fast in San Diego</h2>
            <p>
              Yes, it can literally be as simple as that. Our average closing
              period is 21 days. That means more time for you to enjoy life and
              not have to worry about the fine print, closing costs, realtor
              fees, or anything else. Sell your property fast and conveniently
              in San Diego without much effort on your part. Do you have
              deadlines coming up? Let our team know! We can schedule the
              closing date to work around your schedule. Real estate can be
              simple! Sell your home fast and on your terms. Receive a cash
              offer in minutes. Working with a cash home buyer in San Diego like
              Brotherly Love Real Estate makes the process easy. We bring
              <strong>8 years</strong> of real estate buying experience to the
              table. This helps us get through complex title issues that can
              come up and delay the process. Our team works with one of the best
              title companies in all San Diego County. They help us close
              quickly. We buy houses in San Diego for cash, regardless of the
              condition. For those that have wondered
              <a href="#here-is-how-to-sell-a-house-fast-in-san-diego"
                >how to sell a house fast in SD</a
              >, our company can help. As a local cash buyer, you can call or
              text us to receive a quick offer for your home.
            </p>
            <p>
              For the past eight years, we have been buying houses as-is. The
              competitive real estate market of San Diego, as a home buyer, is
              not easy. With each purchase, we appreciate the unique character
              of each neighborhood, from La Jolla’s coastal charm to the
              vibrant, urban heart of the Gaslamp Quarter. This hands-on
              experience helped our home-buying team gain knowledge of market
              trends. Engaging in negotiations, arranging financing, and
              managing complex transactions has equipped us with a thorough
              understanding of the buying process in San Diego.
            </p>
            <p>
              We have worked extensively with a network of real estate
              professionals, lenders, and contractors. Over these years, we’ve
              grown our homebuying team in San Diego CA. Brotherly Love Real
              Estate has dealt with bad tenants, crazy squatters, and houses
              that were falling apart. We buy houses in San Diego regardless of
              the condition or occupancy. I am proud to say that over these
              eight years, I’ve not just been a homebuyer, but an essential link
              in helping people that need to sell fast.
            </p>
            <h2>Sell Your House Fast for Cash in San Diego CA</h2>
            <p>
              Our company typically renovates a property after buying it. This
              is the part of real estate we truly enjoy! After years of fixing
              up properties, we have this part down well. We love to get our
              hands dirty in a demanding real estate renovation. Since we fix up
              and repair the home after we buy it, that allows you (the
              homeowner) to sell it as-is. That’s right! This enables you to
              sell your house fast and save yourself time. You are not required
              to make any repairs beforehand. As a homeowner, you can sell a
              house fast in San Diego without fixing anything. Brotherly Love
              Real Estate is a 5-star rated cash home buyer in San Diego, CA.
              Check out our reviews on Google and Facebook to learn why so many
              other homeowners enjoyed working with us. Our real estate buying
              process is fast, simple, and stress-free.
            </p>
          </div>
          <div class="global:grid-column global:grid-column--6">
            ${Video({
              src: "https://www.youtube.com/embed/HA7uXbf7-uM?rel=0",
              title: "We buy houses in San Diego - Sell Your House for Cash",
            })}
          </div>
        </div>
        <!-- -->
        <div class="global:section global:section--color-alternate">
          <section class="global:container global:grid-row">
            <div class="global:grid-column global:grid-column--6">
              <img
                class="global:image global:image--landscape"
                lazy
                src="https://brotherlyloveproperties.com/wp-content/uploads/2022/06/sell-house-fast-for-cash-San-Diego.jpg"
                alt="Brotherly Love Real Estate"
              />
            </div>
            <div
              class="global:grid-column global:grid-column--6 global:flex-column"
            >
              <h2>How Much Cash Can I Get for My San Diego CA House?</h2>
              <p>
                There is a lot that goes into our offer price for a home in San
                Diego. The value of your home is determined by several factors.
                The San Diego
                <a
                  href="https://www.sandiegouniontribune.com/business/story/2022-12-12/san-diego-housing-market-2023"
                  target="_blank"
                  rel="noopener"
                  >housing market</a
                >
                has a variety of neighborhoods with different values. If you
                live near the San Diego Zoo or Petco Park, your property could
                be worth more than other areas. It all depends on the
                neighborhood! Our company will give you cash for your house in
                San Diego. However, we do consider several factors when
                calculating our cash offer. These real estate factors include:
              </p>
              <ul class="global:list">
                <li>Condition &amp; <strong>Location</strong> of the home</li>
                <li>
                  Type of residence (Single Family Home, Duplex, Triplex, or
                  <a
                    href="https://brotherlyloveproperties.com/sell-my-vacant-land-san-diego/"
                    target="_blank"
                    rel="noopener"
                    >Vacant Land</a
                  >)
                </li>
                <li>Number of bedrooms and bathrooms</li>
                <li>Square Footage of the House</li>
                <li>Age of the home &amp; amenities</li>
              </ul>
            </div>
          </section>
        </div>
        <!-- -->
      </div>
    </div>
  `;
}
