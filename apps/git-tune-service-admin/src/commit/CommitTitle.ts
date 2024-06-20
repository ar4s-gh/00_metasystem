import { Commit as TCommit } from "../api/commit/Commit";

export const COMMIT_TITLE_FIELD = "message";

export const CommitTitle = (record: TCommit): string => {
  return record.message?.toString() || String(record.id);
};
