import React from 'react'
import { Carousel } from 'antd'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdLocalPhone } from 'react-icons/md'
import { useLanguage } from '../../context/LanguageContext'

const urlImg = [
  {
    img: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1792475794/unnamed_itgrcb.webp',
    alt: 'image1',
  },
  {
    img: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1792475793/unnamed_2_jrytls.webp',
    alt: 'image2',
  },
  {
    img: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1792475794/unnamed_1_bksecl.webp',
    alt: 'image3',
  },
]

const Contact = () => {
  const { t } = useLanguage()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='w-full'>
        <img
          src='https://res.cloudinary.com/dwbcqjupj/image/upload/v1792476115/Gemini_Generated_Image_n40yg8n40yg8n40y_yduohh.png'
          alt={t('Liên hệ', '聯絡我們')}
          className='w-full h-100 object-cover'
        />
      </div>
      <div
        id='target-section'
        className='flex w-full flex-col items-center justify-center bg-gray-200 py-10'
      >
        <div className='flex w-full flex-col gap-6 p-6 lg:flex-row'>
          <div className='w-full rounded-lg bg-white p-6 shadow-lg lg:w-1/2'>
            <h2 className='mb-3 text-2xl font-medium text-blue-900'>
              Integral Technology Viet Nam Co.,Ltd
            </h2>
            <p className='mb-4 text-5xl font-semibold text-blue-900'>
              {t('LIÊN PHƯỜNG', '蓮坊辦事處')}
            </p>
            <hr className='w-40 border-t-5 p-2' />
            <div className='space-y-3 text-gray-700'>
              <p className='flex items-center font-semibold'>
                <MdLocalPhone className='mr-2 size-5 text-blue-500' />
                0906979505
              </p>

              <p className='flex items-center font-semibold'>
                <FaCalendarAlt className='mr-2 size-5 text-red-500' />
                {t('Thời gian làm việc: 8:00 - 17:00 | Thứ 2 - Thứ 7', '營業時間：週一至週六 8:00 - 17:00')}
              </p>
              <p className='flex items-center font-semibold'>
                <IoLocationSharp className='mr-2 size-5 text-green-500' />
                {t('299 Liên Phường, Long Trường, TP.HCM', '胡志明市隆長坊蓮坊路299號')}
              </p>
            </div>

            {/* Google Maps */}
            <div className='mt-4'>
              <iframe
                className='h-64 w-full rounded-lg shadow-md'
                src='https://www.google.com/maps?q=10.805523612731006,106.79663419398703&z=16&output=embed'
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Google Maps'
              ></iframe>
            </div>
          </div>
          <div className='flex w-full flex-col items-center rounded-lg bg-blue-500 p-6 shadow-lg lg:w-1/2'>
            <div className='mt-6 w-full max-w-full rounded-sm border-6 border-white overflow-hidden'>
              <Carousel
                arrows
                infinite={true}
                autoplay={true}
                autoplaySpeed={3000}
              >
                {urlImg.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className='h-85 w-full object-cover'
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className='mt-3 w-full'>
              <div className='flex items-center font-semibold text-white'>
                <IoLocationSharp className='mr-2 size-15 text-white shrink-0' />
                <div className='mt-5 flex flex-col'>
                  <span className='text-2xl'>{t('299 Liên Phường', '蓮坊路299號')}</span>
                  <span className='text-xl'>
                    {t('Long Trường, Thành phố Hồ Chí Minh', '胡志明市隆長坊')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
