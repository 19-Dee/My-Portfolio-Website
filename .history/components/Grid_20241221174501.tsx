import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gridItems.map((item, i) => (
          <a
            key={i}
            href={
              item.id === 1
                ? "https://www.credly.com/users/dishen-patel.2ca19138"
                : "#"
            }
            target={item.id === 1 ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`hover:scale-105 transition-transform duration-300 ${
              item.id === 1
                ? "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1"
                : ""
            }`}
          >
            <BentoGridItem
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
