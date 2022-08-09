import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: {
			Clipboard: "Copied to clipboard!",

			OneLiner: "Im a software engineer crypto enjoyooor that loves to experiment",
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
		debug: true,
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
