import { Button, Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import PricingCardList from '../components/PricingCardList';
import Steps from '../components/Steps';
import AccountMultiple from 'mdi-material-ui/AccountMultiple';
import CompassOutline from 'mdi-material-ui/CompassOutline';
import EmoticonCool from 'mdi-material-ui/EmoticonCoolOutline';

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
	}),
);

export default function teambuilding() {
	const classes = useStyles();

	const pricing = [
		{
			title: 'Atelier initiation',
			price: '30',
			description: [`1H d'atelier avec l'un de nos Chefs Cuistot`, `Réalisation de petites recettes à partager`],
			buttonText: 'Obtenir un devis',
		},
		{
			title: 'Atelier découverte',
			price: '50',
			description: [`2H d'atelier avec l'un de nos Chefs Cuistot`, `Préparation de tapas salées et sucrées puis dégustation en fin d'atelier`],
			buttonText: 'Obtenir un devis',
		},
		{
			title: 'Atelier immersion',
			price: '65',
			description: [`3H d'atelier avec l'un de nos Chefs Cuistot`, `Préparation d'un repas (entrée + plat + dessert)`, `Puis dégustation autour de la table`],
			buttonText: 'Obtenir un devis',
		},
	];

	const steps = [
		{
			icon: <CompassOutline fontSize="large" />,
			title: 'Motiver',
			content: 'La motivation de vos équipes est déterminante pour apporter une dynamique individuelle et collective. Le plus qui fera aussi la différence.',
		},
		{
			icon: <AccountMultiple fontSize="large" />,
			title: 'Fidéliser',
			content: 'La fidélisation de vos clients et de vos collaborateurs est vitale pour développer et pérenniser durablement vos relations commerciales et managériales.',
		},
		{
			icon: <EmoticonCool fontSize="large" />,
			title: 'Créer le lien',
			content: `Le capital humain est au cœur de toute stratégie d’entreprise et doit se révéler à travers un fil conducteur essentiel : échange et partage.`,
		},
	];

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
					Partagez une expérience de team building qui conviendra à tous les membres de votre équipe. Pas besoin de compétences en cuisine, il s'agit avant tout d'un
					moment convivial qui permet de solidifier l'esprit d'équipe !
				</Typography>
				<Grid container justify="space-around">
					<Steps steps={steps} />
				</Grid>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos formules de Team Building
				</Typography>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					Nos Ateliers de Cuisine
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Vos collaborateurs, réunis aux côtés de nos Chefs Cuistots, découvriront des recettes originales, authentiques et qui invitent au voyage. Plus de 15 univers
					culinaires sont à explorer : cuisine du monde, pâtisserie, boulangerie, cuisine healthy, ... Il y en a pour tous les goûts et toutes les occasions. Nos ateliers
					se prêtent à une activité en matinée, suivie du déjeuner mais aussi à un temps convivial en afterwork. Des pettes équipes sont constituées aux côtés de nos
					chefs cuistots pour permettre une bonne implication de chacun dans l'activité. Ne vous souciez de rien : nous prévoyons le matériel, les ingrédients, des
					tabliers colorés pour chacun. Les gourmets repartent avec le livret des recettes découvertes en atelier.
				</Typography>
				<Grid className={classes.grid}>
					<PricingCardList pricing={pricing} href={'https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html'} />
				</Grid>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					Nos Challenges Culinaires
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Une activité de team building originale ludique mêlant collaboration et compétition ! Pas besoin d’être un expert en cuisine, la cohésion d’équipe sera la clé
					du succès. A partir de 20 personnes et jusqu'à 200 personnes, nos challenges conviennent à tous les types de groupes. Vos équipes sont divisées en petits
					groupes et devront élaborer les meilleures recettes et réaliser le plus beau dressage en 1H top chrono !
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
