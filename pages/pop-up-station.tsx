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
			<Container>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Vous souhaitez trouver une animation originale pour vos soirées d'entreprises ? Découvrez nos animations d'entreprises pour vos événements d'entreprise.
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.grid}>
					<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
						Demander un devis !
					</Button>
				</Grid>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos Bars à ...
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Envie d'une animation originale et gourmande ? Nous dressons des bars à ... Jus, cocktail, crêpes, sushis etc. Nous assurons le service et réalisons la
					personnalisation que chaque convive désire ! Les convives échangent avec nos cuistots passionnés et se régalent de bons conseils et de délicieux mets avec leurs
					collaborateurs. L'occasion de se plonger dans des univers culinaires colorés et qui invitent au voyage !
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.grid}>
					<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
						Demander un devis !
					</Button>
				</Grid>
			</Container>
		</Layout>
	);
}
