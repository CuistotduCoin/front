import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import { Button, Container, Grid, Typography } from '@material-ui/core';
//import { events } from "../shared/events";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		button: {
			margin: theme.spacing(5, 2),
		},
		container: {
			padding: theme.spacing(3),
		},
	}),
);

export default function currentOffer() {
	const classes = useStyles();

	return (
		<Layout
			position="absolute"
			color="secondary"
			component={
				<Grid container justify="space-around" alignItems="center">
					<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
						Obtenir un devis
					</Button>
				</Grid>
			}
		>
			<Container className={classes.container}>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Cuistot du coin & Covid-19
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Pas d'offres du moment pour cause de covid-19.
				</Typography>
			</Container>
		</Layout>
	);
}
