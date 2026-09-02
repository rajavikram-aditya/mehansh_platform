/* Mehansh Platform style: quiet editorial hospitality system; cream + navy foundation, lime only for controlled action, Fraunces headlines, Inter UI. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { ThemeProvider } from "./contexts/ThemeContext";
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
  return (
    <Switch>
      <Route path="/">
        <SiteFrame>
          <Home />
        </SiteFrame>
      </Route>
      <Route path="/services/:slug">
        {(params) => (
          <SiteFrame>
            <ServicePage slug={params.slug} />
          </SiteFrame>
        )}
      </Route>
      <Route path="/404">
        <SiteFrame>
          <NotFound />
        </SiteFrame>
      </Route>
      <Route>
        <SiteFrame>
          <NotFound />
        </SiteFrame>
      </Route>
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
