import dynamic from "next/dynamic";
import { useContext } from "react";
import { LoveContext } from "../../contexts/LoveContext";
import { getLovePhrase } from "../../utils/funcs";
import { Container } from "./styles";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function Graphic({ options, series }) {
  const { loveScore } = useContext(LoveContext);
  const phrase = getLovePhrase(Number(loveScore.percentage));

  const screenWidth = window.screen.width;

  console.log(screenWidth);

  return (
    <Container>
      <Chart
        options={options}
        series={series}
        type="donut"
        width={screenWidth < 720 ? 360 : 450}
      />
      <p>{phrase}</p>
    </Container>
  );
}
