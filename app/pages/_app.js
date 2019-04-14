import App, { Container } from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Provider } from 'react-redux';

import itLocaleData from 'react-intl/locale-data/it';
import enLocaleData from 'react-intl/locale-data/en';

import itMessages from '../translations/it.json';
import enMessages from '../translations/en.json';

addLocaleData(itLocaleData);
addLocaleData(enLocaleData);

const messages = {
	it: itMessages,
	en: enMessages,
};

let language = 'it';

if(!process.env.FORCE_ITALIAN && process.env.FORCE_ITALIAN === false) {
	if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
		language = window.navigator.language.toLowerCase().split(/[_-]+/)[0];
	}
}

if(!messages[language]){
	language = Object.keys(messages)[0];
}

language = 'en';

class LooksApp extends App {
	render () {
		const { Component, pageProps, reduxStore } = this.props
		return (
			<Container>
				<Provider store={reduxStore}>
					<IntlProvider
						defaultLocale="it"
						locale={'it'}
						messages={messages[language] || messages['it']}>
						<Component {...pageProps} />
					</IntlProvider>
				</Provider>
			</Container>
		)
	}
}

export default withReduxStore(LooksApp)
