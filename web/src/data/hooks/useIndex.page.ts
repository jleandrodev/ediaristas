import { useMemo, useState } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    [erro, setErro] = useState(""),
    [search, setSearch] = useState(false),
    [loading, setLoading] = useState(false),
    [professionals, setProfessionals] = useState([] as UserShortInterface[]),
    [otherProfessionals, setOtherProfessionals] = useState(0),
    isValid = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]);

  async function searchProfessionals(cep: string) {
    setSearch(false);
    setLoading(true);
    setErro("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, "")}`);

      setProfessionals(data.diaristas);
      setOtherProfessionals(data.quantidade_diaristas);
      setSearch(true);
      setLoading(false);
    } catch (error) {
      setErro("CEP não encontrado!");
      setLoading(false);
    }

    setSearch(true);
  }

  return {
    cep,
    setCep,
    isValid,
    searchProfessionals,
    erro,
    professionals,
    search,
    loading,
    otherProfessionals,
  };
}
