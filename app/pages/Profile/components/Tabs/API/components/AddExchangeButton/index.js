import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddExchangeButton = ({ onClick, t }) => (
	<Button icon={<PlusOutlined />} type="primary" onClick={onClick}>
		{t('ADD_NEW_EXCHANGE')}
	</Button>
);

AddExchangeButton.defaultProps = {
	onClick: () => {},
	t: PropTypes.func,
};

AddExchangeButton.propTypes = {
	onClick: PropTypes.func,
	t: PropTypes.func,
};

export default AddExchangeButton;
