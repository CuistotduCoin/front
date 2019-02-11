import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import isEmpty from 'lodash.isempty';
import React from "react";
import { compose } from "recompose";
import ProgressBar from "../../components/ProgressBar";

const styles = {
  form: {
    margin: "0px auto",
    maxWidth: 540,
    padding: 24,
    paddingTop: 0,
    minHeight: 300
  },
  buttons: {
    marginTop: '30px'
  }
};

interface IWizardFormProps {
  classes?: any;
  children: any;
  className?: string;
  initialValues: object;
  progressBarProps?: object;
  onSubmit(values: any, bag: any);
}

interface IWizardFormState {
  page: number;
}

class WizardForm extends React.Component<IWizardFormProps, IWizardFormState> {
  // tslint:disable-next-line
  public static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = { page: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.computeButtons = this.computeButtons.bind(this);
  }

  public next() {
    this.setState(state => ({ page: Math.min(state.page + 1, this.props.children.length - 1) }));
  }

  public previous() {
    this.setState(state => ({ page: Math.max(state.page - 1, 0) }));
  }

  public handleSubmit(values, bag) {
    const { children, onSubmit } = this.props;
    const isLastPage = this.state.page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values, bag);
    }
    this.next();
    bag.setSubmitting(false);
  };

  public computeButtons(page, isSubmitting) {
    const buttons: any = [];
    const isLastPage = page === React.Children.count(this.props.children) - 1;

    if (page > 0) {
      buttons.push(
        <Button type="button" variant="contained" color="secondary" key="PreviousButton" onClick={this.previous}>
          Précédent
        </Button>
      );
    }
    if (!isLastPage) {
      buttons.push(
        <Button type="submit" variant="contained" color="secondary" key="NextButton">
          Suivant
        </Button>
      );
    }
    if (isLastPage) {
      buttons.push(
        <Button type="submit" variant="contained" color="secondary" key="SubmitButton" disabled={isSubmitting}>
          Proposer l'atelier
        </Button>
      );
    }

    return buttons;
  };

  public render() {
    const { children, initialValues, progressBarProps, className, classes } = this.props;
    const { page } = this.state;
    const activePage: any = React.Children.toArray(children)[page];

    return (
      <Formik
        initialValues={initialValues}
        enableReinitialize={false}
        onSubmit={this.handleSubmit}
        validateOnChange={false}
        validationSchema={activePage.props.validationSchema}
        render={(props) => {
          const { handleSubmit, isSubmitting, isValid, validateForm } = props;

          const buttons = this.computeButtons(page, isSubmitting);

          let progressBar;
          if (progressBarProps) {
            progressBar = React.createElement(ProgressBar, {
              ...progressBarProps,
              page,
              onIconClick: (newPage: number) => {
                if (newPage < page) {
                  this.setState({ page: newPage });
                } else if (newPage > page) {
                  validateForm().then(res => {
                    if (isEmpty(res)) {
                      this.setState({ page: newPage });
                    }
                  })
                }
              },
              enableProgress: isValid,
            });
          }

          return (
            <div className={className}>
              {progressBar}
              <form onSubmit={handleSubmit} className={classes.form}>
                {activePage}
                <Grid
                  container
                  xs={12}
                  justify={buttons.length === 1 ? 'center' : 'space-between'}
                  alignItems="center"
                  className={classes.buttons}
                >
                  {buttons}
                </Grid>
              </form>
            </div>
          );
        }}
      />
    );
  }
}

const enhance = compose(
  withStyles(styles as any),
);

export default enhance(WizardForm);