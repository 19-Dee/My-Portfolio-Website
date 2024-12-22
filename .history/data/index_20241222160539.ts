export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Goals", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Certified in Cloud and Cybersecurity",
    description: "Click Me!",
    className:
      "col-span-1 md:col-span-1 lg:col-span-2 row-span-1 relative rounded-lg flex flex-col justify-between",
    imgClassName:
      "absolute top-0 left-0 w-full h-full object-cover overflow-hidden transition-transform duration-300 group-hover:scale-105",
    titleClassName:
      "absolute bottom-4 left-4 text-white text-lg font-semibold z-10",
    descriptionClassName: "absolute top-4 left-4 text-white text-sm z-10",
    img: "/certs11.svg",
    spareImg: "",
    link: "https://www.credly.com/users/dishen-patel.2ca19138",
  },
  {
    id: 2,
    title: "Flexible communicator",
    description: "Driving success across diverse teams and time zones.",
    className:
      "col-span-1 md:col-span-1 lg:col-span-2 row-span-1 relative rounded-lg flex flex-col justify-between",
    imgClassName:
      "absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
    titleClassName:
      "absolute bottom-4 left-4 text-white text-lg font-semibold z-10",
    descriptionClassName: "absolute top-4 left-4 text-white text-sm z-10",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "",
    className:
      "col-span-1 md:col-span-1 lg:col-span-2 row-span-1 relative rounded-lg flex flex-col justify-between", // Ensures content is stacked and spaced correctly
    titleClassName:
      "absolute bottom-4 left-4 text-white text-lg font-semibold z-10", // Reduced padding to move title up
    descriptionClassName: "px-4 pt-2 pb-2 text-sm text-gray-400", // Adjusted padding to align closer to the title
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I aim to protect Cloud Systems and Unlock the Power of Data.",
    description: "BSc Mathematics and Statistics • MSc Data Science",
    className:
      "col-span-1 md:col-span-1 lg:col-span-2 row-span-1 relative overflow-hidden rounded-lg", // Flex for layout
    imgClassName: "",
    titleClassName: "justify-start",
    descriptionClassName:
      "text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis flex-shrink-0", // Prevent wrapping and shrinkage
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently building AI-Driven Threat Detection and Response for Multi-Cloud Environments using Customisable Security Agents.",
    description: "For my Masters Project, I am...",
    className:
      "col-span-1 md:col-span-1 lg:col-span-2 row-span-1 relative overflow-hidden rounded-lg",
    imgClassName:
      "absolute right-0 bottom-0 transition-transform duration-300 transform group-hover:scale-105",
    titleClassName: "justify-center md:justify-start",
    img: "/thinking12.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className:
      "col-span-1 md:col-span-1 lg:col-span-2 row-span-1 relative overflow-hidden rounded-lg",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sales Forecasting with ARIMA Models",
    des: "Analyzed historical sales data using AWS RDS, SQL, and Python. Developed ARIMA models to forecast sales trends and created an interactive dashboard in AWS QuickSight for actionable insights.",
    img: "/recproj1.svg",
    iconLists: [
      "/pythonlogo.svg",
      "/sqllogo.svg",
      "/awslogo.svg",
      "/quicksight.svg",
      "/timeseries.svg",
    ],
    link: "https://github.com/19-Dee/Sales-Forecasting-Project",
  },
  {
    id: 2,
    title: "In Progress...",
    des: "",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "In Progress...",
    des: "",
    img: "/p3.svg",
    iconLists: [
      "/pythonlogo.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/c.svg",
    ],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "In Progress...",
    des: "",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    heading: "My Vision",
    quote:
    "My Vision:,,
    "I am dedicated to becoming a leading expert in Cloud Security and AI. My immediate goals include earning the AWS Certified Security Specialty certification and contributing to impactful projects that leverage AI to secure multi-cloud environments.",
    name: "Dishen Patel",
    title: "Aspiring Cloud Engineer",
  },
  {
    heading: "Goal 1",
    quote: "Secure an internship in cloud security.",
    name: "Dishen Patel",
    title: "Aspiring Cloud Engineer",
  },
  {
    heading: "Goal 2",
    quote: "Build a portfolio showcasing real-world projects.",
    name: "Dishen Patel",
    title: "Aspiring Cloud Engineer",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Cloud Security Intern - In4 Group",
    desc: {
      text: "Completed full-time, classroom-based skills development and training program on IT fundamentals, AWS Cloud, and professional skills.",
      bullets: [
        "Built IT fundamental skills, including: working knowledge of Linux OS, writing scripts in Python and Shell.",
        "Learned how to apply core AWS services in the areas of compute, storage, and networking: including EC2, S3, IAM, VPC, Lambda, Cloud Formation, RDS, and Route 53.",
        "Demonstrated strong verbal and written communication skills, including the ability to explain technical information and terminology to non-technical end users.",
        "Learned how to configure, monitor, and support the suite of core AWS services.",
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Shop Manager - Family Business",
    desc: {
      text: "Managed day-to-day operations of a family-owned business while balancing university studies.",
      bullets: [
        "Customer Service: Provided excellent service to customers, enhancing satisfaction and building loyalty.",
        "Time Management: Successfully balanced academic responsibilities and business operations.",
        "Team Leadership: Oversaw staff schedules, delegated tasks, and resolved issues in a fast-paced environment.",
        "Finance Management: Handled cash flow, reconciled daily sales, and ensured accurate accounting records.",
        "Problem Solving: Adapted to unexpected challenges, such as stock shortages and customer disputes.",
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },

  {
    id: 3,
    title: "Master's Project – AI-Driven Cloud Security",
    desc: {
      text: "Developing an AI-powered solution for real-time threat detection and automated response within AWS environments. This project utilizes machine learning for anomaly detection and behavioral analysis to mitigate cyber threats. Key features include:",
      bullets: [
        "Cloud Integration: Leveraging AWS services (SageMaker, Lambda, CloudWatch) to process and analyze vast security data efficiently.",
        "AI-Driven Threat Detection: Enhancing detection accuracy and adaptability through scalable models for multi-cloud environments.",
        "Compliance Automation: Demonstrating cost optimization (FinOps) and regulatory compliance by minimizing downtime and resource misuse.",
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },

  {
    id: 4,
    title: "Cloud Support Engineer – Cloud Engineer Academy",
    desc: {
      text: "Assisted students and peers in designing secure, scalable AWS cloud architectures while troubleshooting common challenges. Core contributions include:",
      bullets: [
        "Workshops & Collaboration: Organized training on AWS services (EC2, S3, IAM, VPC) to resolve resource allocation and security challenges.",
        "Architecture Design: Helped implement reusable, modular solutions using Infrastructure as Code (IaC) with Terraform and CI/CD pipelines via Jenkins and GitHub Actionss.",
        "Problem Solving & Mentorship: Resolved cloud issues (misconfigurations, deployment failures) while mentoring junior students on cloud computing and DevOps practices, simplifying workflows for better efficiency.",
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
