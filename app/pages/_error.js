import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'
import { withRouter } from 'next/router';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Layout from '../containers/Layout';
import Content from '../components/Content';

const errorStyles = css`
    font-size: 42px;
    color: #939999;
		font-family: 'Josefin Sans', sans-serif;
    padding: 300px 0;
    text-align: center;
`;

const Error = styled.div`
	${errorStyles}
`

class ErrorPage extends Component {

	render () {
		const { errorKey, statusCode } = this.props;

		return (
			<Layout title={'Number to English Words - ' + (statusCode || '404')}>
				<Content>
					<Error><FormattedMessage id={errorKey || 'error.page.notFound'}/></Error>
				</Content>
			</Layout>
		)
	}
}

export default withRouter(ErrorPage);
