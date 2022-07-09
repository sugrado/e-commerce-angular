export interface BaseEntity {
  id: string;
  deleted: boolean;
  createdAt: Date | string;
  modifiedAt: Date | string | null;
}
