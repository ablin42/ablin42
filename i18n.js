import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: {
			Clipboard: "Copied to clipboard!",

			OneLiner: "Software Engineer & Crypto enjoyooor that loves to experiment through code",
			Intro: `I'm a self-taught dev as passionate as it gets: I started learning to code when I was in my teens & never stopped since then. On a daily basis I'm spending 
				the majority of my free time building side projects and researching anything Crypto related, both from a technical and a personal perspective. I believe permissionless 
				distributed systems are one of the most amazing thing there are, and that we -devs- should strive to improve them & live to the ethos of decentralization. I also happen to be really fond of UI/UX`,

			BullvsBearDescription: `An useful app to have an edge on other players on <pcsLink>Pancakeswap Predictions</pcsLink>.
			It compiles scraped data from their website to provide a nice graphical & intuitive representation of the bets going on there`,
			DungeonDefendersDescription: `An awesome GameFi project: Dungeon Defenders is a dungeon crawler where you explore procedurally generated dungeons and monsters,
			the character & loot are NFTs that you need to stake to play the game and attempt to win rewards`,
			ChaprouletteDescription: `A fun project I built for a streamer, making use of Riot's API to assign the user a random champion and lane depending on the ennemy team from his last game`,
			XsUrlDescription: `A straightforward and easy to use URL shortener service with a nice UI, allowing users to redirect to an URL while spoofing its original URL`,

			MaralSmallDescription: `An e-commerce website built from scratch, designed to handle prints on demand with little to no maintenance`,
			XsUrlSmallDescription: `A small app to shorten URLs, with a nice & fast UI`
		}
	},
	fr: {
		translation: {
			Clipboard: "Copié dans le presse-papier !",

			OneLiner: "french Im a software engineer & crypto enjoyooor that loves to experiment",
			Intro: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus posuere metus, tincidunt
					pellentesque quam mattis vitae. Donec ullamcorper ipsum nibh, vel efficitur ante congue eget. Duis ut ligula
					ipsum. Ut eu pellentesque orci. Sed accumsan iaculis ex, ut venenatis lectus tristique congue. Cras
					venenatis sit amet sem vel tincidunt. Aenean facilisis in sem in pretium. Pellentesque quis quam id diam
					aliquam accumsan ac a ante. Nam vel placerat ipsum.`,

			BullvsBearDescription: `An awesome project involving blockchain, gaming, and awesome devs lorem ipsum dolor sit amet lorem ipsum
									dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet`,
			DungeonDefendersDescription: `An awesome project involving blockchain, gaming, and awesome devs lorem ipsum dolor sit amet lorem ipsum
									dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet`,
			ChaprouletteDescription: `An awesome project involving blockchain, gaming, and awesome devs lorem ipsum dolor sit amet lorem ipsum
									dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet`,
			XsUrlDescription: `An awesome project involving blockchain, gaming, and awesome devs lorem ipsum dolor sit amet lorem ipsum
									dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet`,

			MaralSmallDescription: `blablablablablablablablalblalblaldlalps alsp lalsp aslpapsl paqsl apsla psl apslap sl`,
			XsUrlSmallDescription: `"A really cool project to spoof & shorten your URLs`
		}
	}
};

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	.init({
		// debug: true,
		fallbackLng: "en",
		resources,
		// lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
