import {
  mobile,
  backend,
  creator,
  web,
  barrsoft,
  importainer,
  minisemi,
  minisemilogo,
  lavaweb, 
  web1,
  zurbaran,
  adidas,
  adriana
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "A.R Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Importainer S.A",
    icon: importainer,
    iconBg: "#fff",
    date: "Sep 2021 - Jan 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Organized team work between the marketing area, sellers, designer and owner of the company.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Zurbaran Art Gallery",
    icon: zurbaran,
    iconBg: "#2A3A7F",
    date: "Feb 2022 - Mar 2022",
    points: [
      "Digitized stunning 2D paintings and skillfully crafted intricate 3D models that showcased the paintings in an entirely new and engaging way.",
      "Spearheaded the development and design of an innovative website that hosted the 3D models and provided an immersive augmented reality experience.",
      "Effectively led and guided the team in all aspects of the project, ensuring timely delivery and a superior end product.",
      "Utilized a comprehensive suite of cutting-edge tools, including JavaScript, React, ARJS, Three Js, Blender, Adobe Aero, and Assemblr Studio, to create a seamless and visually stunning digital experience.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Adidas",
    icon: adidas,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jul 2022",
    points: [
      "Successfully developed high-quality software and hardware using Arduino and JavaScript to meet project requirements and achieve objectives.",
      "Utilized expertise in 3D modeling and interactive display to enhance the user experience and create innovative solutions.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborated with team members to assist in the installation and configuration of Oculus Quest, ensuring seamless integration and functionality.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "LavaJet",
    icon: minisemilogo,
    iconBg: "#E6DEDD",
    date: "May 2023",
    points: [
      "Designed and developed a highly effective landing page to significantly increase customer outreach and generate more prospects.",
      "Utilized exceptional French communication skills to gain an in-depth understanding of the customer's needs and ideas, ensuring a highly customized end product.",
      "Streamlined hosting setups by leveraging cloud infrastructure and monitoring tools, resulting in minimized downtime and improved website performance.",
      "Successfully worked under intense time constraints, delivering a top-quality website in an impressively short period of only three days.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Outstanding experience! Diego have a lot of talent in design and programmation,and full of patience for my many request of changes.The website was a turnkey custom and was fully functional at the end with the installation on the FTP,many thanks Diego!",
    name: "Mini Semi Studio",
    designation: "CEO",
    company: "Mini Semi Studio",
    image: minisemi,
  },
  {
    testimonial:
      "Diego's talent in design and programming is exceptional. He demonstrated patience and professionalism with my numerous change requests and delivered a fully functional, custom website. Thanks to Diego, the end result exceeded my expectations.",
    name: "Adriana Carro",
    designation: "CEO",
    company: "Potencia Tu Mente",
    image: adriana,
  },
  {
    testimonial:
      "Diego demonstrated exceptional talent in design and programming during my second project with him. He patiently accommodated my numerous change requests and delivered a fully functional, custom website. Many thanks to Diego for his outstanding work.",
    name: "Mini Semi Studio",
    designation: "CEO",
    company: "Mini Semi Studio",
    image: minisemi,
  },
];

const projects = [
  {
    name: "Barrsoft",
    description:
      "Designed and developed a highly functional landing page for Barrsoft, a web3 company specializing in blockchain-based solutions. Integrated the Coinbase API for seamless payment processing and built a comprehensive catalog of their products. Leveraged modern front-end frameworks, including React and Bootstrap, to create a visually appealing and user-friendly web experience.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: barrsoft,
    source_code_link: "https://github.com/DiegoBarreraDevs/BarrsoftWeb-react",
  },
  {
    name: "LavaJet",
    description:
      "Created a visually striking landing page to enhance the online presence and visibility of the company. Leveraged modern web development tools and frameworks to design an aesthetically pleasing and intuitive user interface. Included a comprehensive display of the company's services. Implemented a streamlined contact section with lead capture forms to facilitate customer engagement and communication.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Framer-Motion",
        color: "pink-text-gradient",
      },
    ],
    image: lavaweb,
    source_code_link: "https://github.com/DiegoBarreraDevs/LavaJet-React",
  },
  {
    name: "Importainer",
    description:
      "Developed and launched a comprehensive website for a company, featuring an extensive catalogue of their products available for sale. Designed and implemented a user-friendly interface with a responsive layout, ensuring seamless navigation and optimal viewing experience across all devices. Incorporated a range of contact forms with custom fields, enabling easy communication between the company and potential clients.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: web1,
    source_code_link: "https://github.com/DiegoBarreraDevs/ImportainerWeb-react",
  },
];

export { services, experiences, testimonials, projects };
