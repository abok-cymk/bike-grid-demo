import { SortOrder } from "../../util/SortOrder";

export type DestinationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  location?: SortOrder;
};
