import { useContext } from "react";
import { LoveContext } from "../../contexts/LoveContext";
import { Button, Container, Input, Label } from "./styles";
import axios from "axios";

type AxiosOptions = {
  method: string;
  url: string;
  params: {
    sname: string;
    fname: string;
  };
  headers: {
    "x-rapidapi-host": string;
    "x-rapidapi-key": string;
  };
};

function LoveForm() {
  const { loveName, yourName, setLoveName, setYourName, setLoveScore } =
    useContext(LoveContext);

  function handleYourName({ target }) {
    setYourName(target.value);
  }

  function handleLoveName({ target }) {
    setLoveName(target.value);
  }

  function handleSubmit() {
    const options: AxiosOptions | any = {
      method: "GET",
      url: "https://love-calculator.p.rapidapi.com/getPercentage",
      params: { sname: yourName, fname: loveName },
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setLoveScore(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <Container>
      <Label htmlFor="yourName">Qual o seu nome?</Label>
      <Input id="yourName" name="yourName" onChange={handleYourName} />

      <Label htmlFor="loveName">Qual o nome do seu amado(a)?</Label>
      <Input id="loveName" name="loveName" onChange={handleLoveName} />

      <Button type="button" onClick={handleSubmit}>
        Verificar compatibilidade
      </Button>
    </Container>
  );
}

export default LoveForm;
