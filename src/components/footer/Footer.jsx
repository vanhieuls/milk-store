import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhoneCall, FiMapPin, FiMail, FiGlobe } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-[#f0f7ff] to-[#e8f1fd] text-gray-700 border-t border-blue-100/80'>
      {/* Background Subtle Pattern / Decorative Elements */}
      <div className='absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10'>
          
          {/* CỘT 1: Logo, Mô tả & Hotline */}
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
                Điện nhẹ ELV và hạ tầng IT trọn gói: camera, mạng LAN, Wi-Fi, kiểm soát ra vào, âm thanh thông báo, Data Center. 
              </p>
            </div>

            {/* Nút Hotline tư vấn */}
            {/* <div className='mt-6'>
              <a
                href='tel:0379292990'
                className='inline-flex items-center gap-3.5 bg-[#0b57d0] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full shadow-lg shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer'
              > */}
                {/* <div className='w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0b57d0] shadow-sm shrink-0'>
                  <FiPhoneCall className='w-4 h-4 text-[#0b57d0]' />
                </div> */}
                {/* <div className='flex flex-col text-left'>
                  <span className='text-[10px] font-semibold text-blue-100 uppercase tracking-wider leading-none'>
                    HOTLINE TƯ VẤN
                  </span>
                  <span className='text-base font-extrabold text-white tracking-wider mt-1 leading-none'>
                    0379 292 111
                  </span>
                </div> */}
              {/* </a>
            </div> */}
          </div>

          {/* CỘT 2: DỊCH VỤ */}
          <div className='lg:col-span-3'>
            <h3 className='text-base font-bold text-blue-950 uppercase tracking-wide'>
              DỊCH VỤ
            </h3>
            <div className='w-8 h-1 bg-blue-500 rounded-full mt-1.5 mb-5' />
            <ul className='space-y-3 text-sm text-gray-600'>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  Thi công điện nhẹ ELV
                </Link>
              </li>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  Hạ tầng mạng LAN, Wi-Fi
                </Link>
              </li>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  Camera giám sát doanh nghiệp
                </Link>
              </li>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  Thiết kế phòng server, Data Center
                </Link>
              </li>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  Nhà thầu ELV nhà máy, khu công nghiệp
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 3: THÔNG TIN */}
          <div className='lg:col-span-2'>
            <h3 className='text-base font-bold text-blue-950 uppercase tracking-wide'>
              THÔNG TIN
            </h3>
            <div className='w-8 h-1 bg-blue-500 rounded-full mt-1.5 mb-5' />
            <ul className='space-y-3 text-sm text-gray-600'>
              <li>
                <Link to='/ve-chung-toi' className='hover:text-blue-600 transition-colors'>
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to='/du-an' className='hover:text-blue-600 transition-colors'>
                  Dự án tiêu biểu
                </Link>
              </li>
              <li>
                <Link to='/giai-phap' className='hover:text-blue-600 transition-colors'>
                  Giải pháp
                </Link>
              </li>
              <li>
                <Link to='/lien-he' className='hover:text-blue-600 transition-colors'>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 4: LIÊN HỆ */}
          <div className='lg:col-span-3'>
            <h3 className='text-base font-bold text-blue-950 uppercase tracking-wide'>
              LIÊN HỆ
            </h3>
            <div className='w-8 h-1 bg-blue-500 rounded-full mt-1.5 mb-5' />
            <div className='space-y-4 text-sm text-gray-600'>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 rounded-full bg-white shadow-sm border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5'>
                  <FiMapPin className='w-4 h-4' />
                </div>
                <span className='leading-relaxed'>
                  299 Liên Phường, Long Trường, Thành phố Hồ Chí Minh
                </span>
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-white shadow-sm border border-blue-100 flex items-center justify-center text-blue-600 shrink-0'>
                  <FiMail className='w-4 h-4' />
                </div>
                <a
                  href='mailto:sales@pat.com.vn'
                  className='hover:text-blue-600 transition-colors font-medium'
                >
                  sales@pat.com.vn
                </a>
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-white shadow-sm border border-blue-100 flex items-center justify-center text-blue-600 shrink-0'>
                  <FiGlobe className='w-4 h-4' />
                </div>
                <a
                  href='https://pat.com.vn'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-blue-600 transition-colors font-medium'
                >
                  integral.com.vn
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className='mt-12 pt-6 border-t border-blue-100/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2'>
          <p>Hạ tầng mạng LAN · Wi-Fi · Camera CCTV · Data Center</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer