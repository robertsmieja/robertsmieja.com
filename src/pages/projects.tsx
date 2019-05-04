import React from "react"
import Layout from "../components/layout"
import ProjectEntry from "../components/projects/projectEntry"
import SEO from "../components/seo"

const ProjectsPage: React.FC = () => (
  <Layout>
    <SEO
      title="Projects"
      keywords={[`projects`, `robertsmieja`, `robert`, `smieja`]}
    />
    <div>
      <h4>Projects</h4>
      <p>
        I program in my free-time on various personal projects, with the goal of
        keeping myself up-to-date with the latest technologies and release the
        source code, to help other developers.
      </p>
      <p>
        Here some of the projects I&apos;d like to highlight. The rest of them
        are available on my personal GitHub page.
      </p>
      <ul>
        <ProjectEntry
          year="2019"
          link="https://github.com/robertsmieja/robertsmieja.com/"
          title="robertsmieja.com"
        >
          This website provides me an opportunity to demo my skills related to
          Front-End development, React, and TypeScript/JavaScript
        </ProjectEntry>
        <ProjectEntry
          year="2017"
          link="https://github.com/robertsmieja/java-test-utils"
          title="Java Test Utils"
        >
          JUnit 5 Extension back before JUnit 5 was released, utilizing new Java
          8 interface features and reflection to automatic test Getters and
          Setters, hashCode(), equals(), etc. I would recommend using a tool
          such as <a href="https://projectlombok.org/">Lombok</a> to generate
          &rdquo;data&ldquo; methods instead.
        </ProjectEntry>
        <ProjectEntry
          year="2017"
          link="https://github.com/robertsmieja/ANTLR4-Packet-Parser/"
          title="ANTLR4 Packet Parser"
        >
          This project demonstrates the flexibility of ANTLR4, and it&apos;s
          ability to even parse out binary format files.
        </ProjectEntry>
        <ProjectEntry
          year="2014"
          link="https://github.com/robertsmieja/UE4-Maze/"
          title="UE4-Maze"
        >
          The end result of a tutorial for procedurally generating a maze in
          Unreal Engine 4.4.
        </ProjectEntry>
        <ProjectEntry
          year="2013"
          link="https://github.com/robertsmieja/Gw2InfoViewer/"
          title="Gw2InfoViewer"
        >
          {`Java 7 Swing application to visualize a JSON API End-Point for the
          game "Guild Wars 2", created when I was still in college. This no
          longer works and is out-dated.`}
        </ProjectEntry>
      </ul>
    </div>
  </Layout>
)

export default ProjectsPage
