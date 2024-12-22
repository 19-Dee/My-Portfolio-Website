import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { cn } from "@/lib/utils";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gridItems.map((item, i) => (
          <a
            key={i}
            href={
              item.id === 1
                ? "https://www.credly.com/users/your-credly-profile"
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
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
            />
          </a>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
