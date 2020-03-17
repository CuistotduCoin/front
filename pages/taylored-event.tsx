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
		button: {
			marginTop: theme.spacing(5),
			marginBottom: theme.spacing(2),
		},
	}),
);

export default function events() {
	const classes = useStyles();

	return (
		<Layout>
			<Container className={classes.container}>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Vous souhaitez organiser un événement pour votre entreprise et être accompagné pour vous garantir de la réussite de votre temps-fort. Et si Cuistot du Coin
					s'occupait de tout ?
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos Prestations événementielles
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Une agence événementielle 2.0 à Brest, où la nourriture et le partage sont au centre de vos événements.
				</Typography>
				<Grid container justify="space-around" alignItems="center">
					<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank" className={classes.button}>
						Obtenir un devis
					</Button>
				</Grid>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Le Traiteur au cœur de votre événement
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Le traiteur est au cœur de notre entreprise et de vos événements ! Nous vous préparerons des assortiments de tapas salées et sucrées selon vos envies grâce à
					nos Chefs Cuistots originaires des 4 coins du monde. Leurs préparations sous divers formats se prêteront au rythme que vous envisagez pour votre événement. Vous
					pourrez également découvrir des boissons artisanales, des vins de nos partenaires ou encore du thé et café issus de l'agriculture biologique.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Des animations pour privilégier le partage
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Vous souhaitez trouver une animation originale pour vos soirées d'entreprises ? Vous recherchez une activité qui plaise à tous et qui fédère vos équipes. Nous
					pouvons vous proposer 2 animations : - Nos bars à ... crêpes, cocktail, jus, tapas, etc. - Nos challenges culinaires (comme dans le cuisine de Top Chef)
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Un accueil dans nos lieux chaleureux
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Nos lieux partenaires peuvent s'adapter à toutes les tailles de groupes et à diverses occasions : lofts privatisés, salles lumineuses et spacieuses, lieux
					d'exception, ... Nous assurons également la location et la reprise de matériel nécessaires pour votre événement.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Implication de nos équipes
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Faîtes-nous part de l'ambiance souhaitée pour votre événement et nous assurerons une cohérence entre la sélection du lieu, notre service traiteur et la
					décoration apportée pour rendre votre événement unique et mémorable ! Nous mobilisons nos équipes sur place si nécessaire pour assurer le service et vous
					apportez toute la pérennité voulue.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Une démarche éco-responsable
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Nous avons à cœur de réduire l'impact écologique de nos prestations. Pour cela, nos travaillons exclusivement avec des partenaires locaux. Toutes nos recettes
					sont de saison et nous utilisons également des contenants recyclables, des bonbonnières pour les boissons et limitons le gaspillage alimentaire.
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
