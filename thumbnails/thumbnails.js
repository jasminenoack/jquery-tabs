;(function () {

$.Thumbnails = function ($el) {
  this.$el = $el;
  this.$activeImg = $($el.find(".active"));
  this.bindClick();
  this.bindMouse();
};

$.Thumbnails.prototype.activate = function ($selectedImg, setActive) {
  this.$el.find("li").removeClass("active");
  if (setActive) {
    this.$activeImg = $selectedImg;
  }

  $selectedImg.addClass("active");
};

$.Thumbnails.prototype.bindClick = function () {
  var thumbnails = this;

  this.$el.find(".thumbnails").on("click", "li", function (event) {
    var $selectedImg = thumbnails.findSelectedImg($(this))

    thumbnails.activate($selectedImg, true);
  });
};

$.Thumbnails.prototype.bindMouse = function () {
  var thumbnails = this;

  this.$el.find(".thumbnails").on("mouseenter", "li", function (event) {
    var $selectedImg = thumbnails.findSelectedImg($(this))

    thumbnails.activate($selectedImg, false);
  });

  this.$el.find(".thumbnails").on("mouseleave", "li", function (event) {
    thumbnails.activate(thumbnails.$activeImg, false);
  });

}

$.Thumbnails.prototype.findSelectedImg = function ($li) {
  var activeIdx = $li.index();
  return this.$el.find(".bigimages li").eq(activeIdx);
}




})();
