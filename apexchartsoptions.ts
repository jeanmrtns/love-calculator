import { useContext } from "react";
import { LoveContext } from "./src/contexts/LoveContext";

export function getApexOptions() {
  const { loveScore } = useContext(LoveContext);

  const options = {
    colors: ["#912347", "#E91E63"],
    dataLabels: {
      style: {
        colors: ["#FFF"],
      },
    },
    fill: {
      colors: ["#912347", "#E91E63"],
    },
    plotOptions: {
      pie: {
        donut: {
          size: `${loveScore.percentage}%`,
          labels: {
            show: true,
            name: {
              show: true,
            },
            total: {
              show: true,
              label: "Total",
            },
          },
        },
      },
    },
    labels: ["Não compatíveis", "Compatíveis"],
  };

  const series = [100 - loveScore.percentage, Math.round(loveScore.percentage)];

  return {
    series,
    options,
  };
}
