import ProductService from '@services/Product/ProductServices'
import CategoryService from '@services/Category/CategoryServices'
import { Carousel } from 'antd'
import React, { useEffect, useState } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

// Fallback banner images in case API fails
const fallbackBanners = [
  {
    id: '1',
    name: 'Banner 1',
    imageUrl: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1792568317/Screenshot_2026-10-21_143447_a5p8mm.png',
    alt: 'image1',
  },
  {
    id: '2',
    name: 'Banner 2',
    imageUrl: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1792568317/Screenshot_2026-10-21_143436_nf7ux9.png',
    alt: 'image2',
  },
  {
    id: '3',
    name: 'Banner 3',
    imageUrl: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1792568318/Screenshot_2026-10-21_143456_mooyx9.png',
    alt: 'image3',
  }
]

const awards = [
  {
    img: 'https://d8um25gjecm9v.cloudfront.net/store-front-cms/award_1_fe08b5b4cd.svg',
    alt: 'Quality award',
  },
  {
    img: 'https://d8um25gjecm9v.cloudfront.net/store-front-cms/award_2_959a72e121.svg',
    alt: 'Quality award',
  },
  {
    img: 'https://d8um25gjecm9v.cloudfront.net/store-front-cms/award_3_298d151332.svg',
    alt: 'Quality award',
  },

  {
    img: 'https://d8um25gjecm9v.cloudfront.net/store-front-cms/award_4_271868f252.svg',
    alt: 'Customer satisfaction award',
  },
  {
    img: 'https://d8um25gjecm9v.cloudfront.net/store-front-cms/award_5_83186cbade.svg',
    alt: 'Innovation award',
  },
]
const imagePairs = [
  {
    img: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905834/Screenshot_2026-10-02_084042_b8zei9.png',
    alt: 'Promotion 1',
  },
  {
    img: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905836/Screenshot_2026-10-02_084351_-_Copy_n6dkt1.png',
    alt: 'Promotion 2',
  },
]
const promotion = [
  {
    img: '	https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905834/Screenshot_2026-10-02_084125_ivkmum.png',
    alt: 'Promotion 1',
  },
  {
    img: '	https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905835/Screenshot_2026-10-02_084712_fecas7.png',
    alt: 'Promotion 2',
  },
  {
    img: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905834/Screenshot_2026-10-02_084229_lczdud.png',
    alt: 'Promotion 3',
  },
  {
    img: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905836/Screenshot_2026-10-02_084304_-_Copy_iuxos7.png',
    alt: 'Promotion 2',
  },
]

const action = [
  {
    number: '01',
    title: "SERVER",
    content:
      '',
    image:
      'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905836/Screenshot_2026-10-02_084526_-_Copy_o3m7uo.png',
    alt: 'nike',
  },
  {
    number: '02',
    title: "SERVER",
    content:
      '',
    image:
      'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905835/Screenshot_2026-10-02_084441_uyhopr.png',
    alt: 'nike',
  },
  {
    number: '03',
    title: "SERVER",
    content:
      '',
    image:
      'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905836/Screenshot_2026-10-02_084526_-_Copy_o3m7uo.png',
    alt: 'nike',
  },
  {
    number: '05',
    title: "SERVER",
    content:
      '',
    image:
      '	https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905836/Screenshot_2026-10-02_084526_-_Copy_o3m7uo.png',
    alt: 'nike',
  },
  {
    number: '06',
    title: "SERVER",
    content:
      '',
    image:
      '	https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905836/Screenshot_2026-10-02_084526_-_Copy_o3m7uo.png',
    alt: 'nike',
  },
  {
    number: '07',
    title: "SERVER",
    content:
      '',
    image:
      'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905836/Screenshot_2026-10-02_084526_-_Copy_o3m7uo.png',
    alt: 'nike',
  },
  {
    number: '08',
    title: "SERVER",
    content:
      '',
    image:
      'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905836/Screenshot_2026-10-02_084526_-_Copy_o3m7uo.png',
    alt: 'nike',
  },
]

const horizontalImages = [
  {
    id: '1',
    title: 'Hệ thống Server Dell EMC Standard',
    price: '45,000,000',
    thumbnail: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790873768/ctyintegral_y3o1sq.jpg',
  },
  {
    id: '2',
    title: 'Tủ Rack Máy chủ 42U Chuyên Dụng',
    price: '18,500,000',
    thumbnail: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905834/Screenshot_2026-10-02_084125_ivkmum.png',
  },
  {
    id: '3',
    title: 'Bộ Phát Wifi Cisco Enterprise',
    price: '8,200,000',
    thumbnail: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905836/Screenshot_2026-10-02_084526_-_Copy_o3m7uo.png',
  },
  {
    id: '4',
    title: 'Router MikroTik Chịu Tải Cao',
    price: '12,000,000',
    thumbnail: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905835/Screenshot_2026-10-02_084441_uyhopr.png',
  },
  {
    id: '5',
    title: 'Switch Aruba 24-Port PoE+',
    price: '15,600,000',
    thumbnail: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790873768/ctyintegral_y3o1sq.jpg',
  },
  {
    id: '6',
    title: 'Tường lửa Firewall Fortinet NGFW',
    price: '32,000,000',
    thumbnail: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905834/Screenshot_2026-10-02_084125_ivkmum.png',
  },
  {
    id: '7',
    title: 'Hệ thống Nguồn điện UPS 10kVA',
    price: '28,000,000',
    thumbnail: 'https://res.cloudinary.com/dwbcqjupj/image/upload/v1790905836/Screenshot_2026-10-02_084526_-_Copy_o3m7uo.png',
  },
]

const Home = () => {
  const { language, t } = useLanguage()
  const [products, setProducts] = useState([])
  const [banners, setBanners] = useState([])
  const [loading, setLoading] = useState(false)
  const [bannersLoading, setBannersLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setBannersLoading(true)
        setError(null)

        // Fetch products from SheetDB API
        const sheetProducts = await ProductService.getSheetDBProducts()
        if (sheetProducts && sheetProducts.length > 0) {
          setProducts(sheetProducts)
        } else {
          setProducts(horizontalImages)
        }

        // Fetch collections for banners
        const collectionsResponse = await CategoryService.getAllCollections().catch(err => {
          console.warn('Failed to fetch collections, using fallback banners:', err)
          return { success: false, data: fallbackBanners }
        })

        if (collectionsResponse.success && collectionsResponse.data.length > 0) {
          setBanners(collectionsResponse.data)
        } else {
          setBanners(fallbackBanners)
        }
      } catch (err) {
        console.error('Error fetching data:', err)
        setProducts(horizontalImages)
        setBanners(fallbackBanners)
      } finally {
        setLoading(false)
        setBannersLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='flex flex-col '>
      <div className='h-full w-full cursor-pointer'>
        {bannersLoading ? (
          <div className='h-145 w-full flex items-center justify-center bg-gray-200'>
            <div className='text-center'>
              <div className='h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500 mx-auto mb-4'></div>
              <p className='text-gray-600'>{t('Đang tải banner...', '橫幅載入中...')}</p>
            </div>
          </div>
        ) : (
          <Carousel arrows infinite={true} autoplay={true} autoplaySpeed={3000}>
            {banners.map((banner, index) => (
              <div key={banner.id || index} className='relative overflow-hidden'>
                {/* <Link to={`/bo-suu-tap/${banner.id}`} className='block'> */}
                  <img
                    src={banner.imageUrl}
                    alt={banner.alt || banner.name}
                    className='h-145 w-full '
                  />
                
                {/* </Link> */}
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <div className='grid grid-cols-5 bg-blue-900 md:grid-cols-5 h-25 w-full'>
         
      </div>

      <div className='relative flex w-full max-h-[480px] overflow-hidden gap-4 p-4 bg-gray-100'>
        {imagePairs.map((item, index) => (
          <div key={index} className='w-1/2 rounded-2xl overflow-hidden shadow-md'>
            <img src={item.img} alt={item.alt} className='h-80 md:h-[420px] w-full object-cover transition-transform duration-500 hover:scale-105' />
          </div>
        ))}
      </div>

      <div className='mt-10'>
        <div className='flex w-full flex-col items-center justify-center p-6 md:p-10 text-blue-900'>
          <p className='text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-center'>
            {t('HÀNG HÓA', '產品設備')}
          </p>
          <p className='text-gray-500 text-sm md:text-base mt-2 font-medium text-center'>
            {t('Kéo chuột hoặc vuốt sang hai bên để khám phá các sản phẩm Mới nhất', '左右滑動或拖曳以瀏覽最新產品與設備')}
          </p>

          {/* Horizontal Scrollable Drag Carousel */}
          <div className='mt-8 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200 cursor-grab active:cursor-grabbing py-4'>
            {loading ? (
              <div className='flex h-64 items-center justify-center'>
                <div className='h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500'></div>
              </div>
            ) : (
              <div className='flex min-w-max space-x-6 px-4'>
                {(products.length > 0 ? products : horizontalImages).map((product, idx) => (
                  <Link
                    key={product.id || idx}
                    to={product.id ? `/san-pham/${product.id}` : '#'}
                    className='h-72 w-72 flex-none cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 flex flex-col justify-between'
                  >
                    <div className='relative h-52 w-full overflow-hidden bg-gray-50'>
                      <img
                        src={product.thumbnail || product.img}
                        alt={product.title || product.alt}
                        className='h-full w-full object-cover transition-transform duration-500 hover:scale-110'
                      />
                      {product.discountPercentage > 0 && (
                        <div className='absolute top-3 right-3 rounded-md bg-red-500 px-2.5 py-1 text-xs font-bold text-white shadow'>
                          -{product.discountPercentage}%
                        </div>
                      )}
                    </div>
                    <div className='p-3 text-center'>
                      <h4 className='text-sm font-bold text-gray-800 truncate'>{product.title || product.alt}</h4>
                      <span className='text-xs font-semibold text-blue-600 mt-1 block'>
                        {product.price ? `${product.price.toLocaleString()} VNĐ` : t('Liên hệ báo giá', '歡迎洽詢報價')}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className='flex w-full justify-center mt-6'>
            <hr className='w-32 rounded-full border-2 border-blue-600' />
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <div className='flex w-full justify-between p-10 text-blue-900'>
          <p className='whitespace-nowrap text-5xl font-semibold'>
  {language === 'zh' ? <>創新突破 <br /> 技術升級</> : <>Đổi mới <br /> cập nhật</>}
</p>
          <p className='p-4 text-xl italic'>
            {t('Không ngừng đổi mới, cập nhật công nghệ và nâng cao chuyên môn để mang đến những giải pháp hạ tầng điện nhẹ, mạng và máy chủ tiên tiến, chất lượng và phù hợp.', '持續創新、導入尖端科技並提升專業素養，為您提供先進、可靠且契合需求的弱電、網路及伺服器基礎設施整體方案。')}
          </p>
        </div>
        <div className='grid grid-cols-4 overflow-x-hidden'>
          {promotion.map((item, index) => (
            <div
              key={index}
              className='overflow-hidden' // giữ ảnh phóng to không tràn ra ngoài
            >
              <img
                src={item.img}
                alt={item.alt}
                className='h-160 w-full object-cover transition-transform duration-300 hover:scale-105'
              />
            </div>
          ))}
        </div>

      </div>
      <div className='mt-5 mb-5 flex flex-col items-center justify-center'>
        <div className='mb-4 flex w-full justify-between p-10 text-blue-900'>
          <p className='text-5xl font-semibold'>
            {language === 'zh' ? <>極速網路傳輸 <br /> 整潔專業空間</> : <>Bứt tốc đường truyền <br /> Gọn gàng mọi không gian</>}
          </p>
          <p className='p-4 text-xl italic'>
            {t('Giải pháp thi công hệ thống mạng chuyên nghiệp, tối ưu băng thông và đảm bảo thẩm mỹ tuyệt đối cho văn phòng, nhà xưởng của bạn.', '專業級網路系統整合方案，全面優化傳輸頻寬，為您的辦公室與廠房營造極致美觀的整線環境。')}

          </p>
        </div>
        {/* <div className='grid w-full grid-cols-3 gap-0 border-gray-200'> */}
          {/* {action.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col p-6 ${index < 2 ? 'border-r border-gray-200' : ''}`}
              >
                <span className='mb-4 text-4xl font-bold text-blue-900'>
                  {item.number}
                </span>
                <h3 className='mb-4 text-xl font-semibold text-blue-900'>
                  {item.title}
                </h3>
                <p className='mb-6 text-blue-900'>{item.content}</p>
                <div className='mt-auto'>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className='h-52 w-full rounded-lg object-cover'
                  />
                </div>
              </div>
            )
          })} */}
          <div className="grid grid-cols-2 gap-2 pl-1 pr-3">
  {/* Ảnh lớn bên trái */}
  <div className="relative rounded-lg overflow-hidden">
    <Link to={`/san-pham?brand=${encodeURIComponent(action[0].title)}`}>
      <img
        src={action[0].image}
        alt={action[0].alt}
        className="w-full h-full object-cover"
      />
      <span className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-lg">
        {action[0].title}
      </span>
    </Link>
  </div>

  {/* Ảnh nhỏ bên phải (grid 2x3) */}
  <div className="grid grid-cols-3 grid-rows-2 gap-4">
    {action.slice(1).map((item, index) => (
      <div key={index} className="relative rounded-lg overflow-hidden">
        <Link to={`/san-pham?brand=${encodeURIComponent(item.title)}`}>
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-2 left-2 text-white text-sm font-bold drop-shadow-lg">
            {item.title}
          </span>
        </Link>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    // </div>
  )
}

export default Home
