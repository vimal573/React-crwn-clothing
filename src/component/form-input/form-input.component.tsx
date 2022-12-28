import { FC, InputHTMLAttributes } from "react";

import { Group, Input, FormInputLabel } from "./form-input.style";

type FormInptProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInptProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
