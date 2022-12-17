import Head from 'next/head';

export default function Seo({ title }) {
  const tilte = `${title} | Next Movies`;
  return (
    <Head>
      <title>{tilte}</title>
    </Head>
  );
}
