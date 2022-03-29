import { Image } from './image';

export interface Chien {
  id: number;
  race?: string;
  image: Image;
  nom: string;
}
