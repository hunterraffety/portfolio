// pages/pets.tsx

import Head from 'next/head';
import Gallery from '../components/Gallery';

const Pets = () => {
  // List of pet image filenames
  const petImages = [
    'pets1.jpg',
    'pets2.jpg',
    'pets3.jpg',
    'pets4.jpg',
    'pets5.jpg',
    // Add more image filenames as needed
  ];

  return (
    <>
      <Head>
        <title>Pets Gallery | [Your Name]</title>
        <meta name="description" content="A classy gallery showcasing my beloved pets." />
      </Head>
      <main>
        <Gallery images={petImages} title="Pets" />
      </main>
    </>
  );
};

export default Pets;
