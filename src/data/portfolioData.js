import potfolioImg01 from '../asset/projects/projectImg-01.JPG';
import potfolioImg02 from '../asset/projects/projectImg-02.JPG';
import potfolioImg03 from '../asset/projects/projectImg-03.JPG';
import potfolioImg04 from '../asset/projects/projectImg-04.JPG';
import potfolioImg05 from '../asset/projects/projectImg-05.JPG';







const portfolioData = [
    {
        id: '01',
        imgUrl: potfolioImg01,
        title: 'React+Vite Dashboard',
        description: 'Crafted with React and Vite, our cutting-edge dashboard project features dynamic data visualization using Tremor components. Experience real-time insights and seamless user interaction, all powered by the latest web technologies.',
        tech: ["React", "Tailwind css", "Tremor", "Vercel", "Vite", "Hero-Icons"],
        siteUrl: 'https://dashboard-vite-rho.vercel.app/',
    },

    {
        id: '02',
        imgUrl: potfolioImg02,
        title: 'Netflix App',
        description: 'Netflix-inspired project powered by React and Tailwind CSS. Deployed on Vercel, with Firebase for the database and movie information. Elevate your streaming experience with sleek design and efficient data management.',
        tech: ["React", "Tailwind css", "Movie Database", "Firebase", "Vercel"],
        siteUrl: 'https://netflix-app-phi-three.vercel.app/',
    },

    {
        id: '03',
        imgUrl: potfolioImg03,
        title: 'Crypto Base App',
        description: 'Crypto Base App: React and Tailwind CSS harmonize for seamless UI. Vercel hosts it, Coingecko API fuels live data, and Firebase stores favorites. Enjoy React Sparkline, Ant Design finesse, and real-time insights.',
        tech: ["React", "Tailwind css", "React Icons", "Ant Design", "React Sparklines"],
        siteUrl: 'https://crypto-api-lake.vercel.app/',
    },

    {
        id: '04',
        imgUrl: potfolioImg04,
        title: 'Travel Landing Page',
        description: 'Travel Landing: Captivating React creation infused with Tailwind CSS and React Icons. Experience wanderlust brought to life, hosted effortlessly on Netlify.',
        tech: ["React", "Tailwind css", "React Icons"],
        siteUrl: 'https://rq-travello.netlify.app/',
    },

    {
        id: '05',
        imgUrl: potfolioImg05,
        title: 'Healthcare Website',
        description: 'Explore Health Website: A robust React creation harmonized with Tailwind CSS and enhanced with React Icons. Dive into comprehensive health care facilities showcased elegantly. Seamlessly deployed on Netlify and hosted on Namecheap for an immersive online experience.',
        tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: 'https://www.ajanihealthcare.com/',
    },

    // {
    //     id: '06',
    //     imgUrl: porfolioImg06,
    //     title: 'Business',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a amet corrupti. Quas id, hic facilis ab nulla aperiam laudantium sint placeat dolorum? Error illo dicta laudantium doloribus consectetur animi.',
    //     tech: ["React", "Tailwind css", "Node.js", "MongoDB"],
    //     siteUrl: '#',
    // },
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