// pages/europe.tsx

import Head from 'next/head'
import Gallery from '../components/Gallery'

const Europe = () => {
  const europeImages = [
    'europe1.jpg',
    'europe2.jpg',
    'europe3.jpg',
    'europe4.jpg',
    'europe5.jpg',
    'europe6.jpg',
    'europe7.jpg',
    'europe8.jpg',
    'europe9.jpg',
    'europe10.jpg',
    'europe11.jpg',
    'europe12.jpg',
    'europe13.jpg',
    'europe14.jpg',
    'europe15.jpg',
    'europe16.jpg',
    'europe17.jpg',
    'europe18.jpg',
    'europe19.jpg',
    'europe20.jpg',
    'europe21.jpg',
    'europe22.jpg',
    'europe23.jpg',
    'europe24.jpg',
    'europe25.jpg',
    'europe26.jpg',
    'europe27.jpg',
    'europe28.jpg',
    'europe29.jpg',
    'europe30.jpg',
    'europe31.jpg',
    'europe32.jpg',
    'europe33.jpg',
    'europe34.jpg',
    'europe35.jpg',
    'europe36.jpg',
    'europe37.jpg',
    'europe38.jpg',
    'europe39.jpg',
    'europe40.jpg',
    'europe41.jpg',
    'europe42.jpg',
    'europe43.jpg',
    'europe44.jpg',
    'europe45.jpg',
    'europe46.jpg',
    // 'europe47.jpg',
  ]

  return (
    <>
      <Head>
        <title>Europe Gallery | [Your Name]</title>
        <meta
          name='description'
          content='A classy gallery showcasing my travels across Europe.'
        />
      </Head>
      <main>
        <Gallery images={europeImages} title='Europe' />
      </main>
    </>
  )
}

export default Europe
