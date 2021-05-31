import { ThemeProvider } from 'react-jss';
import '../styles/antd.less';
import theme from '../jssTheme';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// export function reportWebVitals(metric) {
//   console.log(metric);
// }

export default App;
