
import { Suspense } from "react";
import HOmeMain from "./HOmeMain";
import HomeBanner from "./componets/banner";

export default function Home() {

  return (
    <>
    <HomeBanner />
    <main className="">
    <Suspense fallback={<p>...loading</p>}>
      <HOmeMain />
      </Suspense>
      

    </main>
    </>
  )
}
