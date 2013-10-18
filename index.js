
/**
 * Component dependencies
 */

var o = require('jquery');
var debug = require('debug')('newslider');

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

  // DOM elements
  this.el = o(el);
  this.wrapper = this.el.children();
  this.slides = this.wrapper.children();

  // Add custom css classes
  this.el.addClass('newslider-viewport');
  this.wrapper.addClass('newslider-wrapper');

  this.current = 0;

  this.calc();
}

/**
 * Move to next slide
 */


NewSlider.prototype.next = function(){
  this.goto(this.current >= (this.slides.length - 1) ? 0 : this.current + 1);
}

/**
 * Move to previous slide
 */

NewSlider.prototype.prev = function(){
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
  var offx = parseInt(sl.position().left + sl.outerWidth() / 2 - this.dimms.viewport / 2);

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
    viewport: this.el.outerWidth(),
    wrapper: 0
  };

  // calc wrapper width
  for (var i = 0; i < this.slides.length; i++) {
    var sl = this.slides.eq(i);
    this.dimms.wrapper += sl.outerWidth();
  };

  // set wrapper width
  this.wrapper.outerWidth(this.dimms.wrapper);

  debug('viewport width: %s', this.dimms.viewport);
  debug('wrapper width: %s', this.dimms.wrapper);
};
