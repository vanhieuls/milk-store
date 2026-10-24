/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import ProductService from '../../services/Product/ProductServices'
import { useLanguage } from '../../context/LanguageContext'

const Products = () => {
  const [products, setProducts] = useState([])
  const [displayCount, setDisplayCount] = useState(4)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const navigate = useNavigate()
  const { t } = useLanguage()

  useEffect(() => {
    const loadAllProducts = async () => {
      try {
        setLoading(true)
        const data = await ProductService.getSheetDBProducts()
        if (data && data.length > 0) {
          setProducts(data)
        } else {
          // Fallback demo data
          setProducts([
            {
              id: 'CAM01',
              name: 'Camera IP Thân Trụ Dahua 2MP',
              description: 'Độ phân giải 2.0 Megapixel, chuẩn nén H.265+, tầm xa hồng ngoại 30m, hỗ trợ PoE, chống nước IP67',
              thumbnail: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790873768/ctyintegral_y3o1sq.jpg'
            },
            {
              id: 'SW02',
              name: 'Switch Aruba 24 Port PoE+',
              description: 'Tốc độ Gigabit 1Gbps, cấp nguồn PoE+ 370W cho camera và IP Phone, quản lý qua Cloud chuyên nghiệp',
              thumbnail: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905834/Screenshot_2026-10-02_084125_ivkmum.png'
            }
          ])
        }
      } catch (err) {
        console.error('Lỗi khi tải sản phẩm:', err)
      } finally {
        setLoading(false)
      }
    }

    loadAllProducts()
  }, [])

  // Infinite Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
        !loadingMore &&
        displayCount < products.length
      ) {
        setLoadingMore(true)
        setTimeout(() => {
          setDisplayCount(prev => Math.min(prev + 4, products.length))
          setLoadingMore(false)
        }, 600)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loadingMore, displayCount, products.length])

  return (
    <div className='min-h-screen bg-white'>
      {/* 1. Full-width Header Banner */}
      <div className='relative w-full h-64 md:h-80 bg-slate-900 flex flex-col items-center justify-center text-white overflow-hidden shadow-md'>
        {/* Background Image overlay */}
        <div
          className='absolute inset-0 opacity-40 bg-cover bg-center'
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dwbcqjupj/image/upload/v1790873768/ctyintegral_y3o1sq.jpg')`
          }}
        />
        <div className='relative z-10 text-center px-4'>
          <h1 className='text-3xl md:text-5xl font-extrabold tracking-wider uppercase drop-shadow-md mb-2'>
            {t('SẢN PHẨM', '產品設備')}
          </h1>
          <p className='text-xs md:text-sm font-medium text-gray-200'>
            <Link to='/' className='hover:underline hover:text-blue-300'>{t('Trang Chủ', '首頁')}</Link> &gt; <span className='text-blue-400 font-semibold'>{t('Sản Phẩm', '產品列表')}</span>
          </p>
        </div>
      </div>

      {/* 2. Main Product List (Matching Uploaded Layout) */}
      <div className='max-w-6xl mx-auto px-4 py-12'>
        {loading ? (
          <div className='flex flex-col items-center justify-center py-20'>
            <Loader2 className='w-10 h-10 text-blue-600 animate-spin mb-3' />
            <p className='text-gray-500 font-medium'>{t('Đang tải danh sách sản phẩm...', '產品列表載入中...')}</p>
          </div>
        ) : (
          <div className='space-y-16'>
            {products.slice(0, displayCount).map((product) => (
              <div
                key={product.id}
                className='grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-gray-100 pb-12 last:border-0'
              >
                {/* Left: Big Image */}
                <div className='md:col-span-6 flex justify-center'>
                  <div className='w-full max-w-md h-64 sm:h-80 rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 group cursor-pointer' onClick={() => navigate(`/san-pham/${product.id}`)}>
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  </div>
                </div>

                {/* Right: Info Table & Action Buttons */}
                <div className='md:col-span-6 flex flex-col justify-between space-y-4'>
                  <div>
                    <h2 className='text-2xl font-extrabold text-gray-900 uppercase tracking-tight mb-4'>
                      {product.name}
                    </h2>

                    {/* Specifications / Details Table */}
                    <div className='border-t border-b border-gray-200 divide-y divide-gray-100 text-sm'>
                      <div className='py-3 grid grid-cols-12 gap-2'>
                        <span className='col-span-4 font-bold text-gray-800'>{t('Tên sản phẩm', '產品名稱')}</span>
                        <span className='col-span-8 text-gray-600'>{product.name}</span>
                      </div>
                      <div className='py-3 grid grid-cols-12 gap-2 bg-gray-50/50 px-1'>
                        <span className='col-span-4 font-bold text-gray-800'>{t('Mô tả thiết bị', '設備規格描述')}</span>
                        <span className='col-span-8 text-gray-600 leading-relaxed'>{product.description || t('Chưa có thông tin chi tiết.', '暫無詳細規格資訊。')}</span>
                      </div>
                      <div className='py-3 grid grid-cols-12 gap-2'>
                        <span className='col-span-4 font-bold text-gray-800'>{t('Trạng thái', '庫存狀態')}</span>
                        <span className='col-span-8 text-green-600 font-semibold'>{t('Sẵn hàng', '現貨在庫')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: Chi tiết & Mua Hàng */}
                  <div className='flex items-center gap-4 pt-2'>
                    <button
                      onClick={() => navigate(`/san-pham/${product.id}`)}
                      className='px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded transition-colors shadow-sm cursor-pointer'
                    >
                      {t('Chi tiết', '查看詳情')}
                    </button>
                    <a
                      href='https://zalo.me/0906979505'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-6 py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm rounded transition-colors shadow-sm flex items-center gap-2'
                    >
                      {t('Mua Hàng', '立即諮詢/購買')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Infinite Scroll Loader */}
        {loadingMore && (
          <div className='flex justify-center items-center py-8'>
            <Loader2 className='w-8 h-8 text-blue-600 animate-spin mr-2' />
            <span className='text-sm text-gray-600 font-medium'>{t('Đang tải thêm sản phẩm...', '正在載入更多產品...')}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
