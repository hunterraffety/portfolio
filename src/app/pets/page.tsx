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
    'pets14.jpg',
    'pets15.jpg',
    // 'pets16.jpg',
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
