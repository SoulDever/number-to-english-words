import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const handleRouteChange = url => {
	console.log('App is changing to: ', url);
	NProgress.start();
}

const handleRouteComplete = () => NProgress.done();
const handleRouteError = () => NProgress.done();

Router.events.on('routeChangeStart', handleRouteChange);
Router.events.on('routeChangeComplete', handleRouteComplete);
Router.events.on('routeChangeError', handleRouteError);

const Layout = ({ title, children, showSearch }) => (
	<>
		<Head>
			<title>{ title || 'Number to English Words' }</title>
		</Head>
		<Header showSearch={showSearch || false} />
		<main>
			{
				children
			}
		</main>
		<Footer />
	</>
)

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
	showSearch: PropTypes.bool,
}

export default Layout;

