import { Link } from "react-router-dom";
import Box from "../../components/atoms/Box";
import Title from "../../components/atoms/Typography/Title";
import * as S from "./styles";
import Button from "../../components/atoms/Button";
import { CaretLeft } from "@phosphor-icons/react";
import P from "../../components/atoms/Typography/P";
import { useForm, FieldValues } from "react-hook-form";
import { FormUserData } from "./components/FormUserData";
import { FormAddressData } from "./components/FormAddressData";
import { Address } from "../../services";

type IAddress = {
  id: string;
  cep: string;
  street: string;
  neighbourhood: string;
  city: string;
  state: string;
  number: string;
  complement: string;
};

export type FormValues = FieldValues & {
  name: string;
  email: string;
  company: string;
  phone: Array<string>;
  address: Array<IAddress>;
};

export const AddContact = () => {
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

  const onSubmit = (data: FormValues) => console.log(data.address);

  // const handleGetAddressData = async (value: string, index: number) => {
  //   console.log("loading");
  //   try {
  //     const addressData = await Address.getAddressData(+value);

  //     console.log(addressData);

  //     console.log("close");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // handleGetAddressData("88870000", 1);

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
