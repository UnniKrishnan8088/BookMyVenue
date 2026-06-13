import AppLayout from "@/layout/AppLayout"
import { appRoutes } from "@/routes"
import { lazy } from "react"
import { Navigate, Route, Routes } from "react-router"

type Props = {}

const Home = lazy(() => import("@/modules/Home"))
const VenueDetails = lazy(() => import("@/modules/VenueDetails"))
const VenueList = lazy(() => import("@/modules/VenueList"))
const VenueBooking = lazy(() => import("@/modules/VenueBooking"))
const MyProfile = lazy(() => import("@/modules/MyProfile"))
const Profile = lazy(() => import("@/modules/MyProfile/components/Profile"))
const YourBookings = lazy(
  () => import("@/modules/MyProfile/components/YourBookings")
)

export default function AppRouting({}: Props) {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to={appRoutes.home} replace />} />
        <Route path={appRoutes.home} element={<Home />} />
        <Route path={appRoutes.venueDetails} element={<VenueDetails />} />
        <Route path={appRoutes.venueList} element={<VenueList />} />
        <Route path={appRoutes.venueBooking} element={<VenueBooking />} />
        <Route path={appRoutes.myProfile} element={<MyProfile />}>
          <Route index element={<Profile />} />
          <Route path={appRoutes.bookingHistory} element={<YourBookings />} />
        </Route>
      </Route>
    </Routes>
  )
}
