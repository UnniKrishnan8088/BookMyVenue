import { Map, MapControls } from "@/components/ui/map"
import { Card } from "@/components/ui/card"

type Props = {}

export default function VenueMap({}: Props) {
  return (
    <>
      <div>
        <Card className="h-80 overflow-hidden p-0">
          <Map
            styles={{
              dark: "https://tiles.openfreemap.org/styles/bright",
              light: "https://tiles.openfreemap.org/styles/bright",
            }}
            center={[-74.006, 40.7128]}
            zoom={11}
          >
            <MapControls />
          </Map>
        </Card>
      </div>
    </>
  )
}
