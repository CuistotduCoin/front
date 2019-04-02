import NextSeo from 'next-seo';

export const renderSEO = (meta, cleanPath) => {
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

  if (meta[cleanPath] && meta[cleanPath].noindex) {
    const noIndex = { noindex: true }
    return <NextSeo config={noIndex} />
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

export const getMetaInfo = () => {
  const meta = {
    'account-confirmation': {
      noindex: true
    },
    'account': {
      noindex: true
    },
    'become-cook': {
      description: "Partagez votre talent et transmettez votre savoir-faire",
      href: "https://www.cuistotducoin.com/become-cook",
      title: "Rejoignez la communauté des cuistots de Cuistot du Coin",
      metaDescription: "Partagez votre talent et transmettez votre savoir-faire",
      metaTitle: "Rejoignez la communauté des cuistots de Cuistot du Coin",
    },
    'become-partner': {
      description: "Partagez votre talent et transmettez votre savoir-faire",
      href: "https://www.cuistotducoin.com/become-partner",
      title: "Rejoignez la communauté des partenaires de Cuistot du Coin",
      metaDescription: "Partagez votre talent et transmettez votre savoir-faire",
      metaTitle: "Rejoignez la communauté des partenaires de Cuistot du Coin",
    },
    'business': {
      description: "Organisation d'ateliers de cuisine, journée d'équipe, traiteur événementiel et comité d'entreprise",
      href: "https://www.cuistotducoin.com/business",
      title: "Nos solutions de traiteur et d'activités pour vos équipes",
      metaDescription: "Découvrez nos prestations en entreprise du service traiteur aux animations d'équipe",
      metaTitle: "Cuistot du Coin au service de votre entreprise",
    },
    'cater': {
      description: "Cocktails déjeunatoires ou dinatoires sur mesure aux saveurs d’ici et d’ailleurs !",
      href: "https://www.cuistotducoin.com/cater",
      title: "Le traiteur qui fait voyager vos papilles pour un événements qui vous ressemble",
      metaDescription: "Le traiteur qui vous accompagne pour que vos événements soient uniques",
      metaTitle: "Traiteur pour vos événements d'entreprise dans le finistère",
    },
    'cook': {
      description: "Partagez votre talent et transmettez votre savoir-faire",
      href: "https://www.cuistotducoin.com/cook",
      title: "Rejoignez la communauté des cuistots de Cuistot du Coin",
      metaDescription: "Partagez votre talent et transmettez votre savoir-faire",
      metaTitle: "Rejoignez la communauté des cuistots de Cuistot du Coin",
    },
    'gift': {
      description: "Obtenez votre carte en un clic et offrez un cadeau original !",
      href: "https://www.cuistotducoin.com/gift",
      metaDescription: "Faites plaisir à vos proches avec une carte cadeau pour un atelier de cuisine",
      title: "Carte cadeau ",
      metaTitle: "Carte cadeau pour un atelier de cuisine",
    },
    'index': {
      description: "Embarquez pour une expérience culinaire savoureuse",
      href: "https://www.cuistotducoin.com",
      metaDescription: "Pour particuliers et entreprises découvrez nos saveurs authentiques en toutes occasions (avec simplicité et convivialité)",
      title: "Les saveurs du monde se cachent au coin de chez vous",
      metaTitle: "Cuistot du Coin : Organisateur d'événements culinaires",
    },
    'individual': {
      description: "Un Cuistot à vos côtés pour vous apprendre de nouvelles recettes et passer un moment convial et gourmand",
      href: "https://www.cuistotducoin.com/individual",
      metaDescription: "Participez à une activité pour tous pour apprendre à cuisiner et rencontrer des passionnés de cuisine",
      title: "Nos ateliers de cuisine à Brest",
      metaTitle: "Activité à Brest : Nos cours de cuisine dans le Finistère",
    },
    'invite-business': {
      description: "Obtenez des réductions sur vos événements en entreprise",
      href: "https://www.cuistotducoin.com/invite-business",
      metaDescription: "Obtenez des réductions et avantages sur les prestations professionnelles de Cuistot du Coin",
      title: "Parrainez vos contacts professionnels",
      metaTitle: "Parrainage Cuistot du Coin pour les entreprises",
    },
    'invite': {
      description: "En un clic obtenez une réduction ou un atelier de cuisine gratuitement",
      href: "https://www.cuistotducoin.com/invite",
      metaDescription: "Obtenez des réductions sur nos ateliers de cuisine",
      title: "Parrainez vos proches ",
      metaTitle: "Parrainage Cuistot du Coin pour les particuliers",
    },
    'join': {
      description: "",
      href: "https://www.cuistotducoin.com/join",
      metaDescription: "",
      title: "Rejoignez l'équipe de Cuistot du Coin",
      metaTitle: "Rejoignez l'équipe de Cuistot du Coin",
    },
    'login': {
      noindex: true
    },
    'mission': {
      description: "Découvrez les valeurs que nous portons",
      href: "https://www.cuistotducoin.com/mission",
      metaDescription: "Découvrez les valeurs et engagements de Cuistot du Coin",
      title: "Les missions de Cuistot du Coin",
      metaTitle: "Nos missions à travers l'organisation d'évenements culinaire",
    },
    'not-found': {
      noindex: true
    },
    'payment': {
      noindex: true
    },
    'presskit': {
      description: "Communiqué de presse et contact de l'équipe des Cuistots du Coin",
      href: "https://www.cuistotducoin.com/invite-business",
      metaDescription: "Communiqué de presse et contact de l'équipe des Cuistots du Coin",
      title: "Contact presse",
      metaTitle: "Contact presse - Cuistot du Coin ",
    },
    'profile': {
      noindex: true
    },
    'reset-password-request': {
      noindex: true
    },
    'reset-password': {
      noindex: true
    },
    'search': {
      noindex: true
    },
    'sign-up': {
      noindex: true
    },
    'subscription': {
      description: "Marre des activités extra-scolaires classiques ? Faites découvrir la pâtisserie à vos enfants !",
      href: "https://www.cuistotducoin.com/subscription",
      metaDescription: "Marre des activités extra-scolaires classiques ? Faites découvrir la pâtisserie à vos enfants !",
      title: "Abonnement : Atelier de cuisine pour enfant",
      metaTitle: "Abonnement : Atelier de cuisine pour enfant",
    },
    'team': {
      description: "Découvrez l'équipe de Cuistot du Coin",
      href: "https://www.cuistotducoin.com/team",
      metaDescription: "Créée en 2017 par Anaëlle et Romain Quellec, Cuistot du Coin est une entreprise qui organise des événements culinaire...",
      title: "Qui sommes-nous ?",
      metaTitle: "L'équipe - Cuistot du Coin",
    },
    'terms-pro': {
      noindex: true
    },
    'terms': {
      noindex: true
    },
    'testimony-business': {
      description: "Découvrez les témoignages sur nos prestations pour les entreprises",
      href: "https://www.cuistotducoin.com/testimony-business",
      metaDescription: "Retrouvez ici les avis de nos clients sur leurs événements d'entreprise réalisés par Cuistot du Coin",
      title: "Les avis de nos clients",
      metaTitle: "Témoignage sur nos événements d'entreprises",
    },
    'testimony-cook': {
      description: "Vivez l'expérience dans les yeux de nos Cuistots",
      href: "https://www.cuistotducoin.com/testimony-cook",
      metaDescription: "Le regard de nos Cuistots sur leur travail avec nous",
      title: "Les avis de nos Cuistots",
      metaTitle: "Témoignage de nos Cuistots",
    },
    'testimony-gourmet': {
      description: "Les témoignages sur nos ateliers de cuisine collectifs et privatifs",
      href: "https://www.cuistotducoin.com/testimony-gourmet",
      metaDescription: "Découvrez les témoignages sur nos ateliers de cuisine",
      title: "Les avis de nos Gourmets",
      metaTitle: "Avis sur nos ateliers de cuisine ",
    },
    'testimony-partner': {
      description: "Différents témoignages sur les partenariats avec Cuistot du Coin",
      href: "https://www.cuistotducoin.com/testimony-partner",
      metaDescription: "Ce qu'ils disent sur notre partenariat",
      title: "Les avis de nos partenaires",
      metaTitle: "Nos partenaires",
    },
    'work-council': {
      description: "Une offre qui plaira à tous et adaptée au fonctionnement de votre comité d'entreprise",
      href: "https://www.cuistotducoin.com/work-council",
      metaDescription: "Offrez à vos salariés une diversité d'activité gourmande et convivial",
      title: "L'activité gourmande qui plaira aux membres de votre CE",
      metaTitle: "Cours de cuisine pour comité d'entreprise",
    },
    'working-day': {
      description: "Donnez une autre saveur à vos événements d'entreprise",
      href: "https://www.cuistotducoin.com/working-day",
      metaDescription: "Faites voyager les papilles le temps d'une journée de travail",
      title: "Organisation sur mesure de vos journées en équipe",
      metaTitle: "Journée d'équipe savoureuse : Accueil, goûter et déjeuner savoureux",
    },
    'workshop-business': {
      description: "Partagez une expérience convivial en équipe au côté de Cuistots passionnés ",
      href: "https://www.cuistotducoin.com/team",
      metaDescription: "Réunissez vos équipes autour d'un atelier culinaire fédérateur",
      title: "Une activité de cohésion savoureuse et sur mesure pour vos salariés",
      metaTitle: "Atelier de cuisine - Team building en entreprise",
    },
    'workshop-edit': {
      noindex: true
    },
    'workshop-new': {
      noindex: true
    },
    'workshop': {
      noindex: true
    }
  };

  return meta;
};
