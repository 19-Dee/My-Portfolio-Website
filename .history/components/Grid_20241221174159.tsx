import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gridItems.map((item, i) =>
          item.id === 1 ? (
            <a
              key={i}
              href="https://www.credly.com/users/dishen-patel.2ca19138"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
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
          ) : (
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
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
