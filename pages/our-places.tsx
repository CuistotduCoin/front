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

export default function ourPlaces() {
	const classes = useStyles();

	return (
		<Layout>
			<Container className={classes.container}>
				<Typography variant="h5" align="center" component="p" gutterBottom>
					Parce que votre entreprise ne permets pas toujours d’accueillir vos réceptions, événements, journée d'équipe etc. Nous avons sélectionné pour vous différents
					lieux à Brest, dans le Finistère et même dans la Bretagne entière.
				</Typography>
				<Typography variant="h3" align="center" component="h2" gutterBottom>
					Nos critères
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Pour vous, nous avons sélectionné des espaces uniques. Nous avons sélectionner parmi des dizaines de lieux ceux qui sont à la fois les plus adaptés,
					confidentiels et charismatiques.
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
					Devenir un lieu partenaire
				</Typography>
				<Typography variant="h5" align="justify" component="p" gutterBottom>
					Vous avez un lieu que vous souhaitez louer ou que vous louez actuellement ? Voici quelques critères qui nous tiennent à coeur :
					<br />
					Grandes pièces pour accueillir des cocktails, des salles de travail, décoration soignée, mobilier à disposition, etc. Si vous disposez de ces critères, alors
					n'hésitez pas à envoyer un email à contact@cuistotducoin.com ou appelez-nous au : 06 79 59 88 48
				</Typography>
			</Container>
		</Layout>
	);
}
