import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { css, Global } from '@emotion/core';

export default class AppDocument extends Document {
	render(){
		return (
			<html lang={'it'}>
				<Global
					styles={
						css`
			            html,
			            body {
			                background-color: #FFF;
			            }
			        `
					}
				/>
				<Head>
					<meta charSet='utf-8' />
					<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
					<link rel={'stylesheet'} type={'text/css'} href={'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'} />
					<link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700|Josefin+Slab" rel="stylesheet" />
					<link href={'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'} rel={'stylesheet'} />
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</html>
		)
	}
}
