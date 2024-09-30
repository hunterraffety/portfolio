// pages/europe.tsx

import Head from 'next/head';
import Gallery from '../components/Gallery';

const Europe = () => {
  // List of Europe travel image filenames
  const europeImages = [
    'europe1.jpg',
    'europe2.jpg',
    'europe3.jpg',
    'europe4.jpg',
    'europe5.jpg',
    // Add more image filenames as needed
  ];

  return (
    <>
      <Head>
        <title>Europe Gallery | [Your Name]</title>
        <meta name="description" content="A classy gallery showcasing my travels across Europe." />
      </Head>
      <main>
        <Gallery images={europeImages} title="Europe" />
      </main>
    </>
  );
};

export default Europe;
