import Head from "next/head";

interface AppHeadProps {
  description: string;
  url: string;
  title?: string;
  type?: string;
}

const AppHead = ({ description,url,title = "Launcher Labs by CommandBar", type = "website" }: AppHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
    </Head>
  );
};

export default AppHead;
