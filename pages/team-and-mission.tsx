import { Button, Container, Typography, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
			padding: theme.spacing(5),
		},
	}),
);

export default function teamAndMission() {
	const classes = useStyles();

	return (
		<Layout>
			<Container>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					L'équipe de Cuistot du coin
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Il s’agit tout d’abord d’une aventure humaine fondée par Anaëlle et Romain, deux globe-trotteurs passionnés de cuisine ! Lors de leur tour du monde, ils ont
					partagés le quotidien d’agriculteurs et de cuisiniers de 10 pays d’Asie, d’Océanie et d’Amérique du Sud. Ils ont vécus des moments incroyables de convivialités
					et d'authenticités grâce à la cuisine. Après ce voyage d’une année, ils ont décidés de poser leurs bagages en Bretagne (leurs terres d’origines !) afin de
					recréer ces moments uniques. C’est maintenant à nous de vous faire voyager les papilles.
				</Typography>
				<img src="https://static.cuistotducoin.com/img/team/anaelle-and-romain.jpg" alt="anaelle-and-romain" height="600" width="337" />
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					La mission de Cuistot du Coin
				</Typography>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					L’accès à des saveurs authentiques pour toutes vos occasions
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					De la pause café en séminaire aux soirées organisées en entreprise en passant par les repas du midi vous trouverez votre bonheur. Nous avons réfléchi à
					plusieurs offres permettant de répondre à tous vos besoins et en gardant toujours en priorité : l’originalité, l’authenticité des recettes et{' '}
					<b>surtout le voyage des papilles</b> !
				</Typography>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					Le local et l’environnement au cœur de nos préoccupations
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Avec notre brigade de Cuistot originaires du monde entier, vous découvrirez des recettes venues d’ici et d’ailleurs! Tous nos Cuistots sont triés sur le volet
					pour vous offrir la meilleure expérience, aussi il s’agit principalement de petits artisans et petits traiteurs locaux. Le tout dans le respect de
					l’environnement avec des produits frais, local, de saison ainsi que des contenants écologiques.
				</Typography>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					Le local et l’environnement au cœur de nos préoccupations
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Avec notre brigade de Cuistot originaires du monde entier, vous découvrirez des recettes venues d’ici et d’ailleurs! Tous nos Cuistots sont triés sur le volet
					pour vous offrir la meilleure expérience, aussi il s’agit principalement de petits artisans et petits traiteurs locaux. Le tout dans le respect de
					l’environnement avec des produits frais, local, de saison ainsi que des contenants écologiques.
				</Typography>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					Cuisinez des liens avec vos équipes
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Nous avons pensez toutes nos solutions de restauration et d’activités culinaire pour que vous et vos équipes puissiez communiquer et partager un moment
					ensemble. Tout en apprenant et savourant de nouvelles saveurs !
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Envie d'en savoir plus ?
				</Typography>
				<Grid container justify="space-around" alignItems="center" className={classes.grid}>
					<Button variant="contained" color="secondary" href="/faq">
						Consultez notre FAQ !
					</Button>
				</Grid>
			</Container>
		</Layout>
	);
}
