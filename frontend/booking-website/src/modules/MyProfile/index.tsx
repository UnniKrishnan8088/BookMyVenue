import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BadgeCheckIcon, LogOut, Ticket, User, X } from "lucide-react"
import { Link, NavLink, Outlet } from "react-router"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { appRoutes } from "@/routes"
import { cn } from "@/lib/utils"

type Props = {}

const accountMenus = [
  {
    label: "Profile",
    icon: <User className="size-5" />,
    route: appRoutes.myProfile,
  },
  {
    label: "Bookings",
    icon: <Ticket />,
    route: appRoutes.bookingHistory,
  },
]

export default function MyProfile({}: Props) {
  return (
    <>
      <div className="mx-auto grid grid-cols-12 gap-x-6 py-4 md:max-w-6xl lg:max-w-7xl">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="text-xl">My Account</CardTitle>
            <CardAction className="cursor-pointer">
              <X />
            </CardAction>
          </CardHeader>
          <CardContent>
            {accountMenus?.map((item) => (
              <NavLink key={item?.route} to={item?.route} end>
                {({ isActive }) => (
                  <Item
                    variant={"outline"}
                    className={cn(
                      "mb-2 text-black/60",
                      isActive && "border-primary text-primary"
                    )}
                  >
                    <ItemMedia>{item?.icon}</ItemMedia>
                    <ItemContent>
                      <ItemTitle>{item?.label}</ItemTitle>
                    </ItemContent>
                  </Item>
                )}
              </NavLink>
            ))}
          </CardContent>
          <CardFooter className="border-none bg-white">
            <Item variant={"outline"} className={cn("mb-2 border-none text-primary cursor-pointer")}>
              <ItemMedia>
                <LogOut className="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Sign Out</ItemTitle>
              </ItemContent>
            </Item>
          </CardFooter>
        </Card>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </>
  )
}
