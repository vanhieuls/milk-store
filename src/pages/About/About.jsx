import React from 'react'
import { Anchor } from 'antd'
import { FaGraduationCap } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'

const { Link } = Anchor

const About = () => {
  const { language, t } = useLanguage()

  const leaders = [
    {
      id: 1,
      name: 'SHIH PAI LIEN',
      title: t('GIÁM ĐỐC', '總經理'),
      bio: t(
        'Điều hành INTEGRAL, chịu trách nhiệm tiến độ và chất lượng mọi dự án điện nhẹ ELV & IT.',
        '主持 INTEGRAL 整體營運，全面督導各項弱電系統(ELV)與資訊科技(IT)工程之進度與工程品質。'
      ),
      image:
        'https://res.cloudinary.com/dwbcqjupj/image/upload/v1792812035/Screenshot_2026-10-24_101942_pb8wp8.png',
      experience: '20+',
      achievements: [
        t('Quản lý dự án', '專案整體管理'),
        t('Triển khai toàn quốc', '跨區域工程統籌'),
        t('Hạ tầng IT & ELV', 'IT與弱電系統整合'),
      ],
    },
    {
      id: 2,
      name: 'BÙI HOÀNG TÚ',
      title: t('PHÓ GIÁM ĐỐC', '副總經理'),
      bio: t(
        'Kiểm soát chất lượng kỹ thuật từ bản vẽ thiết kế đến nghiệm thu bàn giao.',
        '統籌技術品質管控，從施工圖面審查至工程完工驗收交付全流程把關。'
      ),
      image:
        'https://res.cloudinary.com/dwbcqjupj/image/upload/v1792568195/DSC_9420-_T%C3%BA_46_pxsuej.jpg',
      experience: '10+',
      achievements: [
        t('Hạ tầng mạng', '企業網路架構'),
        t('Bảo mật hệ thống', '系統資訊安全'),
        t('Data Center', '資料中心建置'),
      ],
    },
    {
      id: 3,
      name: 'ĐẶNG THỊ PHƯƠNG',
      title: t('KẾ TOÁN', '財務主管'),
      bio: t(
        'Rà soát nhu cầu, đề xuất và tối ưu quy trình tài chính phù hợp với mô hình hoạt động của doanh nghiệp.',
        '審視業務需求，規劃並優化契合企業營運架構之財務流程與預算管控。'
      ),
      image:
        'https://res.cloudinary.com/dwbcqjupj/image/upload/v1792812181/Minimalist_Female_Profile_Avatar_gqiu2v.png',
      experience: '6+',
      achievements: [
        t('Phân tích & kiểm soát chi phí', '成本分析與預算管控'),
        t('Ứng dụng phần mềm kế toán & quản trị', '導入專業管理軟體'),
        t('Tối ưu hóa quy trình tài chính nội bộ', '優化內部財務審核流程'),
      ],
    }
  ]

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Header Section */}
        <div className='mb-16 text-center' id='header-section'>
          <h1 className='mb-3 text-4xl font-bold text-blue-800 md:text-5xl'>
            <span className='mb-4 block text-3xl'>{t('GIỚI THIỆU', '關於我們')}</span>
          </h1>
          <div className='mx-auto mt-6 h-1 w-24 bg-blue-500'></div>
        </div>

        {/* Ant Design Anchor Navigation */}
        <div className='top-0 z-10 mb-20 border-2 border-blue-900 bg-white/80 px-6 py-6 shadow-sm backdrop-blur-sm'>
          <Anchor
            affix={false}
            targetOffset={100}
            className='-mx-0.5 flex max-w-2xl flex-col space-y-4'
          >
            <div className='group flex items-center'>
              <span className='mr-4 ml-2 text-lg font-semibold text-black'>
                01
              </span>
              <Link
                href='#about-intro'
                title={t('Thông tin công ty', '公司簡介')}
                className='text-lg font-normal text-gray-800 transition-all duration-200 group-hover:text-xl group-hover:text-blue-600'
              />
            </div>

            <div className='group flex items-center'>
              <span className='mr-4 ml-2 text-lg font-semibold text-black'>
                02
              </span>
              <Link
                href='#ceo-message'
                title={t('Thông điệp từ giám đốc', '總經理致詞')}
                className='text-lg font-normal text-gray-800 transition-all duration-200 group-hover:text-xl group-hover:text-blue-600'
              />
            </div>

            <div className='group flex items-center'>
              <span className='mr-4 ml-2 text-lg font-semibold text-black'>
                03
              </span>
              <Link
                href='#leadership-section'
                title={t('Ban điều hành', '管理團隊')}
                className='text-lg font-normal text-gray-800 transition-all duration-200 group-hover:text-xl group-hover:text-blue-600'
              />
            </div>
          </Anchor>
        </div>

        {/* Content Section 1 - Thông tin công ty */}
        <div className='mb-16 rounded-none bg-white p-8 shadow-lg w-full' id='about-intro'>
          <h2 className='mb-6 text-3xl font-bold text-blue-800'>
            {t('Thông tin công ty', '公司簡介')}
          </h2>
          <div className='space-y-4 leading-relaxed text-gray-700'>
            <p className='flex items-start gap-2'>
              <span className='text-blue-800 font-bold'>•</span>
              <span>
                {t(
                  'Công ty TNHH INTEGRAL TECHNOLOGY là đơn vị uy tín hàng đầu chuyên cung cấp giải pháp và thi công trọn gói trong các lĩnh vực: Hệ thống điện nhẹ tòa nhà, An toàn hạ tầng, Phần mềm doanh nghiệp, Công nghệ thông tin và Hệ thống âm thanh cảnh báo.',
                  'INTEGRAL TECHNOLOGY 有限公司是業界備受信賴的專業整合商，專注於提供全方位解決方案與統包施工服務，範疇涵蓋：智慧建築弱電系統（ELV）、基礎設施安全防護、企業級應用軟體、資訊科技（IT）架構以及公共廣播警報系統。'
                )}
              </span>
            </p>

            <p className='flex items-start gap-2'>
              <span className='text-blue-800 font-bold'>•</span>
              <span>
                {t(
                  'Bên cạnh năng lực triển khai kỹ thuật, INTEGRAL còn là nhà phân phối chính thức của các thương hiệu Camera giám sát và Hệ thống kiểm soát ra vào (Access Control) danh tiếng trên thế giới. Với triết lý \'Giải pháp toàn diện – Tự động hóa thông minh\', chúng tôi cam kết mang đến những hệ thống hợp nhất mạnh mẽ, giúp khách hàng tối ưu hóa vận hành và bảo vệ tài sản tuyệt đối.',
                  '除具備堅實的工程實施與技術交付實力外，INTEGRAL 亦為全球多家知名監控攝影機與門禁管制系統（Access Control）品牌的官方合作夥伴。秉持「全方位方案 · 智慧自動化」的核心理念，我們致力於建構高度整合的高效能系統，協助客戶優化營運流程並全面守護資產安全。'
                )}
              </span>
            </p>

            <p className='flex items-start gap-2'>
              <span className='text-blue-800 font-bold'>•</span>
              <span>
                {t(
                  'Tại INTEGRAL, chúng tôi định nghĩa lại hệ thống an ninh bằng sức mạnh của Trí tuệ nhân tạo (AI). Bằng việc tích hợp công nghệ AI tiên tiến vào nền tảng hạ tầng sẵn có, INTEGRAL mang đến giải pháp bảo vệ thông minh, linh hoạt cho mọi lĩnh vực – giúp doanh nghiệp tối ưu hóa an toàn, tiết kiệm chi phí và giảm thiểu gánh nặng nhân sự.',
                  '在 INTEGRAL，我們運用人工智慧（AI）賦能重新定義安防標準。透過將先進的 AI 技術深度導入既有基礎架構，INTEGRAL 為各行各業打造靈活且具前瞻性的智慧防護體系——協助企業全面升級安全層級、大幅精簡維運成本並減輕人力管理負擔。'
                )}
              </span>
            </p>
          </div>
        </div>

        {/* Content Section 2 - Thông điệp từ giám đốc */}
        <div className='flex flex-col gap-8 lg:flex-row mb-16' id='ceo-message'>
          <div className='relative h-[690px] overflow-hidden shadow-2xl lg:w-1/2'>
            <img
              src='https://res.cloudinary.com/dwbcqjupj/image/upload/v1792812035/Screenshot_2026-10-24_101942_pb8wp8.png'
              alt='CEO INTEGRAL'
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
            <div className='absolute bottom-8 left-8 text-white'>
              <p className='text-sm font-semibold'>SHIH PAI LIEN</p>
              <p className='text-xl font-medium'>{t('Tổng giám đốc INTEGRAL', 'INTEGRAL 總經理')}</p>
            </div>
          </div>

          <div className='bg-white p-8 shadow-lg lg:w-1/2'>
            <h2 className='text-3xl font-bold text-blue-800'>
              {t('Thông điệp từ Giám Đốc', '總經理致詞')}
            </h2>
            <div className='mb-10 pt-6'>
              <p className='font-bold text-blue-800 italic'>SHIH PAI LIEN</p>
              <p className='text-blue-600 font-medium'>
                {t('Giám đốc công ty TNHH Integral Technology Viet Nam', '越南 Integral Technology 有限公司 總經理')}
              </p>
              <hr className='mt-2 w-full text-blue-400' />
            </div>
            <div className='space-y-6 text-gray-700'>
              <p className='leading-relaxed text-base sm:text-lg'>
                {t(
                  'Với triết lý "Lợi ích của khách hàng là ưu tiên hàng đầu", chúng tôi không chỉ cung cấp sản phẩm và dịch vụ kỹ thuật, mà còn mang đến sự an tâm dài hạn qua chính sách hậu mãi và chăm sóc khách hàng chuyên nghiệp. INTEGRAL luôn sẵn sàng lắng nghe, chia sẻ và đồng hành cùng Quý đối tác trên hành trình phát triển bền vững.',
                  '秉持「客戶利益至上」的經營哲學，我們不僅僅提供工程技術與優質設備，更透過專業的售後支援與全方位客製化服務，為客戶帶來長遠的安心保障。INTEGRAL 始終虛心傾聽、真誠分享，願竭誠成為您在企業永續發展道路上最值得信賴的堅實夥伴。'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section 3 - BAN ĐIỀU HÀNH */}
        <div className='mt-16' id='leadership-section'>
          <div className='mb-12 text-center'>
            <div className='mx-auto w-64 rounded-sm border border-blue-800 p-1.5'>
              <div className='w-full bg-blue-800 py-2 text-center'>
                <span className='text-xl font-bold text-white tracking-wider'>
                  {t('BAN ĐIỀU HÀNH', '管理團隊')}
                </span>
              </div>
            </div>
          </div>

          {/* Grid các thẻ thành viên */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className='flex flex-row overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100 min-h-[290px]'
              >
                {/* Cột trái: Ảnh đại diện + Badge Kinh nghiệm */}
                <div className='relative w-2/5 min-w-[130px] flex-shrink-0 bg-slate-100'>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className='h-full w-full object-cover object-center'
                  />
                  {/* Badge Số năm kinh nghiệm */}
                  <div className='absolute bottom-3 left-2 right-2 rounded-lg bg-[#183153]/85 px-2 py-1.5 text-center text-white backdrop-blur-xs'>
                    <span className='text-lg font-extrabold text-blue-400 mr-1'>
                      {leader.experience}
                    </span>
                    <span className='text-[10px] font-semibold tracking-wider uppercase leading-tight block sm:inline'>
                      {t('NĂM KINH NGHIỆM', '年行業經驗')}
                    </span>
                  </div>
                </div>

                {/* Cột phải: Thông tin chi tiết */}
                <div className='flex w-3/5 flex-col justify-between p-4 pl-5'>
                  <div>
                    {/* Họ tên */}
                    <h3 className='text-base font-black tracking-wide text-[#183153] uppercase line-clamp-1'>
                      {leader.name}
                    </h3>
                    {/* Chức danh */}
                    <p className='mt-0.5 text-xs font-bold text-blue-600 uppercase tracking-wider'>
                      {leader.title}
                    </p>
                    {/* Mô tả ngắn */}
                    <p className='mt-2 text-xs leading-relaxed text-gray-500 line-clamp-3'>
                      {leader.bio}
                    </p>

                    {/* Danh sách kỹ năng/thành tựu */}
                    <div className='mt-3 space-y-1.5'>
                      {leader.achievements.map((item, idx) => (
                        <div
                          key={idx}
                          className='flex items-center rounded-lg bg-blue-50/80 px-2.5 py-1 text-[11px] font-semibold text-blue-900 border border-blue-100/60'
                        >
                          <span className='mr-1.5 h-1.5 w-1.5 rounded-full bg-blue-500'></span>
                          <span className='truncate'>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
