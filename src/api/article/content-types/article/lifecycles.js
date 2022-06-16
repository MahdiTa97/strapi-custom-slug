const slugify = require("slug");

module.exports = {
  async beforeCreate(event) {
    if (event.params.data.title) {
      event.params.data.slug = slugify(event.params.data.title, {
        lower: true,
      });
      console.log("===========>beforeCreate", event.params.data);
    }
  },
  async beforeUpdate(event) {
    if (event.params.data.title) {
      event.params.data.slug = slugify(event.params.data.title, {
        lower: true,
      });
      console.log("===========>beforeUpdate", event.params.data);
    }
  },
};
