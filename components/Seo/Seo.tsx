import { NextSeo } from "next-seo";
import React from "react";

interface ISeoProps {
  meta: any;
  cleanPath: any;
}

export class Seo extends React.Component<ISeoProps, {}> {
  public static defaultProps: Partial<ISeoProps> = {
    cleanPath: "index"
  };

  public render() {
    const { meta, cleanPath } = this.props;

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
    };

    if (meta[cleanPath]?.noindex) {
      const noIndex = { noindex: true };
      return <NextSeo {...noIndex} />;
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

    return <NextSeo {...configSEO} />;
  }
}

export default Seo as any;
