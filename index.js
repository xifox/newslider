
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
  console.log('move to next');
  x = parseInt(x) - 200;
  console.log(x);
  this.wrapper.css('left', x + 'px')
  //console.log('-> this.el -> ', nextslide);
}

/**
 * Move to previous slide
 */

NewSlider.prototype.prev = function(){
  console.log('move to previuos');
  x = parseInt(x) + 200;
  console.log(x);
  this.wrapper.css('left', x + 'px')
  //console.log('-> this.el -> ', this.wrapper);
};

