
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from "@material-ui/core/Stepper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const styles = () => ({
  stepper: {
    backgroundColor: "#fafafa"
  }
});

interface IStaticSteperProps {
  classes?: any;
  steps: any;
}

export class StaticSteper extends React.Component<IStaticSteperProps, {}> {
  public render() {
    const { classes, steps } = this.props;

    return (
      <Stepper orientation="vertical" className={classes.stepper}>
        {
          steps.map((step, key) => (
            <Step active key={key}>
              <StepLabel disabled={false}>{step.title}</StepLabel>
              <StepContent>
                <Typography>{step.content}</Typography>
              </StepContent>
            </Step>
          ))
        }
      </Stepper>
    );
  }
}

export default withStyles(styles as any)(StaticSteper as any) as any;