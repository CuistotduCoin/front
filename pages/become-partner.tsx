import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../components/Layout";

const styles = (theme: Theme) => ({
    grid: {
        margin: "0px auto",
        maxWidth: 1080,
        padding: theme.spacing(3)
    }
});

interface IGiftProps {
    classes?: any;
}

export class Gift extends React.Component<IGiftProps, {}> {
    public render() {
        const { classes } = this.props;

        return (
            <Layout>
                <Grid
                    container
                    justify="space-around"
                    alignItems="center"
                    className={classes.grid}
                >
                    <div />
                </Grid>
            </Layout>
        );
    }
}

export default withStyles(styles as any)(Gift as any) as any;
