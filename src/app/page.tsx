import ClientHome from "./ClientHome";
import Head from "next/head";

// export const metadata = {
//   title: "The Inforush",
//   description: "InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place. We provide you real and bias-free recommendations.", 
//   keywords:["technology, gadgets, finance, insurance, sports, cricket, fitness"],
//   openGraph: {
//     title: "The Inforush",
//     description: "InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place. We provide you real and bias-free recommendations.", 
//     keywords:["technology, gadgets, finance, insurance, sports, cricket, fitness"],
//     url: "https://www.theinforush.com",
//     images: [
//       {
//         url: "https://www.theinforush.com/assets/favico.png",
//         width: 1200,
//         height: 630,
//         alt: "The Inforush OG image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "The Inforush",
//     description: "InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place. We provide you real and bias-free recommendations.",
//     keywords:["technology, gadgets, finance, insurance, sports, cricket, fitness"],
//     images: ["https://www.theinforush.com/assets/favico.png"],
//   },
//   icons: {
//     icon: [
//       {
//         url: "/favicon.png",
//         sizes: "32x32",
//         type: "image/png",
//       },
//       {
//         url: "/assets/favico.png",
//         sizes: "16x16",
//         type: "image/png",
//       },
//     ],
//     apple: "/favicon.ico", 
//   },
//   alternates: {
//     canonical: "https://www.theinforush.com",
//   },
// };

export default function Home() {
  return (
    <>
  <Head>
  <title>The InfoRush</title>
  <meta property="og:title" content="The InfoRush" />
  <meta property="og:description" content="InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place. We provide you real and bias-free recommendations." />
  <meta property="og:image" content="https://www.theinforush.com/assets/logo.png" />
  <meta property="og:url" content="https://www.theinforush.com" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="The InfoRush" />
  <meta name="twitter:description" content="InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place." />
  <meta name="twitter:image" content="https://www.theinforush.com/assets/logo.png" />
  <meta name="google-adsense-account" content="ca-pub-7725273560791505"></meta>
</Head>
  <ClientHome />
  </>
  )

}
