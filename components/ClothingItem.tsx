import { useDrag } from 'react-dnd';

const ClothingItem = ({ item }) => {
  const [, drag] = useDrag(() => ({
    type: 'clothing',
    item,
  }));

  return (
    <img
      ref={drag}
      src={item.icon}
      alt={item.name}
      className="w-24 h-24 object-contain cursor-move"
    />
  );
};

export default ClothingItem;