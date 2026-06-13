import { Button } from "@/components/ui/button"
import Banner from "../Home/components/Banner"
import VenueFilters, {
  venueTypes,
  venuFilters,
} from "./components/VenueFilters"
import { venues } from "../Home"
import VenueCard from "@/core/components/VenueCard"
import { useSearchParams } from "react-router"
import { useCallback, useState } from "react"
import { cn } from "@/lib/utils"
import { Funnel, X } from "lucide-react"
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
import { Item, ItemContent, ItemTitle } from "@/components/ui/item"

type Props = {}

export default function VenueList({}: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

  const getSelected = useCallback(
    (paramKey: string): string[] => {
      const val = searchParams.get(paramKey)
      return val ? val.split(",") : []
    },
    [searchParams]
  )

  const toggleFilter = useCallback(
    (paramKey: string, value: string) => {
      const current = getSelected(paramKey)

      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]

      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev)
          if (updated.length === 0) {
            next.delete(paramKey)
          } else {
            next.set(paramKey, updated.join(","))
          }
          return next
        },
        { preventScrollReset: true }
      )
    },
    [getSelected, setSearchParams]
  )

  const clearFilter = useCallback(
    (e: React.MouseEvent, paramKey: string) => {
      e.stopPropagation()
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev)
          next.delete(paramKey)
          return next
        },
        { preventScrollReset: true }
      )
    },
    [setSearchParams]
  )

  const selectedVenueTypes = getSelected("venueType")

  return (
    <>
      <Banner />
      <div className="app-container grid gap-x-10 py-5 lg:grid-cols-12 lg:space-y-6 lg:py-10">
        <VenueFilters
          onClearFilter={clearFilter}
          onGetSelected={getSelected}
          onToggleFilter={toggleFilter}
        />
        <div className="col-span-full lg:col-span-8 xl:col-span-9">
          <h2 className="text-xl font-medium lg:text-2xl">Venues in Kochi</h2>
          <div className="grid grid-cols-12 pt-3 lg:hidden">
            <div>
              <Button
                size={"icon-xs"}
                variant={"outline"}
                className="cursor-pointer rounded-full border-primary p-1 text-primary hover:text-primary"
                onClick={() => setIsFilterDrawerOpen(true)}
              >
                <Funnel className="size-3" />
              </Button>
            </div>
            <div className="col-span-11 ml-2 flex scrollbar-none items-center gap-2 overflow-x-auto border-2 border-y-0 border-r-0 border-l-gray-300 pl-2">
              {venueTypes?.map((item) => {
                const isSelected = selectedVenueTypes?.includes(item?.value)
                return (
                  <Button
                    key={item?.value}
                    size={"xs"}
                    variant={"outline"}
                    className={cn(
                      "cursor-pointer rounded-2xl border font-normal text-primary hover:bg-white hover:text-primary",
                      isSelected &&
                        "bg-primary text-white hover:bg-primary hover:text-white"
                    )}
                    onClick={() => toggleFilter("venueType", item?.value)}
                  >
                    {item?.label}
                  </Button>
                )
              })}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="mt-1 flex flex-wrap items-center gap-2 lg:mt-3">
              {venueTypes?.map((item) => {
                const isSelected = selectedVenueTypes?.includes(item?.value)
                return (
                  <Button
                    key={item?.value}
                    size={"sm"}
                    variant={"outline"}
                    className={cn(
                      "cursor-pointer rounded-2xl border font-normal text-primary hover:bg-white hover:text-primary",
                      isSelected &&
                        "bg-primary text-white hover:bg-primary hover:text-white"
                    )}
                    onClick={() => toggleFilter("venueType", item?.value)}
                  >
                    {item?.label}
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:mt-10 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {venues?.map((venue) => (
              <VenueCard data={venue} />
            ))}
          </div>
        </div>
      </div>

      <Drawer open={isFilterDrawerOpen} onOpenChange={setIsFilterDrawerOpen}>
        <DrawerContent className="m-0 h-screen p-0 [&>div:first-child]:hidden">
          <DrawerHeader className="relative">
            <Button
              size={"lg"}
              variant={"link"}
              className="absolute top-2 left-0 cursor-pointer text-black"
              onClick={() => setIsFilterDrawerOpen(false)}
            >
              <X className="size-5" />
            </Button>
            <DrawerTitle className="font-normal">Filters</DrawerTitle>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto">
            {venuFilters?.map((item) => (
              <div>
                <div className="bg-[#F5F5FF] px-4 py-2">
                  <p className="text-sm font-medium">{item?.label}</p>
                </div>

                {item?.filters?.map((item) => (
                  <Item className="rounded-none px-4">
                    <ItemContent>
                      <ItemTitle className="text-xs font-normal">
                        {item?.label}
                      </ItemTitle>
                    </ItemContent>
                  </Item>
                ))}
              </div>
            ))}
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
