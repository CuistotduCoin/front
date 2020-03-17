import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import cx from 'classnames';

// https://codepen.io/ArashRasteh/pen/QmgeLL
// https://codepen.io/nicolamihaita/pen/zKXAOW
// TODO : La carte "tremble" lorsqu'on bouge le curseur sur le contenu de la carte.
const styles = () => ({
	container: {
		backgroundColor: 'transparent',
		width: 360,
		height: 280,
		perspective: '1000px',
	},
	flipper: {
		width: '100%',
		height: '100%',
		transition: 'transform 0.8s',
		transformStyle: 'preserve-3d',
		'&:hover': {
			transform: 'rotateY(180deg)',
		},
	},
	front: {
		transformStyle: 'preserve-3d',
		backfaceVisibility: 'hidden',
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	back: {
		transformStyle: 'preserve-3d',
		backfaceVisibility: 'hidden',
		position: 'absolute',
		transform: 'rotateY(-180deg)',
		width: '100%',
		height: '100%',
	},
});

export interface IFlipCardProps {
	classes?: any;
	className?: string;
	front: any;
	back: any;
}

export class FlipCard extends React.Component<IFlipCardProps, {}> {
	public render() {
		const { classes, className, front, back } = this.props;

		return (
			<div className={cx(classes.container, className)}>
				<div className={classes.flipper}>
					<div className={classes.front}>{front}</div>
					<div className={classes.back}>{back}</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles as any)(FlipCard as any) as any;
