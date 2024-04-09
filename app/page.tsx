import ImageAnimation from "../components/canvas/ImageAnimation"
import MarkdownRenderer from "@/components/common/MarkdownRenderer";
import fs from 'fs';
import path from 'path';

export default function Home() {

  const markdownFilePath = path.join(process.cwd(), 'public/content/cookies', 'cookies.md');
  const content = fs.readFileSync(markdownFilePath, 'utf-8');

  return (
    <>
    <div>
    <div className="fixed [z-index:0] overflow-hidden top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-100 blur-sm">
    <ImageAnimation />
    </div>
    <div className="overflow-hidden fixed [z-index:2] top-0 left-0 w-full h-full [user-select:none] pointer-events-none">
    <ImageAnimation />
    </div>
    <div className="mx-auto w-full max-w-screen-lg px-8 py-12 whitespace-pre-wrap markdown-content">
    <MarkdownRenderer content={content} />
    </div>
    </div>
    </>
  );
}
