import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import FlipCardList from '../components/FlipCardList';
import Steps from '../components/Steps';
import AccountMultiple from 'mdi-material-ui/AccountMultiple';
import CompassOutline from 'mdi-material-ui/CompassOutline';
import EmoticonCool from 'mdi-material-ui/EmoticonCoolOutline';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
			margin: '0px auto',
			maxWidth: 1080,
			padding: theme.spacing(3),
		},
		blockService: {
			paddingTop: theme.spacing(5),
			paddingBottom: theme.spacing(2),
		},
	}),
);

export default function cater() {
	const classes = useStyles();

	const products = [
		{
			title: 'Cocktail / Reception',
			content: 'Cuistot du Coin propose un assortiment de tapas du monde pour vos cocktails dînatoires ou déjeunatoires ou toutes autres réceptions.',
			image: 'https://static.cuistotducoin.com/img/home/breakfast.jpg',
			link: '/cocktail',
		},
		{
			title: 'Repas (Family Style)',
			content: `Vous souhaitez plutôt manger à table ? Dans ce cas, choisissez l'une de nos 2 formules : Format "Family Style" à partager ou format individuel.`,
			image: 'https://static.cuistotducoin.com/img/home/plateau-repas.jpg',
			link: '/lunch',
		},
		{
			title: 'Pause gourmande',
			content: 'Préparation de tapas sucrées pour vos pauses, vos petits-déjeuner ou vos goûters. Service de jus artisanaux et boissons chaudes bio.',
			image: 'https://static.cuistotducoin.com/img/home/repas-a-table.jpg',
			link: '/breakfast',
		},
		{
			title: 'Pop Up station / Animation',
			content: `Envie d'une animation originale lors de vos événements ou réceptions ? Nous pouvons nous occuper de dresser et tenir des : bar à crêpes, bar à tapas, bar à cocktails et bien plus encore !`,
			image: 'https://static.cuistotducoin.com/img/home/repas-a-table.jpg',
			link: '/pop-up-station',
		},
	];

	const steps = [
		{
			icon: <CompassOutline fontSize="large" />,
			title: 'Fait-maison par nos cuistots !',
			content: 'Toutes nos prestations sont faites maison par nos artisans partenaires. Ils concoctent pour vous des recettes originales et de saison ! ',
		},
		{
			icon: <AccountMultiple fontSize="large" />,
			title: 'Une prestation unique ',
			content:
				'En plus de nous occuper du voyage des papilles de vos collaborateurs et convives, nous pouvons nous occuper de tout ce dont vous avez besoin (lieux partenaires, livraison, mise en place, location de matériel, nappage et décoration, service, boissons, ...).',
		},
		{
			icon: <EmoticonCool fontSize="large" />,
			title: 'Une démarche éco-responsable',
			content: `Dans un aspect écologique, nous limitons les déchets sur toutes nos prestations. Aussi, tous nos contenants sont réutilisables, compostables ou recyclables :) Nous mettons à la disposition des convives des box à l'issue de nos prestations pour limiter le gaspillage alimentaire et faire des heureux !`,
		},
	];

	return (
		<Layout>
			<Container>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Le traiteur partenaire de votre entreprise
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					La vie de votre entreprise ou de votre organisation est jalonnée d’événements, petits ou grands. Réunions, déjeuners de travail, séminaires, formations,
					anniversaires, arbre de Noël, … Tant d'occasions permettant de vous réunir en toute convivialité et de vous régaler !
				</Typography>
				<section className={classes.blockService}>
					<Container>
						<Grid container justify="space-around">
							<Steps steps={steps} columns={3} />
						</Grid>
					</Container>
				</section>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos prestations traiteurs
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Nos équipes vous proposent divers services traiteur pour rythmer vos journées et éveillez vos papilles !
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.grid}>
					<FlipCardList listCard={products} />
				</Grid>
			</Container>
		</Layout>
	);
}
