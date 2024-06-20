import { MetricUpdateManyWithoutCommitsInput } from "./MetricUpdateManyWithoutCommitsInput";

export type CommitUpdateInput = {
  choice?: "Option1" | null;
  developerCode?: string | null;
  diff?: string | null;
  generatedCode?: string | null;
  message?: string | null;
  metrics?: MetricUpdateManyWithoutCommitsInput;
};
