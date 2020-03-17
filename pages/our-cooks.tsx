import { Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: theme.spacing(3),
		},
	}),
);

export default function ourCook() {
	const classes = useStyles();

	return (
		<Layout>
			<Container className={classes.container}>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					La nourriture est au coeur de notre entreprise, le choix de nos Chefs Cuistots est primordial pour nous. C'est pourquoi nous avons sélectionner des
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos critères
				</Typography>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					Un univers
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Tous nos Chefs Cuistots sont des spécialistes dans leur domaine. Nous souhaitons vous faire voyager vos papilles, c'est pourquoi
				</Typography>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					Location de lieux adaptés aux entreprises
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Selon vos besoins, nous vous proposerons des lieux adaptés. Quelques soient vos contraintes techniques (estrade, projection, multi-salles,..) ou vos critères
					spécifiques (localisation, capacité d’accueil, horaires d’ouverture, accessibilité handicapés,…) nous vous trouverons le lieu qu'il vous faut !
				</Typography>
				<Typography variant="h4" align="center" component="h3" gutterBottom>
					Pour tous les budgets
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Nous avons sélectionner des lieux pour tous vos budgets.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Devenir un Chef Cuistot
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Vous êtes cuisiniez, pâtissier ou passionné ? <br />
					Vous êtes expert dans un type de cuisine spécifique : cuisine du monde (créole, américain, anglais, africains, asiatique, européen ...), cuisine healthy,
					pâtisserie etc. ? Alors n'hésitez pas à envoyer un email à contact@cuistotducoin.com ou appelez-nous au : 06 79 59 88 48
				</Typography>
			</Container>
		</Layout>
	);
}
