import { withStyles } from "@material-ui/core/styles";
import cx from 'classnames';
import NextSeo from "next-seo";
import { withRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import metaInfo from "../../shared/metaInfo";

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
  canonical?: string;
  children: any;
  className?: string;
  headerProps?: object;
  router: any;
}

export class Layout extends React.Component<ILayoutProps, {}> {
  public static defaultProps: Partial<ILayoutProps> = {
    headerProps: {},
  };

  public renderSEO(meta, cleanPath) {

    if (meta[cleanPath] && meta[cleanPath].noindex) {
      const noIndex = { noindex: true }
      return <NextSeo config={noIndex} />
    }

    const configSEO = {
      canonical: "",
      description:
        "Faîtes voyager vos papilles et ouvrez-vous à de nouvelles cultures par le biais de la cuisine aux côtés de nos Cuistots d'ailleurs.",
      noindex: false,
      openGraph: {
        defaultImageHeight: 1200,
        defaultImageWidth: 1200,
        description:
          "Faîtes voyager vos papilles et ouvrez-vous à de nouvelles cultures par le biais de la cuisine aux côtés de nos Cuistots d'ailleurs.",
        images: [
          {
            alt: "Cuistot du coin",
            height: 600,
            url: "https://www.example.ie/og-image-01.jpg",
            width: 800
          },
          {
            alt: "Og Image Alt",
            height: 800,
            url: "https://www.example.ie/og-image-02.jpg",
            width: 900
          },
          { url: "https://www.example.ie/og-image-03.jpg" },
          { url: "https://www.example.ie/og-image-04.jpg" }
        ],
        locale: "fr_FR",
        site_name: "Cuistot du Coin",
        title: "Atelier de cuisine pour particuliers et entreprises",
        type: "website",
        url: "https://www.cuistotducoin.com"
      },
      title: "Cuistot du coin",
      twitter: {
        cardType: "summary_large_image",
        handle: "@CuistotduCoin",
        site: "@CuistotduCoin"
      }
    }

    if (meta[cleanPath] && meta[cleanPath].metaDescription) {
      configSEO.description = meta[cleanPath].metaDescription;
      configSEO.openGraph.description = meta[cleanPath].metaDescription;
    }

    if (meta[cleanPath] && meta[cleanPath].href) {
      configSEO.canonical = meta[cleanPath].href;
      configSEO.openGraph.url = meta[cleanPath].href;
    }

    if (meta[cleanPath] && meta[cleanPath].metaTitle) {
      configSEO.title = meta[cleanPath].metaTitle;
      configSEO.openGraph.title = meta[cleanPath].metaTitle;
    }

    return <NextSeo config={configSEO} />;
  };

  public render() {
    const { classes, component, children, headerProps, className } = this.props;
    const { pathname } = this.props.router;
    const cleanPath = pathname.substr(1);

    let title: string;
    if (this.props.title) {
      title = this.props.title
    } else {
      if (metaInfo[cleanPath] && metaInfo[cleanPath].title) {
        title = metaInfo[cleanPath].title;
      }
    }

    let description: string;
    if (this.props.description) {
      description = this.props.description
    } else {
      if (metaInfo[cleanPath] && metaInfo[cleanPath].description) {
        description = metaInfo[cleanPath].description;
      }
    }

    if (this.props.canonical) {
      metaInfo[cleanPath].canonical = this.props.canonical;
    }

    return (
      <div className={cx(classes.container, className)}>
        {this.renderSEO(metaInfo, cleanPath)}
        <div className={classes.content}>
          <Header {...headerProps} />
          <Hero
            imageURL="https://static.cuistotducoin.com/img/home/landing.jpg"
            valueProposition={title}
            description={description}
          >
            {component}
          </Hero>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles as any)(withRouter(Layout as any) as any) as any;
