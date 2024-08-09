import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "@/styles/globals.css";

import { Navbar, Footer } from "@/components";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <Script
        src="https://kit.fontawesome.com/ab3b206834.js"
        crossorigin="anonymous"
      ></Script>
    </ThemeProvider>
  );
};

export default App;
