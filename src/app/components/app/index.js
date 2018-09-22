import React from 'react';
import Hello from '../hello';
import EvenOdd from '../even-odd';

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
};

const App = () => (
	<div style={styles}>
		<Hello name="CodeSandbox" />
		<h2>Start editing to see some magic happen {'\u2728'}</h2>
    <EvenOdd />
	</div>
);

export default App;
