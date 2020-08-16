import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import luvioIcon from './icons/luvio.svg';
import luvioLogo from './logos/luvio.svg';
import headshot from './images/headshot.jpg';

export const portfolio = [
  {
    header: {
      title: 'Munchie Gobbler',
    },
    contents: {
      list: [
        {
          name: 'Munchie Gobbler',
          link: 'https://munchie-gobbler.seannyphoenix.com',
        },
      ],
    },
    style: {
      backgroundColor: '#c3d745',
      color: '#0d5d39',
      fontFamily: "'Architects Daughter', Helvetica, sans-serif",
    },
  },
  {
    header: {
      icon: luvioIcon,
      title: 'luvio: make it rain',
    },
    name: 'luvio: make it rain',
    link: 'https://luvio.seannyphoenix.com',
    logo: luvioLogo,
    style: {
      backgroundColor: '#0D1821',
      color: '#FBF5EE',
    },
  },
];

export const web = [

];

export const contact = {
  header: {
    icon: faEnvelopeSquare,
    title: 'Contact Form',
  },
};

const sections = [
  {
    title: 'Seanny Drakon Phoenix',
    color: 'gules',
  },
  {
    title: 'Intro',
    color: 'orange',
    contents: {
      cards: [
        {
          contents: {
            image: headshot,
            text: 'Full-stack software engineer using the latest technologies to build solutions for real people. With an eye for detail, a penchant for style, and an intuition for abstraction, I create concise, accurate, and reusable code.',
          },
        },
        {
          header: {
            title: 'Management & Deployment',
          },
          contents: {
            list: [
              {
                name: 'GitHub',
                link: 'https://github.com/',
              },
              {
                name: 'Heroku',
                link: 'https://www.heroku.com/',
              },
              {
                name: 'Amazon Web Services',
                link: 'https://aws.amazon.com/',
              },
            ],
          },
        },
        {
          header: {
            title: 'Languages & Frameworks',
          },
          contents: {
            list: [
              {
                name: 'JavaScript',
                link: 'https://www.javascript.com/',
              },
              {
                name: 'NodeJs',
                link: 'https://nodejs.org/en/',
              },
              {
                name: 'React',
                link: 'https://reactjs.org/',
              },
              {
                name: 'Express',
                link: 'https://expressjs.com/',
              },
              {
                name: 'Bootstrap',
                link: 'https://getbootstrap.com/',
              },
              {
                name: 'SASS',
                link: 'https://sass-lang.com/',
              },
              {
                name: 'CSS',
                link: 'https://www.w3schools.com/css/',
              },
              {
                name: 'Python',
                link: 'https://www.python.org/',
              },
              {
                name: 'Django',
                link: 'https://www.djangoproject.com/',
              },
            ],
          },
        },
      ],
    },
  },
  {
    title: 'Portfolio',
    color: 'or',
    contents: {
      cards: [
        {
          header: {
            title: 'Munchie Gobbler',
          },
          contents: {
            list: [
              {
                name: 'Munchie Gobbler',
                link: 'https://munchie-gobbler.seannyphoenix.com',
              },
            ],
          },
        },
        {
          header: {
            icon: luvioIcon,
            title: 'luvio: make it rain',
          },
          contents: {
            list: [
              {
                name: 'luvio: make it rain',
                link: 'https://luvio.seannyphoenix.com',
              },
            ],
          },
          logo: luvioLogo,
          style: {
            backgroundColor: '#0D1821',
            color: '#FBF5EE',
          },
        },
      ],
    },
  },
  {
    title: 'Discover',
    color: 'vert',
    contents: {
      cards: [
        {
          header: {
            icon: faGithubSquare,
            title: 'GitHub',
          },
          contents: {
            list: [
              {
                name: 'seannyphoenix',
                link: 'https://github.com/seannyphoenix',
              },
            ],
          },
        },
        {
          header: {
            icon: faLinkedin,
            title: 'LinkedIn',
          },
          contents: {
            list: [
              {
                name: 'seannyphoenix',
                link: 'https://www.linkedin.com/in/seannyphoenix/',
              },
            ],
          },
        },
        {
          header: {
            icon: faTwitterSquare,
            title: 'Twitter',
          },
          contents: {
            list: [
              {
                name: 'SeannyPhoenix',
                link: 'https://twitter.com/SeannyPhoenix',
              },
            ],
          },
        },
      ],
    },
  },
  {
    title: 'Contact',
    color: 'azure',
    contents: {
      cards: [
        {
          header: {
            title: 'Email Me',
            icon: faEnvelopeSquare,
          },
          contents: {
            list: [
              {
                name: 'Email Me',
                link: 'mailto:seannypheonix@gmail.com',
              },
            ],
          },
        },
      ],
    },
  },
  {
    title: 'About',
    color: 'purpure',
  },
];

export default sections;
