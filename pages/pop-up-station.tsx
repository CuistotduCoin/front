import { Button, Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			padding: 10,
		},
		cardHeader: {
			backgroundColor: theme.palette.primary.main,
		},
		cardPricing: {
			display: 'flex',
			justifyContent: 'center',
			marginBottom: theme.spacing(2),
		},
		grid: {
			margin: '0px auto',
			maxWidth: 1080,
			padding: theme.spacing(3),
		},
		link: {
			width: '100%',
		},
		slider: {
			margin: '0px auto',
			paddingBottom: 30,
			width: 'calc(100% - 100px)',
		},
		stepper: {
			backgroundColor: '#fafafa',
		},
	}),
);

export default function popUpStation() {
	const classes = useStyles();

	return (
		<Layout
			component={
				<Grid container justify="space-around" className={classes.grid}>
					<Grid item>
						<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
							Obtenir un devis
						</Button>
					</Grid>
				</Grid>
			}
		>
			<Container maxWidth="lg">
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Vous souhaitez trouver une animation originale pour vos soirées d'entreprises ? Alors voici nos animations d'entreprises pour vos événements d'entreprise.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos Challenges Culinaires
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Un concours culinaire comme dans les cuisines de Top Chef, c’est maintenant possible en entreprise ! Vos collaborateurs auront 1h top chrono' pour relever le
					défi : cuisiner les meilleurs plats et les plus beaux dressages ! A partir de 20 collaborateurs, organisez une animation inédite et accessible à tous ! Nous
					pouvons également nous charger de trouver un lieu pour votre groupe.
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.grid} spacing={2}>
					<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
						Demander un devis !
					</Button>
				</Grid>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos Bars à ...
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Envie d'une animation originale et gourmande ? Nous dressons des bars à ... Jus, cocktail, crêpes, sushis etc. Nous assurons le service à réalisons la
					personnalisation que chaque convives désirent !
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.grid} spacing={2}>
					<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
						Demander un devis !
					</Button>
				</Grid>
			</Container>
		</Layout>
	);
}
