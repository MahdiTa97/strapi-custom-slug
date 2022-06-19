import AuthLogo from "./extensions/32x32.png";
import MenuLogo from "./extensions/32x32.png";
import favicon from "./extensions/32x32.png";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ["en", "ar"],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
    // Extend the translations
    translations: {
      fr: {
        "Auth.form.email.label": "test",
        Users: "Utilisateurs",
        City: "CITY (FRENCH)",
        // Customize the label of the Content Manager table.
        Id: "ID french",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {
    console.log(app);
  },
};
