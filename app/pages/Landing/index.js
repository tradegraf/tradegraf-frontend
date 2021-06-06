import React, { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Layout, Button, Space } from 'antd';

import Logo from '@app/components/Logo';
import { DefaultSpinner } from '@app/components/Spinner';
import useStyles from './styles';
import { AuthModal } from './components';

const handleAuthModalLoad = () => import('./components/AuthModal');

const { Content } = Layout;

const HomePage = () => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation('landing');

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <article>
      <Helmet>
        <meta name="description" content="Tradegraf" />
      </Helmet>
      <Layout>
        <Content>
          <Space direction="vertical" size="large" className={classes.container}>
            <Logo />
            <Suspense fallback={<DefaultSpinner />}>
              <Button type="primary" onClick={handleShowModal} onMouseEnter={handleAuthModalLoad}>
                {t('LOGIN')}
              </Button>
            </Suspense>
            {showModal ? <AuthModal visible={showModal} handleVisible={handleShowModal} /> : null}
          </Space>
        </Content>
      </Layout>
    </article>
  );
};

HomePage.propTypes = {};

export default HomePage;
