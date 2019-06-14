import React from "react"

import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO
      title="Projects"
      keywords={[`projects`, `robertsmieja`, `robert`, `smieja`]}
    />
    <Container>
      <p className="display-4">Projects</p>
      <p>
        I program in my free-time on various personal projects, with the goal of
        keeping myself up-to-date with the latest technologies and release the
        source code, to help other developers.
      </p>
      <p>
        Here some of the projects I'd like to highlight. The rest of them are
        available on my personal GitHub page.
      </p>
      <ul>
        <li>
          2019 -{" "}
          <a href="https://github.com/robertsmieja/robertsmieja.com/">
            robertsmieja.com
          </a>{" "}
          - This website provides me an opportunity to demo my skills related to
          Front-End development, React, and TypeScript/JavaScript
        </li>

        <li>
          2017 -{" "}
          <a href="https://github.com/robertsmieja/java-test-utils/">
            Java Test Utils
          </a>{" "}
          - JUnit 5 Extension back before JUnit 5 was released, utilizing new
          Java 8 interface features and reflection to automatic test Getters and
          Setters, hashCode(), equals(), etc. I would recommend using a tool
          such as <a href="https://projectlombok.org/">Lombok</a> to generate
          "data" methods instead.
        </li>

        <li>
          2017 -{" "}
          <a href="https://github.com/robertsmieja/ANTLR4-Packet-Parser/">
            ANTLR4 Packet Parser
          </a>{" "}
          - This project demonstrates the flexibility of ANTLR4, and it's
          ability to even parse out binary format files.
        </li>

        <li>
          2014 -{" "}
          <a href="https://github.com/robertsmieja/UE4-Maze/">UE4-Maze</a> - The
          end result of a tutorial for procedurally generating a maze in Unreal
          Engine 4.4.
        </li>

        <li>
          2013 -{" "}
          <a href="https://github.com/robertsmieja/Gw2InfoViewer/">
            Gw2InfoViewer
          </a>{" "}
          - Java 7 Swing application to visualize a JSON API End-Point for the
          game "Guild Wars 2", created when I was still in college. This no
          longer works and is out-dated.
        </li>
      </ul>
    </Container>
  </Layout>
)

export default ProjectsPage
