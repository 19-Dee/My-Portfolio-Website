// Updated Grid.tsx
import { BentoGrid } from "./ui";

const Grid = () => {
  const gridItems = [
    {
      id: 1,
      title: "Certified in Cloud and Cybersecurity",
      description: "Ready to tackle real-world challenges.",
      className: "relative overflow-hidden rounded-lg",
    },
    {
      id: 2,
      title: "Flexible Communicator",
      description: "Driving success across diverse teams.",
      className: "relative overflow-hidden rounded-lg",
    },
    {
      id: 3,
      title: "My Tech Stack",
      description: "I constantly try to improve.",
      className: "relative overflow-hidden rounded-lg",
    },
  ];

  return (
    <BentoGrid className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {gridItems.map((item) => (
        <div key={item.id} className={item.className}>
          <h3 className="text-white text-xl font-semibold">{item.title}</h3>
          <p className="text-gray-300 text-sm mt-2">{item.description}</p>
        </div>
      ))}
    </BentoGrid>
  );
};

export default Grid;
