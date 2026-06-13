import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import {
  Bell,
  ChevronRightIcon,
  MessageCircle,
  Settings,
  TicketCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function UserDrawer({ onOpenChange, open }: Props) {
  const drawerMenus = [
    {
      title: "Notifications",
      description: "",
      icon: <Bell className="size-5" />,
      isEnabled: true,
    },
    {
      title: "Your Bookings",
      description: "View all your bookings",
      icon: <TicketCheck className="size-5" />,
      isEnabled: true,
    },
    {
      title: "Accounts & Settings",
      description: "Location, Payments, Permissions & More",
      icon: <Settings className="size-5" />,
      isEnabled: true,
    },
    {
      title: "Help & Support",
      description: "View commonly asked queries and Chat",
      icon: <MessageCircle className="size-5" />,
      isEnabled: true,
    },
  ]
  return (
    <Drawer onOpenChange={onOpenChange} open={open} direction="right">
      <DrawerContent className="rounded-none!">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold">Hey!</DrawerTitle>
        </DrawerHeader>
        <Separator />
        <div className="no-scrollbar h-full overflow-y-auto">
          {drawerMenus?.map((item) => (
            <Item className="cursor-pointer py-4 hover:bg-accent">
              <ItemMedia>{item?.icon}</ItemMedia>
              <ItemContent>
                <ItemTitle className="font-normal">{item?.title}</ItemTitle>
                {item?.description && (
                  <ItemDescription className="text-xs">
                    {item?.description}
                  </ItemDescription>
                )}
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </Item>
          ))}
        </div>
        <div className="p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <Button
            variant={"outline"}
            className="w-full cursor-pointer border border-primary py-6 font-normal text-primary hover:bg-white hover:text-primary"
          >
            Sign Out
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
