import { longFormatters } from 'date-fns';

export interface Post {
  date: string;
  title: string;
  comment: number;
  tags: string[];
  link?: string;
}

export const posts: Post[] = [
  {
    date: 'Oct 11, 2023',
    title: 'Vue Virtual List Implementation (Fixed Item Height)',
    comment: 0,
    link: 'nolink',
    tags: ['Javascript', 'Vue'],
  },
  {
    date: 'Aug 23, 2023',
    title: 'Make div in Table Fill Entire Cell',
    comment: 0,
    link: 'nolink',
    tags: ['Styles'],
  },
  {
    date: 'Feb 21, 2023',
    title: 'Use Different git config Based on Directory',
    comment: 0,
    link: 'nolink',
    tags: ['Git'],
  },
  {
    date: 'Jun 10, 2022',
    title: 'asyncThrottle: Asynchronous Concurrency Throttling',
    comment: 0,
    link: 'nolink',
    tags: ['Javascript'],
  },
  {
    date: 'May 20, 2022',
    title: 'React withProps',
    comment: 0,
    link: 'nolink',
    tags: ['React'],
  },
  {
    date: 'May 11, 2022',
    title: 'Node.js Recursive Traverse Directory All Files',
    comment: 0,
    link: 'nolink',
    tags: ['Node.js'],
  },
  {
    date: 'Apr 25, 2022',
    title: 'Format Byte Size',
    comment: 0,
    link: 'nolink',
    tags: ['Javascript'],
  },
  {
    date: 'Oct 29, 2018',
    title: 'Linters',
    comment: 0,
    link: 'nolink',
    tags: ['Javascript', 'React'],
  },
  {
    date: 'Jun 10, 2022',
    title: 'asyncThrottle: Asynchronous Concurrency Throttling',
    comment: 0,
    link: 'nolink',
    tags: ['Javascript'],
  },
  {
    date: 'May 20, 2022',
    title: 'React withProps',
    comment: 0,
    link: 'nolink',
    tags: ['React'],
  },
  {
    date: 'May 11, 2022',
    title: 'Node.js Recursive Traverse Directory All Files',
    comment: 0,
    link: 'nolink',
    tags: ['Node.js'],
  },
  {
    date: 'Apr 25, 2022',
    title: 'Format Byte Size',
    comment: 0,
    link: 'nolink',
    tags: ['Javascript'],
  },
  {
    date: 'Oct 29, 2018',
    title: 'Linters',
    comment: 0,
    link: 'nolink',
    tags: ['Javascript', 'React'],
  },
  {
    date: 'Jun 10, 2022',
    title: 'asyncThrottle: Asynchronous Concurrency Throttling',
    comment: 0,
    link: 'nolink',
    tags: ['Javascript'],
  },
  {
    date: 'May 20, 2022',
    title: 'React withProps',
    comment: 0,
    link: 'nolink',
    tags: ['React'],
  },
  {
    date: 'May 11, 2022',
    title: 'Node.js Recursive Traverse Directory All Files',
    comment: 0,
    link: 'nolink',
    tags: ['Node.js'],
  },
  {
    date: 'Apr 25, 2022',
    title: 'Format Byte Size',
    comment: 0,
    link: 'nolink',
    tags: ['Javascript'],
  },
  {
    date: 'Oct 29, 2018',
    title: 'Linters',
    comment: 0,
    link: 'nolink',
    tags: ['Javascript', 'React'],
  },
  {
    date: 'Apr 25, 2017',
    title: 'Bulk Change git commit author',
    comment: 0,
    link: 'nolink',
    tags: ['Tools'],
  },
  {
    date: 'Apr 11, 2017',
    title: 'CSS Prevent Line Breaks',
    comment: 1,
    link: 'nolink',
    tags: ['Styles'],
  },
];

export const sinppits: Post[] = [
  {
    date: 'Oct 11, 2023',
    title: 'Advanced CSS Techniques for Responsive Design',
    comment: 0,
    tags: ['CSS', 'Design'],
  },
  {
    date: 'Aug 23, 2023',
    title: '10 JavaScript Tips and Tricks Every Developer Should Know',
    comment: 0,
    tags: ['Javascript'],
  },
  {
    date: 'Feb 21, 2023',
    title: 'Efficient Git Workflow for Teams',
    comment: 0,
    tags: ['Git'],
  },
  {
    date: 'Jun 10, 2022',
    title: 'Using React Hooks for State Management',
    comment: 0,
    tags: ['React', 'Hooks'],
  },
  {
    date: 'May 20, 2022',
    title: 'Optimizing Performance in Vue.js Applications',
    comment: 0,
    tags: ['Vue.js', 'Performance'],
  },
  {
    date: 'May 11, 2022',
    title: 'Building Scalable Node.js Applications with Express',
    comment: 0,
    tags: ['Node.js', 'Express'],
  },
  {
    date: 'Apr 25, 2022',
    title: '10 Useful JavaScript Libraries for Web Development',
    comment: 0,
    tags: ['Javascript', 'Libraries'],
  },
  {
    date: 'Oct 29, 2018',
    title: 'Best Practices for React Component Design',
    comment: 0,
    tags: ['React', 'Design'],
  },
  {
    date: 'Apr 25, 2017',
    title: 'Effective Tools for Frontend Development',
    comment: 0,
    tags: ['Tools', 'Development'],
  },
  {
    date: 'Apr 11, 2017',
    title: 'Creating Beautiful and Accessible Forms with HTML5 and CSS3',
    comment: 1,
    tags: ['HTML5', 'CSS3', 'Forms'],
  },
  {
    date: 'Feb 21, 2023',
    title: 'Efficient Git Workflow for Teams',
    comment: 0,
    tags: ['Git'],
  },
  {
    date: 'Jun 10, 2022',
    title: 'Using React Hooks for State Management',
    comment: 0,
    tags: ['React', 'Hooks'],
  },
  {
    date: 'May 20, 2022',
    title: 'Optimizing Performance in Vue.js Applications',
    comment: 0,
    tags: ['Vue.js', 'Performance'],
  },
  {
    date: 'May 11, 2022',
    title: 'Building Scalable Node.js Applications with Express',
    comment: 0,
    tags: ['Node.js', 'Express'],
  },
];

export const projects = [
  {
    fullName: 'Project One',
    description: 'A description for Project One',
    language: 'JavaScript',
    stargazersCount: 100,
    forksCount: 50,
    openIssuesCount: 10,
    htmlUrl: 'https://github.com/user/project-one',
  },
  {
    fullName: 'Project Two',
    description: 'A description for Project Two',
    language: 'TypeScript',
    stargazersCount: 200,
    forksCount: 70,
    openIssuesCount: 5,
    htmlUrl: 'https://github.com/user/project-two',
  },
  {
    fullName: 'Project Three',
    description: 'A description for Project Three',
    language: 'Vue',
    stargazersCount: 150,
    forksCount: 60,
    openIssuesCount: 8,
    htmlUrl: 'https://github.com/user/project-three',
  },
  {
    fullName: 'Project Four',
    description: 'A description for Project Four',
    language: 'HTML',
    stargazersCount: 120,
    forksCount: 40,
    openIssuesCount: 15,
    htmlUrl: 'https://github.com/user/project-four',
  },
  {
    fullName: 'Project Five',
    description: 'A description for Project Five',
    language: 'CSS',
    stargazersCount: 180,
    forksCount: 55,
    openIssuesCount: 12,
    htmlUrl: 'https://github.com/user/project-five',
  },
  {
    fullName: 'Project Six',
    description: 'A description for Project Six',
    language: 'C#',
    stargazersCount: 90,
    forksCount: 30,
    openIssuesCount: 20,
    htmlUrl: 'https://github.com/user/project-six',
  },
  {
    fullName: 'Project Seven',
    description: 'A description for Project Seven',
    language: 'JavaScript',
    stargazersCount: 210,
    forksCount: 45,
    openIssuesCount: 7,
    htmlUrl: 'https://github.com/user/project-seven',
  },
  {
    fullName: 'Project Eight',
    description: 'A description for Project Eight',
    language: 'Vue',
    stargazersCount: 130,
    forksCount: 25,
    openIssuesCount: 9,
    htmlUrl: 'https://github.com/user/project-eight',
  },
  {
    fullName: 'Project Nine',
    description: 'A description for Project Nine',
    language: 'TypeScript',
    stargazersCount: 170,
    forksCount: 35,
    openIssuesCount: 11,
    htmlUrl: 'https://github.com/user/project-nine',
  },
  {
    fullName: 'Project Ten',
    description: 'A description for Project Ten',
    language: 'JavaScript',
    stargazersCount: 190,
    forksCount: 75,
    openIssuesCount: 6,
    htmlUrl: 'https://github.com/user/project-ten',
  },
  {
    fullName: 'Project Eleven',
    description: 'A description for Project Eleven',
    language: 'HTML',
    stargazersCount: 140,
    forksCount: 50,
    openIssuesCount: 14,
    htmlUrl: 'https://github.com/user/project-eleven',
  },
  {
    fullName: 'Project Twelve',
    description: 'A description for Project Twelve',
    language: 'CSS',
    stargazersCount: 160,
    forksCount: 65,
    openIssuesCount: 8,
    htmlUrl: 'https://github.com/user/project-twelve',
  },
  {
    fullName: 'Project Thirteen',
    description: 'A description for Project Thirteen',
    language: 'Vue',
    stargazersCount: 220,
    forksCount: 40,
    openIssuesCount: 10,
    htmlUrl: 'https://github.com/user/project-thirteen',
  },
  {
    fullName: 'Project Fourteen',
    description: 'A description for Project Fourteen',
    language: 'C#',
    stargazersCount: 95,
    forksCount: 28,
    openIssuesCount: 18,
    htmlUrl: 'https://github.com/user/project-fourteen',
  },
  {
    fullName: 'Project Fifteen',
    description: 'A description for Project Fifteen',
    language: 'JavaScript',
    stargazersCount: 180,
    forksCount: 60,
    openIssuesCount: 5,
    htmlUrl: 'https://github.com/user/project-fifteen',
  },
  {
    fullName: 'Project Sixteen',
    description: 'A description for Project Sixteen',
    language: 'TypeScript',
    stargazersCount: 200,
    forksCount: 70,
    openIssuesCount: 7,
    htmlUrl: 'https://github.com/user/project-sixteen',
  },
  {
    fullName: 'Project Seventeen',
    description: 'A description for Project Seventeen',
    language: 'HTML',
    stargazersCount: 120,
    forksCount: 45,
    openIssuesCount: 12,
    htmlUrl: 'https://github.com/user/project-seventeen',
  },
  {
    fullName: 'Project Eighteen',
    description: 'A description for Project Eighteen',
    language: 'CSS',
    stargazersCount: 160,
    forksCount: 55,
    openIssuesCount: 9,
    htmlUrl: 'https://github.com/user/project-eighteen',
  },
  {
    fullName: 'Project Nineteen',
    description: 'A description for Project Nineteen',
    language: 'Vue',
    stargazersCount: 210,
    forksCount: 35,
    openIssuesCount: 6,
    htmlUrl: 'https://github.com/user/project-nineteen',
  },
  {
    fullName: 'Project Twenty',
    description: 'A description for Project Twenty',
    language: 'JavaScript',
    stargazersCount: 190,
    forksCount: 80,
    openIssuesCount: 8,
    htmlUrl: 'https://github.com/user/project-twenty',
  },
];

export const tableOfContent = [
  {
    id: 'V1-to-V2',
    content: 'V1 to V2',
    childList: [],
  },
  {
    id: 'Next.js-App-Directory-and-React-Server-Components',
    content: 'Next.js App Directory and React Server Components',
    childList: [],
  },
  {
    id: 'Typescript-First',
    content: 'Typescript First',
    childList: [],
  },
  {
    id: 'Contentlayer',
    content: 'Contentlayer',
    childList: [],
  },
  {
    id: 'Pliny',
    content: 'Pliny',
    childList: [],
  },
  {
    id: 'New-Search-Component',
    content: 'New Search Component',
    childList: [
      {
        id: 'Algolia',
        content: 'Algolia',
      },
      {
        id: 'Kbar',
        content: 'Kbar',
      },
    ],
  },
  {
    id: 'Styling-and-Layout-Updates',
    content: 'Styling and Layout Updates',
    childList: [
      {
        id: 'Theming',
        content: 'Theming',
      },
      {
        id: 'New-Layouts',
        content: 'New Layouts',
      },
    ],
  },
  {
    id: 'Migration-Recommendations',
    content: 'Migration Recommendations',
    childList: [],
  },
  {
    id: 'Conclusion',
    content: 'Conclusion',
    childList: [],
  },
  {
    id: 'Support',
    content: 'Support',
    childList: [],
  },
];

export const contentData = [
  {
    id: 'V1-to-V2',
    title: 'V1 to V2',
    data: [
      {
        id: '',
        content:
          'The template was first released in January 2021 and has since been used by thousands of users. It is featured on Next.js Templates, Tailwind Awesome among other listing sites. It attracts 200+ unique visitors daily notching 1500-2000 page views, with 1.3k forks and many other clones.',
      },
      {
        id: '',
        content:
          'Version 2 builds on the success of the previous version and introduces many new features and improvements. The codebase has been refactored to support Next.js App directory and React Server Components. Markdown / MDX is now processed using Contentlayer, a type-safe content SDK that validates and transforms your content into type-safe JSON data. It integrates with Pliny, a new library that provides out of the box Next.js components to enhance your static site with analytics, comments and newsletter subscription. A new command palette (⌘-k) search component is also added to the template.',
      },
      {
        id: '',
        content: "Let's dive into the new features and improvements in V2.",
      },
    ],
  },
  {
    id: 'Next.js-App-Directory-and-React-Server-Components',
    title: 'Next.js App Directory and React Server Components',
    data: [
      {
        id: '',
        content:
          'Now that Next.js App router is finally stable and is mostly feature compatible with Page Router, the codebase has been migrated to new setup. This allows for a hybrid rendering approach, with the use of React Server Components generated on the server side for faster page loads and smaller bundle sizes, while retaining the ability to sprinkle in client side React components for interactivity.1',
      },
      {
        id: '',
        content:
          'With addition powers comes a new paradigm to learn. I have migrated the codebase to make use of the new features as much as possible. This includes changes in the folder structure, splitting components into server vs client components, leveraging server side data fetching and using the recommended Metadata API for SEO discoverability.',
      },
      {
        id: '',
        content:
          'While this simplifies the codebase to some extent, it makes migration from the old codebase more difficult. If you are looking to migrate, I recommend starting from a fresh template and copying over your customizations and existing content. See the migration recommendations section for more details.',
      },
    ],
  },
  {
    id: 'Typescript-First',
    title: 'Typescript First',
    data: [
      {
        id: '',
        content:
          'The codebase has been migrated to Typescript. While the previous version of the template was available in both Javascript and Typescript, I decided to reduce the maintenance burden and focus on Typescript. This also allows for better type checking and code completion in IDEs.',
      },
      {
        id: '',
        content:
          'Typescript is also a perfect match with our new type-safe markdown processor - Contentlayer.',
      },
    ],
  },
  {
    id: 'Pliny',
    title: 'Pliny',
    data: [
      {
        id: '',
        content:
          'A large reason for the popularity of the template was its customizability and integration with other services from analytics providers to commenting solutions. However, this means that a lot of boilerplate code has to be co-located within the template even if the user does not use the feature. Updates and bug fixes had to be copied manually to the users codebase.',
      },
      {
        id: '',
        content:
          'To solve this, I have abstracted the logic to a separate repository - Pliny. Pliny provides out of the box Next.js components to enhance static sites:',
      },
    ],
  },
  {
    id: 'Contentlayer',
    title: 'Contentlayer',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
  {
    id: 'New-Search-Component',
    title: 'New Search Component',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
  {
    id: 'Algolia',
    title: 'Algolia',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
  {
    id: 'Kbar',
    title: 'Kbar',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
  {
    id: 'Styling-and-Layout-Updates',
    title: 'Styling and Layout Updates',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
  {
    id: 'Theming',
    title: 'Theming',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
  {
    id: 'New-Layouts',
    title: 'New Layouts',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
  {
    id: 'Migration-Recommendations',
    title: 'Migration Recommendations',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
  {
    id: 'Conclusion',
    title: 'Conclusion',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
  {
    id: 'Support',
    title: 'Support',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
  {
    id: 'Licence',
    title: 'Licence',
    data: [
      {
        id: '',
        content:
          'Contentlayer is a content SDK that validates and transforms your content into type-safe JSON data that you can easily import into your application. It makes working with local markdown or MDX files a breeze. This replaces MDX-bundler and our own markdown processing workflow.',
      },
      {
        id: '',
        content:
          'Contentlayer then processes the MDX files with our desired markdown remark or rehype plugins, validates the schema, generate type definitions and output json files that can be easily imported in our pages. Hot reloading comes out of the box, so edits to the markdown files will be reflected in the browser immediately!',
      },
    ],
  },
];
