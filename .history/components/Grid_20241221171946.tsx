import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { cn } from "@/lib/utils";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            descriptionClassName={item.descriptionClassName}
            spareImg={item.spareImg}
            href={item.href}
            target={item.target}
            rel={item.rel}
          >
            {item.id === 1 ? (
              <a
                href="https://www.credly.com/users/dishen-patel.2ca19138"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full hover:scale-105 transition-transform duration-300"
              >
                {/* Wrap content here */}
              </a>
            ) : null}
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;