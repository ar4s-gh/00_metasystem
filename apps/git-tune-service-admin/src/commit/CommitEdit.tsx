import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MetricTitle } from "../metric/MetricTitle";

export const CommitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="choice"
          label="choice"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="developerCode" multiline source="developerCode" />
        <TextInput label="diff" multiline source="diff" />
        <TextInput label="generatedCode" multiline source="generatedCode" />
        <TextInput label="message" source="message" />
        <ReferenceArrayInput
          source="metrics"
          reference="Metric"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MetricTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
