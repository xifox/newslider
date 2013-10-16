
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

function NewSlider(el, opts){
  // TODO: uncomment
  // if (!(this instanceof NewSlider)) return new NewSlider;

  // DOM elements
  this.el = o(el);

  // Add custom css classes
  this.el.addClass('newslider-viewport');

  this.wrapper = this.el.children();
  this.wrapper.addClass('newslider-wrapper')
}

/**
 * Move to next slide
 */

NewSlider.prototype.next = function(){
  console.log('move to next');
  console.log('-> this.el -> ', this.el);
};
