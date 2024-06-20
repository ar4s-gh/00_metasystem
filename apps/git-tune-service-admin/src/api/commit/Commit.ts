import { Metric } from "../metric/Metric";

export type Commit = {
  choice?: "Option1" | null;
  createdAt: Date;
  developerCode: string | null;
  diff: string | null;
  generatedCode: string | null;
  id: string;
  message: string | null;
  metrics?: Array<Metric>;
  updatedAt: Date;
};
