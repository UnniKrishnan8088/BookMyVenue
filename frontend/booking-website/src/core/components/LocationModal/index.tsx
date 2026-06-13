import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import SearchInput from "../SearchInput"
import { Button } from "@/components/ui/button"
import {
  Building,
  Building2,
  Castle,
  LocateFixed,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Road,
  TrainFront,
  TreePalm,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const popularCities = [
  {
    label: "Mumbai",
    icon: <Building2 className="size-9 stroke-1" />,
  },
  {
    label: "Delhi-NCR",
    icon: <Plane className="size-9 stroke-1" />,
  },
  {
    label: "Bengaluru",
    icon: <Road className="size-9 stroke-1" />,
  },
  {
    label: "Hyderabad",
    icon: <Building className="size-9 stroke-1" />,
  },
  {
    label: "Chandigarh",
    icon: <PlaneLanding className="size-9 stroke-1" />,
  },
  {
    label: "Ahmedabad",
    icon: <Castle className="size-9 stroke-1" />,
  },
  {
    label: "Pune",
    icon: <TrainFront className="size-9 stroke-1" />,
  },
  {
    label: "Chennai",
    icon: <Castle className="size-9 stroke-1" />,
  },
  {
    label: "Kolkata",
    icon: <PlaneTakeoff className="size-9 stroke-1" />,
  },
  {
    label: "Kochi",
    icon: <TreePalm className="size-9 stroke-1" />,
  },
]

export default function LocationModal({ onOpenChange, open }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-16! w-full max-w-[60%]! translate-y-0! p-0 [&>button]:hidden">
        <DialogHeader>
          <div className="flex flex-col items-start px-4 pt-4">
            <SearchInput placeholder="Search for your city" />
            <Button
              variant={"link"}
              className="cursor-pointer hover:no-underline"
            >
              <LocateFixed />
              Detect my location
            </Button>
          </div>
          <Separator />
        </DialogHeader>
        <div className="px-6 pb-4">
          <p className="text-center text-base">Popular Cities</p>
          <div className="mt-4 flex items-center justify-between">
            {popularCities?.map((item) => (
              <Button
                key={item?.label}
                variant={"outline"}
                className="flex h-full cursor-pointer flex-col items-center border-none text-sm font-normal hover:bg-transparent hover:text-primary"
              >
                {item?.icon}
                {item?.label}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
