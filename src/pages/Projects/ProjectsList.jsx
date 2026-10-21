import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/staticData';
import { useLanguage } from '../../context/LanguageContext';

const ProjectsList = () => {
  const { language, t } = useLanguage();

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight'>
            {t('DỰ ÁN TIÊU BIỂU', '精選工程案例')}
          </h1>
          <p className='mt-3 max-w-2xl mx-auto text-lg text-gray-600 sm:mt-4'>
            {t(
              'Các dự án tiêu biểu đã và đang được Integral triển khai.',
              'Integral 歷年承攬並成功交付之代表性工程實績。'
            )}
          </p>
          <div className='mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full'></div>
        </div>

        {/* 4-column Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/du-an/${project.slug}`}
              className='group flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100'
            >
              {/* Image Container with Hover Effect */}
              <div className='w-full h-48 overflow-hidden bg-gray-100 relative'>
                <img
                  src={project.image}
                  alt={project.title[language] || project.title.zh || project.title.vi}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <span className='bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg'>
                    {t('Xem chi tiết', '查看詳情')}
                  </span>
                </div>
              </div>

              {/* Title & Category */}
              <div className='p-5 w-full text-center flex-1 flex flex-col justify-between'>
                <div>
                  <span className='text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1'>
                    {project.category[language] || project.category.zh || project.category.vi}
                  </span>
                  <h3 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2'>
                    {project.title[language] || project.title.zh || project.title.vi}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
