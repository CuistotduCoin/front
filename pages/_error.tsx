import { withStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../components/Layout";

const styles = () => ({
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    background: "#4c4747",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  background: {
    backgroundImage: "url(https://i.gifer.com/W3pz.gif)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    mixBlendMode: "overlay"
  },
  text: {
    height: "100vh",
    color: "white",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover"
  },
  title: {
    fontSize: "70px",
    fontWeight: "bold",
    marginBottom: "30px"
  },
  message: {
    fontSize: "25px"
  }
});

interface IErrorProps {
  classes: any;
}

export class Error extends React.Component<IErrorProps, {}> {
  public render() {
    const { classes } = this.props;
    return (
      <Layout noHero={true}>
        <div className={classes.container}>
          <div className={classes.background} />
          <div className={classes.text}>
            <div className={classes.title}>Page introuvable</div>
            <div className={classes.message}>
              Désolé, la page que vous essayez d’atteindre n’est pas
              disponible...
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles as any)(Error as any) as any;
