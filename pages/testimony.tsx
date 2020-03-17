import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Theme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Layout from '../components/Layout';

const styles = (theme: Theme) => ({
	box: {
		lineHeight: 0,
		margin: theme.spacing(1),
	},
	grid: {
		margin: '0px auto',
		maxWidth: 1080,
		padding: theme.spacing(3),
	},
});

interface ITestimonyProps {
	classes?: any;
}

class Testimony extends React.Component<ITestimonyProps, {}> {
	public render() {
		const { classes } = this.props;

		const testimonies = [
			{
				name: 'Pierre Guilcher',
				content: `Un très bon moment partagé par le  groupe dans un nouveau lieu d'exception.`,
				image: 'https://static.cuistotducoin.com/img/testimony/apm.jpg',
			},
			{
				name: 'André Abiven',
				content: `Organisation sans défaut. Nous étions attendus et tout était fin prêt. Et l'atelier était mené par une cuisinière attentive et souriante. Très belle soirée pour l'ensemble des personnes.`,
				image: 'https://static.cuistotducoin.com/img/testimony/arkea.jpg',
			},
			{
				name: 'Isabelle Février',
				content: `Des produits de qualité, des saveurs exquises, une présentation respectueuse du développement durable, un personnel très sympathique et disponible.`,
				image: 'https://static.cuistotducoin.com/img/testimony/musee-beaux-arts-brest.jpg',
			},
			{
				name: 'Julie Courmarcel',
				content: `Prestation parfaite sur tous les points, depuis le début de nos échanges, jusqu'au jour J, et même après :). tant sur le point relationnel qu'organisationnel. Merci pour tout, vous avez grandement participé à la réussite de notre événement !"`,
				image: 'https://static.cuistotducoin.com/img/testimony/ildys.jpg',
			},
			{
				name: 'Christine Walid',
				content: `Créatifs, originaux, éthiques et durables.`,
				image: 'https://static.cuistotducoin.com/img/testimony/brest-metropole.jpg',
			},
			{
				name: 'Claire Etuebbe',
				content: `Une prestation de qualité ! Tout était parfait : Le lieu, l'accueil, le déjeuner, l'activité ... Merci !`,
				image: 'https://static.cuistotducoin.com/img/testimony/brittany-ferries.jpg',
			},
			{
				name: 'Florence Mirgon',
				content: `Original, gourmand, frais, healthy food.`,
				image: 'https://static.cuistotducoin.com/img/testimony/triskalia.jpg',
			},
		];

		const generalTestimonies = [
			{
				image: 'https://static.cuistotducoin.com/img/testimony/lidl.jpg',
			},
			{
				image: 'https://static.cuistotducoin.com/img/testimony/bourhis.jpg',
			},
			{
				image: 'https://static.cuistotducoin.com/img/testimony/seimi.jpg',
			},
			{
				image: 'https://static.cuistotducoin.com/img/testimony/apside.jpg',
			},
			{
				image: 'https://static.cuistotducoin.com/img/testimony/ixblue.jpg',
			},
		];

		return (
			<Layout position="absolute" color="secondary">
				<Container>
					<Typography variant="h2" align="center" component="h2" gutterBottom className={classes.title}>
						ILS NOUS FONT CONFIANCE
					</Typography>

					<Container maxWidth="md" className={classes.container}>
						{testimonies.map((testimonie, key) => (
							<>
								<Grid container direction="column" className={classes.grid}>
									<Grid container direction={key % 2 === 0 ? 'row' : 'row-reverse'} alignItems="flex-end">
										<Box boxShadow={1} className={classes.box}>
											<img key={key} src={testimonie.image} />
										</Box>
										<Typography variant="subtitle1" component="p" color="secondary">
											{testimonie.name}
										</Typography>
									</Grid>
									<Grid>
										<Typography variant="body1" align={key % 2 === 0 ? 'left' : 'right'}>
											{testimonie.content}
										</Typography>
									</Grid>
								</Grid>
							</>
						))}
					</Container>
					<Typography align="center">Et d'autres encore...</Typography>
					<Grid container justify="space-around" className={classes.grid}>
						{generalTestimonies.map((testimonie, key) => (
							<Box boxShadow={1} key={key} className={classes.box}>
								<img src={testimonie.image} />
							</Box>
						))}
					</Grid>
				</Container>
			</Layout>
		);
	}
}

export default withStyles(styles as any)(Testimony as any) as any;
