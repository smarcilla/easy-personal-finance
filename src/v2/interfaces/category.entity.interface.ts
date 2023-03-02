import { CategoryItemEntity } from './category.item.entity.interface';

export interface CategoryEntity {
  name: string;
  tag: string;
  childs?: Array<CategoryEntity>;
  items: Array<CategoryItemEntity>;
}
