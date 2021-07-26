import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Select, Input, Space, Divider, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@app/shared/hooks/useAuth';
import { createExchangeConnection } from '@app/api/profile';
import { removeWhiteSpaceFromString } from '@app/utils/common';
import { Encrypt } from '@app/utils/encryption';
import InstructionSteps from './components/InstructionSteps';
import NoAccount from './components/NoAccount';
import useStyles from './styles';

const { Option } = Select;

const AddExchangeModal = ({ visible, close }) => {
	const [form] = Form.useForm();
	const { t } = useTranslation('profile');

	const { user } = useAuth();

	const classes = useStyles();

	const [confirmLoading, setConfirmLoading] = useState(false);

	// TODO
	// eslint-disable-next-line unicorn/consistent-function-scoping
	const handleCancel = () => {
		console.log('cancel');
	};

	const onFinish = () => {
		// setConfirmLoading(true);
		const values = form.getFieldsValue();
		const filteredData = {
			name: removeWhiteSpaceFromString(values.name),
			exchange: removeWhiteSpaceFromString(values.exchange),
			secret: removeWhiteSpaceFromString(values.secret),
			token: removeWhiteSpaceFromString(values.token),
		};

		const jsonToken = JSON.stringify({ token: filteredData.token, secret: filteredData.secret });

		const encryptedToken = Encrypt(jsonToken);

		return createExchangeConnection({
			data: {
				name: filteredData.name,
				exchange: filteredData.exchange,
				token: encryptedToken,
			},
			userId: user.uid,
		})
			.then((response) => {
				console.log('response', response);
				setConfirmLoading(false);
			})
			.catch((error) => {
				console.error('response', error);
				setConfirmLoading(false);
			})
			.finally(() => close());
	};

	return (
		<Modal
			title={t('ADD_NEW_EXCHANGE')}
			visible={visible}
			confirmLoading={confirmLoading}
			onCancel={close}
			width={440}
			footer={null}
			centered
		>
			<Space direction="vertical" size="middle" className={classes.full}>
				<InstructionSteps />
				<Form
					form={form}
					layout="vertical"
					name="add-exchange"
					requiredMark={false}
					onFinish={onFinish}
				>
					<Space direction="vertical" size="middle" className={classes.full}>
						<div>
							<Form.Item
								name="exchange"
								label={t('global:EXCHANGE').toUpperCase()}
								initialValue="binance"
								rules={[
									{
										required: true,
									},
								]}
								className={classes.formRow}
							>
								<Select disabled>
									<Option value="binance">Binance</Option>
								</Select>
							</Form.Item>
							<Form.Item
								name="name"
								label={t('global:NAME').toUpperCase()}
								rules={[
									{
										required: true,
										min: 3,
										max: 32,
									},
								]}
								className={classes.formRow}
							>
								<Input />
							</Form.Item>
						</div>
						<div>
							<Divider orientation="left" plain>
								{t('EXCHANGE_CONNECTION_DETAILS')}
							</Divider>
							<Form.Item
								name="token"
								label={t('global:TOKEN').toUpperCase()}
								rules={[
									{
										required: true,
										message: t('MISSING_TOKEN'),
										len: 64,
									},
								]}
								className={classes.formRow}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name="secret"
								label={t('global:SECRET').toUpperCase()}
								rules={[
									{
										required: true,
										message: t('MISSING_SECRET'),
										len: 64,
									},
								]}
								className={classes.formRow}
							>
								<Input />
							</Form.Item>
							<Button
								loading={confirmLoading}
								htmlType="submit"
								type="primary"
								size="large"
								className={classes.button}
								block
							>
								{t('ADD_EXCHANGE')}
							</Button>
						</div>
					</Space>
				</Form>
			</Space>
			<Divider />
			<NoAccount />
		</Modal>
	);
};

AddExchangeModal.propTypes = {
	visible: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
};

export default AddExchangeModal;
