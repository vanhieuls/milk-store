import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { solutionsData, projectsData } from '../../data/staticData';
import { useLanguage } from '../../context/LanguageContext';
import { FiArrowLeft, FiLayers, FiCheckSquare, FiArrowRight } from 'react-icons/fi';

const SolutionDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const solution = solutionsData.find((s) => s.slug === slug) || solutionsData[0];
  const otherSolutions = solutionsData.filter((s) => s.id !== solution.id);

  // Format markdown-like text to paragraph blocks
  const renderFormattedText = (text) => {
    if (!text) return null;
    return text.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('###')) {
        return (
          <h3 key={idx} className='text-xl font-bold text-gray-900 mt-6 mb-3 border-l-4 border-blue-600 pl-3'>
            {paragraph.replace('###', '').trim()}
          </h3>
        );
      }
      return (
        <p key={idx} className='text-gray-600 leading-relaxed mb-4 whitespace-pre-line text-sm sm:text-base'>
          {paragraph.trim()}
        </p>
      );
    });
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        {/* Back Button */}
        <button
          onClick={() => navigate('/giai-phap')}
          className='inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 mb-8 transition-colors cursor-pointer bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200'
        >
          <FiArrowLeft className='w-4 h-4' />
          {t('Quay lại Danh sách Giải pháp', 'Back to Solutions List')}
        </button>

        {/* Top-to-Bottom Article Layout */}
        <div className='bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 mb-16'>
          {/* Header */}
          <div className='border-b border-gray-100 pb-6 mb-8 text-center sm:text-left'>
            <span className='inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 mb-3'>
              {solution.category[language]}
            </span>
            <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight'>
              {solution.title[language]}
            </h1>
            <p className='mt-3 text-lg text-gray-600 font-medium'>
              {solution.description[language]}
            </p>
          </div>

          {/* Article Content */}
          <div className='prose max-w-none text-gray-700 mb-10'>
            {renderFormattedText(solution.details[language])}
          </div>

          {/* Diagram / Solution Image */}
          <div className='my-10 bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center'>
            <h4 className='text-sm font-bold text-gray-700 uppercase tracking-wider mb-4'>
              {t('Sơ đồ kiến trúc & Hình ảnh giải pháp', 'Architecture Diagram & Solution Image')}
            </h4>
            <div className='max-w-3xl mx-auto h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-md relative'>
              <img
                src={solution.diagramImage || solution.image}
                alt={solution.title[language]}
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* Call to action */}
          <div className='bg-blue-600 rounded-xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4'>
            <div>
              <h4 className='text-xl font-bold'>
                {t('Cần tư vấn giải pháp này cho doanh nghiệp?', 'Need this solution for your business?')}
              </h4>
              <p className='text-blue-100 text-sm mt-1'>
                {t('Đội ngũ kỹ sư Integral sẵn sàng hỗ trợ khảo sát và lên phương án', 'Integral engineer team is ready to support site survey and planning.')}
              </p>
            </div>
            <Link
              to='/lien-he'
              className='px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all whitespace-nowrap shadow-md'
            >
              {t('Đăng ký tư vấn', 'Register Consultation')}
            </Link>
          </div>
        </div>

        {/* Footer Section: Other Solutions */}
        <div className='mt-16'>
          <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center gap-3'>
              <FiLayers className='w-6 h-6 text-blue-600' />
              <h2 className='text-2xl font-bold text-gray-900'>
                {t('Các giải pháp khác', 'Other Solutions')}
              </h2>
            </div>
            <Link
              to='/giai-phap'
              className='text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors'
            >
              {t('Xem tất cả →', 'View All →')}
            </Link>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {otherSolutions.map((item) => (
              <Link
                key={item.id}
                to={`/giai-phap/${item.slug}`}
                className='group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col'
              >
                <div className='h-40 overflow-hidden bg-gray-100 relative'>
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-4 flex-1 flex flex-col justify-between text-center'>
                  <span className='text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1'>
                    {item.category[language]}
                  </span>
                  <h4 className='text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2'>
                    {item.title[language]}
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

export default SolutionDetail;
