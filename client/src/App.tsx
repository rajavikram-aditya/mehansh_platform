/* Mehansh Platform style: the app shell stays minimal so the editorial page structure remains the primary interaction. */
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingSequence from "./components/LoadingSequence";
import { Route, Switch, useLocation } from "wouter";
import PageTransition from "./components/PageTransition";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";

function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function Router() {
  const [location] = useLocation();
  return (
    <PageTransition routeKey={location}>
      <Switch key={location}>
        <Route path="/">
          <SiteFrame><Home /></SiteFrame>
        </Route>
        <Route path="/services/:slug">
          {(params) => <SiteFrame><ServicePage slug={params.slug} /></SiteFrame>}
        </Route>
        <Route path="/404">
          <SiteFrame><NotFound /></SiteFrame>
        </Route>
        <Route>
          <SiteFrame><NotFound /></SiteFrame>
        </Route>
      </Switch>
    </PageTransition>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <LoadingSequence />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Router />
          </motion.div>
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
}
