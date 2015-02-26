;(function () {

$.Tabs = function (el) {
  this.$el          = $(el);
  this.$contentTabs = $(this.$el.data("content-tabs"));
  this.$activeTab   = $(this.$contentTabs.find(".active"));

  this.$el.on("click", "a", this.clickTab.bind(this));
};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

$.Tabs.prototype.clickTab = function (event) {
  event.preventDefault();
  this.$el.find("a").removeClass("active");
  $(event.currentTarget).addClass("active");

  this.$activeTab.removeClass("active").addClass("transitioning");

  this.$activeTab.one("transitionend", function () {
    this.$activeTab.removeClass("transitioning");

    // this.$activeTab = $();
    this.$activeTab = this.$contentTabs.find($(event.currentTarget).attr("href"));
    this.$activeTab.addClass("active transitioning");
    setTimeout(function () {
      this.removeClass("transitioning")
    }.bind(this.$activeTab), 0);
  }.bind(this));
};

})();
