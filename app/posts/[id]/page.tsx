import MarkdownRenderer from '../../../components/common/MarkdownRenderer';
import fs from 'fs';
import path from 'path';

const TermsOfServicePage: React.FC = () => {
  const markdownFilePath = path.join(process.cwd(), 'public', 'Terms-of-Service.md');
  const content = fs.readFileSync(markdownFilePath, 'utf-8');
  
  return (
    <div className='mx-auto w-full max-w-screen-lg px-8 py-12 whitespace-pre-wrap'>
      <MarkdownRenderer content={content} />
    </div>
  );
};

export default TermsOfServicePage;
