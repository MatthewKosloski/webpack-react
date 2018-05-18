import React from 'react';
import { Box } from 'rebass';

export default (props) => (
	<Box {...props}
		px={1}>
		{props.children}
	</Box>
);