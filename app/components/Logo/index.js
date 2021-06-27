import React from 'react';
import PropTypes from 'prop-types';

import LogoImage from '@app/assets/images/logo/tradegraf-white.svg';
import styles from './styles/Logo.module.css';

export default function Logo({ size, className }) {
	const sizes = {
		small: {
			width: '6rem',
			height: '1.625rem',
		},
		medium: {
			width: '7rem',
			height: '1.9rem',
		},
		large: {
			width: '8rem',
			height: '2.15rem',
		},
	};

	const logoSize = Object.keys(sizes).some((sizeOptions) => sizeOptions === size)
		? sizes[size]
		: sizes.medium;

	return className ? (
		<div className={className}>
			<LogoImage
				alt="Tradegraf Logo"
				width={logoSize.width}
				height={logoSize.height}
				className={styles.logo}
			/>
		</div>
	) : (
		<LogoImage
			alt="Tradegraf Logo"
			width={logoSize.width}
			height={logoSize.height}
			className={styles.logo}
		/>
	);
}

Logo.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	className: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
};
