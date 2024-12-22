import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gridItems.map((item, i) => (
          <div key={i} className="relative group">
            <a
              href={
                item.id === 1
                  ? "https://www.credly.com/users/dishen-patel.2ca19138"
                  : undefined
              }
              target={item.id === 1 ? "_blank" : undefined}
              rel={item.id === 1 ? "noopener noreferrer" : undefined}
              className={`absolute inset-0 z-10 ${
                item.id === 1 ? "cursor-pointer" : "cursor-default"
              }`}
            ></a>
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
          </div>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
