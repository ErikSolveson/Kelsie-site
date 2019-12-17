import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Kelsie from "../images/kelsie.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
        <h2>Professional Stuff</h2>
        <img class="profile-img" src={Kelsie} alt="Classic Kelse" />

         {/*-- Job 1 Details */}
        <h3>Summary</h3>
        <p>Energetic, creative, self-motivated individual with a passion for winemaking.  Outgoing, team player with excellent interpersonal skills allowing for successful interactions with customers in varying situations.  Interacts easily with people of diverse backgrounds, cultures, and professions.  Possesses effective speaking and listening skills as well as outstanding verbal and written communication skills.  Works well with others and is able to complete tasks with little or no supervision.</p>

         {/*-- Job 2 Details */}
        <h2>Experience</h2>
        <p>Ladies Learning Code</p>
        <p>July 2014 - February 2016</p>

        <p>Created and managed all curriculum and instructor training for 20+ Canadian chapters. Responsible for all tech related duties.</p>
        <p>Key contributions:</p>
        <ul>
            <li>Created 9 new workshops focusing on HTML, CSS, JavaScript, jQuery, Wordpress and Responsive Web Design.</li>
            <li>Created all Hackapalooza content (2 day conference style event), consisting of 2-4 hour workshop sessions focused on front-end coding languages and web development related topics.</li>
            <li>Lead instructor and created curriculum for the Digital Skills part-time program.</li>
            <li>Provided training for all instructors, in all Canadian chapters, focusing on creating an inclusive and engaging learning environment.</li>
            <li>Maintained the ladieslearningcode.com website.</li>
            <li>Created interactive slide deck template for consistent national workshop branding.</li>
            <li>Volunteer lead instructor from 2011-2014 for Toronto workshops and several chapter launches.</li>
        </ul>

         {/*-- Job 3 Details */}
        <h3>Lead Front-End Developer</h3>
        <p>Field ID</p>
        <p>March 2013 - February 2014</p>

        <p>Lead the front-end development for in-house safety inspection software.</p>
        <p>Key contributions:</p>
        <ul>
            <li>Responsible for setting code standards for the front-end development.</li>
            <li>Created a fully customized front-end framework, including UI/UX.</li>
            <li>Standardized the site architecture and design. The framework contains reusable components and extensible classes for customization and flexibility.</li>
        </ul>

        <p>See my complete work history on <a href="https://www.linkedin.com/in/christinatruong/" target="_blank">LinkedIn</a>.</p>
    </section>


    {/* --  Education */}
    <section>
        <h2>Education</h2>

         {/*-- School 1 details. */}
        <h3>Seneca College - Toronto, ON</h3>
        <p>Webmaster Content Site Design Certificate, 2006</p>
        <p>14 week full-time program.</p>

         {/*-- School 2 details. */}
        <h3>York University - Toronto, ON</h3>
        <p>Bachelor of Arts, 2001-2005</p>
        <p>Double Major in Communications & Psychology.</p>

         {/*-- School 3 details. */}
        <h3>San Jose State University - San Jose, CA</h3>
        <p>General Studies, 2000</p>
        <p>First year general studies.</p>
    </section>
  </Layout>
)

export default IndexPage
