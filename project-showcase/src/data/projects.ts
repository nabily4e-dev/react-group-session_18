export type Project = {
  id: number;
  name: string;
  about: string;
  phase: number;
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: 'Great Outdoors Guide',
    about: 'Plan your next adventure to in the U.S. National Parks!',
    phase: 4,
    link: 'https://great-outdoors-guide.netlify.app',
    image: 'https://i.imgur.com/8GnP2Uw.png',
  },
  {
    id: 2,
    name: 'Book Her',
    about:
      'The app takes you (the Casting Director) through a series of questions to determine the Models you need for your next Project.',
    phase: 4,
    link: 'https://bookher.netlify.app/new_project',
    image: 'https://i.imgur.com/INs84Uk.png',
  },
  {
    id: 3,
    name: 'Code Bucket',
    about: 'Web-based CSS, JS and HTML Editor',
    phase: 4,
    link: 'https://code-bucket.netlify.app',
    image: 'https://i.imgur.com/Hz84TA2.png',
  },
  {
    id: 11,
    name: 'Yourseum',
    about: 'Find great art',
    phase: 4,
    link: 'https://yourseum.netlify.app',
    image: 'https://i.imgur.com/yywQCoi.png',
  },
  {
    id: 12,
    name: 'Spreddit',
    about: 'A Global Community of Like Minded Humans Socially Distancing ',
    phase: 4,
    link: 'https://spreddit.netlify.app',
    image: 'https://i.imgur.com/cyZCpWs.png',
  },
  {
    id: 13,
    name: 'snackATTACK',
    about: "It's Time to Discover",
    phase: 4,
    link: 'https://snackattack.netlify.app',
    image: 'https://i.imgur.com/VTJB4qy.png',
  },
  {
    id: 20,
    name: 'YouTravel',
    about: 'YouTube for Travel Videos',
    phase: 3,
    link: 'https://youtravel.netlify.app/',
    image: 'https://i.imgur.com/Y6mlORn.png',
  },
  {
    id: 22,
    name: 'Breathe',
    about: 'Meditation',
    phase: 3,
    link: 'https://github.com/maifam/breathe_frontend',
    image: 'https://i.imgur.com/hAuKx3K.png',
  },
  {
    id: 23,
    name: 'HomeStory',
    about:
      'A web app for storing info about furniture items you plan on purchasing in the future or simply just want to keep tabs of.',
    phase: 3,
    link: 'https://homestory.netlify.app',
    image: 'https://i.imgur.com/il8ft21.png',
  },
  {
    id: 24,
    name: 'Locksley To Do',
    about: 'A todo list and calendar app',
    phase: 4,
    link: 'https://www.locksleyr.com',
    image: 'https://i.imgur.com/XOnaclL.png',
  },
  {
    id: 25,
    name: 'GamesRx',
    about: 'Game info and reviews',
    phase: 4,
    link: 'https://gamesrx.netlify.app',
    image: 'https://i.imgur.com/Japzh6v.png',
  },
];
export default projects;
