import { Button, Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: theme.spacing(3),
		},
		typography: {
			marginTop: 15,
		},
		grid: {
			margin: '0px auto',
			maxWidth: 1080,
			padding: theme.spacing(3),
		},
	}),
);

export default function events() {
	const classes = useStyles();

	return (
		<Layout>
			<Container maxWidth="lg" className={classes.container}>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Vous souhaitez organiser un événement pour votre entreprise mais vous n'avez pas le temps de vous occupez de tous les détails... Et si Cuistot du Coin
					s'occupait de tout ?
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.grid} spacing={2}>
					<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
						Demander un devis !
					</Button>
				</Grid>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Le Traiteur au cœur de votre événement
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Le traiteur est au cœur de notre entreprise et de vos événements ! Nous vous préparerons des assortiments de tapas salées et sucrées selon vos envies grâce à
					nos Chefs Cuistot originaires des 4 coins du monde. Vous pourrez également découvrir des boissons artisanales, des vins de nos partenaires ou encore du thé et
					café issus de l'agriculture biologique.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Les animations
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Vous souhaitez trouver une animation originale pour vos soirées d'entreprises ? Choisissons ensemble votre prochaine animation pour votre événement.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					La location de lieu, vaisselles
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Nous avons une liste de lieux partenaires qui peuvent s'adapter à toutes les tailles de groupe. Si vous n'avez pas de vaisselle et de verres à disposition, nous
					pouvons nous occuper de tout apporter sur le lieu de votre événement puis de la reprise.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Décoration & Scénographie
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					...
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Les autres services Cuistot du Coin
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Nous livrons et reprenons tout sur place, effectuons également la mise en place du buffet ainsi que le nappage et décoration. Si vous le souhaitez nous pouvons
					également effectuer le service.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					L'aspect écologique sur nos prestations
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Nous avons à coeur de réduire l'impact de nos prestations. Pour cela, toutes nos recettes sont de saison mais nous utilisons également des contenants
					recyclables, des bonbonnières pour les boissons mais également des éco-cup.
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
