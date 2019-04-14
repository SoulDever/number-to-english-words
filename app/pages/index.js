import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { FormattedHTMLMessage } from 'react-intl';

import Layout from '../containers/Layout';
import SearchCover from '../components/SearchCover';
import Content from '../components/Content';
import Loader from '../components/Loader';
import Result from '../components/Result';
import Title from '../components/Title';

import { fetchWords } from '../store/actions'

import coverBack from '../assets/images/background.png';

class IndexPage extends Component {

	constructor (props) {
		super(props)

		this.state = {
			value: '',
			result: '',
			error: ''
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.words !== prevProps.words){
			this.setState({
				result: this.props.words
			})
		}
		if(this.props.error !== prevProps.error){
			this.setState({
				error: this.props.error
			})
		}
	}

	handleGetTheNameClicked = (number) => {
		this.setState({ value: number }, () => {
			this.props.onFetchWords(number);
		})
	}

	render () {
		const { value, result, error } = this.state;

		const { setRootRef } = this;
		return (
			<Layout>
				<div ref={setRootRef}>
					<SearchCover
						getTheNameClicked={this.handleGetTheNameClicked}
						valueChanged={() => this.setState({ value: '', result: '', error: '' })}
						title={<FormattedHTMLMessage id={'search.title'}/>}
						background={coverBack} />
					<Content>
						<Loader styles={{visibility: this.props.isFetching ? 'visible' : 'hidden' }} />
						{
							value && !error &&
								<Title size={'large'} styles={{ margin: '20px auto 0', textAlign: 'center'}}>{ value }</Title>
						}
						{
							result &&
								<Result>{ result }</Result>
						}
						{
							error &&
								<Title styles={{ margin: '20px auto 0', textAlign: 'center'}} size={'medium'} color={'red'}>{ error }</Title>
						}
					</Content>
				</div>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {
		words: state.wordState.words,
		loading: state.wordState.isFetching,
		error: state.wordState.error,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchWords: (number) => dispatch(fetchWords(number)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IndexPage));
