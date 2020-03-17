import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import { Button, Container, Grid, Typography } from '@material-ui/core';
//import { events } from "../shared/events";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
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
				<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
					Essayez Cuistot du coin
				</Button>
			}
		>
			<Container className={classes.container}>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Cuistot du Coin, organisateur événementiel d'entreprise.
				</Typography>
				<Grid container>--</Grid>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Pas le temps de gérer vos événements ? Notre service événementiel s'occupe de tout !<br />
					Depuis plus d'un an nous avons organisé pas moins de <b>50 événements</b> divers tels que : Séminaires, journées d'équipe, soirées de fin d'année pour des
					entreprises à Brest et partout dans le Finistère !<br />
					Une agence événementielle 2.0 à Brest, en plus d'avoir des lieux partenaires, nous sommes expert dans la food ! Le traiteur et l'animation culinaire sont au
					cœur de notre entreprise. Un merveilleux cocktail pour inviter vos collaborateurs à un voyager lors de vos événements et vos animations
				</Typography>
			</Container>
		</Layout>
	);
}
