import { FieldValues } from "react-hook-form";
import { IAddress } from "./address";

export type FormValues = FieldValues & {
  name: string;
  email: string;
  company: string;
  phone: Array<string>;
  address: Array<IAddress>;
};
