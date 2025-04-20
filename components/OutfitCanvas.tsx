import { useDrop } from 'react-dnd';

const OutfitCanvas = ({ outfitItems, onDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: 'clothing',
    drop: (item) => onDrop(item),
  }));

  return (
    <div ref={drop} className="relative w-full h-[500px] bg-sky-100 border-4 border-dashed">
      {outfitItems.map((item, index) => (
        <img
          key={index}
          src={item.icon}
          alt={item.name}
          className="absolute top-10 left-10 w-24"
        />
      ))}
    </div>
  );
};

export default OutfitCanvas;