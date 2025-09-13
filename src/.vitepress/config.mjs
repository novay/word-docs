import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'en-US',
  title: "WordTemplate",
  tagline: "Dokumentasi resmi untuk package Laravel Word Document Generator.",
  base: "/",
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/'
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id-ID',
      link: '/id/'
    }
  }, 
  themeConfig: {
    nav: [
      { text: "Guide", link: "/getting-started" },
      { text: "API", link: "/cheat-sheet" },
      { text: "Changelog", link: "/changelog" },
      { text: "GitHub", link: "https://github.com/novay/laravel-word-template" }
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/getting-started" },
          { text: "Installation", link: "/installation" },
          { text: "Configuration", link: "/configuration" },
          { text: "Quick Start", link: "/quick-start" }
        ]
      },
      {
        text: "Template Mode",
        collapsed: false,
        items: [
          { text: "Load Template", link: "/template/load" },
          { text: "Replace Values", link: "/template/replace" },
          { text: "Looping Data", link: "/template/looping" },
          { text: "Insert Images", link: "/template/images" }
        ]
      },
      {
        text: "Builder Mode",
        collapsed: false,
        items: [
          { text: "Create Document", link: "/builder/create" },
          // { text: "Headings & Paragraphs", link: "/builder/text" },
          // { text: "Style & Formatting", link: "/builder/style" },
          // { text: "Tables", link: "/builder/table" },
          // { text: "Images", link: "/builder/images" },
          // { text: "Charts", link: "/builder/charts" },
          // { text: "Headers & Footers", link: "/builder/header-footer" }
        ]
      },
      {
        text: "Export & Output",
        collapsed: false,
        items: [
          { text: "Save & Export", link: "/export/save" },
          { text: "Download", link: "/export/download" }, 
          // { text: "Multi-Format", link: "/export/multi-format" }, 
          // { text: "As Collection", link: "/export/as-collection" }
        ]
      },
      {
        text: "Advanced",
        collapsed: true,
        items: [
          { text: "Merge Documents (Beta)", link: "/advanced/merge" },
          { text: "Watermark (Alpha)", link: "/advanced/watermark" },
          { text: "Digital Signature (Alpha)", link: "/advanced/signature" },
          // { text: "Automation", link: "/advanced/automation" }
        ]
      },
      {
        text: "Cheat Sheet",
        link: "/cheat-sheet"
      },
      {
        text: "Changelog",
        link: "/changelog"
      },
      {
        text: "License",
        link: "/license"
      }
    ], 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/novay' }
    ], 
    editLink: {
      pattern: "https://github.com/novay/word-docs/edit/main/docs/:path",
      text: "Edit halaman ini di GitHub"
    }
  }
})
