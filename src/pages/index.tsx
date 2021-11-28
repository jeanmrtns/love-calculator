import Head from "next/head";
import Layout from "../components/Layout";
import LoveForm from "../components/LoveForm";
import { getApexOptions } from "../../apexchartsoptions";
import { Graphic } from "../components/Graphic";
import { useContext } from "react";
import { LoveContext } from "../contexts/LoveContext";

export default function Home() {
  const { options, series } = getApexOptions();
  const { loveScore } = useContext(LoveContext);
  const percentage = loveScore.percentage;

  return (
    <Layout>
      <>
        <Head>
          <title>Love Calculator</title>
        </Head>
        <LoveForm />
        {!!percentage && <Graphic options={options} series={series} />}
      </>
    </Layout>
  );
}
