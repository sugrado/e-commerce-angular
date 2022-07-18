export interface ListProduct {
  /**Unique identifier */
  id: number;

  /**Product name */
  name: string;

  /**Product stock info */
  stock: number;

  /**Product price info */
  price: number;

  /** model created date*/
  createdAt: Date | string;

  /** model modified date*/
  modifiedAt: Date | string | null;
}
