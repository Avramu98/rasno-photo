import { createContext } from 'react';
import _ from 'lodash';
import { CategoryName } from '@prisma/client';

import { CmsContextI } from '../../types/cms';

const CmsContextDefaultValue = {
  isSpecificLargeSwiperToggled: _.mapValues(CategoryName, () => false),
  toggleSwiper: () => {
  },
  mutate: () => {
  },
  setCurrentPicture: () => {
  },
};

export const CmsContext = createContext<CmsContextI>(CmsContextDefaultValue);
