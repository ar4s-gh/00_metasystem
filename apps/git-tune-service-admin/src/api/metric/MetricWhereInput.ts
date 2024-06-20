import { CommitWhereUniqueInput } from "../commit/CommitWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MetricWhereInput = {
  commit?: CommitWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  value?: FloatNullableFilter;
};
