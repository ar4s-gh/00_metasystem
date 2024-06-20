import { MetricCreateNestedManyWithoutCommitsInput } from "./MetricCreateNestedManyWithoutCommitsInput";

export type CommitCreateInput = {
  choice?: "Option1" | null;
  developerCode?: string | null;
  diff?: string | null;
  generatedCode?: string | null;
  message?: string | null;
  metrics?: MetricCreateNestedManyWithoutCommitsInput;
};
