import { SortOrder } from "../../util/SortOrder";

export type CommitOrderByInput = {
  choice?: SortOrder;
  createdAt?: SortOrder;
  developerCode?: SortOrder;
  diff?: SortOrder;
  generatedCode?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
