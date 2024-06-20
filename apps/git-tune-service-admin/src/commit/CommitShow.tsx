import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMIT_TITLE_FIELD } from "./CommitTitle";

export const CommitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="choice" source="choice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="developerCode" source="developerCode" />
        <TextField label="diff" source="diff" />
        <TextField label="generatedCode" source="generatedCode" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Metric"
          target="commitId"
          label="Metrics"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="commit"
              source="commit.id"
              reference="Commit"
            >
              <TextField source={COMMIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
