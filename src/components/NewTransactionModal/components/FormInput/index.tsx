import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";

interface InputTypeProps {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export function FormInput({ label, type, placeholder }: InputTypeProps) {
  return (
    <FormControl>
      <FormLabel color="gray.200" fontWeight="normal">
        {label}
      </FormLabel>
      <Input
        bg="gray.900"
        variant="filled"
        focusBorderColor="pink.500"
        _hover={{
          border: "2px solid #D74866",
        }}
        placeholder={placeholder}
        type={type}
      />
    </FormControl>
  );
}
