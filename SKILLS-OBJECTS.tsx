import { Trans } from 'react-i18next';

export const TAGS = [
  {
    name: 'react',
    type: 'frontend',
    isFavorite: true,
  },
  {
    name: 'nextjs',
    type: 'frontend',
    isFavorite: true,
  },
  {
    name: 'nodejs',
    type: 'backend',
    isFavorite: true,
  },
  {
    name: 'mongodb',
    type: 'data',
    isFavorite: true,
  },
  {
    name: 'javascript',
    type: 'frontend', //frontend, backend...
    isFavorite: false,
  },
  {
    name: 'typescript',
    type: 'frontend', //frontend, backend...
    isFavorite: false,
  },
  {
    name: 'vuejs',
    type: 'frontend',
    isFavorite: false,
  },
  {
    name: 'php',
    type: 'backend',
    isFavorite: false,
  },
  {
    name: 'sql',
    type: 'backend',
    isFavorite: false,
  },
  {
    name: 'aws',
    type: 'other',
    isFavorite: false,
  },
  {
    name: 'C',
    type: 'backend',
    isFavorite: false,
  },
  {
    name: 'solidity',
    type: 'blockchain',
    isFavorite: true,
  },
  {
    name: 'nft',
    type: 'blockchain',
    isFavorite: true,
  },
];

export const PROJECTS = [
  {
    name: 'Maral.fr',
    stack: ['nodejs', 'mongodb', 'aws', 'stripe'],
    description: <Trans>MaralSmallDescription</Trans>,
    github: 'https://github.com/ablin42/seyrene',
    link: 'https://maral.fr/',
  },
  {
    name: 'Xs-url.fr',
    stack: ['typescript', 'nodejs', 'mongodb', 'react'],
    description: <Trans>XsUrlSmallDescription</Trans>,
    github: 'https://github.com/ablin42/url-shortener',
    link: 'http://xs-url.fr/',
  },
  {
    name: 'Printf',
    stack: ['C'],
    description: <Trans>PrintfSmallDescription</Trans>,
    github: 'https://github.com/ablin42/ft_printf',
    link: '',
  },
  {
    name: 'PushSwap',
    stack: ['C'],
    description: <Trans>PushSwapSmallDescription</Trans>,
    github: 'https://github.com/ablin42/push_swap',
    link: '',
  },
  {
    name: 'Wireframe',
    stack: ['C'],
    description: <Trans>WireframeSmallDescription</Trans>,
    github: 'https://github.com/ablin42/Wireframe',
    link: '',
  },
  {
    name: 'GetNextLine',
    stack: ['C'],
    description: <Trans>GetNextLineSmallDescription</Trans>,
    github: 'https://github.com/ablin42/getnextline',
    link: '',
  },
  {
    name: 'Fillit',
    stack: ['C'],
    description: <Trans>FillitSmallDescription</Trans>,
    github: 'https://github.com/ablin42/fillit',
    link: '',
  },
  {
    name: 'Libft',
    stack: ['C'],
    description: <Trans>LibftSmallDescription</Trans>,
    github: 'https://github.com/ablin42/libft',
    link: '',
  },
  {
    name: 'Camagru',
    stack: ['PHP', 'Javascript', 'SQL'],
    description: <Trans>CamagruSmallDescription</Trans>,
    github: 'https://github.com/ablin42/Camagru',
    link: '',
  },
  {
    name: 'Matcha',
    stack: ['PHP', 'Javascript', 'SQL', 'Vuejs'],
    description: <Trans>MatchaSmallDescription</Trans>,
    github: 'https://github.com/ablin42/matcha',
    link: '',
  },
  {
    name: 'Hypertube',
    stack: ['Javascript'],
    description: <Trans>HypertubeSmallDescription</Trans>,
    github: 'https://github.com/ablin42/torrent',
    link: '',
  },
  {
    name: 'Flipper',
    stack: ['React', 'Javascript'],
    description: <Trans>FlipperSmallDescription</Trans>,
    github: 'https://github.com/ablin42/flipper',
    link: '',
  },
  {
    name: 'TokenizedVotes',
    stack: ['Solidity', 'Javascript', 'Typescript'],
    description: <Trans>TokenizedSmallVotesDescription</Trans>,
    github: 'https://github.com/ablin42/HARBTEAM-08-Tokenized-Votes',
    link: '',
  },
  {
    name: 'Chaproulette.lol',
    stack: ['Nextjs', 'React', 'Javascript', 'Typescript'],
    description: <Trans>ChaprouletteSmallDescription</Trans>,
    github: 'https://github.com/ablin42/chaproulette',
    link: 'https://chaproulette.lol/',
  },
  {
    name: 'BullvsBear API',
    stack: ['Nodejs', 'Javascript', 'MongoDB'],
    description: <Trans>BullvsBearAPISmallDescription</Trans>,
    github: 'https://github.com/ablin42/prediction-api/blob/master/package.json',
    link: 'https://pcs-prediction-api.herokuapp.com/',
  },
  {
    name: 'BullvsBear Scraping',
    stack: ['Nodejs', 'Javascript', 'MongoDB', 'Puppeteer'],
    description: <Trans>BullvsBearScrapingSmallDescription</Trans>,
    github: 'https://github.com/ablin42/prediction-scraping',
    link: '',
  },
  {
    name: 'BullvsBear',
    stack: ['React', 'Nextjs', 'Javascript'],
    description: <Trans>BullvsBearSmallDescription</Trans>,
    github: 'https://github.com/ablin42/bullvsbear',
    link: 'https://www.bullvsbear.pro/',
  },
  {
    name: 'Dungeon Defenders',
    stack: ['Solidity', 'React', 'Typescript', 'NFT', 'Nodejs'],
    description: <Trans>DungeonDefendersSmallDescription</Trans>,
    github: 'https://github.com/ablin42/dungeon-defenders',
    link: 'https://dungeondefenders.xyz/',
  },
  {
    name: 'ablin.dev',
    stack: ['React', 'Nextjs', 'Typescript', 'i18next'],
    description: <Trans>AblinDevSmallDescription</Trans>,
    github: 'https://github.com/ablin42/ablin42',
    link: '#',
  },
  {
    name: 'Airdrop Claim',
    stack: ['Javascript'],
    description: <Trans>AirdropSmallDescription</Trans>,
    github: 'https://github.com/ablin42/generic-airdrop-claim',
    link: '#',
  },
];
