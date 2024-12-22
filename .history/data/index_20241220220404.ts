export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Certified in Cloud and Cybersecurity",
    description: "Ready to tackle real-world challenges.",
    className:
      "col-span-1 md:col-span-1 lg:col-span-2 row-span-1 relative overflow-hidden rounded-lg",
    imgClassName:
      "absolute top-0 left-0 w-full h-full object-cover overflow-hidden transition-transform duration-300 group-hover:scale-105",
    titleClassName:
      "absolute bottom-4 left-4 text-white text-lg font-semibold z-10",
    descriptionClassName: "absolute top-4 left-4 text-white text-sm z-10",
    img: "/certs11.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible communicator",
    description: "Driving success across diverse teams and time zones.",
    className:
      "col-span-1 md:col-span-1 lg:col-span-2 row-span-1 relative overflow-hidden rounded-lg",
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
    titleClassName: "px-4 pt-1 text-lg font-bold text-white", // Reduced padding to move title up
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
    img: "/thinking12big.svg",
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
      text: "Developing an AI-driven solution for real-time threat detection and automated response within AWS environments. The project focuses on creating customisable security agents leveraging machine learning techniques such as anomaly detection and behavioral analysis to identify and mitigate cyber threats in real time.",
      bullets: [
        "Cloud Integration: Designing the solution for seamless integration within AWS using services such as SageMaker, Lambda, and CloudWatch. Leveraging AWS tools like GuardDuty, Macie, and CloudTrail to gather and process vast amounts of security data.",
        "AI and Machine Learning: Building models for anomaly detection and behavioral analysis to enhance threat detection accuracy and adaptability. Creating a scalable architecture to accommodate multi-cloud environments in the future.",
        "Operational Efficiency: Exploring ways to automate compliance with security standards and regulatory models. Demonstrating how this solution could extend beyond security into cost optimisation (FinOps) by minimising downtime and resource abuse.",
      ],
    },
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },

  {
    id: 4,
    title: "Cloud Support Engineer – Cloud Engineer Academy",
    desc: {
      text: "Assisting fellow students and peers in designing and implementing cloud architectures, troubleshooting cloud environments, and providing guidance on best practices for cloud engineering tasks.",
      bullets: [
        "Student Collaboration: Supported peers in understanding and designing secure and scalable cloud architectures on AWS. Provided one-on-one and group sessions to help troubleshoot issues in cloud environments, including resource allocation, security configurations, and cost optimization. Conducted informal workshops to explain core AWS services, including EC2, S3, IAM, and VPC.",
        "Architecture Design: Guided students in building modular, reusable architectures for their projects using AWS services. Helped integrate Infrastructure as Code (IaC) principles using Terraform for automating deployments. Collaborated on designing CI/CD pipelines using Jenkins and GitHub Actions for automated software delivery.",
        "Problem Solving: Resolved common cloud-related challenges, such as misconfigured permissions, network issues, and deployment failures. Simplified complex cloud workflows, enabling peers to adopt efficient cloud engineering practices.",
        "Mentorship: Acted as a mentor to junior students exploring cloud computing, providing insights into the industry and sharing tips for learning AWS and DevOps tools. Shared resources and created detailed walkthroughs for deploying secure and scalable cloud solutions.",
      ],
    },
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
