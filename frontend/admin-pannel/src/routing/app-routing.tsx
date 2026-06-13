import AppLayout from "@/layout/AppLayout"
import { Route, Routes } from "react-router"

type Props = {}

export default function AppRouting({}: Props) {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<>Home Page</>} />
      </Route>
    </Routes>
  )
}
