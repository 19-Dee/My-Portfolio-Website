export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Certified in Cloud and Cybersecurity, ready to tackle real-world challenges.",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] group relative overflow-hidden border-none shadow-none", // Add `group` and `relative`
    imgClassName:
      "absolute top-0 left-0 w-full transition-transform duration-300 transform group-hover:scale-105", // Apply hover effect to the background image
    titleClassName: "relative z-10 justify-end text-white", // Ensure the caption is above the image
    img: "/certs11.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Flexible communicator, driving success across diverse teams and time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I aim to protect Cloud Systems and Unlock the Power of Data.",
    description: "BSc Mathematics and Statistics • MSc Data Science",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 flex items-start", // Flex for layout
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
    className: "md:col-span-3 md:row-span-2",
    imgClassName:
      "absolute right-0 bottom-0 transition-transform duration-300 transform group-hover:scale-105",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/thinking12big.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
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
    img: "/p1.svg",
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
    quote:
      "I am dedicated to becoming a leading expert in Cloud Security and Data Science. My immediate goals include earning the AWS Certified Security Specialty certification and contributing to impactful projects that leverage AI to secure multi-cloud environments.",
    name: "Dishen Patel",
    title: "Aspiring Cloud Engineer",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
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
    title: "Cloud Security Intern",
    desc: "Built IT fundamental skills, including: working knowledge of Linux OS, writing scripts in Python and Shell. Also leared how to apply core AWS services in the areas of compute, storage and networking: including EC2, S3, IAM, VPC, Lambda, Cloud Formation, RDS and Route 53",
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
    title: "Master's Project - AI-Driven Cloud Security",
    desc: "Developing a customisable AI-driven threat detection and response system for multi-cloud environments. Utilising machine learning to identify security risks and automate responses, leveraging AWS cloud technologies, Python, and data science skills to ensure secure and efficient operations.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
