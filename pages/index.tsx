import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Container, Typography, Paper } from '@material-ui/core';
import cx from 'classnames';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Layout from '../components/Layout';
import MailchimpForm from '../components/MailchimpForm';
import Steps from '../components/Steps';
import FlipCardList from '../components/FlipCardList';
import FAQ from '../components/FAQ';
import { lightGreen, green, pink, red, teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		animLevitation: {
			animationDuration: '6s',
			animationName: '$animLevit',
			animationFillMode: 'backwards',
			animationTimingFunction: 'ease-in-out',
			animationIterationCount: 'infinite',
		},
		'@keyframes animLevit': {
			'0%': { transform: 'translateY(0px)' },
			'50%': { transform: 'translateY(-12px)' },
			'100%': { transform: 'translateY(0px)' },
		},
		animationDelay: {
			animationDelay: '.75s',
		},
		blockHowItWorks: {
			backgroundColor: '#66666',
			padding: theme.spacing(5, 2),
		},
		blockCharter: {
			padding: theme.spacing(5, 2),
		},
		button: {
			margin: theme.spacing(5, 2),
		},
		blockIntro: {
			padding: theme.spacing(5, 2),
		},
		blockServices: {
			padding: theme.spacing(5, 2),
			background: `linear-gradient(to right bottom, ${green[500]}, ${lightGreen[200]})`,
		},
		blockFollow: {
			padding: theme.spacing(5, 2),
			background: `linear-gradient(to right bottom, ${lightGreen[500]}, ${green[200]})`,
		},
		marginLeft: {
			marginLeft: 75,
		},
		blockSales: {
			padding: theme.spacing(5, 2),
			background: `linear-gradient(to right bottom, ${red[500]}, ${pink[200]})`,
		},
		marginLeftMax: {
			marginLeft: 125,
		},
		blockTestimony: {
			padding: theme.spacing(5, 2),
		},
		blockFAQ: {
			padding: theme.spacing(5, 2),
			background: `linear-gradient(to right bottom, ${teal[200]}, ${lightGreen[200]})`,
		},
		marginRight: {
			marginRight: 75,
		},
		marginRightMax: {
			marginRight: 125,
		},
		typography: {
			marginTop: 15,
		},
	}),
);

export default function index() {
	const classes = useStyles();

	const shortFaq = {
		General: [
			{
				question: "C'est quoi Cuistot du coin ?",
				answer:
					"Cuistot a pour mission de réunir les personnes autour de la réalisation ou la dégustation de délicieux repas, les rendant plus heureux et plus productifs. Pour réaliser cette mission, nous proposons des ateliers de cuisine, des prestations de traiteurs et l'organisation complète d'événéments.",
			},
			{
				question: 'Comment fonctionne Cuistot du coin ?',
				answer:
					'Nous travaillons avec vous pour identifier les besoins de votre groupe. Nous créons une programme personnalité pour vous, en fonction de vos engeux en cohésion et aussi en fonction de vos préférences et restrictions alimentaires. Nous coordonnons tout, de la conservation des menus et du portionnement approprié à la livraison à temps. Vous laissez des commentaires afin que nous puissions rendre les repas prestations encore meilleurs.',
			},
		],
	};

	const values = [
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/ecoute.jpg" />,
			title: 'ECOUTE',
			content: 'Notre équipe se tient toujours à votre disposition pour concocter avec vous l’événement qui vous ressemble.',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/authenticite.jpg" />,
			title: 'AUTHENTICITÉ',
			content: 'Nous avons sélectionné des Cuistots du monde entier pour vous faire découvrir leurs cultures et leurs recettes familiales.',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/ecologie.jpg" />,
			title: 'ECOLOGIE',
			content: 'Afin de limiter notre impact écologique, nous ne travaillons qu’avec des matériaux recyclables et biodégradables.',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/partage.jpg" />,
			title: 'PARTAGE',
			content: "Nous placerons toujours l'humain et les échanges au cœur de nos prestations ! Les échanges avant tout !",
		},
	];

	const products = [
		{
			title: 'Traiteur',
			content: 'Découvrez nos services traiteur pour diverses occasions : pauses gourmandes, repas ou encore cocktails.',
			image: 'https://static.cuistotducoin.com/img/home/breakfast.jpg',
			link: '/cater',
		},
		{
			title: 'Evenementiel',
			content: `Nous nous chargeons d'organiser des événements sur mesure pour vos collaborateurs`,
			image: 'https://static.cuistotducoin.com/img/home/plateau-repas.jpg',
			link: '/event',
		},
		{
			title: 'Atelier Teambuilding',
			content: 'Proposez une activité fédératrice et qui plaira à tous.',
			image: 'https://static.cuistotducoin.com/img/home/repas-a-table.jpg',
			link: '/teambuilding',
		},
	];

	const howItWorks = [
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/taking-needs.png" />,
			title: '1. Vous indiquez vos besoins',
			content:
				'Un expert Cuistot du coin est à votre service pour recueillir votre besoin et identifier vos enjeux de cohésion, mais aussi les préférences alimentaires de vos salariés et clients.',
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/we-cook.png" />,
			title: "2. La cuisine s'active",
			content:
				"L'équipe de Cuistot du coin s'occupe de l'organisation, de la restauration et de la cohésion, que ce soit pour une commande unique, un événement, un programme de restauration régulier ou encore un atelier de cuisine.",
		},
		{
			icon: <img src="https://static.cuistotducoin.com/img/home/we-take-care.png" />,
			title: "3. On s'occupe de tout",
			content:
				"On arrive sur le lieu de votre choix, à votre horaire et on s'occupe de tout ! Après chaque prestation, nous recueillons votre avis et des commentaires qualitatifs et quantitatifs.",
		},
	];

	const urlMailChimp = 'https://cuistotducoin.us12.list-manage.com/subscribe/post?u=892dbf9576b5acc9068d06a13&id=5e528d7fa8';

	return (
		<Layout
			position="absolute"
			color="secondary"
			component={
				<Grid container justify="space-around">
					<Grid item>
						<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank" className={classes.button}>
							Essayez Cuistot du coin
						</Button>
					</Grid>
				</Grid>
			}
		>
			<section className={classes.blockIntro}>
				<Container>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						Qu’est-ce que Cuistot du coin ?
					</Typography>
					<Typography variant="h5" align="center" component="p" gutterBottom>
						Née de l'idée que les repas ne sont pas destinés à être dévorés seuls à votre bureau, notre entreprise Cuistot du coin vise à rendre votre service plus
						heureux grâce à des expériences partagées. Passez enfin plus de temps avec vos équipes !
					</Typography>
				</Container>
			</section>
			<section className={classes.blockServices}>
				<Container>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						Nos prestations
					</Typography>
					<Typography variant="h5" align="center" component="p" gutterBottom>
						Cuistot du Coin se mobilise sur divers événements en entreprise . Nous facilitons le quotidien de vos collaborateurs en apportant nos services traiteur pour
						de petites et grandes occasions. Nous vous invitons à proposer des activités fédératrices pour renforcer la cohésion et le partage. Nous sommes aussi votre
						interlocuteur unique pour l'organisation d'événements de plus grande ampleur.
					</Typography>
					<Grid container justify="space-around" alignItems="center">
						<FlipCardList listCard={products} />
					</Grid>
				</Container>
			</section>
			<section className={classes.blockHowItWorks}>
				<Container>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						Comment ça marche
					</Typography>
					<Grid container justify="space-around">
						<Steps steps={howItWorks} columns={3} />
					</Grid>
				</Container>
			</section>
			<section className={classes.blockSales}>
				<Container>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						Réunissez votre équipe pour améliorer la collaboration dans votre entreprise
					</Typography>
					<Typography variant="h5" align="center" component="p" gutterBottom>
						Que ce soit pour un événement ponctuel ou des prestations récurrentes, nos Cuistots du coin sont là pour vous.
					</Typography>
					<Grid container justify="space-around" alignItems="center">
						<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank" className={classes.button}>
							Obtenir un devis
						</Button>
					</Grid>
				</Container>
			</section>
			<section className={classes.blockCharter}>
				<Container>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						Du traiteur mais aussi des valeurs
					</Typography>
					<Grid container justify="space-around">
						<Steps steps={values} columns={4} />
					</Grid>
					<Grid container justify="space-around" alignItems="center">
						<Button variant="contained" color="primary" href="/charter" target="_blank" className={classes.button}>
							En savoir plus sur notre charte traiteur
						</Button>
					</Grid>
				</Container>
			</section>
			<section className={classes.blockFollow}>
				<Container>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						Suivez notre aventure
					</Typography>
					<Typography variant="h5" align="center" component="p" gutterBottom>
						Recevez notre actu et ne manquez pas nos prochains événements
					</Typography>
					<Grid container justify="space-around" alignItems="center">
						<MailchimpSubscribe
							url={urlMailChimp}
							// tslint:disable-next-line: jsx-no-lambda
							render={({ subscribe, status, message }) => <MailchimpForm status={status} message={message} onValidated={formData => subscribe(formData)} />}
						/>
					</Grid>
				</Container>
			</section>
			<section className={classes.blockTestimony}>
				<Grid container>
					<Grid item xs={12} sm={4}>
						<Grid container justify="space-between" alignItems="center" direction="column">
							<Paper elevation={3} className={cx(classes.animLevitation, classes.marginRight)}>
								<img src="https://static.cuistotducoin.com/img/testimony/arkea.jpg" alt="Logo d'Arkea" height={80} width={80} />
							</Paper>
							<Paper elevation={3} className={cx(classes.animLevitation, classes.marginLeftMax, classes.animationDelay)}>
								<img src="https://static.cuistotducoin.com/img/testimony/ildys.jpg" alt="Logo d'Ildys" height={80} width={80} />
							</Paper>
							<Paper elevation={3} className={cx(classes.animLevitation, classes.marginRightMax)}>
								<img src="https://static.cuistotducoin.com/img/testimony/triskalia.jpg" alt="Logo de Triskalia" height={80} width={80} />
							</Paper>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Grid container justify="space-around" alignItems="center">
							<Typography variant="h3" align="center" component="h2" gutterBottom>
								Ces entreprises bretoises nous font déjà confiance !
							</Typography>
							<Typography variant="h5" align="center" component="p" gutterBottom>
								Et ce n'est que le début. Rejoignez-nous !
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Grid container justify="space-between" alignItems="center" direction="column">
							<Paper elevation={3} className={cx(classes.animLevitation, classes.marginLeftMax, classes.animationDelay)}>
								<img src="https://static.cuistotducoin.com/img/testimony/brest-metropole.jpg" alt="Logo de l'APM" height={80} width={80} />
							</Paper>
							<Paper elevation={3} className={cx(classes.animLevitation, classes.marginRightMax)}>
								<img src="https://static.cuistotducoin.com/img/testimony/brittany-ferries.jpg" alt="Logo de l'APM" height={80} width={80} />
							</Paper>
							<Paper elevation={3} className={cx(classes.animLevitation, classes.marginLeft, classes.animationDelay)}>
								<img src="https://static.cuistotducoin.com/img/testimony/musee-beaux-arts-brest.jpg" alt="Logo de l'APM" height={80} width={80} />
							</Paper>
						</Grid>
					</Grid>
				</Grid>
				<Grid container justify="space-around">
					<Button variant="contained" color="primary" href="/testimony" className={classes.button}>
						Voir plus de témoignages
					</Button>
				</Grid>
			</section>
			<section className={classes.blockFAQ}>
				<Container>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						FAQ
					</Typography>
					<Grid container justify="space-around">
						<FAQ faqList={shortFaq} />
					</Grid>
					<Grid container justify="space-around">
						<Button variant="contained" color="primary" href="/faq" className={classes.button}>
							Voir plus de questions
						</Button>
					</Grid>
				</Container>
			</section>
		</Layout>
	);
}
