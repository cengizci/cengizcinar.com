export const SITE = {
  website: "https://cengizcinar.com/",
  author: "Cengiz Cinar",
  profile: "https://cengizcinar.com/about/",
  desc: "Software Developer",
  title: "Cengiz Cinar",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Europe/Berlin",
} as const;
