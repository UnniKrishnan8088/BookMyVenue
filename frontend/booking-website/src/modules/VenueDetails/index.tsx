import Banner from "./components/Banner"

import AboutTheVenue from "./components/AboutTheVenue"
import VenueMap from "./components/VenueMap"
import ReviewList from "./components/ReviewList"
import ContactUs from "./components/ContactUs"
import OtherVenues from "./components/OtherVenues"

type Props = {}

export default function VenueDetails({}: Props) {
  return (
    <>
      <Banner />
      <div className="bg-white">
        <div className="app-container space-y-4 py-2 xl:space-y-6 xl:py-10">
          <AboutTheVenue />
          <ContactUs />
          <VenueMap />
          <ReviewList />
          <OtherVenues />
        </div>
      </div>
    </>
  )
}
