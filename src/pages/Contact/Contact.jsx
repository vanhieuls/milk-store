import { Carousel } from 'antd'
import { FaCalendarAlt } from 'react-icons/fa'
import {
  IoLocationSharp,
} from 'react-icons/io5'

import { MdLocalPhone } from 'react-icons/md'

const urlImg = [
  {
    img: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790873768/ctyintegral_y3o1sq.jpg',
    alt: 'image1',
  },
  {
    img: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790873768/ctyintegral_y3o1sq.jpg',
    alt: 'image2',
  },
  {
    img: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790873768/ctyintegral_y3o1sq.jpg',
    alt: 'image3',
  },
]
const Contact = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='w-full'>
        <img
          src='https://unica.vn/media/imagesck/1628088346_cach-bat-tay-trong-giao-tiep.jpg?v=1628088346'
          alt='Liên hệ'
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
              LIÊN PHƯỜNG
            </p>
            <hr className='w-40 border-t-5 p-2' />
            <div className='space-y-3 text-gray-700'>
              <p className='flex items-center font-semibold'>
                <MdLocalPhone className='mr-2 size-5 text-blue-500' />
                09779796975
              </p>

              <p className='flex items-center font-semibold'>
                <FaCalendarAlt className='mr-2 size-5 text-red-500' />
                Thời gian làm việc: 8:00 - 17:00 | Thứ 2 - Thứ 7
              </p>
              <p className='flex items-center font-semibold'>
                <IoLocationSharp className='mr-2 size-5 text-green-500' />
                299 Liên Phường, Long Trường, TP.HCM
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
                  <span className='text-2xl'>299 Liên Phường</span>
                  <span className='text-xl'>
                    Long Trường, Thành phố Hồ Chí Minh
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
