import { SortOrder } from "../../util/SortOrder";

export type MetricOrderByInput = {
  commitId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
