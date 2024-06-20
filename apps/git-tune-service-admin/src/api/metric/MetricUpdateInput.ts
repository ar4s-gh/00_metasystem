import { CommitWhereUniqueInput } from "../commit/CommitWhereUniqueInput";

export type MetricUpdateInput = {
  commit?: CommitWhereUniqueInput | null;
  name?: string | null;
  value?: number | null;
};
