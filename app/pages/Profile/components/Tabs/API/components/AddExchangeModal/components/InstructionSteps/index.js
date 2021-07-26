import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Space, Steps, Button } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import { REFERRAL_LINKS } from '@app/utils/constants';
import useStyles from './styles';

const { Step } = Steps;

const InstructionSteps = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { t } = useTranslation('profile');
	const classes = useStyles();

	return (
		<div className={classes.center}>
			<Space direction="vertical" align="center" size="middle">
				<Button
					type="text"
					onClick={() => setIsOpen(!isOpen)}
					icon={isOpen ? <CaretUpOutlined /> : <CaretDownOutlined />}
				>
					{t('HOW_TO')}
				</Button>
				{isOpen ? (
					<Steps direction="vertical" size="small" className={classes.stepsWrapper} current={-1}>
						<Step
							title={
								<a href={REFERRAL_LINKS.BINANCE.API_PAGE} target="_blank">
									{`${t('GO_TO')} Binance Website`}
								</a>
							}
						/>
						<Step title={t('CREATE_API_KEY')} />
						<Step title={t('COPY_KEYS')} />
					</Steps>
				) : null}
			</Space>
		</div>
	);
};

export default InstructionSteps;
