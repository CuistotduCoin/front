import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import FlipCardList from '../components/FlipCardList';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
			margin: '0px auto',
			maxWidth: 1080,
			padding: theme.spacing(3),
		},
	}),
);

export default function cater() {
	const classes = useStyles();

	const products = [
		{
			title: 'Cocktail / Reception',
			content: 'Cuistot du Coin préparera un assortiments de tapas du monde pour vos cocktails dînatoires ou déjeunatoires ou toutes autres réceptions.',
			image: 'https://static.cuistotducoin.com/img/home/breakfast.jpg',
			link: '/cocktail',
		},
		{
			title: 'Repas (Family Style)',
			content: `Vous souhaitez plutôt manger à table. Dans ce cas, choisissez l'une de nos 2 formules : Format "Family Style" à partager ou format individuel.`,
			image: 'https://static.cuistotducoin.com/img/home/plateau-repas.jpg',
			link: '/lunch',
		},
		{
			title: 'Pause gourmande',
			content: 'Préparation de tapas sucrées pour vos pauses de petits-déjeuner ou vos goûters. Ainsi que jus artisanaux et boissons chaudes bio.',
			image: 'https://static.cuistotducoin.com/img/home/repas-a-table.jpg',
			link: '/breakfast',
		},
		{
			title: 'Pop Up station / Animation',
			content:
				"Envie d'une animation originale lors de vos événements ou réception ? Nous pouvons nous occuper de dresser et tenir des: bar à crêpes, bar à cocktail et bien plus encore !",
			image: 'https://static.cuistotducoin.com/img/home/repas-a-table.jpg',
			link: '/pop-up-station',
		},
	];

	return (
		<Layout>
			<Container maxWidth="lg">
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Le traiteur partenaire de votre entreprise
				</Typography>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					La vie de votre entreprise ou de votre organisation est jalonnée d’événements, petits ou grands. Réunions, déjeuners de travail, séminaires, formations,
					anniversaires, arbre de Noël… A chacun de ces moments, le traiteur Cuistot du coin est à vos côtés pour vous apporter le meilleur service.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos prestations traiteurs
				</Typography>
				<Typography variant="h5" align="center" component="h3" gutterBottom>
					En plus de nous occuper du voyage des papilles de vos collaborateurs et convives, nous pouvons nous occuper de tout ce dont vous avez besoin (Lieux partenaires,
					Livraison, Mise en place du buffet, Location de verrerie, location de vaisselle, Nappage et décoration, Service, boissons...) Toutes nos prestations sont faites
					maison par nos artisans partenaires. Ils concocteront pour vous des recettes originales et de saison ! Dans un aspect écologique, nous limitons les déchets sur
					toutes nos prestations. Aussi, tous nos contenants sont soit : réutilisables, compostables ou recyclables :)
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.grid} spacing={2}>
					<FlipCardList listCard={products} />
				</Grid>
			</Container>
		</Layout>
	);
}
