import portfolioImg01 from '../asset/projects/projectImg-01.JPG';
import portfolioImg02 from '../asset/projects/projectImg-02.JPG';
import portfolioImg03 from '../asset/projects/projectImg-03.JPG';
import portfolioImg04 from '../asset/projects/projectImg-04.JPG';
import portfolioImg05 from '../asset/projects/projectImg-05.JPG';
import portfolioImg06 from '../asset/projects/projectImg-06.JPG';








const portfolioData = [
    {
        id: '01',
        imgUrl: portfolioImg01,
        title: 'React+Vite Dashboard',
        description: 'Crafted with React and Vite, our cutting-edge dashboard project features dynamic data visualization using Tremor components. Experience real-time insights and seamless user interaction, all powered by the latest web technologies.',
        tech: ["React", "Tailwind css", "Tremor", "Vercel", "Vite", "Hero-Icons"],
        siteUrl: 'https://dashboard-vite-rho.vercel.app/',
    },

    {
        id: '02',
        imgUrl: portfolioImg02,
        title: 'Netflix App',
        description: 'Netflix-inspired project powered by React and Tailwind CSS. Deployed on Vercel, with Firebase for the database and movie information. Elevate your streaming experience with sleek design and efficient data management.',
        tech: ["React", "Tailwind css", "Movie Database", "Firebase", "Vercel"],
        siteUrl: 'https://netflix-app-phi-three.vercel.app/',
    },

    {
        id: '03',
        imgUrl: portfolioImg03,
        title: 'Crypto Base App',
        description: 'Crypto Base App: React and Tailwind CSS harmonize for seamless UI. Vercel hosts it, Coingecko API fuels live data, and Firebase stores favorites. Enjoy React Sparkline, Ant Design finesse, and real-time insights.',
        tech: ["React", "Tailwind css", "React Icons", "Ant Design", "React Sparklines"],
        siteUrl: 'https://crypto-api-lake.vercel.app/',
    },

    {
        id: '04',
        imgUrl: portfolioImg04,
        title: 'Travel Landing Page',
        description: 'Travel Landing: Captivating React creation infused with Tailwind CSS and React Icons. Experience wanderlust brought to life, hosted effortlessly on Netlify.',
        tech: ["React", "Tailwind css", "React Icons"],
        siteUrl: 'https://rq-travello.netlify.app/',
    },

    {
        id: '05',
        imgUrl: portfolioImg05,
        title: 'Healthcare Website',
        description: 'Explore Health Website: A robust React creation harmonized with Tailwind CSS and enhanced with React Icons. Dive into comprehensive health care facilities showcased elegantly. Seamlessly deployed on Netlify and hosted on Namecheap for an immersive online experience.',
        tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: 'https://www.ajanihealthcare.com/',
    },

    {
        id: '06',
        imgUrl: portfolioImg06,
        title: 'Web3.0 Crowdfunding Web App',
        description: 'Crafting a cutting-edge Web3 crowdfunding platform akin to Kickstarter. We are leveraging React+Vite for seamless UI, Thirdweb for decentralized magic, Metamask for wallet wizardry, Solidity for rock-solid smart contracts, and Tailwind CSS for a sleek design thats set to revolutionize crowdfunding.',
        tech: ["React+Vite", "Tailwind css", "Solidity", "MetaMask", "Smart Contract","HardHat", "Vercel"],
        siteUrl: 'https://web3-thirdweb-seven.vercel.app/',
    },
    // {
    //     id: '07',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },

    // {
    //     id: '08',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '09',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '10',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
    // {
    //     id: '11',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },


]

export default portfolioData;