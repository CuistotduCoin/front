import Grid from '@material-ui/core/Grid';
import { Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';
import { compose } from 'recompose';
import BecomeCookForm from '../components/BecomeCookForm';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import components from '../content/components';
// @ts-ignore
import Content from '../content/organize.mdx';
import { withAuth, withData } from '../decorators';

const styles = (theme: Theme) => ({
	container: {
		textAlign: 'center',
	},
	grid: {
		margin: '0px auto',
		maxWidth: 1080,
		padding: 24,
	},
	logo: {
		marginTop: theme.spacing(3),
	},
});

// tslint:disable-next-line
const BecomeCook: React.SFC<{ classes: any }> = ({ classes }) => (
	<Layout className={classes.container}>
		<Logo height={100} width={100} className={classes.logo} />
		<Grid container justify="space-around" alignItems="center" className={classes.grid}>
			<Content components={components} />
		</Grid>
		<BecomeCookForm />
	</Layout>
);

const enhance = compose(withData, withAuth, withStyles(styles as any));

export default enhance(BecomeCook);
