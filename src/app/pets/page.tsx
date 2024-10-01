import Head from 'next/head'
import Gallery from '../components/Gallery'

const Pets = () => {
  // List of pet image filenames
  const petImages = [
    'pets1.jpg',
    'pets2.jpg',
    'pets3.jpg',
    'pets4.jpg',
    'pets5.jpg',
  ]

  return (
    <>
      <Head>
        <title>Pets Gallery | Watson and Sherlock!</title>
        <meta
          name='description'
          content='My beloved pets!'
        />
      </Head>
      <main>
        <Gallery images={petImages} title='Pets' />
      </main>
    </>
  )
}

export default Pets
