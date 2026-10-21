import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { solutionsData } from '../../data/staticData';
import { useLanguage } from '../../context/LanguageContext';
import { FiArrowLeft, FiLayers } from 'react-icons/fi';

const SolutionDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const solution = solutionsData.find((s) => s.slug === slug) || solutionsData[0];
  const otherSolutions = solutionsData.filter((s) => s.id !== solution.id);

  // Format text to paragraph blocks
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
          {t('Quay lại Danh sách Giải pháp', '返回解決方案列表')}
        </button>

        {/* Top-to-Bottom Article Layout */}
        <div className='bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 mb-16'>
          {/* Header */}
          <div className='border-b border-gray-100 pb-6 mb-8 text-center sm:text-left'>
            <span className='inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 mb-3'>
              {solution.category[language] || solution.category.zh || solution.category.vi}
            </span>
            <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight'>
              {solution.title[language] || solution.title.zh || solution.title.vi}
            </h1>
            <p className='mt-3 text-lg text-gray-600 font-medium'>
              {solution.description[language] || solution.description.zh || solution.description.vi}
            </p>
          </div>

          {/* Article Content */}
          <div className='prose max-w-none text-gray-700 mb-10'>
            {renderFormattedText(solution.details[language] || solution.details.zh || solution.details.vi)}
          </div>

          {/* Solution Image Showcase */}
          <div className='my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100'>
            <div className='w-full h-[320px] sm:h-[440px] relative bg-gray-100'>
              <img
                src={solution.diagramImage || solution.image}
                alt={solution.title[language] || solution.title.zh || solution.title.vi}
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* Call to action */}
          <div className='bg-blue-600 rounded-xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-8'>
            <div>
              <h4 className='text-xl font-bold'>
                {t('Cần tư vấn giải pháp này cho doanh nghiệp?', '需要為企業評估與導入此解決方案？')}
              </h4>
              <p className='text-blue-100 text-sm mt-1'>
                {t('Đội ngũ kỹ sư Integral sẵn sàng hỗ trợ khảo sát và lên phương án', 'Integral 工程師團隊隨時竭誠為您提供現場勘查與規劃建議')}
              </p>
            </div>
            <Link
              to='/lien-he'
              className='px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all whitespace-nowrap shadow-md'
            >
              {t('Đăng ký tư vấn', '立即預約諮詢')}
            </Link>
          </div>
        </div>

        {/* Footer Section: Other Solutions */}
        <div className='mt-16'>
          <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center gap-3'>
              <FiLayers className='w-6 h-6 text-blue-600' />
              <h2 className='text-2xl font-bold text-gray-900'>
                {t('Các giải pháp khác', '其他解決方案')}
              </h2>
            </div>
            <Link
              to='/giai-phap'
              className='text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors'
            >
              {t('Xem tất cả →', '查看全部 →')}
            </Link>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {otherSolutions.map((item) => (
              <Link
                key={item.id}
                to={`/giai-phap/${item.slug}`}
                className='group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col'
              >
                <div className='h-44 overflow-hidden bg-gray-100 relative'>
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

export default SolutionDetail;
