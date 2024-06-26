import OauthProvider from "./components/OauthProvider";
import ReduxProvider from "./components/ReduxProvider";
import "./globals.css";
import "./index.css";

export const metadata = {
  title: "CROTE",
  description: "CROTE",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <OauthProvider>
        <html className="roothtml" lang="en">
          <body className="poppins">
            {/* <ThemeProvider> */}
            {/* <Nav /> */}
            {children}
            {/* </ThemeProvider> */}
          </body>
        </html>
      </OauthProvider>
    </ReduxProvider>
  );
}
