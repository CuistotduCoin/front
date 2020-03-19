import { Button, Container, Grid, Typography, Hidden } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		block: {
			padding: theme.spacing(5, 2),
		},
		button: {
			padding: theme.spacing(3),
		},
		gridSpacing: {
			padding: theme.spacing(3),
		},
	}),
);

export default function seminar() {
	const classes = useStyles();

	return (
		<Layout
			component={
				<Grid container justify="space-around" className={classes.button}>
					<Grid item>
						<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
							Obtenir un devis
						</Button>
					</Grid>
				</Grid>
			}
		>
			<section className={classes.block}>
				<Container>
					<Typography variant="h5" align="center" component="p" gutterBottom>
						Besoin de réunir vos collaborateurs lors d'une journée de travail ou de cohésion : séminaire, réunion, journée team building, journée d'entreprise, journée
						des employés, etc. Partagez-nous vos projets et déléguez-nous leur organisation.
					</Typography>
				</Container>
			</section>
			<section className={classes.block}>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos Prestations pour vos journées d'équipe
				</Typography>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Nous pouvons nous occupez de vos journées d'entreprise de A à Z. !
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.button}>
					<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
						Demander un devis !
					</Button>
				</Grid>
			</section>
			<section className={classes.block}>
				<Container>
					<Grid container>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Typography variant="h3" align="center" component="h2" gutterBottom>
								Repas et pauses gourmandes
							</Typography>
							<Typography variant="h5" align="center" component="p" gutterBottom>
								Pour le petit déjeuner, la pause café ou encore le goûter, nous vous préparerons de délicieux assortiments de tapas sucrées. Nous mettrons à disposition
								selon vos envies des jus de fruits artisanaux et/ou du thé et café biologique. Pour le midi et/ou le soir, nous dresserons des assortiments de tapas
								salées et sucrées pour des cocktails ou des plats à partager pour des repas à table, selon vos envies. Les repas peuvent également être accompagnés de vin
								de nos cavistes partenaires.
							</Typography>
						</Grid>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Hidden smDown>
								<Grid container justify="space-around" alignItems="center">
									<img src="https://static.cuistotducoin.com/img/seminar/traiteur.jpg" height={400} width={568} alt="traiteur" />
								</Grid>
							</Hidden>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={classes.block}>
				<Container>
					<Grid container>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Hidden smDown>
								<Grid container justify="space-around" alignItems="center">
									<img src="https://static.cuistotducoin.com/img/seminar/activite.jpg" height={400} width={568} alt="activite" />
								</Grid>
							</Hidden>
						</Grid>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Typography variant="h3" align="center" component="h2" gutterBottom>
								Une pause team building ?
							</Typography>
							<Typography variant="h5" align="center" component="p" gutterBottom>
								Que diriez-vous de prévoir une activité de cohésion sur votre journée en équipe ? Plusieurs formats d'ateliers de cuisine sont possibles et nous nous
								adaptons au programme de votre journée. Nos ateliers sont l'occasion de réunir et impliquer l'ensemble de vos collaborateurs, de faciliter les échanges et
								la communication, de nourrir leur créativité et de privilégier le partage.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={classes.block}>
				<Container>
					<Grid container>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Typography variant="h3" align="center" component="h2" gutterBottom>
								Des lieux adaptés
							</Typography>
							<Typography variant="h5" align="center" component="p" gutterBottom>
								Nous avons une liste de lieux partenaires qui peuvent s'adapter à toutes les tailles de groupe. Nos lieux peuvent également disposer d'espaces de travail
								avec tout le nécessaire pour vos réunion.
							</Typography>
						</Grid>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Hidden smDown>
								<Grid container justify="space-around" alignItems="center">
									<img src="https://static.cuistotducoin.com/img/seminar/lieu.jpg" height={300} width={200} alt="lieu" />
								</Grid>
							</Hidden>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={classes.block}>
				<Container>
					<Grid container>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Hidden smDown>
								<Grid container justify="space-around" alignItems="center">
									<img src="https://static.cuistotducoin.com/img/seminar/eco-resp.jpg" height={400} width={568} alt="eco-resp" />
								</Grid>
							</Hidden>
						</Grid>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Typography variant="h3" align="center" component="h2" gutterBottom>
								L'aspect écologique sur nos prestations
							</Typography>
							<Typography variant="h5" align="center" component="p" gutterBottom>
								Nous avons à coeur de réduire l'impact de nos prestations. Pour cela, toutes nos recettes sont de saison mais nous utilisons également des contenants
								recyclables, des bonbonnières pour les boissons mais également des éco-cup.
							</Typography>
						</Grid>
					</Grid>
					<Grid container justify="space-around" alignItems="center" className={classes.button}>
						<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
							Demander un devis !
						</Button>
					</Grid>
				</Container>
			</section>
		</Layout>
	);
}
