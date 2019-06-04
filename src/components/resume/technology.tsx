import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Databases from "./technology/databases"
import Frameworks from "./technology/frameworks"
import OperatingSystems from "./technology/operatingSystems"
import ProgramingLanguages from "./technology/programmingLanguages"

const Technology = () => (
  <div id="technology">
    <h2>
      <FontAwesomeIcon icon={faCode} /> Technologies
    </h2>
    <Databases />
    <Frameworks />
    <OperatingSystems />
    <ProgramingLanguages />
  </div>
)

export default Technology
