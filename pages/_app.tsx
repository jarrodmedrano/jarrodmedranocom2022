import Script from "next";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div style={{ visibility: !mounted ? "hidden" : "visible" }}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
