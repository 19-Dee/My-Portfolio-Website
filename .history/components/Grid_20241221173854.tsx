import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gridItems.map((item, i) => (
          <BentoGridItemWrapper key={i} item={item} />
        ))}
      </BentoGrid>
    </section>
  );
};

const BentoGridItemWrapper = ({ item }: { item: (typeof gridItems)[0] }) => {
  const linkProps =
    item.id === 1
      ? {
          href: "https://www.credly.com/users/dishen-patel.2ca19138",
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

  return (
    <a
      {...linkProps}
      className={`hover:scale-105 transition-transform duration-300 ${
        item.id === 1 ? "cursor-pointer" : "pointer-events-none"
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
  );
};

export default Grid;
