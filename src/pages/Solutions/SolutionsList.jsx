import React from 'react';
import { Link } from 'react-router-dom';
import { solutionsData } from '../../data/staticData';
import { useLanguage } from '../../context/LanguageContext';
import { FiArrowRight } from 'react-icons/fi';

const SolutionsList = () => {
  const { language, t } = useLanguage();

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight'>
            {t('GIẢI PHÁP CÔNG NGHỆ & HẠ TẦNG', '科技與基礎設施解決方案')}
          </h1>
          <p className='mt-3 max-w-2xl mx-auto text-lg text-gray-600 sm:mt-4'>
            {t(
              'Cung cấp trọn gói dịch vụ tư vấn, thiết kế và thi công hệ thống mạng LAN/Wi-Fi, camera an ninh, Data Center và điện nhẹ công nghiệp.',
              '提供網路LAN/Wi-Fi、安防監控、資料中心(Data Center)與工業弱電工程之全方位諮詢、設計與統包施工服務。'
            )}
          </p>
          <div className='mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full'></div>
        </div>

        {/* Responsive Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {solutionsData.map((solution) => (
            <Link
              key={solution.id}
              to={`/giai-phap/${solution.slug}`}
              className='group flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100'
            >
              {/* Image Container with Hover */}
              <div className='w-full h-52 overflow-hidden bg-gray-100 relative'>
                <img
                  src={solution.image}
                  alt={solution.title[language] || solution.title.zh || solution.title.vi}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <span className='bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1'>
                    {t('Xem giải pháp', '探索方案')} <FiArrowRight className='w-3 h-3' />
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className='p-6 w-full text-center flex-1 flex flex-col justify-between'>
                <div>
                  <span className='text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-2'>
                    {solution.category[language] || solution.category.zh || solution.category.vi}
                  </span>
                  <h3 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2'>
                    {solution.title[language] || solution.title.zh || solution.title.vi}
                  </h3>
                  <p className='text-xs text-gray-500 line-clamp-3 leading-relaxed'>
                    {solution.description[language] || solution.description.zh || solution.description.vi}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsList;
