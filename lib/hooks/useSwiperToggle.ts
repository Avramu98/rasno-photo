import { CategoryName } from '@prisma/client';
import { useState } from 'react';


const useSwiperToggle = () => {
  const [isSpecificLargeSwiperToggled, setIsSpecificLargeSwiperToggled] = useState<{ [key: string]: boolean }>({
    EVENT: false,
    LANDSCAPE: false,
    AESTHETICS: false,
    PEOPLE: false,
    CARS: false,
  });
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  let selectedSet = new Set(selectedCategories);


  function toggleSwiper(category: CategoryName) {
    selectedSet.add(category);
    setIsSpecificLargeSwiperToggled((prevState) => ({ ...prevState, [category]: true }));
    setSelectedCategories(selectedSet);

    if (selectedCategories.has(category)) {
      selectedSet.delete(category);
      setSelectedCategories(selectedSet);
      setIsSpecificLargeSwiperToggled((prevState) => ({ ...prevState, [category]: false }));
    }
  }

  return {
    isSpecificLargeSwiperToggled, toggleSwiper,
  };

};

export default useSwiperToggle;