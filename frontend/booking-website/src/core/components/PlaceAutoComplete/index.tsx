import { usePlacesAutocomplete } from '@/core/hooks/usePlacesAutocomplete'

type Props = {}

export default function PlaceAutoComplete({}: Props) {
    const {data} = usePlacesAutocomplete("USA")

    console.log("data", data);
    
  return (
    <div>PlaceAutoComplete</div>
  )
}