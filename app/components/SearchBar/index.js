import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
	SearchBarWrapper,
	SearchBarContent,
	SearchBarInput,
	SearchBarButton
} from './theme';
import Button from '../Button';

class SearchBar extends Component {
	constructor (props){
		super(props);

		this.state = {
			showButton: false,
			number: '',
		}

		// Create the ref
		this.searchRef = createRef();
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	componentDidMount () {
		document.addEventListener('keydown', this.onKeyDown);
	}

	handleSearchBarInputChange = (e) => {
		const key = e.target.value;

		this.setState({
			number: key,
			showButton: key.trim().length
		}, () => {
			this.props.valueChanged()
		})
	}

	onKeyDown (e) {
		if (e.keyCode === 13) {
			this.props.getTheNameClicked(this.state.number)
		}
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeyDown);
	}

	render() {
		const { styles, disabled, size, getTheNameClicked } = this.props;
		const { showButton, number } = this.state;

		return (
			<SearchBarWrapper>
				<SearchBarContent onClick={() => this.searchRef.current.focus()} style={styles} className={['SearchBarContent', size ? `SearchBarContent--${size}` : ''].join(' ')}>
					{
						<FormattedMessage id={'search.placeholder'}>
							{
								placeholder =>
									<SearchBarInput
										ref={this.searchRef}
										placeholder={placeholder}
										onChange={this.handleSearchBarInputChange}
										disabled={disabled}
										type={'text'}/>
							}
						</FormattedMessage>
					}
				</SearchBarContent>
				<SearchBarButton className={['SearchBarButton', showButton ? 'is-visible': ''].join(' ')}>
					<Button clicked={() => getTheNameClicked(number)}><FormattedMessage id={'search.button'} /></Button>
				</SearchBarButton>
			</SearchBarWrapper>
		)
	}
}

SearchBar.propTypes = {
	styles: PropTypes.object,
	disabled: PropTypes.bool,
	size: PropTypes.string,
	hideBackdrop: PropTypes.bool,
	valueChanged: PropTypes.func,
	getTheNameClicked: PropTypes.func,
}

export default SearchBar;
