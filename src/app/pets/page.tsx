import Head from 'next/head'
import Gallery from '../components/Gallery'

const Pets = () => {
  const petImages = [
    'pets1.jpg',
    'pets2.jpg',
    'pets3.jpg',
    'pets4.jpg',
    'pets5.jpg',
    'pets6.jpg',
    'pets7.jpg',
    'pets8.jpg',
    'pets9.jpg',
    'pets10.jpg',
    'pets11.jpg',
    'pets12.jpg',
    'pets13.jpg',
    'pets15.JPG',
    'pets16.jpg',
    'pets17.jpg',
    'pets18.jpg',
    'pets19.jpg',
    'pets20.jpg',
    'pets21.jpg',
    'pets22.jpg',
    'pets23.jpg',
    'pets24.jpg',
    'pets25.jpg',
    'pets26.jpg',
    'pets27.jpg',
    'pets28.jpg',
    'pets29.jpg',
    // 'pets30.jpg',,
    // 'pets31.jpg',
    // 'pets32.jpg',
  ]

  return (
    <>
      <Head>
        <title>Pets Gallery | Watson and Sherlock!</title>
        <meta name='description' content='My beloved pets!' />
      </Head>
      <main>
        <Gallery images={petImages} title='Pets' />
      </main>
    </>
  )
}

export default Pets
