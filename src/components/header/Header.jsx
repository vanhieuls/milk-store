import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { headerClass } from './data';
import { FiShoppingCart, FiUser, FiLogOut, FiInfo, FiClock, FiTag } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { message } from 'antd';
import { useCartCount } from '@/hooks/useCart';
import logo from '/src/assets/logogiay.png'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const { currentUser, isAuthenticated, logout } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const [countItems] = useCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu && !event.target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  const isActive = path => location.pathname === path;

  const getUserDisplayName = () => {
    if (!currentUser || !currentUser.data) return '';

    const { firstName, middleName, surname } = currentUser.data;
    return `${surname} ${middleName} ${firstName}`;
  };

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result.success) {
        message.success(t('Đăng xuất thành công!', '登出成功！'));
      }
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
      message.error('Không thể kết nối đến máy chủ, vui lòng thử lại sau');
    }
    finally {
      setShowUserMenu(false);
    }
  };

  return (
    <>
      <header
        className={`${headerClass.header} ${isScrolled ? 'py-3 shadow-lg' : 'py-5 shadow-sm'} relative z-20 transition-all duration-300`}
      >
        <div className='container mx-auto flex items-center justify-between'>
          {/* logo */}
          <Link to='/' className='flex items-center gap-3'>
            {/* Phần chứa ảnh logo */}
            <div className='flex-shrink-0'>
              <img 
                src="https://res.cloudinary.com/dwbcqjupj/image/upload/v1790874890/logo_sfbplh.webp" 
                className='h-14 w-auto object-contain' 
                alt="Zalo" 
              />
            </div>

          </Link>

          {/* navigation */}
          <nav className='flex items-center space-x-8'>
            <Link
              to='/trang-chu'
              className={`${headerClass.nav} ${isActive('/') || isActive('/trang-chu') ? 'font-semibold text-blue-600' : ''}`}
            >
              {t('Trang chủ', '首頁')}
            </Link>
            <Link
              to='/ve-chung-toi'
              className={`${headerClass.nav} ${isActive('/ve-chung-toi') ? 'font-semibold text-blue-600' : ''}`}
            >
              {t('Giới thiệu', '關於我們')}
            </Link>
            <Link
              to='/san-pham'
              className={`${headerClass.nav} ${isActive('/san-pham') ? 'font-semibold text-blue-600' : ''}`}
            >
              {t('Sản phẩm', '產品介紹')}
            </Link>
            <Link
              to='/giai-phap'
              className={`${headerClass.nav} ${isActive('/giai-phap') ? 'font-semibold text-blue-600' : ''}`}
            >
              {t('Giải pháp', '解決方案')}
            </Link>
            <Link
              to='/du-an'
              className={`${headerClass.nav} ${isActive('/du-an') ? 'font-semibold text-blue-600' : ''}`}
            >
              {t('Dự án', '工程案例')}
            </Link>
            <Link
              to='/lien-he'
              className={`${headerClass.nav} ${isActive('/lien-he') ? 'font-semibold text-blue-600' : ''}`}
            >
              {t('Liên hệ', '聯絡我們')}
            </Link>
          </nav>

          {/* buttons */}
          <div className='flex items-center space-x-4'>
            {/* Language switch button */}
            <button
              onClick={toggleLanguage}
              className='flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 hover:border-blue-600 text-sm font-semibold transition-all bg-gray-50 hover:bg-white text-gray-800 shadow-sm cursor-pointer'
              title={t('Chuyển sang Tiếng Trung', '切換為越南語')}
            >
              {language === 'vi' ? (
                <img
                  src='https://cdn.gtranslate.net/flags/svg/vi.svg'
                  alt='Tiếng Việt'
                  className='w-5 h-5 object-contain rounded-full'
                />
              ) : (
                <img
                  src='https://res.cloudinary.com/dwbcqjupj/image/upload/v1791256316/Flag_of_the_Republic_of_China.svg_ke9zwd.webp'
                  alt='繁體中文'
                  className='w-5 h-5 object-contain rounded-full'
                />
              )}
          </button>
            {/* User profile button */}
            <div className="user-menu-container relative">
              {/* {isAuthenticated ? (
                <button
                  className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors'
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <div className='h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center'>
                    {currentUser?.data?.avatar ? (
                      <img
                        src={currentUser.data.avatar}
                        alt="User avatar"
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <FiUser className='h-5 w-5 text-blue-600' />
                    )}
                  </div>
                  <span className='hidden md:block font-medium'>
                    {getUserDisplayName()}
                  </span>
                </button>
              ) : (
                <Link
                  to='/dang-nhap'
                  className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-700 transition-all hover:bg-gray-100'
                >
                  <FiUser className='h-5 w-5' />
                </Link>
              )} */}

              {/* User dropdown menu */}
              {showUserMenu && isAuthenticated && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-md shadow-lg py-2 z-30">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-700">{getUserDisplayName()}</p>
                    <p className="text-xs text-gray-500 truncate">{currentUser?.data?.email}</p>
                  </div>
                  <Link
                    to="/thong-tin-ca-nhan"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <FiInfo className="mr-2 h-4 w-4" />
                    {t('Thông tin cá nhân', '個人資訊')}
                  </Link>
                  <Link
                    to="/don-hang"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <FiClock className="mr-2 h-4 w-4" />
                    {t('Đơn hàng', '訂單記錄')}
                  </Link>
                  <Link
                    to="/ma-giam-gia"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <FiTag className="mr-2 h-4 w-4" />
                    {t('Mã giảm giá', '優惠券')}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <FiLogOut className="mr-2 h-4 w-4" />
                    {t('Đăng xuất', '登出')}
                  </button>
                </div>
              )}
            </div>

            {/* Shopping cart button - only display when authenticated */}
            {isAuthenticated && (
              <button className={`${headerClass.button} group relative flex cursor-pointer items-center gap-2 p-2 rounded-md  transition-colors`}>
                <Link to='/gio-hang' className="flex items-center">
                  <FiShoppingCart className="h-5 w-5 text-white " />
                  {countItems > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-medium text-white ring-2 ring-white">
                      {countItems}
                    </span>
                  )}
                </Link>
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;