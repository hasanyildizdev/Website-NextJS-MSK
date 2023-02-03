import Head from 'next/head';
import Slide from '../components/Slide';
import View1 from '../components/View1';
import View2 from '../components/View2';
import View3 from '../components/View3';
import View4 from '../components/View4';

export default function Home() {

  return (
    <div>
      <Head>
        <title>MSK Sera Teknolojileri</title>
        <meta name="description" content="Modern Sera İmalat ve Kurulum Firması" />
        <meta name="keywords" content="Sera, Sera Teknolojileri, Antalya Sera, Profesyonel Sera , Topraksız Tarım" />
        <meta property="og: type" content="website" />
        <meta property="og: title" content="MSK Sera Teknolojileri" />
        <meta property="og: description" content="Modern Sera İmalat ve Kurulum Firması" />
        <meta property="og: image" content="./img/msk.png" />
        <meta property="og: url" content="https://msksera.iyiapp.com/" />
        <meta property="og: site_name" content="MSK SERA TEKNOLOJİLERİ" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="MSK Sera Teknolojileri"/>
        <meta name="twitter:description" content="Modern Sera İmalat ve Kurulum Firması"/>
        <link rel="icon" href="/ico.ico" />
      </Head>
      <Slide />
      <View1 />
      <View2 />
      <View3 />
      <View4 />
    </div>
  )
}
