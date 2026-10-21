import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/staticData';
import { useLanguage } from '../../context/LanguageContext';
import { FiArrowLeft, FiCalendar, FiCheckCircle, FiGrid } from 'react-icons/fi';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];
  const relatedProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 4);

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Back Button */}
        <button
          onClick={() => navigate('/du-an')}
          className='inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 mb-8 transition-colors cursor-pointer bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200'
        >
          <FiArrowLeft className='w-4 h-4' />
          {t('Quay lại Danh sách Dự án', '返回工程案例列表')}
        </button>

        {/* 2-Column Main Detail Layout */}
        <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
            {/* Left Column: 3 Horizontal Landscape Images Stacked Vertically & Staggered Horizontally */}
            <div className='bg-gray-100 p-6 sm:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 min-h-[460px] sm:min-h-[520px]'>
              <div className='w-full max-w-lg flex flex-col gap-8 justify-center py-4'>
                <div className='w-11/12 h-44 sm:h-48 rounded-xl overflow-hidden shadow-md border-2 border-white bg-white self-start transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
                  <img
                    src={(project.images && project.images[0]) || project.image}
                    alt={project.title[language] || project.title.zh || project.title.vi}
                    className='w-full h-full object-cover'
                  />  
                </div>

                <div className='w-11/12 h-44 sm:h-48 rounded-xl overflow-hidden shadow-md border-2 border-white bg-white self-end transition-transform duration-300 hover:scale-105 hover:shadow-xl z-10'>
                  <img
                    src={(project.images && project.images[1]) || project.image}
                    alt={`${project.title[language] || project.title.zh || project.title.vi} 2`}
                    className='w-full h-full object-cover'
                  />
                </div>

                <div className='w-11/12 h-44 sm:h-48 rounded-xl overflow-hidden shadow-md border-2 border-white bg-white self-start ml-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
                  <img
                    src={(project.images && project.images[2]) || project.image}
                    alt={`${project.title[language] || project.title.zh || project.title.vi} 3`}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Information */}
            <div className='p-8 sm:p-10 flex flex-col justify-between'>
              <div>
                <span className='inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 mb-4'>
                  {project.category[language] || project.category.zh || project.category.vi}
                </span>
                <h1 className='text-3xl font-extrabold text-gray-900 mb-6'>
                  {project.title[language] || project.title.zh || project.title.vi}
                </h1>

                <div className='space-y-4 mb-8 bg-gray-50 p-5 rounded-xl border border-gray-100'>
                  <div className='flex items-start gap-3'>
                    <FiCheckCircle className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <div>
                      <span className='text-xs font-semibold text-gray-500 uppercase tracking-wider block'>
                        {t('Hạng mục thi công', '工程施作項目')}
                      </span>
                      <span className='text-sm font-medium text-gray-800'>
                        {project.items[language] || project.items.zh || project.items.vi}
                      </span>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <FiCalendar className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <div>
                      <span className='text-xs font-semibold text-gray-500 uppercase tracking-wider block'>
                        {t('Thời gian hoàn thành', '完工驗收時間')}
                      </span>
                      <span className='text-sm font-medium text-gray-800'>
                        {project.completionDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className='mb-6'>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>
                    {t('Mô tả tổng quan', '工程概況簡介')}
                  </h3>
                  <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                    {project.description[language] || project.description.zh || project.description.vi}
                  </p>
                </div>

                {/* Detailed Execution & Result */}
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>
                    {t('Chi tiết thi công & Kết quả', '施工細節與驗收成果')}
                  </h3>
                  <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                    {project.details[language] || project.details.zh || project.details.vi}
                  </p>
                </div>
              </div>

              {/* Action Contact */}
              <div className='mt-8 pt-6 border-t border-gray-100 flex items-center justify-between'>
                <span className='text-xs text-gray-500'>
                  {t('Bạn muốn triển khai dự án tương tự?', '您也正計畫推動類似工程建置？')}
                </span>
                <Link
                  to='/lien-he'
                  className='px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-all'
                >
                  {t('Liên hệ tư vấn', '聯絡專業諮詢')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Related Projects */}
        <div className='mt-16'>
          <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center gap-3'>
              <FiGrid className='w-6 h-6 text-blue-600' />
              <h2 className='text-2xl font-bold text-gray-900'>
                {t('Các dự án khác', '其他工程實績')}
              </h2>
            </div>
            <Link
              to='/du-an'
              className='text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors'
            >
              {t('Xem tất cả →', '查看全部 →')}
            </Link>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {relatedProjects.map((item) => (
              <Link
                key={item.id}
                to={`/du-an/${item.slug}`}
                className='group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col'
              >
                <div className='h-40 overflow-hidden bg-gray-100 relative'>
                  <img
                    src={item.image}
                    alt={item.title[language] || item.title.zh || item.title.vi}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-4 flex-1 flex flex-col justify-between text-center'>
                  <span className='text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1'>
                    {item.category[language] || item.category.zh || item.category.vi}
                  </span>
                  <h4 className='text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2'>
                    {item.title[language] || item.title.zh || item.title.vi}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
