// @EXTERNALS
import React from "react";
import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";
// @COMPONENTS
import Landing from "../components/sections/Landing";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
// @MISC

const Home = () => {
	return (
		<>
			<Head>
				<title>ablin42</title>
				<meta name="description" content="xxxxxxx" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ReactFullpage
				licenseKey={"gplv3-license"}
				autoScrolling={true}
				scrollingSpeed={800}
				anchors={["landing", "portfolio", "skills", "contact"]}
				navigation={true}
				navigationPosition={"right"}
				navigationTooltips={["Landing", "Portfolio", "Skills" /*, "Contact"*/]}
				showActiveTooltip={false}
				responsiveWidth={600}
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