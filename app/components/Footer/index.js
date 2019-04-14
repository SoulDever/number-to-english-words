import React from 'react';
import Link from 'next/link';
import { FormattedHTMLMessage } from 'react-intl';
import { FooterContent, FooterCredits, FooterWrapper, FooterLogo } from './theme';

export default () => {
	return (
		<FooterWrapper>
			<FooterContent>
				<Link href={'/'}><FooterLogo>Number to English Words</FooterLogo></Link>
				<FooterCredits>
					<FormattedHTMLMessage id={'footer.credits'} />
				</FooterCredits>
			</FooterContent>
		</FooterWrapper>
	);
}
