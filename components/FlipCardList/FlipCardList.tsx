import Button from '@material-ui/core/Button';
import teal from '@material-ui/core/colors/teal';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import FlipCard from '../FlipCard';
import Link from '../Link';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backgroundImageFront: {
			bottom: 0,
			left: 0,
			position: 'absolute',
			right: 0,
			top: 0,
			backgroundPosition: '50%',
			backgroundSize: 'cover',
			zIndex: -1,
		},
		backgroundImageBack: {
			backgroundColor: teal[800],
			height: '100%',
			width: '100%',
		},
		flipcard: {
			margin: theme.spacing(1),
		},
		flipBoard3DEffect: {
			transform: 'translateZ(90px) scale(.91)',
			margin: theme.spacing(1),
		},
		gridFlipBox: {
			height: '100%',
		},
		typoFlipBoardTitle: {
			color: 'white',
			textShadow: '1px 1px #585A5A',
			textTransform: 'uppercase',
		},
		typoFlipBoardSubtitle: {
			color: 'white',
		},
	}),
);

interface ICardProps {
	title: string;
	content: string;
	image: string;
	link: string;
}

interface IFlipCardListProps {
	listCard: ICardProps[];
}

export default function flipCardList({ listCard }: IFlipCardListProps) {
	const classes = useStyles();

	return (
		<>
			{listCard.map((card, key) => (
				<Grid item sm={'auto'} xs={12} key={key}>
					<Link href={card.link}>
						<FlipCard
							className={classes.flipcard}
							front={
								<div className={classes.backgroundImageFront} style={{ backgroundImage: `url(${card.image})` }}>
									<Grid container alignContent="center" justify="center" className={classes.gridFlipBox}>
										<Grid item className={classes.flipBoard3DEffect}>
											<Typography variant="h3" align="center" className={classes.typoFlipBoardTitle}>
												{card.title}
											</Typography>
										</Grid>
									</Grid>
								</div>
							}
							back={
								<div className={classes.backgroundImageBack}>
									<Grid container alignContent="center" justify="center" className={classes.gridFlipBox}>
										<Grid item className={classes.flipBoard3DEffect}>
											<Typography variant="h5" align="center" className={classes.typoFlipBoardTitle}>
												{card.title}
											</Typography>
											<Typography variant="body1" align="center" className={classes.typoFlipBoardSubtitle} gutterBottom>
												{card.content}
											</Typography>
											<Grid container justify="space-around">
												<Button variant="contained" color="secondary">
													Obtenir plus d'infos
												</Button>
											</Grid>
										</Grid>
									</Grid>
								</div>
							}
						/>
					</Link>
				</Grid>
			))}
		</>
	);
}
