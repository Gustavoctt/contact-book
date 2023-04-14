import axios from "axios";
import { IViaCep } from "../../types/viaCep";

const getAddressData = async (cep: number): Promise<IViaCep> => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    return data;
  } catch (error) {
    throw new Error("Houve um erro ao obter os dados de localização");
  }
};

export default { getAddressData };
