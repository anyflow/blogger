import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd61685815dd94b88a25ce7ce202164cd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "anyflow's blog",
  domain: 'blog.anyflow.net',
  author: 'Hyunjeong Park',


  // open graph metadata (optional)
  description: "anyflow's blog",

  // social usernames (optional)
  twitter: 'hjanyflow',
  github: 'anyflow',
  linkedin: 'anyflow',
  youtube: 'channel/UC0upJ_e63Eq3_AfJ4Vw0FGw',
  // newsletter: '#', // optional newsletter URL


  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'All posts by category',
      pageId: 'f87287a331304374b5ecf67cba50e0ac',
    },
    {
      title: 'All posts by category',
      pageId: 'f87287a331304374b5ecf67cba50e0ac',
      menuPage: true,
    },
  ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy.MM.dd',

  // post page - hidden properties
  hiddenPostProperties: ['Status'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: true,
});
