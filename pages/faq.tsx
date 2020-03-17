import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Layout from '../components/Layout';
import { faqList } from '../shared/faq';
import React from 'react';
import FAQ from '../components/FAQ';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: theme.spacing(3),
		},
	}),
);

export default function faq() {
	const classes = useStyles();

	return (
		<Layout>
			<Container className={classes.container}>
				<FAQ faqList={faqList} />
			</Container>
		</Layout>
	);
}
