import "../styles/globals.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" flex justify-center">
      <div className="max-w-screen-2xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
