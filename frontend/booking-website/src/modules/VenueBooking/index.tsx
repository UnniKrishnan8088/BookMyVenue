import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  format,
  isToday,
  isFuture,
  getMonth,
} from "date-fns"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import BookingForm from "./components/BookingForm"

type Props = {}

const months = [
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
]

const sessions = [
  { label: "Morning Session", time: "6:00 AM - 2:00 PM", isAvailable: true },
  { label: "Evening Session", time: "4:00 PM - 11:00 PM", isAvailable: false },
  { label: "Full Day", time: "6:00 AM - 11:00 PM", isAvailable: true },
]

export function getDaysOfMonth(month: number, year: number): Date[] {
  const start = startOfMonth(new Date(year, month - 1))
  const end = endOfMonth(start)
  return eachDayOfInterval({ start, end })
}

export default function VenueBooking({}: Props) {
  const [selectedMonth, setSelectedMonth] = useState<string>(
    String(getMonth(new Date()) + 1)
  )

  const [selectedSession, setSelectedSession] = useState<any>()
  const dates = getDaysOfMonth(Number(selectedMonth), 2026)
  const currentMonth = getMonth(new Date()) + 1;

  const filteredMonths = months.filter((month) => month.value >= currentMonth);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto md:max-w-6xl lg:max-w-7xl">
          <div className="flex justify-between py-4">
            <div>
              <h1 className="text-3xl font-medium">
                Grand Harmony Convention Centre
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Badge
                  variant={"outline"}
                  className="rounded-2xl bg-white p-4 text-center text-sm font-normal"
                >
                  Wedding Hall
                </Badge>
                <Badge
                  variant={"outline"}
                  className="rounded-2xl bg-white p-4 text-center text-sm font-normal"
                >
                  100 - 1200 Guests
                </Badge>
                <Badge
                  variant={"outline"}
                  className="rounded-2xl bg-white p-4 text-center text-sm font-normal"
                >
                  250 Parking Spaces
                </Badge>
              </div>
            </div>
            <div>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select a month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {filteredMonths?.map((month) => (
                      <SelectItem
                        key={month?.value}
                        value={String(month?.value)}
                      >
                        {month?.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Separator />
        <div className="shadow-2xl">
          <div className="mx-auto flex scrollbar-thin scrollbar-thumb-gray-300 items-center overflow-x-scroll scroll-smooth md:max-w-6xl lg:max-w-7xl">
            {dates
              ?.filter((date) => isToday(date) || isFuture(date))
              .map((date) => {
                const today = isToday(date)
                return (
                  <div
                    className={cn(
                      "my-4 rounded-xl px-4 py-2 text-center text-black/60",
                      today && "bg-primary text-white"
                    )}
                  >
                    <p className="text-xs uppercase">{format(date, "EEE")}</p>
                    <p className="text-base font-semibold">
                      {format(date, "dd")}
                    </p>
                    <p className="text-xs">{format(date, "MMM")}</p>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="mx-auto flex items-center justify-end gap-4 py-4 md:max-w-6xl lg:max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-black/60">
            <div className="size-2 rounded-full bg-green-600"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-black/60">
            <div className="size-2 rounded-full bg-red-600"></div>
            <span>Booked</span>
          </div>
        </div>
        <Separator />
        <div className="mx-auto grid grid-cols-2 py-4 md:max-w-6xl lg:max-w-7xl">
          <div>
            <h3 className="text-xl font-medium">Select Session</h3>

            <div className="mt-2 flex items-center gap-2">
              {sessions?.map((item) => (
                <Button
                  variant={"outline"}
                  className={cn(
                    "flex h-auto cursor-pointer flex-col border-black/50 px-4 py-2 text-sm font-normal text-green-500 hover:bg-white hover:text-green-500",
                    !item?.isAvailable && "text-red-500 hover:text-red-500",
                    item?.label === selectedSession?.label &&
                      "border-2 border-green-500"
                  )}
                  disabled={!item?.isAvailable}
                  onClick={() => setSelectedSession(item)}
                >
                  <span>{item?.label}</span>
                  <span>{item?.time}</span>
                </Button>
              ))}
            </div>
            <div></div>
          </div>
          {selectedSession && <BookingForm selectedSession={selectedSession} />}
        </div>
      </div>
    </>
  )
}
