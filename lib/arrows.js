'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import classnames from 'classnames';

export var PrevArrow = React.createClass({
  displayName: 'PrevArrow',


  clickHandler: function (options, e) {
    e.preventDefault();
    this.props.clickHandler(options, e);
  },
  render: function () {
    var prevClasses = { 'slick-prev': true };
    var prevHandler = this.clickHandler.bind(this, { message: 'previous' });

    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
      prevClasses['slick-disabled'] = true;
      prevHandler = null;
    }

    var prevArrowProps = {
      key: '0',
      'data-role': 'none',
      className: classnames(prevClasses),
      style: { display: 'block' },
      onClick: prevHandler
    };
    var prevArrow;

    if (this.props.prevArrow) {
      prevArrow = React.createElement(this.props.prevArrow, prevArrowProps);
    } else {
      prevArrow = React.createElement(
        'button',
        _extends({ key: '0', type: 'button' }, prevArrowProps),
        ' Previous'
      );
    }

    return prevArrow;
  }
});

export var NextArrow = React.createClass({
  displayName: 'NextArrow',

  clickHandler: function (options, e) {
    e.preventDefault();
    this.props.clickHandler(options, e);
  },
  render: function () {
    var nextClasses = { 'slick-next': true };
    var nextHandler = this.clickHandler.bind(this, { message: 'next' });

    if (!this.props.infinite) {
      if (this.props.centerMode && this.props.currentSlide >= this.props.slideCount - 1) {
        nextClasses['slick-disabled'] = true;
        nextHandler = null;
      } else {
        if (this.props.currentSlide >= this.props.slideCount - this.props.slidesToShow) {
          nextClasses['slick-disabled'] = true;
          nextHandler = null;
        }
      }

      if (this.props.slideCount <= this.props.slidesToShow) {
        nextClasses['slick-disabled'] = true;
        nextHandler = null;
      }
    }

    var nextArrowProps = {
      key: '1',
      'data-role': 'none',
      className: classnames(nextClasses),
      style: { display: 'block' },
      onClick: nextHandler
    };

    var nextArrow;

    if (this.props.nextArrow) {
      nextArrow = React.createElement(this.props.nextArrow, nextArrowProps);
    } else {
      nextArrow = React.createElement(
        'button',
        _extends({ key: '1', type: 'button' }, nextArrowProps),
        ' Next'
      );
    }

    return nextArrow;
  }
});