import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const Head: React.FC = () => (
  <SEO
    title="Presentations"
    keywords={[`presentations`, `robertsmieja`, `robert`, `smieja`]}
  />
)

const PresentationsPage: React.FC = () => (
  <Layout>
    <div>
      <h4>Presentations</h4>
      <p>
        I&apos;ve created a number of presentations for various frameworks and
        technologies during my lifetime as a Software Engineer. I&apos;ve listed
        them below in the hopes that you will find them useful.
      </p>
      <ul>
        <li>
          2019
          <ul>
            <li>
              <a
                href="https://drive.google.com/open?id=1UtHVimNzWgHmKRO9C2p_tGpXTb1IZIvhbr6KdOPHSPE"
                target="_blank"
                rel="noopener noreferrer"
              >
                JHipster
              </a>
            </li>
          </ul>
        </li>
        <li>
          2018
          <ul>
            <li>
              <a
                href="https://drive.google.com/open?id=1F858H6PNqXatZ0TgAZJi0u7udhE77jYj_SGOb1ZbrNQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hystrix
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/open?id=1z_0CFzrrYdD4OGiWn_ue3ev2Tb7Hmklnk76mp7mC-Zo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spring Cloud
              </a>
            </li>
          </ul>
        </li>
        <li>
          2017
          <ul>
            <li>
              <a
                href="https://drive.google.com/open?id=16jnaqvufQd43odXG8TmrdweUpRGJxjBwpEywuZI9KOU"
                target="_blank"
                rel="noopener noreferrer"
              >
                ANTLR4 - NEJUG Edition
              </a>{" "}
              <a
                href="https://vimeo.com/199478127"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Video Recording)
              </a>
            </li>
          </ul>
        </li>
        <li>
          2016
          <ul>
            <li>
              <a
                href="https://drive.google.com/open?id=1jif18rAMUMmpZa5JuWM4BOxgNdV9g2H5jU3CZHOzWXM"
                target="_blank"
                rel="noopener noreferrer"
              >
                ANTLR4
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/open?id=1nqVxyn2qz9HJB9PyvFbJNJ0BvplgB5skptgC7niGz40"
                target="_blank"
                rel="noopener noreferrer"
              >
                Java Classloader
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/open?id=1_sZ-URrqY7B90I_ImvmIsLDA0t4k-NuJfSqHsJS4724"
                target="_blank"
                rel="noopener noreferrer"
              >
                Java Persistance API Overview
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/open?id=1fWIGVNfDkyNYgz1ExBUulds_OnUCaMk2dshzPD972gM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Overview
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/open?id=10-LJWRSkSUh3GzioqF2MEUQHjm4zKx4yYDlX5rhMI-Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grails 2.1 Unit Testing
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/open?id=13hhP4uQXJu2HktC_PX_TXwmzy2WsjRoYNdix4UYdp70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grails 2.5 Unit Testing
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/open?id=1d4KLTHiFEZlRN0YmDUs7aT2bHVATpxGKQb0OOgk2jrA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spring Boot Intro
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Layout>
)

export default PresentationsPage
