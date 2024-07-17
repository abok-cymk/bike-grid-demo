import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DestinationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
      </SimpleForm>
    </Create>
  );
};
