import Providers from "./providers"
import { BrowserRouter } from "react-router"
import AppRouting from "./routing/app-routing"
import ScrollToTop from "./core/components/ScrollToTop"

export function App() {
  return (
    <>
      <Providers>
        <BrowserRouter>
          <ScrollToTop />
          <AppRouting />
        </BrowserRouter>
      </Providers>
    </>
  )
}

export default App
