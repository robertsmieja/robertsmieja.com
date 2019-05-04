import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PresentationsPage: React.FC = () => (
  <Layout>
    <SEO
      title="Presentations"
      keywords={[`presentations`, `robertsmieja`, `robert`, `smieja`]}
    />
    <div>
      <h4>Presentations</h4>
      <p>
        I&apos;ve created a number of presentations for various frameworks and
        technologies during my lifetime as a Software Engineer. I&apos;ve listed
        them below in the hopes that you will find them useful.
      </p>
      <ul>
        <li>2019</li>
        <ul>
          <li>
            <a href="https://drive.google.com/open?id=1UtHVimNzWgHmKRO9C2p_tGpXTb1IZIvhbr6KdOPHSPE">
              JHipster
            </a>
          </li>
        </ul>
        <li>2018</li>
        <ul>
          <li>
            <a href="https://drive.google.com/open?id=1F858H6PNqXatZ0TgAZJi0u7udhE77jYj_SGOb1ZbrNQ">
              Hystrix
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/open?id=1z_0CFzrrYdD4OGiWn_ue3ev2Tb7Hmklnk76mp7mC-Zo">
              Spring Cloud
            </a>
          </li>
        </ul>
        <li>2017</li>
        <ul>
          <li>
            <a href="https://drive.google.com/open?id=16jnaqvufQd43odXG8TmrdweUpRGJxjBwpEywuZI9KOU">
              ANTLR4 - NEJUG Edition
            </a>{" "}
            (<a href="https://vimeo.com/199478127">Video Recording</a>)
          </li>
        </ul>
        <li>2016</li>
        <ul>
          <li>
            <a href="https://drive.google.com/open?id=1jif18rAMUMmpZa5JuWM4BOxgNdV9g2H5jU3CZHOzWXM">
              ANTLR4
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/open?id=1nqVxyn2qz9HJB9PyvFbJNJ0BvplgB5skptgC7niGz40">
              Java Classloader
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/open?id=1_sZ-URrqY7B90I_ImvmIsLDA0t4k-NuJfSqHsJS4724">
              Java Persistance API Overview
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/open?id=1fWIGVNfDkyNYgz1ExBUulds_OnUCaMk2dshzPD972gM">
              Git Overview
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/open?id=10-LJWRSkSUh3GzioqF2MEUQHjm4zKx4yYDlX5rhMI-Q">
              Grails 2.1 Unit Testing
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/open?id=13hhP4uQXJu2HktC_PX_TXwmzy2WsjRoYNdix4UYdp70">
              Grails 2.5 Unit Testing
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/open?id=1d4KLTHiFEZlRN0YmDUs7aT2bHVATpxGKQb0OOgk2jrA">
              Spring Boot Intro
            </a>
          </li>
        </ul>
      </ul>
    </div>
  </Layout>
)

export default PresentationsPage
