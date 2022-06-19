const slugify = require("slug");

slugify.extend({
  ء: "ء",
  آ: "آ",
  أ: "أ",
  ؤ: "ؤ",
  إ: "إ",
  ئ: "ئ",
  ا: "ا",
  ب: "ب",
  ة: "ة",
  ت: "ت",
  ث: "ث",
  ج: "ج",
  ح: "ح",
  خ: "خ",
  د: "د",
  ذ: "ذ",
  ر: "ر",
  ز: "ز",
  س: "س",
  ش: "ش",
  ص: "ص",
  ض: "ض",
  ط: "ط",
  ظ: "ظ",
  ع: "ع",
  غ: "غ",
  ف: "ف",
  ق: "ق",
  ك: "ك",
  ل: "ل",
  م: "م",
  ن: "ن",
  ه: "ه",
  و: "و",
  ى: "ى",
  ي: "ي",
  "ً": "",
  "ٌ": "",
  "ٍ": "",
  "َ": "",
  "ُ": "",
  "ِ": "",
  "ْ": "",
  پ: "پ",
  چ: "چ",
  ژ: "ژ",
  ک: "ک",
  گ: "گ",
  ی: "ی",
});

function customSlugify() {
  return {
    afterCreate: async (event) => {
      if (event.params.data.title) {
        try {
          const uid = event.model.uid;
          await strapi.db.query(uid).update({
            where: { id: event.result.id },
            data: {
              slug: event.result.id + "-" + slugify(event.params.data.title),
            },
          });
        } catch (error) {
          console.log("------->error", error);
        }
      }
    },
    beforeUpdate: async (event) => {
      if (event.params.data.title) {
        event.params.data.slug =
          event.params.where.id + "-" + slugify(event.params.data.title);
      }
    },
  };
}

exports.customSlugify = customSlugify;
