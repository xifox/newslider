
/**
 * Component dependencies
 */

var o = require('jquery');

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

function NewSlider(el){
  // TODO: uncomment
  // if (!(this instanceof NewSlider)) return new NewSlider;

  // DOM elements
  this.el = o(el);
  this.wrapper = this.el.children();


  // Add custom css classes
  this.el.addClass('newslider-viewport');
  this.wrapper.addClass('newslider-wrapper');
}

/**
 * Move to next slide
 */

  var x = 0;

/**
 * Move to next slide
 */

NewSlider.prototype.next = function(){
  if( x > -1600 ) {
    x = parseInt(x) - 400;
  }
  this.wrapper.css('left', x + 'px')
}

/**
 * Move to previous slide
 */

NewSlider.prototype.prev = function(){
  if (x < 0) {
    x = parseInt(x) + 400;
  }
  this.wrapper.css('left', x + 'px')
};

