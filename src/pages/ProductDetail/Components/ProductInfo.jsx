import React from 'react'

const ProductInfo = ({ product }) => {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='mb-3 text-2xl font-bold text-gray-900 md:text-3xl'>
          {product.name}
        </h1>

        {/* Description directly under product name */}
        <div className='rounded-lg bg-gray-50 p-4 border border-gray-100 text-gray-700 leading-relaxed text-sm md:text-base'>
          <h3 className='font-semibold text-gray-900 mb-2'>Mô tả chi tiết:</h3>
          <p className='whitespace-pre-line'>
            {product.description || 'Chưa có thông tin mô tả cho sản phẩm này.'}
          </p>
        </div>
      </div>

      <div className='mt-8'>
        <a
          href='https://zalo.me/09779796975'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white hover:bg-blue-700 transition-all shadow-md gap-3 text-base'
        >
          <img src='https://res.cloudinary.com/dwbcqjupj/image/upload/v1790874890/logo_sfbplh.webp' alt='Zalo' className='h-7 w-7 rounded-full bg-white p-0.5' />
          Liên hệ tư vấn qua Zalo
        </a>
      </div>
    </div>
  )
}

export default ProductInfo