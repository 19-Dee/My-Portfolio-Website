import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { cn } from "@/lib/utils";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
