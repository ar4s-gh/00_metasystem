import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COMMIT_TITLE_FIELD } from "../commit/CommitTitle";

export const MetricShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="commit" source="commit.id" reference="Commit">
          <TextField source={COMMIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
