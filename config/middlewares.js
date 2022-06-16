module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  {
    name: "strapi::poweredBy",
    config: {
      poweredBy: "Sportmob.com",
    },
  },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  {
    name: "strapi::favicon",
    config: {
      path: "./public/uploads/favicon/16x16.png",
    },
  },
  "strapi::public",
];
