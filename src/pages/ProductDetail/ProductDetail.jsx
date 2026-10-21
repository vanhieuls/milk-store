import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
// Import Helmet
import { Helmet } from 'react-helmet-async';
import ProductImages from './Components/ProductImages'
import ProductInfo from './Components/ProductInfo'
import Reviews from './Components/ProductReview'
import RelatedProducts from './Components/RelatedProducts'
import LoadingState from '../Products/Components/LoadingState'
import ErrorState from '../Products/Components/ErrorState'
import NotFound from './Components/ProductNotFound'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import ProductService from '../../services/Product/ProductServices'
import { useLanguage } from '../../context/LanguageContext'
import {
  InfoCircleOutlined,
  CheckCircleOutlined,
  StarOutlined,
  SafetyOutlined
} from '@ant-design/icons';

const ProductDetail = () => {
  useScrollToTop()
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('description') // 'description' hoặc 'specifications'

  // Hồi phục vị trí cuộn
  useEffect(() => {
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition !== null) {
        window.scrollTo({ top: parseInt(savedPosition), behavior: 'auto' });
        sessionStorage.removeItem('scrollPosition'); // Clear after use
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const timer = setTimeout(restoreScrollPosition, 100);
    return () => clearTimeout(timer);
  }, []);

  // Fetch dữ liệu sản phẩm
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        // Fetch product by ID
        if (id) {
          try {
            const response = await ProductService.getProductById(id);

            if (response?.data) {
              setProduct(response.data);
            } else {
              setError('Không tìm thấy sản phẩm');
            }
          } catch (error) {
            console.error('Error fetching product by ID:', error);
            setError('Có lỗi xảy ra khi tải sản phẩm');
          }
        } else {
          setError('Không tìm thấy ID sản phẩm');
        }
      } catch (err) {
        console.error('Error in product fetch process:', err);
        setError('Có lỗi xảy ra khi tải sản phẩm');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Bỏ navigate khỏi dependency array vì nó không thay đổi

  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} />
  if (!product) return <NotFound />

  // --- LOGIC TẠO DỮ LIỆU CHO THẺ META VÀ OG ---
  const productName = product.name || 'Sản phẩm không tên';
  
  // Tối ưu Meta Description (tối đa 155-160 ký tự)
  const rawDescription = product.description || `Mua ${productName} chính hãng, giá tốt. Cam kết chất lượng và giao hàng nhanh.`;
  const productDescription = rawDescription.substring(0, 155) + (rawDescription.length > 155 ? '...' : '');

  // Lấy URL hình ảnh chính (Thay đổi logic này nếu cấu trúc hình ảnh của bạn khác)
  const productImageUrl = product.images && product.images.length > 0
    ? product.images[0].url // Giả định trường 'url' chứa đường dẫn tuyệt đối
    : `${window.location.origin}/default-product.jpg`; // Hình ảnh mặc định

  // Lấy URL chuẩn (Canonical URL)
  const canonicalUrl = window.location.href; 
  // --- KẾT THÚC LOGIC DỮ LIỆU ---

  // Get the first dimension object if available
  const dimension = product.dimensions && product.dimensions.length > 0 ? product.dimensions[0] : null;

  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* --- PHẦN 1: THÊM HELMET (META VÀ OG TAGS) --- */}
      <Helmet>
        {/* SEO CƠ BẢN */}
        <title>{productName} | Tên Cửa Hàng Của Bạn</title>
        <meta name="description" content={productDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content={`${productName}, ${product.brand?.name || ''}, ${product.category || ''}, mua online`} />
        
        {/* CÁC THẺ OPEN GRAPH (OG) - CHO FACEBOOK/ZALO */}
        <meta property="og:title" content={productName} />
        <meta property="og:description" content={productDescription} />
        <meta property="og:type" content="product" /> 
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={productImageUrl} />

        {/* THẺ OG CHO E-COMMERCE */}
        {product.price && (
          <>
            {/* Giả sử giá là trường price và đơn vị là VND */}
            <meta property="og:price:amount" content={product.price} /> 
            <meta property="og:price:currency" content="VND" />
          </>
        )}
        
        {/* CÁC THẺ TWITTER CARD - CHO X/TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={productName} />
        <meta name="twitter:description" content={productDescription} />
        <meta name="twitter:image" content={productImageUrl} />
        
      </Helmet>
      {/* --- KẾT THÚC PHẦN HELMET --- */}

      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-blue-600">{t('Trang chủ', '首頁')}</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link
          to="/san-pham"
          className="text-gray-500 hover:text-blue-600"
        >
{t('Sản phẩm', '產品列表')}
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-gray-800 truncate">{product.name}</span>
      </nav>

      {/* Chi tiết sản phẩm */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductImages product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* SẢN PHẨM LIÊN QUAN */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight uppercase border-l-4 border-blue-600 pl-3">
          {t('SẢN PHẨM LIÊN QUAN', '相關推薦產品')}
        </h2>
        <RelatedProducts product={product} title={t('SẢN PHẨM LIÊN QUAN', '相關推薦產品')} />
      </div>
    </div>
  )
}

export default ProductDetail