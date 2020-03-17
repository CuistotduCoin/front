import { Button, Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import Steps from '../components/Steps';
import AccountMultiple from 'mdi-material-ui/AccountMultiple';
import CompassOutline from 'mdi-material-ui/CompassOutline';
import EmoticonCool from 'mdi-material-ui/EmoticonCoolOutline';
import FlipCardList from '../components/FlipCardList';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: theme.spacing(3),
			overflow: 'hidden',
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

	const steps = [
		{
			icon: <CompassOutline fontSize="large" />,
			title: 'Motiver',
			content: 'La motivation de vos équipes est déterminante pour apporter une dynamique individuelle et collective. Le plus qui fera aussi la différence !',
		},
		{
			icon: <AccountMultiple fontSize="large" />,
			title: 'Fidéliser',
			content: 'La fidélisation de vos clients et de vos collaborateurs est vitale pour développer et pérenniser durablement vos relations commerciales et managériales.',
		},
		{
			icon: <EmoticonCool fontSize="large" />,
			title: 'Créer le lien',
			content: 'Le capital humain est au cœur de toute stratégie d’entreprise et doit se révéler à travers un fil conducteur essentiel : échange et partage.',
		},
	];

	const products = [
		{
			title: "Nos journées d'équipes / Séminaires",
			content: `Besoin de réunir votre équipe ou tous vos collaborateurs lors d'une journée spéciale (séminaire, journée team building, ...) ?
      On vous propose:
      - Nos lieux partenaires : Salle de réunion, lieux privatisés
      - Notre service traiteur : pauses gourmandes, cocktails, repas, etc.`,
			image: 'https://static.cuistotducoin.com/img/home/breakfast.jpg',
			link: '/seminar',
		},
		{
			title: 'Nos Challenges Culinaires',
			content: `A partir de 20 collaborateurs, organisez une animation inédite et accessible à tous !
			Vos collaborateurs auront 1h top chrono' pour relever le défi : cuisinez les meilleurs plats et réalisez les plus beaux dressages ! `,
			image: 'https://static.cuistotducoin.com/img/home/breakfast.jpg',
			link: '/challenge',
		},
		{
			title: 'Nos pop-up stations',
			content: `Envie d'une animation originale et gourmande ? Nous dressons des bars à ... Jus, cocktail, crêpes, tapas, etc.`,
			image: 'https://static.cuistotducoin.com/img/home/plateau-repas.jpg',
			link: '/pop-up-station',
		},
	];

	return (
		<Layout>
			<Container maxWidth="lg" className={classes.container}>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Cuistot du Coin, organisateur événementiel d'entreprise.
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					L'organisation d'un événement en entreprise nécessite du temps et de l'énergie. Notre service événementiel s'occupe de tout pour vous apporter de la sérénité et
					vous garantir de la réussite dans vos temps forts en interne ! Nous organisons divers événements tels que : séminaires, journées d'équipes, soirées
					d'entreprises à Brest et partout dans le Finistère ! Acteur de l'événementiel 2.0 à Brest, nous pouvons vous accueillir dans des lieux partenaires chaleureux et
					originaux. Le traiteur et l'animation culinaire sont de plus au cœur de notre entreprise. Un merveilleux cocktail pour inviter vos collaborateurs à un événement
					convivial et qu'ils n'oublieront pas !
				</Typography>
				<Grid container justify="space-around" alignItems="flex-start" spacing={2} className={classes.grid}>
					<Steps steps={steps} />
				</Grid>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Evenement sur mesure
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Vous et votre équipe avez quelque chose à fêter ? L'anniversaire de votre entreprise, les fêtes de fin d'année, la journée des salariés, etc. Nous nous
					chargeons du lieu, du traiteur et même des animations !
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.grid} spacing={2}>
					<Button variant="contained" color="secondary" href="/taylored-event">
						En savoir plus
					</Button>
				</Grid>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos services événementiels classiques
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Réunissez vos équipes le temps d'une journée, d'un séminaire ou d'un événement festif et convivial.
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.grid} spacing={2}>
					<FlipCardList listCard={products} />
				</Grid>
			</Container>
		</Layout>
	);
}
