import { QuartzTransformerPlugin } from "../types"
window.__HERO_MOTION_LOADED = true;
console.log("[hero-motion] running ✅");

export const HeroMotion: QuartzTransformerPlugin = () => ({
  name: "HeroMotion",
  externalResources() {
    return {
      js: [
        {
          src: "/static/hero-motion.js?v=1",
          loadTime: "afterDOMReady",
          contentType: "external",
        },
      ],
    }
  },
})