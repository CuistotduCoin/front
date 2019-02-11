import { withStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../../components/Layout";

const styles = () => ({});

interface IProfilProps {
  classes?: any;
}

export class Profil extends React.Component<IProfilProps, {}> {
  public render() {
    return (
      <Layout />
    );
  }
}

export default withStyles(styles as any)(Profil as any) as any;
