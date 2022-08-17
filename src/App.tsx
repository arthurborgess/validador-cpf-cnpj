import { useState } from "react";
import InputMask from "react-input-mask";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  Container,
  GlobalStyle,
  RadioArea
} from "./App.styles";
import { cnpjValidate } from "./cnpjValidate";
import { cpfValidate } from "./cpfValidate";

export const App = () => {

  const [isCpf, setIsCpf] = useState(true);

  const cpfCnpjHandleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isCpf && e.currentTarget.value.match(/([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}/)) {
      let currentCpf = e.currentTarget.value.replace(/\.|\-/g, '');
      if (!cpfValidate(currentCpf)) {
        toast.error('CPF inválido!');
        e.currentTarget.value = '';
      } else toast.success('CPF válido :)')
    } else if (!isCpf && e.currentTarget.value.match(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})/)) {
      let currentCnpj = e.currentTarget.value.replace(/\.|\/|\-/g, '');
      if (!cnpjValidate(currentCnpj)) {
        toast.error('CNPJ inválido!');
        e.currentTarget.value = '';
      } else toast.success('CNPJ válido :)')
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <RadioArea>
          <div>
            <input
              type="radio"
              id="cpf_checkbox"
              checked={isCpf}
              onChange={() => setIsCpf(true)}
            />
            <label htmlFor="cpf_checkbox">CPF</label>
          </div>
          <div>
            <input
              type="radio"
              id="cnpj_checkbox"
              checked={!isCpf}
              onChange={() => setIsCpf(false)}
            />
            <label htmlFor="cpf_checkbox">CNPJ</label>
          </div>
        </RadioArea>
        <InputMask
          mask={isCpf ? '999.999.999-99' : '99.999.999/9999-99'}
          className="cpf_cnpj_input"
          placeholder={isCpf ? 'CPF' : 'CNPJ'}
          onKeyUp={cpfCnpjHandleChange}
        />
      </Container>
      <ToastContainer />
    </>
  );
};