import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(3)
    }
  })
);

export default function ourCook() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          dsf
        </Grid>
      </Container>
    </Layout>
  );
}
