import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const socialMedia = [
  {
    id: 1,
    link: "https://github.com/19-Dee",
    img: "/git.svg",
    alt: "GitHub",
  },
  {
    id: 2,
    link: "https://twitter.com/yourhandle", // Replace with your Twitter handle
    img: "/twit.svg",
    alt: "Twitter",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/19dishen/",
    img: "/link.svg",
    alt: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/footer-grid.svg"
          alt="Decorative grid"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center text-white">
          Ready to make an impact as a motivated learner in{" "}
          <span className="text-purple">cloud security</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s talk about how my Master&apos;s studies and hands-on
          projects can add value to your organisation.
        </p>
        <a
          href="mailto:cloudsecdee@gmail.com"
          className="inline-block mt-4"
          aria-label="Send an email to cloudsecdee@gmail.com"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row mt-16 justify-between items-center w-full">
        <p className="text-white-200 text-sm md:text-base md:font-normal font-light text-center">
          Copyright © 2024 Dishen Patel
        </p>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-lg bg-opacity-75 border hover:opacity-80 transition-opacity"
              aria-label={`Visit ${info.alt}`}
            >
              <img
                src={info.img}
                alt={info.alt}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
