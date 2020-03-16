import Step from "@material-ui/core/Step";
import StepContent from "@material-ui/core/StepContent";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const styles = () => ({
  stepper: {
    backgroundColor: "#fafafa"
  },
  h6: {
    fontSize: "1.4285714285714284rem"
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
        {steps.map((step, key) => (
          <Step active key={key}>
            <StepLabel disabled={false}>
              <Typography variant="h6" component="p">{step.title}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="subtitle1" component="p">{step.content}</Typography>
            </StepContent>
          </Step>
        ))
        }
      </Stepper>
    );
  }
}

export default withStyles(styles as any)(StaticSteper as any) as any;
