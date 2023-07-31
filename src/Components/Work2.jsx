// import React, { useEffect, useState } from 'react'
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// import { Avatar, Card } from 'antd';
// import data from '../data/portfolioData';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import ShowCard from './ShowCard';


// const { Meta } = Card;



// const Work2 = () => {
//     const [nextItems, setNextItems] = useState(6)
//     const [portfolios, setPortfolios] = useState(data)
//     const [showCard, setShowCard] = useState(false)
//     const [activeId, setActiveId] = useState(null)


//     useEffect(() => {
//         AOS.init()

//     }, [])

//     const handleLoadMore = () => {
//         setNextItems(prev => prev + 3)
//     }

//     const handleShowCard = (id) => {
//         setShowCard(true)
//         setActiveId(id)

//     }


//     data.filter((index)=>{
//         console.log("Protfolio data", index.imgUrl)
//     })


//     return (
//         <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] font-sans'>
//             <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//                 <div className='pb-8'>
//                     <p className='text-4xl font-bold inline border-b-4 border-[#C23B22] text-gray-300'>Work</p>
//                     <p className='py-6'>Checkout My Work</p>

//                 </div>

//                 <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
//                     {
//                         portfolios.slice(0, nextItems)?.map((portfolio, index) => (
//                             <div className='group flex justify-center items-center mx-auto relative z-[1]'
//                                 key={index}
//                                 data-aos='fade-zoom-in'
//                                 data-aos-delay='50'
//                                 data-aos-duration='1000'
//                             >
//                                 <figure>
//                                     <img className='rounded-[8px]' src={portfolio.imgUrl} alt="figure" />
//                                 </figure>

//                                 <div className='w-full h-full bg-[#0a192f] backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[8px] absolute top-0 left-0 z-[5] hidden group-hover:block cursor-pointer'>
//                                     <div className='w-full h-full flex items-center justify-center'>
//                                         <button onClick={() => handleShowCard(portfolio.id)} className='text-white bg-[#0a192f] hover:bg-[#53565a] py-2 px-4 rounded-[8px] font-500 ease-in duration-200'>See details</button>

//                                     </div>
//                                 </div>

//                             </div>
//                         )

//                         )
//                     }

//                 </div>

//                 <div className='text-center mt-6'>
//                     {nextItems < portfolios.length && data.length > 6 && (

//                         <button onClick={handleLoadMore} className='text-white bg-[#0a192f] hover:bg-[#53565a] py-2 px-4 rounded-[8px] font-500 ease-in duration-200'>Load More</button>
//                     )}
//                 </div>
//             </div>

//             {
//                 showCard && <ShowCard setShowCard={setShowCard} activeId={activeId} />
//             }

//         </div>
//     )
// }

// export default Work2
