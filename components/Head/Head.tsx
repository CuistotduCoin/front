import NextSeo from "next-seo";
import { withRouter } from "next/router";
import React from "react";
import metaInfo from "../../shared/metaInfo";

export interface IHeadProps {
  router: any;
}

export class Head extends React.Component<IHeadProps, {}> {
  public render() {
    const { pathname } = this.props.router;
    const cleanPath = pathname.substr(1);

    const configSEO = {
      canonical: "",
      description:
        "Faîtes voyager vos papilles et ouvrez-vous à de nouvelles cultures par le biais de la cuisine aux côtés de nos Cuistots d'ailleurs.",
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
    };

    if (metaInfo[cleanPath] && metaInfo[cleanPath].description) {
      configSEO.description = metaInfo[cleanPath].description;
      configSEO.openGraph.description = metaInfo[cleanPath].description;
    }

    if (metaInfo[cleanPath] && metaInfo[cleanPath].href) {
      configSEO.canonical = metaInfo[cleanPath].url;
      configSEO.openGraph.url = metaInfo[cleanPath].url;
    }

    if (metaInfo[cleanPath] && metaInfo[cleanPath].title) {
      configSEO.title = metaInfo[cleanPath].title;
      configSEO.openGraph.title = metaInfo[cleanPath].title;
    }

    return <NextSeo config={configSEO} />;
  }
}

export default (withRouter(Head as any) as any) as any;
