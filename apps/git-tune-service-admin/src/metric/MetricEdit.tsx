import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CommitTitle } from "../commit/CommitTitle";

export const MetricEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="commit.id" reference="Commit" label="commit">
          <SelectInput optionText={CommitTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
