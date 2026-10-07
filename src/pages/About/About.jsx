import React, { useState } from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR, RiCloseLine } from 'react-icons/ri'
import { Anchor } from 'antd'
import { BsPatchCheck } from 'react-icons/bs'

const { Link } = Anchor

const About = () => {
  const [selectedLeader, setSelectedLeader] = useState(null)
  const [panelOpen, setPanelOpen] = useState(false)

  const leaders = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      title: 'Tổng Giám Đốc',
      bio: 'Với hơn 15 năm kinh nghiệm trong ngành thực phẩm dinh dưỡng, ông Hiển đã dẫn dắt INTEGRAL từ một startup nhỏ trở thành thương hiệu quốc gia được tin dùng.',
      image:
        'https://res.cloudinary.com/dvxnesld4/image/upload/v1745754536/SnapBG.ai_1745754250789_qzcijf.png',
      achievements: [
        'Top 10 Doanh nhân tiêu biểu Việt Nam 2024',
        'Giải thưởng Đổi mới sáng tạo trong ngành thực phẩm',
        'Chứng nhận Doanh nghiệp phát triển bền vững',
      ],
    },
    {
      id: 2,
      name: 'Nguyễn Văn B',
      title: 'Giám Đốc Điều Hành Tài Chính',
      bio: 'Chuyên gia tài chính với bề dày kinh nghiệm tại các tập đoàn đa quốc gia, ông Khải đã xây dựng hệ thống quản trị tài chính vững mạnh cho INTEGRAL.',
      image:
        'https://res.cloudinary.com/dvxnesld4/image/upload/v1745751769/z6547203559835_bffbc96d890fd1d4d298b25123ba1a90_qw2ev4.jpg',
      achievements: [
        'CPA, CFA chứng chỉ quốc tế',
        '15+ năm kinh nghiệm quản lý tài chính',
        'Chuyên gia tái cấu trúc doanh nghiệp',
      ],
    },
    {
      id: 3,
      name: 'Nguyễn Văn C',
      title: 'Giám Đốc Điều Hành Sản Xuất',
      bio: 'Kỹ sư công nghệ thực phẩm với niềm đam mê chất lượng, ông Tâm đảm bảo mọi sản phẩm INTEGRAL đều đạt chuẩn an toàn và dinh dưỡng cao nhất.',
      image:
        'https://res.cloudinary.com/dvxnesld4/image/upload/v1745754536/SnapBG.ai_1745754250789_qzcijf.png',
      achievements: [
        'Tiến sĩ Công nghệ Thực phẩm',
        'Nguyên Giám đốc Nhà máy tại Vinamilk',
        'Chuyên gia hệ thống quản lý chất lượng',
      ],
    },
    {
      id: 4,
      name: 'Nguyễn Văn D',
      title: 'Giám đốc Điều hành Marketing',
      bio: 'Với tầm nhìn chiến lược và khả năng lãnh đạo xuất sắc, ông Hoài đã góp phần mở rộng thị trường INTEGRAL ra 15 tỉnh thành trên cả nước.',
      image:
        'https://res.cloudinary.com/dvxnesld4/image/upload/v1745754536/SnapBG.ai_1745754250789_qzcijf.png',
      achievements: [
        'Thạc sĩ Quản trị Kinh doanh Harvard',
        'Giải thưởng Lãnh đạo trẻ xuất sắc',
        'Chuyên gia phát triển thị trường',
      ],
    },
    {
      id: 5,
      name: 'Trịnh Văn E',
      title: 'Giám Đốc Nhân Sự',
      bio: 'Chuyên gia nhân sự với hơn 10 năm kinh nghiệm, ông Hiếu đã xây dựng đội ngũ nhân sự vững mạnh và phát triển văn hóa doanh nghiệp tại INTEGRAL.',
      image:
        'https://res.cloudinary.com/dvxnesld4/image/upload/v1745754536/SnapBG.ai_1745754250789_qzcijf.png',
      achievements: [
        'Chuyên gia phát triển nguồn nhân lực',
        '10+ năm kinh nghiệm quản lý nhân sự',
        'Xây dựng văn hóa doanh nghiệp xuất sắc',
      ],
    },
  ]

  const handleLeaderClick = (leader) => {
    setSelectedLeader(leader)
    setPanelOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling when panel is open
  }

  const closePanel = () => {
    setPanelOpen(false)
    document.body.style.overflow = 'auto' // Re-enable scrolling
  }

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-16 sm:px-6 lg:px-8'>
      {/* Dimmed overlay when panel is open */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 ${
          panelOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closePanel}
      ></div>

      {/* Leadership Panel */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-full max-w-lg transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          panelOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedLeader && (
          <div className='h-full overflow-y-auto'>
            <div className='sticky top-0 flex items-center justify-between border-b bg-white p-4'>
              <h3 className='text-xl font-bold text-blue-800'>
                Thông tin chi tiết
              </h3>
              <button
                onClick={closePanel}
                className='rounded-full p-2 text-gray-500 hover:bg-gray-100'
              >
                <RiCloseLine className='text-2xl' />
              </button>
            </div>

            <div className='p-6'>
              <div className='mb-6 flex flex-col items-center'>
                <div className='mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-blue-100'>
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className='h-full w-full object-cover'
                  />
                </div>
                <h2 className='text-2xl font-bold text-blue-800'>
                  {selectedLeader.name}
                </h2>
                <p className='text-blue-600 italic'>{selectedLeader.title}</p>
              </div>

              <div className='mb-6'>
                <h4 className='mb-3 text-lg font-semibold text-gray-800'>
                  Tiểu sử
                </h4>
                <p className='leading-relaxed text-gray-700'>
                  {selectedLeader.bio}
                </p>
              </div>

              <div>
                <h4 className='mb-3 text-lg font-semibold text-gray-800'>
                  Thành tựu nổi bật
                </h4>
                <ul className='space-y-3'>
                  {selectedLeader.achievements.map((achievement, index) => (
                    <li key={index} className='flex items-start'>
                      <div className='mt-1 mr-3 rounded-full bg-blue-100 p-1'>
                        <BsPatchCheck className='text-sm text-blue-600' />
                      </div>
                      <span className='text-gray-700'>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-8 border-t pt-6'>
                <p className='text-sm text-gray-500'>
                  "Sứ mệnh của chúng tôi là mang đến những sản phẩm dinh dưỡng
                  chất lượng nhất cho người Việt"
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='mx-auto max-w-7xl'>
        {/* Header Section */}
        <div className='mb-16 text-center' id='header-section'>
          <h1 className='mb-3 text-4xl font-bold text-blue-800 md:text-5xl'>
            <span className='mb-4 block text-3xl'>GIỚI THIỆU</span>
            
          </h1>
          <div className='mx-auto mt-6 h-1 w-24 bg-blue-500'></div>
        </div>

        {/* Ant Design Anchor Navigation - Improved Version */}
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
                title='Thông tin công ty'
                className='text-lg font-normal text-gray-800 transition-all duration-200 group-hover:text-xl group-hover:text-blue-600'
              />
            </div>

            <div className='group flex items-center'>
              <span className='mr-4 ml-2 text-lg font-semibold text-black'>
                02
              </span>
              <Link
                href='#ceo-message'
                title='Thông điệp từ giám đốc'
                className='text-lg font-normal text-gray-800 transition-all duration-200 group-hover:text-xl group-hover:text-blue-600'
              />
              {/* <div className='mr-4 ml-2 flex-1 border-t border-gray-200'></div> */}
            </div>


            <div className='group flex items-center'>
              <span className='mr-4 ml-2 text-lg font-semibold text-black'>
                03
              </span>
              <Link
                href='#leadership-section'
                title='Ban điều hành'
                className='text-lg font-normal text-gray-800 transition-all duration-200 group-hover:text-xl group-hover:text-blue-600'
              />
            </div>
          </Anchor>
        </div>

        {/* Content Section 1 - Giới thiệu (Khung rộng full bằng chiều rộng cả 2 cột bên dưới) */}
        <div className='mb-16 rounded-none bg-white p-8 shadow-lg w-full' id='about-intro'>
          <h2 className='mb-6 text-3xl font-bold text-blue-800'>
            Thông tin công ty
          </h2>
          <div className='space-y-4 leading-relaxed text-gray-700'>
            <p className='flex items-start gap-2'>
              <span className='text-blue-800 font-bold'>•</span>
              <span>
                Công ty TNHH Công nghệ AITEC là kết quả hợp tác giữa Công ty TNHH Trung Lợi và Công ty Speed Investment (SECOM TAIWAN), một trong những công ty công nghệ an ninh hàng đầu tại Đài Loan. Chúng tôi chuyên cung cấp các giải pháp về an toàn, phần mềm, công nghệ thông tin và âm thanh cảnh báo. Đồng thời, AITEC còn được biết đến như một nhà phân phối các thương hiệu camera và hệ thống kiểm soát ra vào (access control) nổi tiếng, nằm trong TOP 50 của thế giới.
              </span>
            </p>

            <p className='flex items-start gap-2'>
              <span className='text-blue-800 font-bold'>•</span>
              <span>
                Ngày nay, các giải pháp an ninh và an toàn đang phát triển mạnh mẽ nhờ vào công nghệ AI. AITEC đã nhanh chóng bắt kịp xu hướng này và mang đến các giải pháp tích hợp hiệu quả, kết hợp giữa nền tảng truyền thống và công nghệ hiện đại, với sự kết hợp giữa trí tuệ nhân tạo và sự tiên tiến. Điều này giúp Quý khách không chỉ đạt được hiệu quả tối ưu về an ninh, an toàn mà còn tiết kiệm chi phí và giảm bớt gánh nặng về nhân lực. AITEC tự hào là đối tác đáng tin cậy, luôn cung cấp những giải pháp thông minh, linh hoạt và phù hợp cho mọi lĩnh vực và ngành nghề.
              </span>
            </p>

            <p className='flex items-start gap-2'>
              <span className='text-blue-800 font-bold'>•</span>
              <span>
                Ngoài việc cung cấp những giải pháp, sản phẩm chất lượng, AITEC luôn đề cao chế độ chăm sóc khách hàng và hỗ trợ sau bán hàng để người mua được thật sự hài lòng.
              </span>
            </p>

            <p className='flex items-start gap-2'>
              <span className='text-blue-800 font-bold'>•</span>
              <span>
                Mục tiêu của chúng tôi là xây dựng mối quan hệ hợp tác lâu dài và bền chặt với tất cả các khách hàng; Lợi ích của khách hàng là điều AITEC quan tâm hàng đầu. Bằng việc hợp tác, chia sẻ những băn khoăn của khách hàng AITEC hy vọng có thể giúp tất cả các khách hàng đạt được hiệu quả cao nhất cho nhu cầu của mình.
              </span>
            </p>
          </div>
        </div>

        {/* Content Section 2 - Thông điệp từ giám đốc */}
        <div className='flex flex-col gap-8 lg:flex-row' id='ceo-message'>
          {/* Image Section */}
          <div className='relative h-[690px] overflow-hidden shadow-2xl lg:w-1/2'>
            <img
              src='https://res.cloudinary.com/dvxnesld4/image/upload/v1745754536/SnapBG.ai_1745754250789_qzcijf.png'
              alt='CEO INTEGRAL'
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
            <div className='absolute bottom-8 left-8 text-white'>
              <p className='text-sm'>Nguyễn Văn A</p>
              <p className='text-xl font-medium'>Tổng giám đốc INTEGRAL</p>
            </div>
          </div>

          {/* Text Section */}
          <div className='bg-white p-8 shadow-lg lg:w-1/2'>
            <h2 className='text-3xl font-bold text-blue-800'>
              Thông điệp từ Tổng Giám Đốc
            </h2>
            <div className='mb-10 pt-6'>
              <p className='font-bold text-blue-800 italic'>Nguyễn Văn A</p>
              <p className='text-blue-600'>
                Giám đốc công ty TNHH Integral Technology Viet Nam
              </p>
              <hr className='mt-2 w-full text-blue-400' />
            </div>
            <div className='mb-8'>
              <div className='mb-2 flex items-center text-blue-700'>
                <RiDoubleQuotesL className='-mt-8 mr-2 text-5xl' />
                <p className='text-xl font-medium italic'>
                  Muốn dẫn đầu trên sân cỏ, phải luôn đổi mới. Đổi mới là yếu tố sống còn.
                </p>
              </div>
            </div>

            <div className='space-y-6 text-gray-700'>
              <p className='leading-relaxed'>
                <span className='font-semibold text-blue-800'>Năm 2025</span>,
                chúng tôi bắt đầu hành trình với vô vàn thử thách, nhưng mục tiêu
                luôn rõ ràng: mang đôi giày bóng đá chất lượng cao đến mọi cầu thủ Việt.
                Không vốn, không nhà máy – chỉ có đam mê và quyết tâm. INTEGRAL
                đã vượt qua mọi hoài nghi để chứng minh rằng người Việt hoàn toàn có thể tạo
                ra những đôi giày đạt chuẩn quốc tế.
              </p>

              <p className='leading-relaxed'>
                Từ xưởng sản xuất đầu tiên ứng dụng công nghệ ép đế hiện đại,
                đến dây chuyền gia công chất liệu da cao cấp và thân thiện môi trường.
                Từ thiết kế phù hợp bàn chân cầu thủ Việt, đến hơn 200 mẫu giày cho mọi
                vị trí trên sân – mỗi sản phẩm là một lời hứa của INTEGRAL:
                bạn có thể thi đấu với sự tự tin tối đa.
              </p>

              <p className='leading-relaxed'>
                Chúng tôi hiểu rằng mỗi trận đấu đều là một thử thách mới.
                Nhưng INTEGRAL sẽ không ngừng sáng tạo, không ngừng tiến bước – cùng
                bạn chinh phục mọi giải đấu.
              </p>
            </div>
          </div>
        </div>

        {/* Người dẫn đường - Modified section */}
        <div className='mt-30 border-b-1' id='leadership-section'>
          <div className='mb-16 text-center'>
           
            <div className='mx-auto w-100 rounded-sm border-1 border-blue-800 p-2'>
              <div className='w-full rounded-sm bg-blue-800 p-1'>
                <span className='text-xl text-white'>BAN ĐIỀU HÀNH</span>
              </div>
            </div>
          </div>

          {/* CEO on top */}
          <div className='mb-8 flex justify-center'>
            <div
              className='w-72 cursor-pointer p-4 text-center transition-colors hover:bg-blue-50 md:border-r-1 md:border-l-1 md:border-blue-800'
              onClick={() => handleLeaderClick(leaders[0])}
            >
              <h3 className='mb-2 text-xl font-bold text-blue-800'>
                <span className='text-lg font-normal'>Ông</span>{' '}
                {leaders[0].name}
              </h3>
              <p className='text-blue-800 italic'>{leaders[0].title}</p>
            </div>
          </div>

          {/* Directors below */}
          <div className='mb-3 grid grid-cols-1 md:grid-cols-4'>
            {leaders.slice(1).map((leader, idx, arr) => (
              <div
                key={leader.id}
                className={`cursor-pointer p-4 text-center transition-colors hover:bg-blue-50 ${
                  idx === 0 ? 'md:border-l-1 md:border-blue-800' : ''
                } ${
                  idx === arr.length - 1 ? 'md:border-r-1 md:border-blue-800' : ''
                } ${idx !== 0 ? 'md:border-l-1 md:border-blue-800' : ''}`}
                onClick={() => handleLeaderClick(leader)}
              >
                <h3 className='mb-2 text-xl font-bold text-blue-800'>
                  <span className='text-lg font-normal'>Ông</span> {leader.name}
                </h3>
                <p className='text-blue-800 italic'>{leader.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        #leadership-section { border-bottom: 1px solid #1e40af !important; }
      `}</style>
    </div>
  )
}

export default About