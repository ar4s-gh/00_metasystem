import { CommitWhereUniqueInput } from "../commit/CommitWhereUniqueInput";

export type MetricCreateInput = {
  commit?: CommitWhereUniqueInput | null;
  name?: string | null;
  value?: number | null;
};
