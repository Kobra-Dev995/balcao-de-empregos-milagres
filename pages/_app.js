import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Balcão de Empregos - Milagres-CE</title>
        <link rel="icon" href="/BALCAO DE EMPREGO.png" type="image/png"></link>
        <meta name='theme-color' content='#fff' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta
          name='google-site-verification'
          content='h74CEtPiqEkBkKOgNLboguXou4fqko1mqfz9kYMBzEY'
        />
        <meta
          name='description'
          content='Vagas de emprego em Milagres, CE. Vagas abertas em diferentes empresas. Conferir agora todas as vagas de emprego e diferentes prof...'
        />
        <meta name="author" content="Balção de Empregos" />
      </Head>

      <Component {...pageProps} />
    </SessionProvider>
  );
}
