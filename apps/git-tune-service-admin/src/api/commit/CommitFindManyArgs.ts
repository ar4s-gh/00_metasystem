import { CommitWhereInput } from "./CommitWhereInput";
import { CommitOrderByInput } from "./CommitOrderByInput";

export type CommitFindManyArgs = {
  where?: CommitWhereInput;
  orderBy?: Array<CommitOrderByInput>;
  skip?: number;
  take?: number;
};
