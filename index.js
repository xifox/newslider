
/**
 * Component dependencies
 */

var o = require('jquery');
var debug = require('debug')('newslider');
var Emitter = require('emitter');
var inherit = require('inherit');

debug('booting %s');

/**
* Expose `NewSlider`
 */

module.exports = NewSlider;

/**
 * Expose `NewSlider`
 *
 * @param {String}jQuery} el
 * @param {Object} opts
 *
 * @api public
 */

function NewSlider(el, opts){
  opts = opts || {};

  this.opts = opts;

  // TODO: uncomment
  // if (!(this instanceof NewSlider)) return new NewSlider;

  Emitter.call(this);

  // DOM elements
  this.el = o(el);
  this.wrapper = this.el.children();
  this.slides = this.wrapper.children();

  // Add custom css classes
  this.el.addClass('newslider-viewport');
  this.wrapper.addClass('newslider-wrapper');

  this.calc();
  this.goto(0);
}

/**
 * Inherits from `Emmiter`.
 */

inherit(NewSlider, Emitter);

/**
 * Move to first slide
 */

NewSlider.prototype.first = function(){
  this.slides.eq(this.current).removeClass("currentslide");
  this.goto(0);
}


/**
 * Move to last slide
 */

NewSlider.prototype.last = function(){
  this.slides.eq(this.current).removeClass("currentslide");
  this.goto(this.slides.length - 1);
}

/**
 * Move to next slide
 */

NewSlider.prototype.next = function(){
  this.slides.eq(this.current).removeClass("currentslide");
  this.goto(this.current >= (this.slides.length - 1) ? 0 : this.current + 1);
}

/**
 * Move to previous slide
 */

NewSlider.prototype.prev = function(){
  this.slides.eq(this.current).removeClass("currentslide");
  this.goto((this.current <= 0 ? this.slides.length : this.current) - 1);
};

/**
 * Go to the given slide
 *
 * @param {Number} n
 * @api public
 */

NewSlider.prototype.goto = function(n){
  debug('goto slide %s', n);

  var self = this;
  var sl = this.slides.eq(n);
  var offx = parseInt(sl.position().left + sl.width() / 2 - this.dimms.viewport / 2);

  if (this.opts.animate) {
    this.wrapper.animate({ 'left': -offx }, function(){
      setCurrent(n);
    });
  } else {
    this.wrapper.css('left', -offx);
    setCurrent(n);
  }

  function setCurrent(n){
    self.current = n;
    self.slides.eq(n).addClass("currentslide");
    self.emit('change', n);
    debug('current slide: %s', self.current);
  };

  debug('offset: %s', offx);
};

/**
 * Calculate DOM elements dimms
 *
 * @api private
 */

NewSlider.prototype.calc = function(){
  this.dimms = {
    viewport: this.el.width(),
    wrapper: 0
  };

  // calc wrapper width
  for (var i = 0; i < this.slides.length; i++) {
    var sl = this.slides.eq(i);
    this.dimms.wrapper += sl.width();
  };

  // set wrapper width
  this.wrapper.width(this.dimms.wrapper);

  debug('viewport width: %s', this.dimms.viewport);
  debug('wrapper width: %s', this.dimms.wrapper);
};
