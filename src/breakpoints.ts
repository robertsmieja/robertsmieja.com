import facepaint from "facepaint"

export const small = "640px"
export const medium = "768px"
export const high = "1024px"
export const large = "1280px"
export const breakpoints = [small, medium, high, large]

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp})`)
)
