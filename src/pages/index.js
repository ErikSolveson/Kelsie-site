import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Kelsie from "../images/kelsie-adorable.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="summary">
        <h2>Professional Summary</h2>
        <img class="profile-img" src={Kelsie} alt="Classic Kelse" />
  {/*Summary*/}
        <h3>Summary</h3>
        <p>Energetic, creative, self-motivated individual with a passion for winemaking.  Outgoing, team player with excellent interpersonal skills allowing for successful interactions with customers in varying situations.  Interacts easily with people of diverse backgrounds, cultures, and professions.  Possesses effective speaking and listening skills as well as outstanding verbal and written communication skills.  Works well with others and is able to complete tasks with little or no supervision.</p>
    </section>
    <section class="content-wrap">
  {/*Job Details*/}
        <h2>Skills</h2>
        <ul>
            <li>Pruning; cane pruned vines in the winter</li>
            <li>Harvest experience; harvested red and white varieties in a vineyard</li>
            <li>Marketing; advertised companies and studied marketing in college</li>
            <li>Customer relations; worked and communicated with customers</li>
        </ul>
    </section>
    <div class="banner">

    </div>
    <section>
  {/*Experience*/}
      <h2>Experience</h2>
      <div class="row-1">
        <div class="column">
          <h3>Vineyard Worker</h3>
          <p>February 2018-present</p>
          <p class="bold">Wawawai Vineyard and Winery</p>
        </div>
        <div class="column">
            <ul>
              <li>Observed vines to determine those in need of pruning</li>
              <li>Performed Cane pruning</li>
              <li>Installed new trellis, adjusted or repaired existing trellis</li>
              <li>Assisted with establishing new vines</li>
              <li>Harvested multiple varieties of red and white grapes</li>
            </ul>
          </div>
      </div>
      <div class="row-1">
        <div class="column">
        <h3>Secretary</h3>
        <p>May 2017-present</p>
        <p class="bold">WSU Viticulture and Enology Club </p>
        </div>
          <div class="column">
            <ul>
                <li>Recorded meeting notes</li>
                <li>Assisted other officers</li>
                <li>Coordinated field trips and enology related activities</li>
                <li>Planned fundraising events</li>
            </ul>
          </div>
        </div>
        <div class="row-1">
          <div class="column">
        <h3>Sales and Marketing Representative</h3>
        <p>June 2015-August 2015</p>
        <p class="bold">Margaritaville Marketing</p>
        </div>
          <div class="column">
        <ul>
            <li>Assisted in launch of new location</li>
            <li>Solicited prospective customers</li>
            <li>Advertised business to locals and tourists</li>
            <li>Implemented a coupon campaign and oversaw distribution</li>
        </ul>
      </div>
    </div>
    </section>
    {/*Education*/}
    <section>
        <h2 class="education">Education</h2>
         {/*School 1 details*/}
        <h3>Bachelor of Science, Viticulture and Enology</h3>
        <p>Washington State University, 2019</p>
        <p>14 week full-time program.</p>
    </section>
  </Layout>
)

export default IndexPage
