import { Snackbar } from "../../hooks";
import { useForm } from "react-hook-form";
import Box from "../../components/atoms/Box";
import { CaretLeft } from "@phosphor-icons/react";
import Button from "../../components/atoms/Button";
import P from "../../components/atoms/Typography/P";
import { Link, useNavigate } from "react-router-dom";
import { FormUserData } from "./components/FormUserData";
import Title from "../../components/atoms/Typography/Title";
import { FormAddressData } from "./components/FormAddressData";

import * as S from "./styles";
import { FormValues } from "../../types/contatc";

export const AddContact = () => {
  const { newSuccess } = Snackbar.useSnackbar();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      address: [
        {
          cep: "",
          city: "",
          complement: "",
          neighbourhood: "",
          number: "",
          state: "",
          street: "",
        },
      ],
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    newSuccess("Contato criado com sucesso!");
    navigate("/");
  };

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

          <FormAddressData
            register={register}
            control={control}
            setValue={setValue}
          />
          <S.Footer>
            <Button type="submit">Save</Button>
          </S.Footer>
        </S.FormUser>
        {errors.name && <span>This field is required</span>}
      </Box>
    </S.Container>
  );
};
