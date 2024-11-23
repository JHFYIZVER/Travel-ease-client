import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../components/RegistrForm";

export type RegisterFormType = {
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  description?: string;
  imputType?: string;
  formControl: Control<z.infer<typeof formSchema>, any>;
};
