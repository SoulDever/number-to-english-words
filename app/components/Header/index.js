import React from 'react';
import Link from 'next/link';
import { HeaderContent, HeaderWrapper, HeaderLogo } from './theme';

export default () => {
	return (
		<HeaderWrapper>
			<HeaderContent>
				<Link href={'/'}><HeaderLogo>Number to English Words</HeaderLogo></Link>
			</HeaderContent>
		</HeaderWrapper>
	);
}
