"use client"
import { useEffect, useState } from "react";
import HomeBanner from "./componets/banner";
import axios from "axios";
import SwiperCard from "./componets/SwiperCard";
interface EmbroideryItem {
  image: string;
}

interface EmbroideryCategory {
  EmbroideryPunching: {
    EmbroideryPunching1: EmbroideryItem[]
    EmbroideryPunching2: EmbroideryItem[]
  },
}
export default function Home() {
  const [embroideryCategory, setEmbroideryCategory] = useState<EmbroideryCategory | null>(null);
  useEffect(() => {
    axios
      .get<EmbroideryCategory>('http://localhost:3000/api/home')
      .then(response => {
        setEmbroideryCategory(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
    <HomeBanner />
    <main className="">
      <SwiperCard data={embroideryCategory?.EmbroideryPunching} />

    </main>
    </>
  )
}
