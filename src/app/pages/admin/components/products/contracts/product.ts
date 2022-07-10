import { BaseEntity } from 'src/app/core/models/base-entity';

export interface Product extends BaseEntity {
  /**Product name */
  name: string;

  /**Product stock info */
  stock: number;

  /**Product price info */
  price: number;
}
