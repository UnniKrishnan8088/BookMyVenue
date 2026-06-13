import Providers from "./providers"
import { BrowserRouter } from "react-router"
import AppRouting from "./routing/app-routing"

export function App() {
  return (
    <>
      <Providers>
        <BrowserRouter>
          <AppRouting />
        </BrowserRouter>
      </Providers>
    </>
  )
}

export default App
