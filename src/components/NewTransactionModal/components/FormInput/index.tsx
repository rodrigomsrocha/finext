import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

interface InputTypeProps {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
}

export function FormInput({ label, type, placeholder, name }: InputTypeProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl>
      <FormLabel color="gray.200" fontWeight="normal">
        {label}
      </FormLabel>
      <Input
        isInvalid={!!errors[name]?.message}
        bg="gray.900"
        variant="filled"
        focusBorderColor="pink.500"
        errorBorderColor="utils.red.500"
        _hover={{
          border: "2px solid #D74866",
        }}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        min={1}
      />
      <Text fontSize="sm" color="utils.red.300">
        <>{errors[name]?.message}</>
      </Text>
    </FormControl>
  );
}
