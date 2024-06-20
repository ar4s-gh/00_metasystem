import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MetricListRelationFilter } from "../metric/MetricListRelationFilter";

export type CommitWhereInput = {
  choice?: "Option1";
  developerCode?: StringNullableFilter;
  diff?: StringNullableFilter;
  generatedCode?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  metrics?: MetricListRelationFilter;
};
