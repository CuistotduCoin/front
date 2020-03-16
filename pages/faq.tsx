import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from 'mdi-material-ui/ChevronDown';
import React from 'react';
import Layout from '../components/Layout';
import { faqList } from '../shared/faq';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: theme.spacing(3),
		},
		paper: {
			padding: theme.spacing(1),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			fontWeight: 'bold',
			flexShrink: 0,
		},
		link: {
			textDecorationColor: 'black',
			textDecoration: 'none',
		},
	}),
);

export default function faq() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Layout>
			<Container maxWidth="lg" className={classes.container}>
				<Grid container>
					{Object.keys(faqList).map((faqItemList, index) => (
						<React.Fragment key={index}>
							<Typography variant="h5" align="center" component="h3" gutterBottom>
								{faqItemList}
							</Typography>
							<Grid item xs={12}>
								{faqList[faqItemList].map((faq1, _index) => (
									<ExpansionPanel expanded={expanded === `panel-${index}-${_index}`} onChange={handleChange(`panel-${index}-${_index}`)} key={`panel-${index}-${_index}`}>
										<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
											<Typography noWrap className={classes.heading}>
												{faq1.question}
											</Typography>
										</ExpansionPanelSummary>
										<ExpansionPanelDetails>
											<div className={classes.link} dangerouslySetInnerHTML={{ __html: faq1.answer }} />
										</ExpansionPanelDetails>
									</ExpansionPanel>
								))}
							</Grid>
						</React.Fragment>
					))}
				</Grid>
			</Container>
		</Layout>
	);
}
