import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from 'mdi-material-ui/ChevronDown';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: theme.spacing(3),
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

type FAQProps = {
	faqList: any;
};

export default function FAQ(props: FAQProps) {
	const { faqList } = props;
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
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
	);
}
