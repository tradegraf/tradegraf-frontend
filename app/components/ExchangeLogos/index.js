import React from 'react';
import PropTypes from 'prop-types';
import { Bnb } from '@styled-icons/crypto/Bnb';

export const BinanceLogo = ({ size, color }) => <Bnb size={size} color={color} />;

BinanceLogo.defaultProps = {
	size: 32,
	color: '#f0b90d',
};

BinanceLogo.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
};
