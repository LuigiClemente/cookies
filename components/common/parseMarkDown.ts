// // utils/parseMarkdown.ts

// import { remark } from 'remark';
// import remarkParse from 'remark-parse';
// import remarkSlug from 'remark-slug';
// import { Node } from 'unist';
// import { visit } from 'unist-util-visit';

// interface Heading {
//   id: string;
//   title: string;
//   depth: number;
// }

// export const parseMarkdownHeadings = async (markdown: string): Promise<Heading[]> => {
//     let headings: Heading[] = [];
    
//     const processor = remark().use(remarkParse).use(remarkSlug);
//     const file = await processor.process(markdown);
    
//     visit(file, 'heading', (node: Node) => {
//       const title = node.children[0].value as string;
//       const id = title.toLowerCase().replace(/\s+/g, '-');
//       headings.push({ id, title, depth: node.depth });
//     });
  
//     return headings;
// };


