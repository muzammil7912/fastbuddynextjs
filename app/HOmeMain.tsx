"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import SwiperCard from "./componets/SwiperCard";
import Services from "./componets/Services";
interface ItemSwiper {
  image: string,
  key: string,
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
const HOmeMain = () => {
    const [data, setData] = useState<AllData | null>(null);
    useEffect(() => {
      axios
        .get<AllData>('https://fastbuddynextjs.vercel.app/api/home')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  return (
   <>
   <SwiperCard data={data?.EmbroideryPunching} gallery={"Embroidery"} title={"Embroidery Punching"} />
      <SwiperCard data={data?.VectorArt} gallery={"Vector"} title={"Vector Art"} />
      <Services />
   </>
  )
}

export default HOmeMain