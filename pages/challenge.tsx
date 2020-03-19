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

export default function events() {
	const classes = useStyles();

	return (
		<Layout>
			<section className={classes.block}>
				<Container>
					<Grid container>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Hidden smDown>
								<Grid container justify="space-around" alignItems="center">
									<img src="https://static.cuistotducoin.com/img/challenge/challenge.jpg" height={400} width={600} alt="challenge" />
								</Grid>
							</Hidden>
						</Grid>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Typography variant="h3" align="center" component="h2" gutterBottom>
								Challenge culinaire
							</Typography>
							<Typography variant="h5" align="center" component="p" gutterBottom>
								Petites ou grandes entreprise, que diriez-vous d'enfiler le tablier avec vos collaborateurs et de relever nos défis culinaires ? La cuisine a ces
								caractères d'universalité et de singularité qui permettront à chacun de s'impliquer dans une activité d'équipe et aussi de révéler ses talents ! Vos
								collaborateurs relèveront nos défis culinaires en petites équipes et partageront un moment convivial, propice aux échanges et au partage.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={classes.block}>
				<Container>
					<Typography variant="h3" align="center" component="h2" gutterBottom>
						Une activité fédératrice
					</Typography>
					<Typography variant="h5" align="center" component="p" gutterBottom>
						Un concours culinaire comme dans les cuisines de Top Chef, c’est maintenant possible en entreprise ! Vos collaborateurs auront 1h top chrono' pour relever le
						défi : cuisiner les meilleurs plats et réaliser les plus beaux dressages ! A l'image d'une brigade, des équipes seront constituées et chacune d'entre elles
						devra réaliser des recettes originales à partir de paniers d'ingrédients d'ici et d'ailleurs. Puis place au dressage et à la dégustation des préparations
						réalisées par l'ensemble des équipes. L'occasion de renforcer les liens et sa culture d'entreprise.
					</Typography>
					<Grid container justify="space-around" alignItems="center" className={classes.button}>
						<Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
							Demander un devis !
						</Button>
					</Grid>
				</Container>
			</section>
			<section className={classes.block}>
				<Container>
					<Grid container>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Typography variant="h3" align="center" component="h2" gutterBottom>
								Une activité clé en main
							</Typography>
							<Typography variant="h5" align="center" component="p" gutterBottom>
								Notre équipe se charge de l'organisation du challenge de A à Z : lieu adapté, préparation du matériel, accueil des équipes, temps convivial à l'issue du
								challenge. ne vous souciez de rien et laissez-vous porter par l'activité ! Notre équipe sur place se chargera de prendre des photos pour que vous et vos
								collaborateurs conserviez un souvenir du challenge.
							</Typography>
						</Grid>
						<Grid item xs={12} lg={6} className={classes.gridSpacing}>
							<Hidden smDown>
								<Grid container justify="space-around" alignItems="center">
									<img src="https://static.cuistotducoin.com/img/challenge/activite-cle-en-main.jpg" height={400} width={600} alt="activite-cle-en-main" />
								</Grid>
							</Hidden>
						</Grid>
					</Grid>
				</Container>
			</section>
		</Layout>
	);
}
