import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { cn } from "@/lib/utils";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            className={cn(
              "relative overflow-hidden  rounded-lg",
              item.className
            )}
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
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
