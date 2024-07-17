import { SortOrder } from "../../util/SortOrder";

export type TourOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  price?: SortOrder;
};
