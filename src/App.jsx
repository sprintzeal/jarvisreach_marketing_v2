import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Provider as ReduxProvider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "./components/Toaster";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import SplashScreen from "./Pages/SplashScreen";
import Help from "./Pages/Help";
import BulkEnrichment from "./Pages/help/BulkEnrichment";
import BulOnSaleNavigator from "./Pages/help/BulOnSaleNavigator";
import FirstContactLinkedin from "./Pages/help/FirstContactLinkedin";
import GettingStarted from "./Pages/help/GettingStarted";
import store from "./store";
import Prices from "./Pages/Prices";
import Integration from "./Pages/Integration";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import EmailFinder from "./Pages/EmailFinder";
import TermOfServices from "./Pages/TermOfServices";
import GDPRCompliance from "./Pages/GDPRCompliance";
import InstallExtension from "./Pages/InstallExtension";
import ExportContact from "./Pages/ExportContact";
import AboutUs from "./Pages/AboutUs";
import { HelmetProvider } from "react-helmet-async";
import RegistrationSuccess from "./Pages/RegistrationSuccessfull";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#3f51b5" },
      secondary: { main: "#f50057" },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  const user = JSON.parse(sessionStorage.getItem("auth"));
  const stripePromise = loadStripe(
    "pk_test_51Pir7zRpXRelcMvWvSxfwAkOBZv1G2Y9H3MhGauG6oAJRl2Fw0HTi8Oo3RYeCvUoQgCD12ZVigyAKV0ubauaZxmW00aRpByC9i"
  );

  return (
    <HelmetProvider>
      <Elements stripe={stripePromise}>
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/help-center" element={<Help />} />
              <Route path="/:name" element={<GettingStarted />} />
              <Route
                path="/:name/:questions"
                element={<FirstContactLinkedin />}
              />

              <Route path="/bulk-enrichment" element={<BulkEnrichment />} />
              <Route
                path="/bulk-on-sale-navigator"
                element={<BulOnSaleNavigator />}
              />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/pricing" element={<Prices />} />
              <Route path="/integrations" element={<Integration />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/linkedin-email-finder" element={<EmailFinder />} />
              <Route path="/terms-of-service" element={<TermOfServices />} />
              <Route path="/gdpr-compliance" element={<GDPRCompliance />} />
              <Route path="/install-extension" element={<InstallExtension />} />
              <Route
                path="/export-linkedin-contacts"
                element={<ExportContact />}
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route
                path="/registration-successful"
                element={<RegistrationSuccess />}
              />
            </Routes>
            <Toaster />
          </ThemeProvider>
        </ReduxProvider>
      </Elements>
    </HelmetProvider>
  );
}

export default App;
