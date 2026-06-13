import { Search } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { cn } from "@/lib/utils"

type Props = React.InputHTMLAttributes<HTMLInputElement>

export default function SearchInput({
  placeholder = "Search...",
  className,
  ...props
}: Props) {
  return (
    <>
      <InputGroup className="w-full">
        <InputGroupInput
          {...props}
          className={cn(
            "rounded-none border-none outline-none focus:ring-0 focus-visible:ring-0",
            className
          )}
          placeholder={placeholder}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </>
  )
}
