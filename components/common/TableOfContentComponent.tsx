// import React from 'react';

// interface TableOfContentsProps {
//   headings: { id: string; title: string; depth: number }[];
// }

// const TableOfContentComponent: React.FC<TableOfContentsProps> = ({ headings }) => {
//   return (
//     <nav className="flex flex-col space-y-2">
//       {headings.map((heading) => (
//         <a
//           key={heading.id}
//           href={`#${heading.id}`}
//           className={`pl-${heading.depth} text-sm hover:text-blue-600`}
//           style={{ paddingLeft: `${heading.depth * 0.5}rem` }} // Tailwind doesn't support dynamic classes directly. This is a workaround.
//         >
//           {heading.title}
//         </a>
//       ))}
//     </nav>
//   );
// };

// export default TableOfContentComponent;

// components/TableOfContents.tsx

import React from 'react';

interface TableOfContentsProps {
  headings: any;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  return (
    <nav>
      <ul>
        {headings.map((heading:any) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
