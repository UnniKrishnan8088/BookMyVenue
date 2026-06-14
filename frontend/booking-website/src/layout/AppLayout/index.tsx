import Footer from "@/core/components/Footer"
import LocationModal from "@/core/components/LocationModal"
import Navbar from "@/core/components/Navbar"
import UserDrawer from "@/core/components/UserDrawer"
import { appRoutes } from "@/routes"
import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router"

type Props = {}

export default function AppLayout({}: Props) {
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    if (location?.pathname === appRoutes.home) {
      setIsLocationOpen(true)
    }
  }, [location])

  return (
    <>
      <Navbar
        onLocationOpen={setIsLocationOpen}
        onDrawerOpen={setIsDrawerOpen}
      />
      <div className="lg:bg-[#f2f5f9]">
        <Outlet />
      </div>
      <Footer />
      <LocationModal onOpenChange={setIsLocationOpen} open={isLocationOpen} />
      <UserDrawer onOpenChange={setIsDrawerOpen} open={isDrawerOpen} />
    </>
  )
}
