import React from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiMail, FiGlobe } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className='relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-[#f0f7ff] to-[#e8f1fd] text-gray-700 border-t border-blue-100/80'>
      {/* Background Subtle Pattern / Decorative Elements */}
      <div className='absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10'>
          
          {/* CỘT 1: Logo & Mô tả */}
          <div className='lg:col-span-4 flex flex-col justify-between'>
            <div>
              {/* Logo PAT Group */}
              <Link to='/' className='flex items-center'>
                <h1 className='text-2xl font-extrabold tracking-wide sm:text-3xl'>
                  <span className='text-red-500'>I</span>
                  <span className='text-black'>NTEGRAL</span>
                </h1>
              </Link>
              {/* Mô tả giới thiệu */}
              <p className='mt-5 text-sm text-gray-600 leading-relaxed max-w-sm'>
                {t(
                  'Điện nhẹ ELV và hạ tầng IT trọn gói: camera, mạng LAN, Wi-Fi, kiểm soát ra vào, âm thanh thông báo, Data Center.',
                  '弱電工程(ELV)與全方位IT基礎設施：監控攝影機、區域網路(LAN)、Wi-Fi、門禁考勤、公共廣播、資料中心(Data Center)。'
                )}
              </p>
            </div>
          </div>

          {/* CỘT 2: DỊCH VỤ */}
          <div className='lg:col-span-3'>
            <h3 className='text-base font-bold text-blue-950 uppercase tracking-wide'>
              {t('DỊCH VỤ', '服務項目')}
            </h3>
            <div className='w-8 h-1 bg-blue-500 rounded-full mt-1.5 mb-5' />
            <ul className='space-y-3 text-sm text-gray-600'>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  {t('Thi công điện nhẹ ELV', '弱電系統(ELV)工程施工')}
                </Link>
              </li>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  {t('Hạ tầng mạng LAN, Wi-Fi', 'LAN區域網路與Wi-Fi建置')}
                </Link>
              </li>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  {t('Camera giám sát doanh nghiệp', '企業級智慧監控攝影機')}
                </Link>
              </li>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  {t('Thiết kế phòng server, Data Center', '伺服器機房與資料中心規劃')}
                </Link>
              </li>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  {t('Nhà thầu ELV nhà máy, khu công nghiệp', '廠房與工業區弱電工程統包')}
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 3: THÔNG TIN */}
          <div className='lg:col-span-2'>
            <h3 className='text-base font-bold text-blue-950 uppercase tracking-wide'>
              {t('THÔNG TIN', '資訊導覽')}
            </h3>
            <div className='w-8 h-1 bg-blue-500 rounded-full mt-1.5 mb-5' />
            <ul className='space-y-3 text-sm text-gray-600'>
              <li>
                <Link to='/ve-chung-toi' className='hover:text-blue-600 transition-colors'>
                  {t('Giới thiệu', '關於我們')}
                </Link>
              </li>
              <li>
                <Link to='/du-an' className='hover:text-blue-600 transition-colors'>
                  {t('Dự án tiêu biểu', '精選工程案例')}
                </Link>
              </li>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  {t('Giải pháp', '解決方案')}
                </Link>
              </li>
              <li>
                <Link to='/lien-he' className='hover:text-blue-600 transition-colors'>
                  {t('Liên hệ', '聯絡我們')}
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 4: LIÊN HỆ */}
          <div className='lg:col-span-3'>
            <h3 className='text-base font-bold text-blue-950 uppercase tracking-wide'>
              {t('LIÊN HỆ', '聯絡資訊')}
            </h3>
            <div className='w-8 h-1 bg-blue-500 rounded-full mt-1.5 mb-5' />
            <div className='space-y-4 text-sm text-gray-600'>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 rounded-full bg-white shadow-sm border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5'>
                  <FiMapPin className='w-4 h-4' />
                </div>
                <span className='leading-relaxed'>
                  {t('299 Liên Phường, Long Trường, Thành phố Hồ Chí Minh', '胡志明市隆長坊蓮坊路299號')}
                </span>
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-white shadow-sm border border-blue-100 flex items-center justify-center text-blue-600 shrink-0'>
                  <FiMail className='w-4 h-4' />
                </div>
                <a
                  href='mailto:tubui@integral-firetek.com'
                  className='hover:text-blue-600 transition-colors font-medium'
                >
                  tubui@integral-firetek.com
                </a>
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-white shadow-sm border border-blue-100 flex items-center justify-center text-blue-600 shrink-0'>
                  <FiGlobe className='w-4 h-4' />
                </div>
                <a
                  href='integral-tech.com.vn'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-blue-600 transition-colors font-medium'
                >
                  integral-tech.com.vn
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className='mt-12 pt-6 border-t border-blue-100/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2'>
          <p>{t('Hạ tầng mạng LAN · Wi-Fi · Camera CCTV · Data Center', '網路基礎設施 · Wi-Fi · 監控CCTV · 資料中心')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
