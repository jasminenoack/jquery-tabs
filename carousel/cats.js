(function () {
  $.Carousel = function ($el) {
    this.$el = $el;
    this.$items = this.$el.find("li")

    this.activeIdx = 0;

    this.$el.find(".slide-left").on("click", function () {
      this.slideLeft();
    }.bind(this));
    this.$el.find(".slide-right").on("click", function () {
      this.slideRight();
    }.bind(this));
  };

  $.Carousel.prototype.slide = function (dir, classDir) {
    var carouselLength = this.$items.length
    this.$items.removeClass("active")

    // javascript is terrible so we have to do this ridiculous work around to make the modulo operator work appropriately.
    this.activeIdx = (this.activeIdx + dir + carouselLength) % carouselLength
    var right = (this.activeIdx + 1 + carouselLength) % carouselLength
    var left = (this.activeIdx -1 + carouselLength) % carouselLength

    this.$items.eq(this.activeIdx).addClass("active " + classDir);
    // this.$items.eq(left).addClass("left");
    // this.$items.eq(right).addClass("right");
    setTimeout( function () {
      // this.$items.eq(left).removeClass("left");
      // this.$items.eq(right).removeClass("right");
      this.$items.eq(this.activeIdx).removeClass(classDir);
    }.bind(this))
  }

  $.Carousel.prototype.slideLeft = function () {
    this.slide(-1, "left");
  };

  $.Carousel.prototype.slideRight = function () {
    this.slide(1, "right");
  };


})()
