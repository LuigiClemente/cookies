'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import matter from 'gray-matter';
import {remark} from 'remark';
import remarkHtml from 'remark-html';

interface PrivacyPageProps {
  content: string;
  headings: { id: string; text: string }[];
}

const Privacy = ({ content, headings }: PrivacyPageProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleClick = (id: string) => {
      const heading = document.getElementById(id);
      if (heading) {
        heading.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const id = link.getAttribute('data-id');
        if (id) {
          handleClick(id);
          router.push(`#${id}`);
        }
      });
    });

    return () => {
      tocLinks.forEach((link:any) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [router]);

  return (
    <div>
      <div className="toc">
        <h2>Table of Contents</h2>
        <ul>
          {headings.map((heading) => (
            <li key={heading.id}>
              <a className="toc-link" data-id={heading.id}>
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export async function getStaticProps() {
  const fileContent = fs.readFileSync('/content/privacy/privacy.md', 'utf-8');
  const { data, content } = matter(fileContent);
  const headings:any = [];
  await remark()
    .use(remarkHtml)
    .use(() => (tree:any) => {
      tree.children.forEach((node:any) => {
        if (node.type === 'heading' && node.depth === 2) {
          headings.push({ id: node.data?.id ?? '', text: node.children[0].value });
        }
      });
    })
    .process(content);

  return {
    props: {
      content: await remark().use(remarkHtml).process(content),
      headings,
    },
  };
}

export default Privacy;