import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
	Container,
	LoginContainer,
	Cover,
	Page,
	PageContent,
	Brand
} from './styles';

import Background from '../../assets/images/background.jpg';
import SiteBg from '../../assets/images/sitebg.png';

const ContainerPage = ({ ...props }) => {
	const { children } = props;
	const [load, setLoad] = useState(true);

	const pageLoadClass = classNames({
		loaded: load
	});

	useEffect(() => {
		let timer = 0;
		clearTimeout(timer);
		timer = setTimeout(() => {
			setLoad(false);
		}, 2000);
		return () => {
			setLoad(true);
			clearTimeout(timer);
		};
	}, [children]);

	return (
		<Container background={SiteBg}>
			<LoginContainer>
				<Cover background={Background} />
				<Page>
					<Brand>Reportmine © 2019</Brand>
					<PageContent className={pageLoadClass}>{children}</PageContent>
				</Page>
			</LoginContainer>
		</Container>
	);
};

ContainerPage.propTypes = {
	children: PropTypes.object.isRequired
};

export default ContainerPage;
