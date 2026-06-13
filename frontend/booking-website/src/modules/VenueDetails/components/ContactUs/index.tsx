import { Globe, Mail, Phone } from "lucide-react"

type Props = {}

export default function ContactUs({}: Props) {
  return (
    <>
      <div>
        <h2 className="text-xl font-medium xl:text-2xl">Contact Us</h2>
        <ul className="mt-2">
          <li className="flex items-center gap-2 text-xs leading-loose md:text-sm">
            <Phone className="size-3.5 text-primary xl:size-4" />
            <span>+91 98765 43210</span>
          </li>
          <li className="flex items-center gap-2 text-xs leading-loose md:text-sm">
            <Mail className="size-3.5 text-primary xl:size-4" />
            <span>bookings@grandharmony.com</span>
          </li>
          <li className="flex items-center gap-2 text-xs leading-loose md:text-sm">
            <Globe className="size-3.5 text-primary xl:size-4" />
            <span>www.grandharmony.com</span>
          </li>
        </ul>
      </div>
    </>
  )
}
