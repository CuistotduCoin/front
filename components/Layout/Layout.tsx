import { withStyles } from "@material-ui/core/styles";
import cx from 'classnames';
import { withRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

const styles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  content: {
    flex: 1
  }
});

interface ILayoutProps {
  classes: any;
  component: any;
  title?: string;
  description?: string;
  children: any;
  className?: string;
  headerProps?: object;
  noHero: boolean;
}

export class Layout extends React.Component<ILayoutProps, {}> {
  public static defaultProps: Partial<ILayoutProps> = {
    headerProps: {},
    noHero: false
  };

  public render() {
    const { classes, component, title, description, children, className, headerProps, noHero } = this.props;

    return (
      <div className={cx(classes.container, className)}>
        <div className={classes.content}>
          <Header {...headerProps} />
          {!noHero &&
            <Hero
              imageURL="https://static.cuistotducoin.com/img/home/landing.jpg"
              valueProposition={title}
              description={description}
            >
              {component}
            </Hero>
          }
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles as any)(withRouter(Layout as any) as any) as any;
