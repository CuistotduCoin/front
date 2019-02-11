import { withStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout";
import React from "react";

const styles = () => ({
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    background: '#4c4747',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    backgroundImage: 'url(https://i.gifer.com/W3pz.gif)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    mixBlendMode: 'overlay'
  },
  text: {
    height: '100vh',
    color: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover'
  },
  title: {
    fontSize: '70px',
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  message: {
    fontSize: '25px'
  }
});

interface INotFoundProps {
  classes: any;
}

export class NotFound extends React.Component<INotFoundProps, {}> {
  public render() {
    const { classes } = this.props;
    return (
      <Layout>
        <div className={classes.container}>
          <div className={classes.background} />
          <div className={classes.text}>
            <div className={classes.title}>Page introuvable</div>
            <div className={classes.message}>Désolé, la page que vous essayez d’atteindre n’est pas disponible...</div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles as any)(NotFound as any) as any;
