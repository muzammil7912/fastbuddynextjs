"use client"
import { useEffect, useState } from "react";
import HomeBanner from "./componets/banner";
import axios from "axios";
import SwiperCard from "./componets/SwiperCard";
interface ItemSwiper {
  image: string;
}
interface AllData {
  EmbroideryPunching: {
    item1: ItemSwiper[]
    item2: ItemSwiper[]
  },
  VectorArt: {
    item1: ItemSwiper[]
    item2: ItemSwiper[]
  },
}
export default function Home() {
  const [data, setData] = useState<AllData | null>(null);
  useEffect(() => {
    axios
      .get<AllData>('http://localhost:3000/api/home')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
    <HomeBanner />
    <main className="">
      <SwiperCard data={data?.EmbroideryPunching} gallery={"Embroidery"} title={"Embroidery Punching"} />
      <SwiperCard data={data?.VectorArt} gallery={"Vector"} title={"Vector Art"} />

    </main>
    </>
  )
}
