import Footer from "@/core/components/Footer"
import LocationModal from "@/core/components/LocationModal"
import Navbar from "@/core/components/Navbar"
import UserDrawer from "@/core/components/UserDrawer"
import { useState } from "react"
import { Outlet } from "react-router"

type Props = {}

export default function AppLayout({}: Props) {
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  
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
