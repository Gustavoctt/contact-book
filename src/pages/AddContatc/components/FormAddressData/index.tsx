import {
  Control,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray,
} from "react-hook-form";
import { Snackbar } from "../../../../hooks";
import { Plus } from "@phosphor-icons/react";
import { Address } from "../../../../services";
import { FormValues } from "../../../../types/contact";
import Button from "../../../../components/atoms/Button";
import P from "../../../../components/atoms/Typography/P";

import * as S from "./styles";
interface IFormUserData {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues, any>;
  setValue: UseFormSetValue<FormValues>;
}

export const FormAddressData = ({
  register,
  control,
  setValue,
}: IFormUserData) => {
  const { newWarning } = Snackbar.useSnackbar();
  const { fields, append } = useFieldArray<FormValues>({
    control,
    name: "address",
  });

  const handleGetAddressData = async (value: string, index: number) => {
    try {
      const addressData = await Address.getAddressData(+value);

      setValue(`address[${index}].state`, addressData.uf);
      setValue(`address[${index}].city`, addressData.localidade);
      setValue(`address[${index}].neighbourhood`, addressData.bairro);
      setValue(`address[${index}].street`, addressData.logradouro);
      setValue(`address[${index}].complement`, addressData.complemento);
    } catch (error) {
      return newWarning(
        "Erro ao obter os dados de localização, por favor, adicione os dados!"
      );
    }
  };

  return (
    <>
      <S.HeaderForm>
        <P color="var(--white)" size="large">
          Address data
        </P>
        <Button
          variant="icon"
          type="button"
          backgroundColor="var(--gray-200)"
          onClick={() => {
            append({
              cep: "",
              city: "",
              complement: "",
              neighbourhood: "",
              number: "",
              state: "",
              street: "",
            });
          }}
        >
          <Plus />
        </Button>
      </S.HeaderForm>

      {fields.map((item, index) => (
        <S.Content key={index}>
          <S.FormTwoColumns>
            <S.Input>
              <input
                type="text"
                placeholder="CEP"
                id="cep"
                {...register(`address[${index}].cep`)}
                onBlur={(e) => handleGetAddressData(e.target.value, index)}
              />
            </S.Input>
          </S.FormTwoColumns>
          <S.FormOneColum>
            <S.Input>
              <input
                type="text"
                placeholder="Rua"
                id="street"
                {...register(`address[${index}].street`)}
              />
            </S.Input>
          </S.FormOneColum>
          <S.FormTwoColumns>
            <S.Input>
              <input
                type="text"
                placeholder="Número"
                id="number"
                {...register(`address[${index}].number`)}
              />
            </S.Input>
            <S.Input>
              <input
                type="text"
                placeholder="Complemento"
                id="complement"
                {...register(`address[${index}].complement`)}
              />
            </S.Input>
          </S.FormTwoColumns>
          <S.FormThreeColumns>
            <S.Input>
              <input
                type="text"
                placeholder="Bairro"
                id="neighbourhood"
                {...register(`address[${index}].neighbourhood`)}
              />
            </S.Input>
            <S.Input>
              <input
                type="text"
                placeholder="Cidade"
                id="city"
                {...register(`address[${index}].city`)}
              />
            </S.Input>
            <S.Input>
              <input
                type="text"
                placeholder="UF"
                id="state"
                {...register(`address[${index}].state`)}
              />
            </S.Input>
          </S.FormThreeColumns>
        </S.Content>
      ))}
    </>
  );
};
