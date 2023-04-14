import { useEffect } from "react";
import { FormValues } from "../..";
import { Plus, Trash } from "@phosphor-icons/react";
import Button from "../../../../components/atoms/Button";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";

import * as S from "./styles";
interface IFormUserData {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues, any>;
}

export const FormUserData = ({ register, control }: IFormUserData) => {
  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: "phone",
  });

  useEffect(() => {
    if (fields.length < 1) {
      append("");
    }
  }, [append, fields]);

  return (
    <>
      <S.FormTwoColumns>
        <S.Input>
          <input
            type="text"
            placeholder="Name"
            id="name"
            {...register("name")}
          />
        </S.Input>
        <S.Input>
          <input
            type="text"
            placeholder="Email"
            id="email"
            {...register("email")}
          />
        </S.Input>
      </S.FormTwoColumns>
      <S.FormOneColum>
        <S.Input>
          <input
            id="company"
            type="text"
            placeholder="Company"
            {...register("company")}
          />
        </S.Input>
      </S.FormOneColum>
      {fields.map((item, index) => (
        <S.FormTwoColumns key={index}>
          <S.Input>
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              {...register(`phone[${index}]`)}
            />
          </S.Input>
          <div>
            <Button
              variant="icon"
              backgroundColor="var(--gray-200)"
              type="button"
              size="small"
              onClick={() => append([""])}
            >
              <Plus size={8} />
            </Button>

            {index > 0 && (
              <Button
                variant="icon"
                backgroundColor="var(--gray-200)"
                type="button"
                size="small"
                onClick={() => remove(index)}
              >
                <Trash size={8} />
              </Button>
            )}
          </div>
        </S.FormTwoColumns>
      ))}
    </>
  );
};
