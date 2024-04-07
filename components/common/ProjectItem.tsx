import React from 'react';
import { IconStar,IconForked,IconIssue,IconHtml,IconVue,IconTs,IconCS } from '@/utils/icons';

export default function ProjectItem(props: any) {
  const { project } = props;

  const iconMap: Record<string, { component: React.FunctionComponent, color: string }> = {
    TypeScript: { component: IconTs, color: '#3178C6' },
    HTML: { component: IconHtml, color: '#FF3C41' },
    Vue: { component: IconVue, color: '#41B883' },
    'C#': { component: IconCS, color: '#368833' },
    default: { component: IconStar, color: '#000000' },
  };

  const iconDetail = iconMap[project.language] ?? iconMap.default;
  const IconComponent = iconDetail.component;

  return (
    <div className="project-item-wrapper relative p-3 pl-14 bg-white dark:bg-gray-900 rounded-md ring-1 ring-slate-600/5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="project-item-icon absolute top-3 left-3 w-9 h-9 rounded-md flex items-center justify-center overflow-hidden font-bold">
        <span className="icon-background absolute top-0 left-0 block w-full h-full opacity-20" style={{ backgroundColor: iconDetail.color }}></span>
        <IconComponent />
      </div>
      <a href={project.htmlUrl} className="project-item-title block text-blue-500 truncate">{project.fullName}</a>
      <div className="project-item-description mt-2 text-slate-400 text-sm overflow-hidden">
        {/* <p className="description-content">{project.description}</p> */}
      </div>
      <ul className="count-list mt-2 space-x-3 flex min-w-0 text-sm text-slate-400 leading-5">
        <li className="count-item flex items-center">
          <IconStar />
          <span className="ml-2">{project.stargazersCount}</span>
        </li>
        <li className="count-item flex items-center">
          <IconForked />
          <span className="ml-2">{project.forksCount}</span>
        </li>
        <li className="count-item flex items-center">
          <IconIssue />
          <span className="ml-2">{project.openIssuesCount}</span>
        </li>
      </ul>
    </div>
  );
}
