import React from 'react';
import { useTranslation } from 'react-i18next';

import ProjectItem from './ProjectItem';
import { projects } from '@/data';
export default function Projects() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto w-full max-w-screen-lg px-8 py-12">
      <h2 className="text-2xl text-slate-700">{t('projects.title')}</h2>
      {!!projects.length && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-2">
          {projects.map((project,index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      )}
    </main>
  );
}
