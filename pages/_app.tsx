import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import "bootstrap/dist/css/bootstrap.min.css";

import "../public/main.css";

import type { AppProps } from "next/app";

import "../i18n";
const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
