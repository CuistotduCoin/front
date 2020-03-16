import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";

export default function individual() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" component="h2" gutterBottom>
          Cuistot du coin & Covid-19
        </Typography>
        <Typography variant="h5" align="center" component="h3" gutterBottom>
          Pour cause de covid-19, notre activité d'atelier de cuisine est
          suspendue jusqu'a nouvel ordre
        </Typography>
      </Container>
    </Layout>
  );
}
