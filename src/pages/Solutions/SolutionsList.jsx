import React from 'react';
import { Link } from 'react-router-dom';
import { solutionsData } from '../../data/staticData';
import { useLanguage } from '../../context/LanguageContext';
import { FiCpu, FiArrowRight } from 'react-icons/fi';

const SolutionsList = () => {
  const { language, t } = useLanguage();

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight'>
            {t('GIẢI PHÁP CÔNG NGHỆ & HẠ TẦNG', 'TECHNOLOGY & INFRASTRUCTURE SOLUTIONS')}
          </h1>
          <p className='mt-3 max-w-2xl mx-auto text-lg text-gray-600 sm:mt-4'>
            {t(
              'Cung cấp các giải pháp toàn diện về mạng LAN/WAN, Wifi doanh nghiệp, Trung tâm dữ liệu và Bảo mật thông tin.',
              'Providing comprehensive solutions for LAN/WAN networks, Enterprise Wifi, Data Centers, and Information Security.'
            )}
          </p>
          <div className='mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full'></div>
        </div>

        {/* Grid Layout (Matching Projects List for design consistency) */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {solutionsData.map((solution) => (
            <Link
              key={solution.id}
              to={`/giai-phap/${solution.slug}`}
              className='group flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100'
            >
              {/* Image Container with Hover */}
              <div className='w-full h-48 overflow-hidden bg-gray-100 relative'>
                <img
                  src={solution.image}
                  alt={solution.title[language]}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <span className='bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1'>
                    {t('Xem giải pháp', 'View Solution')} <FiArrowRight className='w-3 h-3' />
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className='p-5 w-full text-center flex-1 flex flex-col justify-between'>
                <div>
                  <span className='text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1'>
                    {solution.category[language]}
                  </span>
                  <h3 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2'>
                    {solution.title[language]}
                  </h3>
                  <p className='text-xs text-gray-500 line-clamp-3 leading-relaxed'>
                    {solution.description[language]}
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
