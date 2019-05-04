const isBrowserAvailable = (): boolean =>
  (typeof window !== "undefined" && window) as boolean

export default isBrowserAvailable
