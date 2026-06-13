import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

type Props = {
  onGetSelected: (paramKey: string) => string[]
  onToggleFilter: (paramKey: string, value: string) => void
  onClearFilter: (e: React.MouseEvent, paramKey: string) => void
}

export const venueTypes = [
  { label: "Wedding Hall", value: "wedding_hall" },
  { label: "Convention Center", value: "convention_center" },
  { label: "Banquet Hall", value: "banquet_hall" },
  { label: "Party Hall", value: "party_hall" },
  { label: "Auditorium", value: "auditorium" },
  { label: "Resort", value: "resort" },
  { label: "Conference Hall", value: "conference_hall" },
  { label: "Farmhouse", value: "farmhouse" },
  { label: "Hotel", value: "hotel" },
  { label: "Beach Venue", value: "beach_venue" },
  { label: "Rooftop Venue", value: "rooftop_venue" },
  { label: "Outdoor Lawn", value: "outdoor_lawn" },
]

const eventTypes = [
  { label: "Wedding", value: "wedding" },
  { label: "Reception", value: "reception" },
  { label: "Engagement", value: "engagement" },
  { label: "Birthday Party", value: "birthday_party" },
  { label: "Corporate Event", value: "corporate_event" },
  { label: "Conference", value: "conference" },
  { label: "Seminar", value: "seminar" },
  { label: "Baby Shower", value: "baby_shower" },
  { label: "Anniversary", value: "anniversary" },
  { label: "Cultural Program", value: "cultural_program" },
]

const budgetRanges = [
  { label: "Under ₹50,000", value: "under_50000" },
  { label: "₹50,000 - ₹1 Lakh", value: "50000_100000" },
  { label: "₹1 Lakh - ₹2 Lakhs", value: "100000_200000" },
  { label: "₹2 Lakhs - ₹5 Lakhs", value: "200000_500000" },
  { label: "₹5 Lakhs+", value: "above_500000" },
]

const guestCapacities = [
  { label: "Up to 100", value: "upto_100" },
  { label: "100 - 300", value: "100_300" },
  { label: "300 - 500", value: "300_500" },
  { label: "500 - 1000", value: "500_1000" },
  { label: "1000 - 2000", value: "1000_2000" },
  { label: "2000+", value: "above_2000" },
]

export const venuFilters = [
  {
    label: "Venue Types",
    value: "venue-types",
    filters: venueTypes?.sort((a, b) => a.label.localeCompare(b.label)),
    paramKey: "venueType",
  },
  {
    label: "Event Types",
    value: "event-types",
    filters: eventTypes?.sort((a, b) => a.label.localeCompare(b.label)),
    paramKey: "eventType",
  },
  {
    label: "Budget",
    value: "budget",
    filters: budgetRanges,
    paramKey: "budget",
  },
  {
    label: "Guest Capacity",
    value: "guest-capacity",
    filters: guestCapacities,
    paramKey: "capacity",
  },
]

export default function VenueFilters({
  onClearFilter,
  onGetSelected,
  onToggleFilter,
}: Props) {
  return (
    <>
      <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
        <h2 className="text-2xl font-medium">Filters</h2>
        {venuFilters?.map((filterItem) => {
          const selected = onGetSelected(filterItem.paramKey)

          return (
            <Accordion
              type="multiple"
              className="my-3"
              defaultValue={["venue-types"]}
            >
              <AccordionItem
                value={filterItem?.value}
                className="rounded-md bg-white px-4"
              >
                <AccordionTrigger className="cursor-pointer font-normal text-black/60 no-underline hover:no-underline data-[state=open]:text-primary [&>svg]:hidden [&[data-state=open]>svg]:hidden">
                  <div className="flex items-center gap-1">
                    <ChevronDown className="size-4 transition-transform duration-200 in-data-[state=open]:rotate-180" />
                    {filterItem?.label}
                  </div>
                  <Button
                    variant={"ghost"}
                    size={"xs"}
                    className="cursor-pointer font-normal text-black/60"
                    onClick={(e) => onClearFilter(e, filterItem.paramKey)}
                  >
                    Clear
                  </Button>
                </AccordionTrigger>
                <AccordionContent className="h-auto">
                  <div className="flex flex-wrap items-center gap-2">
                    {filterItem?.filters?.map((item) => {
                      const isSelected = selected?.includes(item?.value)
                      return (
                        <Button
                          size={"sm"}
                          variant={"outline"}
                          className={cn(
                            "cursor-pointer border font-normal text-primary hover:bg-white hover:text-primary",
                            isSelected &&
                              "bg-primary text-white hover:bg-primary hover:text-white"
                          )}
                          onClick={() =>
                            onToggleFilter(filterItem.paramKey, item.value)
                          }
                        >
                          {item?.label}
                        </Button>
                      )
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )
        })}
      </div>
    </>
  )
}
