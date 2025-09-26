import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import Banner from "./quartz/components/banner"
import RightMenu from "./quartz/components/RightMenu"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    text: "© 2025 Rika Goldberg",
    links: {
      X: "https://x.com/RikaGoldberg",
      Newsletter: "https://paragraph.xyz/@sharingiscaring",
      Soundcloud: "https://soundcloud.com/rikagoldberg"
    },
  }),
}


// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Banner({ height: 250 }),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
  Component.ConditionalRender({
    component: Component.Graph(),
    condition: (page) => page.fileData.slug !== "index",
  }),
  Component.ConditionalRender({
    component: Component.Backlinks(),
    condition: (page) => page.fileData.slug !== "index",
  }),
  Component.TableOfContents(),  
  Component.RightMenu(), 
],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
