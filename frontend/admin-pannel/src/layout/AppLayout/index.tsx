import { Outlet } from "react-router"

type Props = {}

export default function AppLayout({}: Props) {
  return (
    <>
      <Outlet />
    </>
  )
}
