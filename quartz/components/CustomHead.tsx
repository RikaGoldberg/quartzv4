CustomHead.tsx

import { QuartzComponent, QuartzComponentConstructor } from "./types"

const CustomHead: QuartzComponent = () => {
  return (
    <>
      <script src="/hero-motion.js" defer></script>
    </>
  )
}

export default (() => CustomHead) satisfies QuartzComponentConstructor