import { Trans } from "react-i18next";

export const TAGS = [
	{
		name: "react",
		type: "frontend",
		isFavorite: false
	},
	{
		name: "nextjs",
		type: "frontend",
		isFavorite: true
	},

	{
		name: "nodejs",
		type: "backend",
		isFavorite: true
	},
	{
		name: "mongodb",
		type: "data",
		isFavorite: true
	},
	{
		name: "sass",
		type: "frontend",
		isFavorite: false
	}
];

export const PROJECTS = [
	{
		name: "maral.fr",
		stack: ["nodejs", "mongodb"],
		description: <Trans>MaralSmallDescription</Trans>,
		github: "https://github.com",
		link: "maral.fr"
	},
	{
		name: "xs-url.fr",
		stack: ["nodejs", "mongodb", "react", "sass"],
		description: <Trans>XsUrlSmallDescription</Trans>,
		github: "https://github.com",
		link: ""
	},
	{
		name: "maral2.fr",
		stack: ["nodejs", "mongodb"],
		description: <Trans>MaralSmallDescription</Trans>,
		github: "https://github.com",
		link: ""
	}
];
