// import "bootstrap/dist/css/bootstrap.min.css";
import "../public/main.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
