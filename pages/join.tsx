import Grid from '@material-ui/core/Grid';
import { Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';
import Layout from '../components/Layout';
import components from '../content/components';
// @ts-ignore
import Content from '../content/join.mdx';

const styles = (theme: Theme) => ({
	grid: {
		margin: '0px auto',
		maxWidth: 1080,
		padding: theme.spacing(3),
	},
});

interface IJoinProps {
	classes?: any;
}

class Join extends React.Component<IJoinProps, {}> {
	public render() {
		const { classes } = this.props;

		return (
			<Layout>
				<Grid container justify="space-around" alignItems="center" className={classes.grid}>
					<Content components={components} />
				</Grid>
			</Layout>
		);
	}
}

export default withStyles(styles as any)(Join as any) as any;
