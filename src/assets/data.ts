// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

import { MenuData } from "../components/tree_view/types";
import { AccordionItem } from "../types/accordion";


let cache = new Map();

export const allStudents = [{ name: "Alice", score: 45, subject: "math" },
{ name: "Bob", score: 85, subject: "english" },
{ name: "Charlie", score: 60, subject: "physics" },
{ name: "David", score: 30, subject: "english" },
{ name: "Eve", score: 95, subject: "math" }];

export function fetchData(url: string) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url: string) {
  if (url.startsWith('/search?q=')) {
    return await getSearchResults(url.slice('/search?q='.length));
  } else {
    throw Error('Not implemented');
  }
}

async function getSearchResults(query: string) {
  // Add a fake delay to make waiting noticeable.
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  const allAlbums = [{
    id: 13,
    title: 'Let It Be',
    year: 1970
  }, {
    id: 12,
    title: 'Abbey Road',
    year: 1969
  }, {
    id: 11,
    title: 'Yellow Submarine',
    year: 1969
  }, {
    id: 10,
    title: 'The Beatles',
    year: 1968
  }, {
    id: 9,
    title: 'Magical Mystery Tour',
    year: 1967
  }, {
    id: 8,
    title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
    year: 1967
  }, {
    id: 7,
    title: 'Revolver',
    year: 1966
  }, {
    id: 6,
    title: 'Rubber Soul',
    year: 1965
  }, {
    id: 5,
    title: 'Help!',
    year: 1965
  }, {
    id: 4,
    title: 'Beatles For Sale',
    year: 1964
  }, {
    id: 3,
    title: 'A Hard Day\'s Night',
    year: 1964
  }, {
    id: 2,
    title: 'With The Beatles',
    year: 1963
  }, {
    id: 1,
    title: 'Please Please Me',
    year: 1963
  }];

  const lowerQuery = query.trim().toLowerCase();
  return allAlbums.filter(album => {
    const lowerTitle = album.title.toLowerCase();
    return (
      lowerTitle.startsWith(lowerQuery) ||
      lowerTitle.indexOf(' ' + lowerQuery) !== -1
    )
  });
}

export const fetchUserData = (): Promise<{ name: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      if (success) {
        resolve({ name: 'John Doe' });
      }
      else {
        reject(new Error('Rejected'));
      }
    }, 1000);
  });
}

export const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "What is TypeScript?",
    content: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
  },
  {
    id: 2,
    title: "Why use TypeScript?",
    content: "TypeScript helps catch errors early through static typing and improves code maintainability."
  },
  {
    id: 3,
    title: "How does TypeScript differ from JavaScript?",
    content: "TypeScript is a superset of JavaScript that adds static types. It compiles down to regular JavaScript code."
  },
  {
    id: 4,
    title: "Can I use TypeScript with React?",
    content: "Yes, TypeScript works well with React by providing strong typing for props and state, leading to better developer experience."
  }
];

export const menuData: MenuData[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Profile',
    to: '/profile',
    children: [
      {
        label: 'Detail',
        to: 'detail',
        children: [
          {
            label: 'Location',
            to: 'location'
          },
          {
            label: 'Email',
            to: 'email'
          }
        ]
      },
      {
        label: 'Connections',
        to: 'connections',
        children: [
          {
            label: 'Friends',
            to: 'friends'
          }
        ]
      }
    ]
  },
  {
    label: 'Settings',
    to: '/settings',
    children: [
      {
        label: 'Account',
        to: 'account'
      },
      {
        label: 'Security',
        to: '/security',
        children: [
          {
            label: 'Login',
            to: 'login'
          },
          {
            label: 'Register',
            to: 'register'
          }
        ]
      }
    ]
  }
]

const dummyApiResponse = {
  qrcode: true,
  accordian: true,
  tabs: false,
  star_rat: true
}

export const featureFlagDataServiceCall = () => {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(() => resolve(dummyApiResponse), 500);
    else reject('Error');
  })
}