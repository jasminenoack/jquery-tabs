;(function () {

$.Tabs = function (el) {
  this.$el          = $(el);
  this.$contentTabs = $(this.$el.data("content-tabs"));
  this.$activeTab   = $(this.$contentTabs.find(".active"));

  this.$el.on("click", "a", $.Tabs.clickTab.bind(this));
};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

$.Tabs.clickTab = function (event) {
  event.preventDefault();

  this.$activeTab.removeClass("active");
  this.$activeTab = $($(event.currentTarget).attr("href"));
  this.$activeTab.addClass("active");
};

})();
