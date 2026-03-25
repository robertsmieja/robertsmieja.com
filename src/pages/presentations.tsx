import React from "react"
import Layout from "../components/layout"
import ExternalLink from "../components/externalLink"
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
              <ExternalLink
                href="https://drive.google.com/open?id=1UtHVimNzWgHmKRO9C2p_tGpXTb1IZIvhbr6KdOPHSPE"
                ariaLabel="JHipster presentation (opens in a new tab)"
              >
                JHipster
              </ExternalLink>
            </li>
          </ul>
        </li>
        <li>
          2018
          <ul>
            <li>
              <ExternalLink
                href="https://drive.google.com/open?id=1F858H6PNqXatZ0TgAZJi0u7udhE77jYj_SGOb1ZbrNQ"
                ariaLabel="Hystrix presentation (opens in a new tab)"
              >
                Hystrix
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://drive.google.com/open?id=1z_0CFzrrYdD4OGiWn_ue3ev2Tb7Hmklnk76mp7mC-Zo"
                ariaLabel="Spring Cloud presentation (opens in a new tab)"
              >
                Spring Cloud
              </ExternalLink>
            </li>
          </ul>
        </li>
        <li>
          2017
          <ul>
            <li>
              <ExternalLink
                href="https://drive.google.com/open?id=16jnaqvufQd43odXG8TmrdweUpRGJxjBwpEywuZI9KOU"
                ariaLabel="ANTLR4 - NEJUG Edition presentation (opens in a new tab)"
              >
                ANTLR4 - NEJUG Edition
              </ExternalLink>{" "}
              <ExternalLink
                href="https://vimeo.com/199478127"
                ariaLabel="Video Recording (opens in a new tab)"
              >
                (Video Recording)
              </ExternalLink>
            </li>
          </ul>
        </li>
        <li>
          2016
          <ul>
            <li>
              <ExternalLink
                href="https://drive.google.com/open?id=1jif18rAMUMmpZa5JuWM4BOxgNdV9g2H5jU3CZHOzWXM"
                ariaLabel="ANTLR4 presentation (opens in a new tab)"
              >
                ANTLR4
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://drive.google.com/open?id=1nqVxyn2qz9HJB9PyvFbJNJ0BvplgB5skptgC7niGz40"
                ariaLabel="Java Classloader presentation (opens in a new tab)"
              >
                Java Classloader
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://drive.google.com/open?id=1_sZ-URrqY7B90I_ImvmIsLDA0t4k-NuJfSqHsJS4724"
                ariaLabel="Java Persistance API Overview presentation (opens in a new tab)"
              >
                Java Persistance API Overview
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://drive.google.com/open?id=1fWIGVNfDkyNYgz1ExBUulds_OnUCaMk2dshzPD972gM"
                ariaLabel="Git Overview presentation (opens in a new tab)"
              >
                Git Overview
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://drive.google.com/open?id=10-LJWRSkSUh3GzioqF2MEUQHjm4zKx4yYDlX5rhMI-Q"
                ariaLabel="Grails 2.1 Unit Testing presentation (opens in a new tab)"
              >
                Grails 2.1 Unit Testing
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://drive.google.com/open?id=13hhP4uQXJu2HktC_PX_TXwmzy2WsjRoYNdix4UYdp70"
                ariaLabel="Grails 2.5 Unit Testing presentation (opens in a new tab)"
              >
                Grails 2.5 Unit Testing
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://drive.google.com/open?id=1d4KLTHiFEZlRN0YmDUs7aT2bHVATpxGKQb0OOgk2jrA"
                ariaLabel="Spring Boot Intro presentation (opens in a new tab)"
              >
                Spring Boot Intro
              </ExternalLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Layout>
)

export default PresentationsPage
