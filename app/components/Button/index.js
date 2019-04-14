import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './theme';

const button = ({ styles, disabled, clicked, size, theme, children }) => {

  return (
    <Button
      style={styles}
      disabled={disabled}
      type="button"
      className={['Button', theme ? `Button--${theme}` : '', size ? `Button--${size}` : ''].join(' ')}
      onClick={clicked}>
      { children }
    </Button>
  )
};

button.propTypes = {
	children: PropTypes.node,
	styles: PropTypes.object,
	disabled: PropTypes.bool,
	clicked: PropTypes.func.isRequired,
	size: PropTypes.string,
	theme: PropTypes.string,
}

export default button;
