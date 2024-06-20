import { Commit } from "../commit/Commit";

export type Metric = {
  commit?: Commit | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  value: number | null;
};
