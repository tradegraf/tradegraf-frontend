import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import styles from './styles/Logo.module.css';

// const LogoWhite = lazy(() => import('@app/assets/images/logo/tradegraf-white.svg'));
const LogoBlack = lazy(() => import('@app/assets/images/logo/tradegraf-black.svg'));

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

	const logoSize = Object.keys(sizes).includes(size) ? sizes[size] : sizes.medium;

	return (
		<Suspense fallback={<Spin />}>
			{className ? (
				<div className={className}>
					<LogoBlack
						alt="Tradegraf Logo"
						width={logoSize.width}
						height={logoSize.height}
						className={styles.logo}
					/>
				</div>
			) : (
				<LogoBlack
					alt="Tradegraf Logo"
					width={logoSize.width}
					height={logoSize.height}
					className={styles.logo}
				/>
			)}
		</Suspense>
	);
}

Logo.defaultProps = {
	size: 'medium',
	className: null,
};

Logo.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	className: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
};
