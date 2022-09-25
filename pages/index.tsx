// @EXTERNALS
import React from 'react';
import Head from 'next/head';
import ReactFullpage from '@fullpage/react-fullpage';
// @COMPONENTS
import Landing from '../components/sections/Landing';
import Portfolio from '../components/sections/Portfolio';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
// @MISC

const Home = () => {
  return (
    <>
      <Head>
        <title>ablin42 | Fullstack Blockchain Developer</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="application-name" content="Fullstack Blockchain Developer | ablin@dev" />
        <meta name="author" content="0xHarb, Fullstack Blockchain Developer | freelance@ablin.dev" />
        <meta
          name="description"
          content="Fullstack Blockchain Developer with strong expertise in Javascript, based in Paris"
        />
        <meta
          name="keywords"
          content="Developer, Développeur, Web, Crypto, NFT, Solidity, Blockchain, Cryptomonnaie, Cryptography, Cryptographie, Web3, Fullstack, Paris, ile de france, ile, france, Portfolio, front-end, back-end, Création de site, Website building, Website, Freelance, ablin, dev, ablin@dev, ablin.dev, ablin42, Andréas Blin, Andréas, Blin, Javascript, Node.js, React, Nodejs, Vuejs, Vue.js, xs-url.fr, xs-url, xs url, url, maral.fr, chaproulette.lol, bullvsbear.pro, dungeondefenders.xyz, dungeon defenders, scraping, token, ERC-20, ERC-721"
        />
        <meta name="url" content="https://www.ablin.dev/" />
        <meta name="identifier-URL" content="https://www.ablin.dev/" />
        <meta name="category" content="Fullstack Blockchain Developer" />
        <meta property="og:title" content="Fullstack Blockchain Developer | ablin@dev" />
        <meta
          property="og:description"
          content="Fullstack Blockchain Developer with strong expertise in Javascript, based in Paris"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ablin.dev/" />
        <meta property="og:image" content="/screencap.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <ReactFullpage
        licenseKey={'gplv3-license'}
        autoScrolling={true}
        scrollingSpeed={800}
        anchors={['landing', 'portfolio', 'skills', 'contact']}
        navigation={true}
        navigationPosition={'right'}
        navigationTooltips={['About me', 'Highlights', 'Skills & Projects' /*, "Contact"*/]}
        showActiveTooltip={false}
        responsiveWidth={800}
        //responsiveHeight: 800,

        //lockAnchors: true,
        //animateAnchor: false,
        //recordHistory: false,
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Landing />
              <Portfolio />
              <Skills />
              {/* <Contact /> */}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Home;
