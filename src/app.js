import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'rebass';
import styled, { injectGlobal } from 'styled-components'

import theme from './theme';
import { Container, Row, Column } from './components/layout';
import { H1, H2, H3, H4 } from './components/typography';
import { Link } from './components/ui';

injectGlobal`
	
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 112.5%;
		line-height: 1.3;
	}

	a {
		text-decoration: none;
	}

`;

const app = (
	<Provider theme={theme}>
		<Container>
			<Row>
				<Column width={1}>
					<H1>Webpack and React Boilerplate</H1>
				</Column>
			</Row>
			<Row>
				<Column width={1}>
					<p>This is a starter boilerplate for creating React apps with <Link children="styled-components" href="https://github.com/styled-components/styled-components" /> and <Link children="Rebass" href="https://github.com/jxnblk/rebass" />.  Bundles are created with <Link children="Webpack" href="https://webpack.js.org" />.</p>
				</Column>
			</Row>
		</Container>
	</Provider>
);

render(app, document.getElementById('app'));