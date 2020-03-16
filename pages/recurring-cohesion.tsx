import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import StaticSteper from '../components/StaticSteper';
import Steps from '../components/Steps';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: theme.spacing(3),
		},
		grid: {
			padding: theme.spacing(3),
		},
		typography: {
			marginTop: 15,
		},
	}),
);

export default function recurringCohesion() {
	const classes = useStyles();

	const avantages = [
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/ecoute.jpg" />,
			title: 'Vision claire',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/authenticite.jpg" />,
			title: 'Budget sans surprise',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/ecologie.jpg" />,
			title: 'Communication interne simplifiée',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/ecoute.jpg" />,
			title: 'Offre universelle et inclusive',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/authenticite.jpg" />,
			title: 'Offre diversifiée et innovante',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/authenticite.jpg" />,
			title: 'todo',
		},
	];

	const stepsFAQ = [
		{
			title: `Faîtes-nous part de vos attentes.`,
			content: `On vient à votre rencontre pour définir ensemble le programme annuel de restauration et de cohésion.`,
		},
		{
			title: `On planifie avec vous l'année entière`,
			content: `d`,
		},
		{
			title: `Cuistot du coin s'occupe de tout`,
			content: `De la communication interne à la mise en place, on s'occupe de tout. Vous êtes donc libre de passer du temps avec votre équipe.`,
		},
		{
			title: `Rassemblez-vous autour de la table.`,
			content: `Nos services évoluent avec les commentaires de votre équipe, ce qui améliore l'expérience à chaque fois.`,
		},
	];

	const products = [
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/ecoute.jpg" />,
			title: '1 Événement fédérateur',
			content: '-',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/authenticite.jpg" />,
			title: '4 Soirée afterwork',
			content: '-',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/ecologie.jpg" />,
			title: '10 Pauses gourmandes',
			content: '-',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/ecoute.jpg" />,
			title: '4 Déjeuners de cohésion',
			content: '-',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/authenticite.jpg" />,
			title: '1 Atelier par personne',
			content: '-',
		},
	];

	return (
		<Layout
			position="absolute"
			color="secondary"
			component={
				<Grid container justify="space-around" className={classes.grid}>
					<Grid item>
						<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
							Essayez Cuistot du coin
						</Button>
					</Grid>
				</Grid>
			}
		>
			<Container maxWidth="lg">
				<Typography variant="h3" align="center" component="h2" className={classes.typography} gutterBottom>
					Pourquoi de la cohésion toute l'année ?
				</Typography>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					Pas uniquement un événement dans l'année
				</Typography>
				<Typography variant="h3" align="center" component="h2" className={classes.typography} gutterBottom>
					Des avantages en plus
				</Typography>
				<Grid container justify="space-around" spacing={2} className={classes.grid}>
					<Steps steps={avantages} columns={3} />
				</Grid>
				<Typography variant="h3" align="center" component="h2" className={classes.typography} gutterBottom>
					Une offre complète, customisable et variée
				</Typography>
				<Grid container justify="space-around" alignItems="center" spacing={2} className={classes.grid}>
					<StaticSteper steps={stepsFAQ} />
				</Grid>
				<Typography variant="h3" align="center" component="h2" className={classes.typography} gutterBottom>
					La proposition type de Cuistot du coin
				</Typography>
				<Grid container justify="space-around" spacing={2} className={classes.grid}>
					<Steps steps={products} columns={6} />
				</Grid>
			</Container>
		</Layout>
	);
}
