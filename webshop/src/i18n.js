import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin.maintain-categories": "Maintain categories",
      "admin.maintain-shops": "Maintain shops",
      "admin.add-product": "Add product",
      "admin.maintain-products": "Maintain products",

      "admin.supplier": "Our products supplier",
      "admin.book-supplier": "Our books supplier",

      "nav.admin": "Admin",
      "nav.shops": "Our shops",
      "nav.contact": "Contact us",
      "nav.cart": "To cart",
      "nav.login": "Login",
      "nav.signup": "Sign up",
    }
  },
  ee: {
    translation: {
      "admin.maintain-categories": "Halda kategooriaid",
      "admin.maintain-shops": "Halda poode",
      "admin.add-product": "Lisa toode",
      "admin.maintain-products": "Halda tooteid",

      "admin.supplier": "Meie toodete tarnija",
      "admin.book-supplier": "Meie raamatute tarnija",

      "nav.admin": "Admin",
      "nav.shops": "Meie poed",
      "nav.contact": "Kontakteeru",
      "nav.cart": "Ostukorvi",
      "nav.login": "Login",
      "nav.signup": "Registreeru",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;