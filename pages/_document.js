import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const d = document.documentElement;
                const t = localStorage.getItem('theme');
                if (t === 'light') { d.classList.remove('dark'); d.classList.add('light'); }
                else { d.classList.add('dark'); d.classList.remove('light'); }
              } catch (e) {}
            })();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

