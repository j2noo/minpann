import { atom } from 'recoil';


export const recruitCategoriesAtom = atom({
  key: 'recruitCategories',
  default: [true, true, true, true],
});