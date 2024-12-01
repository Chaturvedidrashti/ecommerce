import '../styles/globals.css';  // Import global CSS here
import { CssBaseline } from '@mui/material';  // Optional, for consistent base styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />  {/* Optional: normalize and reset styles */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
