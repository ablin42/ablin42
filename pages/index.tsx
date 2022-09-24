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
        <title>ablin42</title>
        <meta name="description" content="xxxxxxx" />
        // TODO
        {/* <meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="csrf-token" content="<%= locals.csrfToken %>" />
		<meta name="robots" content="index,follow" />

		<meta name="application-name" content="Fullstack Web Developer | ablin@dev" />
		<meta name="author" content="Andréas Blin, Fullstack Web Developer freelance@ablin.dev" />
		<meta name="description" content="Web Developer Fullstack expert in Javascript Based in Paris | Ready to enhance your online activity and grow your business, open for hire" />
		<meta
			name="keywords"
			content="Developer, Développeur, Web, Fullstack, Paris, ile de france, ile, france, Portfolio, front-end, back-end, Création de site, Website building, Website, Freelance, ablin, dev, ablin@dev, ablin.dev, ablin42, Andréas Blin, Andréas, Blin, Javascript, Node.js, React, Nodejs, Vuejs, Vue.js, xs-url.fr, xs-url, xs url, url"
		/>
		<meta name="url" content="https://www.ablin.dev/" />
		<meta name="identifier-URL" content="https://www.ablin.dev/" />
		<meta name="category" content="Web Developer Fullstack" />

		<meta property="og:title" content="Fullstack Web Developer | ablin@dev" />
		<meta property="og:description" content="Web Developer Fullstack expert in Javascript Based in Paris | Ready to enhance your online activity and grow your business, open for hire" />

		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://www.ablin.dev/" />
		<meta property="og:image" content="https://www.ablin.dev/img/screencap.png" />

		<link rel="icon" href="/img/favicon.ico" type="image/x-icon" /> */}
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
