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

export default function lunch() {
	const classes = useStyles();

	const pricing = [
		{
			title: 'Petite faim',
			price: '15',
			description: ['Plat unique = 15€ HT / personne'],
			buttonText: 'Obtenir un devis',
		},
		{
			title: 'Miam',
			price: '18',
			description: ['Plat + entrée OU dessert = 18€ HT / personne'],
			buttonText: 'Obtenir un devis',
		},
		{
			title: 'Gourmande',
			price: '21',
			description: ['Entrée + Plat + Dessert = 21€ HT /personne'],
			buttonText: 'Obtenir un devis',
		},
	];

	const steps = [
		{
			icon: <CompassOutline fontSize="large" />,
			title: 'Originalité',
			content: 'Réveillez vos papilles en dégustant des recettes authentiques aux couleurs de la cuisine du monde. Chaque cocktail est une invitation au voyage.',
		},
		{
			icon: <AccountMultiple fontSize="large" />,
			title: 'Convivialité',
			content: 'Dégustez les préparations de nos cuistots en toute simplicité. Privilégiez ainsi les échanges lors de repas décontractés et chaleureux.',
		},
		{
			icon: <EmoticonCool fontSize="large" />,
			title: 'Sérénité',
			content: 'Nous nous occupons de l’organisation de A à Z. Faîtes-nous part de vos attentes et régalez-vous.',
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
			<Container maxWidth="lg">
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Vous préférez vous réunir à table et déguster des recettes chaudes ou froides ?
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Vous préférez vous réunir à table et déguster des recettes chaudes ou froides ?
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos 3 formules de repas à table
				</Typography>
				<Grid className={classes.grid}>
					<PricingCardList pricing={pricing} href={'https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html'} />
				</Grid>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos 2 formats de service
				</Typography>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					Format "Family Style"
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Il s'agit du format le plus convivial, nous servons les préparations dans de grands plats et chacun se sert ce qu'il veut ! - Format individuel : Nous vous
					livrons votre menu dans des contenants individuels recyclables.
				</Typography>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					Format individuel
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Nous vous livrons votre menu dans des contenants individuels recyclables.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos engagements qualité
				</Typography>
				<Grid container justify="space-around" alignItems="flex-start" spacing={2} className={classes.grid}>
					<Steps steps={steps} />
				</Grid>
			</Container>
		</Layout>
	);
}
