import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'min.aungpaing007@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi MIN AUNG PAING, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/map-007' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/minaung-paing/' },
    { name: 'facebook', url: 'https://www.facebook.com/minaung.paing.75' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Vue.js',
            icon: '/logo/vue.svg',
        },
        {
            name: 'NuxtJS',
            icon: '/logo/nuxt.svg',
        },
    ],
    backend: [
        {
            name: 'PHP',
            icon: '/logo/php.svg',
        },
        {
            name: 'Laravel',
            icon: '/logo/laravel.svg',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'DMMBoost',
        slug: 'dmmboost',
        year: 2023,
        description: `
      DMMBoost - Reduce customer service costs and maximize repeat sales by linking accounts. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>💬 Account Linking: Seamlessly connect customer accounts to reduce support inquiries</li>
        <li>🔄 Repeat Sales Automation: Maximize repeat customer purchases with automated workflows</li>
        <li>📊 Customer Management: Comprehensive customer relationship management system</li>
        <li>💳 Payment Integration: Shopify and Line SDK integration for multiple payment channels</li>
        <li>🤖 Smart Chatting: PusherJS-powered automatic chatting service with meeting alerts and reminders</li>
        <li>📱 Real-time Notifications: Order and product list management with payment tracking</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Backend: PHP (Laravel) with Singleton Design Pattern and Swagger API documentation</li>
        <li>Frontend: VueJS and ReactJS with MUI for responsive interfaces</li>
        <li>Dashboard: Laravel-Admin for comprehensive management</li>
        <li>Infrastructure: Docker containerization with AWS deployment and GitHub Actions for CI/CD</li>
        <li>Database: MySQL with dual-database architecture and Redis for lightweight data caching</li>
        <li>Third-Party Integrations: Line SDK and Shopify SDK for enhanced functionality</li>
      </ul>
      `,
        role: `
      Senior Web Developer <br/>
      Led full-stack development with team collaboration:
      <ul>
        <li>✅ Backend: Developed RESTful APIs using PHP Laravel framework with design patterns</li>
        <li>🎨 Frontend: Built responsive and user-friendly interfaces with VueJS, ReactJS, and MUI</li>
        <li>📊 Dashboard: Maintained Laravel-Admin dashboard for system management</li>
        <li>🔗 Third-Party Integration: Integrated Line SDK, Shopify SDK, and PusherJS for real-time services</li>
        <li>🧪 Quality Assurance: Conducted unit testing using Jest for both frontend and backend</li>
        <li>🚀 Performance Optimization: Optimized database queries and interactions for improved performance</li>
        <li>👥 Collaboration: Worked with Japanese team members remotely and participated in code reviews</li>
      </ul>
      `,
        techStack: [
            'PHP',
            'Laravel',
            'VueJS',
            'ReactJS',
            'MUI',
            'TypeScript',
            'Jest',
            'MySQL',
            'Redis',
            'Docker',
            'AWS',
            'Laravel-Admin',
            'Swagger',
            'Line SDK',
            'Shopify SDK',
            'PusherJS',
        ],
        thumbnail: '/projects/thumbnail/dmmboost.webp',
        longThumbnail: '/projects/long/dmmboost.webp',
        images: [
            '/projects/images/dmmboost.webp',
            '/projects/images/dmmboost1.webp',
        ],
    },
    {
        title: 'SPIDER PLUS',
        slug: 'spider-plus',
        year: 2023,
        description: `
      SPIDER PLUS - Drawing and site management app for the construction and maintenance industry. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>📐 Drawing Management: Comprehensive drawing and sketch management system for construction projects</li>
        <li>📍 Site Navigation: Leaflet-powered map integration for site location tracking and navigation</li>
        <li>📸 Photo Management: Organized photo storage and management for project documentation</li>
        <li>✏️ Electronic Blackboards: Digital annotation and notes for site communication</li>
        <li>📋 Output Forms: Automated form generation for recording and reporting work</li>
        <li>📱 Progressive Web App: PWA support with iOS approach for seamless mobile experience</li>
        <li>📊 Excel & PDF Export: Export drawings, reports, and project data in multiple formats</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Backend: PHP (Laravel) with Clean Architecture principles for maintainability</li>
        <li>Frontend: NuxtJS (VueJS) with Atomic Design Pattern and Vuetify UI framework</li>
        <li>Mapping: Leaflet integration for advanced map and navigation features</li>
        <li>Infrastructure: Docker containerization with AWS deployment and GitHub Actions CI/CD</li>
        <li>Database: PostgreSQL with dual-database architecture for optimal performance</li>
        <li>PWA: Progressive web app capabilities with offline support and iOS compatibility</li>
      </ul>
      `,
        role: `
      Senior Web Developer <br/>
      Led full-stack development with team collaboration:
      <ul>
        <li>✅ Backend: Developed PHP (Laravel) backend following Clean Architecture patterns</li>
        <li>🎨 Frontend: Built progressive web applications using NuxtJS with Atomic Design Pattern</li>
        <li>📍 Mapping: Implemented Leaflet for map navigation and site management</li>
        <li>📊 Features: Developed Excel/PDF export functionality and sketch management systems</li>
        <li>🎨 Design Collaboration: Worked with UI/UX designers to implement customer requirements</li>
        <li>🔗 API Integration: Integrated third-party APIs to enhance application functionality</li>
        <li>👥 Team Leadership: Led and mentored offshore team members on bug fixes and implementations</li>
        <li>🌐 Global Collaboration: Worked with Japanese team members remotely</li>
        <li>📦 Version Control: Managed code repositories using Git for team collaboration</li>
      </ul>
      `,
        techStack: [
            'PHP',
            'Laravel',
            'NuxtJS',
            'VueJS',
            'Vuetify',
            'Atomic Design',
            'Leaflet',
            'PostgreSQL',
            'Docker',
            'AWS',
            'GitHub Actions',
            'PWA',
            'Excel Export',
            'PDF Export',
            'Git',
        ],
        thumbnail: '/projects/thumbnail/spider-plus.webp',
        longThumbnail: '/projects/long/spider-plus.webp',
        images: [
            '/projects/images/spider-plus.webp',
            '/projects/images/spider-plus1.webp',
        ],
    },
    {
        title: 'KitchenHouse',
        slug: 'kitchenhouse',
        year: 2023,
        description: `
      KitchenHouse - Kitchen Layout Management Application. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>📐 Kitchen Layout Planning: Interactive kitchen design and layout management system</li>
        <li>📋 Quotation Management: Automated quotation generation for kitchen furniture projects</li>
        <li>📦 Order Information: Complete order tracking and management for sales personnel</li>
        <li>💼 Plan Management: Comprehensive project and plan management tools</li>
        <li>📱 Single Page Application: Responsive SPA for seamless user experience</li>
        <li>🏪 Multi-Tenant: Serves 7 different customer companies with separate databases</li>
        <li>🔒 Role-Based Access: Designed for sales team members at kitchen furniture showrooms</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Backend: PHP (Laravel) with Clean Architecture for maintainability and scalability</li>
        <li>Frontend: NuxtJS (VueJS) with Bootstrap Vue for responsive UI</li>
        <li>Infrastructure: Docker containerization for consistent deployment</li>
        <li>Database: MySQL with multiple database support for different customer companies</li>
        <li>Multi-Repository: Managed common codebase across different customer repositories</li>
        <li>Documentation: Comprehensive code and technical documentation for internal teams</li>
      </ul>
      `,
        role: `
      Senior Web Developer <br/>
      Developed and maintained multi-tenant kitchen management system:
      <ul>
        <li>✅ Backend: Built PHP (Laravel) backend following Clean Architecture principles</li>
        <li>🎨 Frontend: Created responsive single-page application using NuxtJS and Bootstrap Vue</li>
        <li>🏪 Multi-Tenant System: Implemented architecture to serve 7 different customer companies</li>
        <li>📊 Feature Development: Built plan management, quotation, and order information systems</li>
        <li>📦 Database Management: Configured separate MySQL databases for different customer companies</li>
        <li>🐳 Infrastructure: Set up Docker containers for consistent deployment across environments</li>
        <li>📚 Documentation: Created technical documentation for internal development and support teams</li>
        <li>🔧 Code Quality: Maintained shared codebase across multiple customer repositories</li>
      </ul>
      `,
        techStack: [
            'PHP',
            'Laravel',
            'NuxtJS',
            'VueJS',
            'Bootstrap Vue',
            'MySQL',
            'Docker',
            'Clean Architecture',
            'SPA',
            'Multi-Tenant',
        ],
        thumbnail: '/projects/thumbnail/kitchenhouse.webp',
        longThumbnail: '/projects/long/kitchenhouse.webp',
        images: [
            '/projects/images/kitchenhouse.webp',
            '/projects/images/kitchenhouse1.webp',
        ],
    },
    {
        title: 'Office Report',
        slug: 'office-report',
        year: 2023,
        description: `
      Office Report - Domestic web application for office reporting and task management. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>📋 One-Click Reporting: Simplified reporting interface for quick and easy task documentation</li>
        <li>📊 Task Management: Efficient management of essential office tasks and workflows</li>
        <li>👥 Team Reports: View and manage all team members' reports in one place</li>
        <li>📁 Excel Export: Export all reports and data in Excel format for archive and sharing</li>
        <li>🖥️ Responsive UI: Clean and intuitive interface built with ReactJS and Tailwind CSS</li>
        <li>🔍 Report Search & Filter: Easily find and organize reports by date, category, or team member</li>
        <li>📚 Documentation: Comprehensive documentation using Vitepress</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Backend: PHP (Laravel) with MVC architecture for structured and maintainable code</li>
        <li>Frontend: ReactJS with InertiaJS for seamless server-side rendering and interactivity</li>
        <li>Styling: Tailwind CSS for modern, responsive design</li>
        <li>Infrastructure: Docker containerization for consistent deployment</li>
        <li>Database: MySQL for reliable data storage and retrieval</li>
        <li>Documentation: Vitepress for creating clear technical and user documentation</li>
        <li>Export: Excel export functionality for data persistence and sharing</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Designed and developed office reporting application:
      <ul>
        <li>✅ Backend: Built PHP (Laravel) backend with MVC architecture for reliable operations</li>
        <li>🎨 Frontend: Developed responsive UI using ReactJS and Tailwind CSS</li>
        <li>🔗 Integration: Implemented InertiaJS for seamless Laravel and React integration</li>
        <li>📊 Features: Created one-click reporting and report management systems</li>
        <li>📁 Export: Implemented Excel export functionality for team report sharing</li>
        <li>📚 Documentation: Created comprehensive documentation using Vitepress</li>
        <li>🐳 Deployment: Set up Docker containers for consistent deployment</li>
        <li>📈 Productivity: Enhanced office productivity through efficient task management and reporting</li>
      </ul>
      `,
        techStack: [
            'PHP',
            'Laravel',
            'MVC',
            'ReactJS',
            'InertiaJS',
            'Tailwind CSS',
            'MySQL',
            'Docker',
            'Vitepress',
            'Excel Export',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: [

        ],
    },
    {
        title: 'Career-Connect',
        slug: 'career-connect',
        year: 2023,
        description: `
      Career-Connect - Comprehensive job marketplace platform for mobile and web with integrated point-based engagement system. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>💼 Job Posting: Employers can post and manage open job positions with detailed descriptions</li>
        <li>👨‍💼 Candidate Hiring: Advanced candidate matching and hiring workflow for recruiters</li>
        <li>⭐ Point-Based Activity System: Gamified engagement with rewards and achievements for users</li>
        <li>📢 Event Announcements: Real-time notifications and announcements for job seekers and employers</li>
        <li>💳 Payment Integration: Payment processing for premium features and job postings</li>
        <li>💬 Chat Messaging: Real-time messaging between job seekers and employers</li>
        <li>📱 Mobile & Web App: Fully responsive web app with dedicated mobile application support</li>
        <li>🔔 Notifications: Push notifications and activity updates for all users</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Frontend: Next.js for web with SSR and static generation for performance</li>
        <li>Backend: NestJS for scalable and maintainable API architecture</li>
        <li>Database & Services: Firebase for real-time data, authentication, and messaging</li>
        <li>Infrastructure: Docker containerization for consistent deployment across environments</li>
        <li>Mobile: React Native or cross-platform mobile app with same feature parity</li>
        <li>Payment: Using local payment gateway for transactions</li>
        <li>Real-time Communication: Firebase messaging and notifications</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Developed comprehensive job marketplace platform:
      <ul>
        <li>✅ Backend: Built NestJS API with microservices architecture for scalability</li>
        <li>🎨 Frontend: Developed Next.js web application with SSR for SEO and performance</li>
        <li>📱 Mobile: Implemented mobile app with feature parity to web version</li>
        <li>💬 Chat System: Integrated real-time messaging using Firebase and WebSockets</li>
        <li>⭐ Gamification: Designed and implemented point-based activity system with rewards</li>
        <li>💳 Payments: Integrated payment gateway for transactions and premium features</li>
        <li>🔐 Authentication: Implemented secure Firebase authentication across platforms</li>
        <li>🐳 DevOps: Set up Docker containers for development, staging, and production</li>
        <li>📊 Analytics: Implemented job posting tracking and user engagement metrics</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'NestJS',
            'Firebase',
            'React Native',
            'TypeScript',
            'Docker',
            'Real-time Messaging',
            'Point System',
            'Job Posting',
            'Payment Integration',
            'Mobile App',
        ],
        thumbnail: '/projects/thumbnail/career-connect.webp',
        longThumbnail: '/projects/long/career-connect.webp',
        images: [
            '/projects/images/career-connect.webp',
            '/projects/images/career-connect1.webp',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer',
        company: 'PROMINENCE CO., LTD',
        duration: '07/2024 - present',
    },
    {
        title: 'Frontend Developer',
        company: 'QUANTECH MYANMAR Co., Ltd',
        duration: '01/2024 - 06/2024',
    },
    {
        title: 'Senior Web Developer',
        company: 'METATEAM MYANMAR Co., Ltd.',
        duration: '2021 - 12/2023',
    },
    {
        title: 'INTERNSHIP',
        company: 'ZWENEXSYS Co. Ltd',
        duration: '05/2020 - 08/2020',
    },
];
