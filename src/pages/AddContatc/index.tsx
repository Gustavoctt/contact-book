import { Link } from "react-router-dom";
import Box from "../../components/atoms/Box";
import Title from "../../components/atoms/Typography/Title";
import * as S from "./styles";
import Button from "../../components/atoms/Button";
import { CaretLeft, Plus, Trash } from "@phosphor-icons/react";
import P from "../../components/atoms/Typography/P";
import { useFieldArray, useForm, FieldValues } from "react-hook-form";
import { useEffect } from "react";
import { FormUserData } from "./components/FormUserData";

type IPhone = {
  name: string;
};

type FormValues = FieldValues & {
  name: string;
  email: string;
  company: string;
  phone: Array<IPhone>;
};

export const AddContact = () => {
  const { register, handleSubmit, control } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <S.Container>
      <Box>
        <S.Header>
          <Title color="var(--white)" size="small">
            Add user
          </Title>
          <Link to={"/"}>
            <Button variant="icon">
              <CaretLeft />
            </Button>
          </Link>
        </S.Header>

        <S.FormUser onSubmit={handleSubmit(onSubmit)}>
          <S.HeaderForm>
            <P color="var(--white)" size="large">
              User data
            </P>
          </S.HeaderForm>

          <FormUserData register={register} control={control} />

          <S.HeaderForm>
            <P color="var(--white)" size="large">
              Address data
            </P>
            <Button
              variant="icon"
              type="button"
              backgroundColor="var(--gray-200)"
              onClick={() => {}}
            >
              <Plus />
            </Button>
          </S.HeaderForm>

          <S.FormTwoColumns>
            <S.Input>
              <input type="text" placeholder="CEP" />
            </S.Input>
          </S.FormTwoColumns>
          <S.FormOneColum>
            <S.Input>
              <input type="text" placeholder="Rua" />
            </S.Input>
          </S.FormOneColum>
          <S.FormTwoColumns>
            <S.Input>
              <input type="text" placeholder="Número" />
            </S.Input>
            <S.Input>
              <input type="text" placeholder="Complemento" />
            </S.Input>
          </S.FormTwoColumns>
          <S.FormThreeColumns>
            <S.Input>
              <input type="text" placeholder="Bairro" />
            </S.Input>
            <S.Input>
              <input type="text" placeholder="Cidade" />
            </S.Input>
            <S.Input>
              <input type="text" placeholder="UF" />
            </S.Input>
          </S.FormThreeColumns>
          <S.Footer>
            <Button type="submit">Save</Button>
          </S.Footer>
        </S.FormUser>
      </Box>
    </S.Container>
  );
};
