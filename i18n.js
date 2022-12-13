import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Clipboard: 'Copied to clipboard!',

      OneLiner: 'Software Engineer & Crypto enjoyooor that loves to experiment through code',
      Intro: `I'm a self-taught dev as passionate as it gets: I started learning to code when I was in my teens & never stopped since then. On a daily basis I'm spending 
				the majority of my free time building side projects and researching anything Crypto related, both from a technical and a personal perspective. I believe permissionless 
				distributed systems are one of the most amazing thing there are, and that we -devs- should strive to improve them & live to the ethos of decentralization. I also happen to be really fond of UI/UX`,

      BullvsBearDescription: `An useful app to have an edge on other players on <pcsLink>Pancakeswap Predictions</pcsLink>.
			It compiles scraped data from their website to provide an intuitive representation of the bets going on there`,
      DungeonDefendersDescription: `An awesome GameFi project: Dungeon Defenders is a dungeon crawler where you explore procedurally generated dungeons;
			Your character & loot are NFTs that you need to stake to play the game in order to win rewards`,
      ChaprouletteDescription: `A fun project I built for a streamer, making use of Riot's API to assign the user a random champion and lane depending on the ennemy team from his last game`,
      XsUrlDescription: `A straightforward and easy to use URL shortener service with a nice UI, allowing users to redirect to an URL while spoofing its original URL`,

      MaralSmallDescription: `An e-commerce website built from scratch, designed to handle prints on demand with little to no maintenance`,
      XsUrlSmallDescription: `A small app to shorten URLs, with a nice & fast UI`,
      PrintfSmallDescription: `The printf function, rewritten in C`,
      PushSwapSmallDescription: `An algorithm to sort stacks with only a few instructions`,
      WireframeSmallDescription: `Renders graphical representation of a given mapping`,
      GetNextLineSmallDescription: `Reads the next line of a given file`,
      FillitSmallDescription: `Fit given tetris pieces into the smallest grid possible`,
      LibftSmallDescription: `A collection of useful functions in C`,
      CamagruSmallDescription: `Website allowing users to take pictures with their webcam & applying filters to them`,
      MatchaSmallDescription: `A Proof-of-Concept dating website`,
      HypertubeSmallDescription: `An app to query multiple torrent website at once & stream them in the browser`,
      FlipperSmallDescription: `Small app to scout for new coins posted on /biz/`,
      TokenizedSmallVotesDescription: `A tokenized voting system`,
      ChaprouletteSmallDescription: `App to roll a random champion & lane based on the ennemy team from the last game`,
      BullvsBearAPISmallDescription: `API for the bullvsbear app`,
      BullvsBearScrapingSmallDescription: `Scraping for the bullvsbear app`,
      BullvsBearSmallDescription: `Frontend for bullvsbear, an app to play Pancakeswap predictions`,
      DungeonDefendersSmallDescription: `Off-chain game using fully on-chain evolving NFTs`,
      AblinDevSmallDescription: `My portfolio website`,
      AirdropSmallDescription: `Generic script to claim airdrop by interacting directly with the smart contract`,
    },
  },
  fr: {
    translation: {
      Clipboard: 'Copié dans le presse-papier !',

      OneLiner: 'Je suis un développeur fullstack fan de crypto qui adore tester de nouvelles choses',
      Intro: `Je suis un développeur autodidacte passionné au possible: J'ai commencé à apprendre à coder lorsque j'étais adolescent et je n'ai jamais arrêté depuis. Dans une journée classique je passe la majeure
      partie de mon temps libre à développer des projets personnels et à faire des recherches sur tout ce qui est lié à la Crypto, tant d'un point de vue technique que personnel. Je crois que les systèmes distribués
      sans permission sont l'une des choses les plus incroyables qui existent, et que nous -développeurs- devrions nous efforcer de les améliorer et de vivre selon l'éthos de la décentralisation. Je suis également très
      fan d'UI/UX`,
      BullvsBearDescription: `Une application utile pour avoir un avantage sur les autres joueurs de <pcsLink>Pancakeswap Predictions</pcsLink>.
			Le site compile les données récupérées depuis Pancakeswap pour créer une représentation graphique intuitive du déroulements des parties précédentes`,
      DungeonDefendersDescription: `Un projet GameFi génial: Dungeon Defenders est un dungeon crawler où vous explorez des donjons générés procéduralement; Votre personnage et votre loot sont des NFTs qu'il faut stake pour jouer afin de gagner des récompenses`,
      ChaprouletteDescription: `Une application amusante que j'ai créée pour un streamer, en utilisant l'API de Riot pour assigner à l'utilisateur un champion et un rôle aléatoires en fonction de l'équipe adverse de sa dernière partie`,
      XsUrlDescription: `Un service de raccourcissement d'URL simple et facile à utiliser avec une UI facile à appréhender, permettant aux utilisateurs de rediriger vers une URL tout en masquant son URL d'origine`,

      MaralSmallDescription: `Une application e-commerce créée from scratch, pensée pour automatiser du print-on-demand pour le client`,
      XsUrlSmallDescription: `Une petite application web pour raccourcir des URLs, avec une UI simple et efficace`,
      PrintfSmallDescription: `La fonction printf, recodée en C`,
      PushSwapSmallDescription: `Un algorithme pour trier une stack avec un jeu d'instructions limité`,
      WireframeSmallDescription: `Un éxécutable permettant de dessiner une représentation graphique d'une carte`,
      GetNextLineSmallDescription: `Lit la prochaine ligne d'un fichier`,
      FillitSmallDescription: `Un éxécutable qui permet de placer des pièces de tetris dans le plus petit carré possible`,
      LibftSmallDescription: `Une librairie de fonctions utiles en C`,
      CamagruSmallDescription: `Un site web permettant aux utilisateurs de prendre des photos avec leur webcam et d'y appliquer des filtres`,
      MatchaSmallDescription: `Un POC de site de rencontre`,
      HypertubeSmallDescription: `Une application permettant de rechercher des torrents sur plusieurs sites en même temps et de les streamer dans le navigateur`,
      FlipperSmallDescription: `Une application permettant de détecter de nouveaux tokens postés sur /biz/`,
      TokenizedSmallVotesDescription: `Un système de vote tokenisé (ERC-20)`,
      ChaprouletteSmallDescription: `Une application permettant de choisir un champion et une lane aléatoirement en fonction de l'équipe adverse de la précédente partie`,
      BullvsBearAPISmallDescription: `API pour l'application bullvsbear`,
      BullvsBearScrapingSmallDescription: `Scraping pour l'application bullvsbear`,
      BullvsBearSmallDescription: `Frontend pour bullvsbear, une application permettant de jouer aux prédictions de Pancakeswap`,
      DungeonDefendersSmallDescription: `Application web de jeu off-chain utilisant des NFTs évolutifs entièrement on-chain`,
      AblinDevSmallDescription: `Mon site portfolio`,
      AirdropSmallDescription: `Un script générique pour collecter des airdrops en passant directement par leur smart contract`,
    },
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: 'en',
    resources,
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
