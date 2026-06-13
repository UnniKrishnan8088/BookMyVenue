import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { SquarePen } from "lucide-react"
import PersonalDetailsForm from "../PersonalDetailsForm"

type Props = {}

export default function Profile({}: Props) {
  return (
    <>
      <Card>
        <CardHeader className="flex items-center gap-4">
          <Avatar className="size-20 cursor-pointer">
            <AvatarImage
              className="h-full w-full"
              src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
              alt="avatar"
            />
            <AvatarFallback>UK</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-medium">Unni Krishnan</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl">Account Details</h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Field>
              <FieldGroup className="flex flex-row items-center justify-between">
                <FieldLabel htmlFor="phone" className="font-normal">
                  Mobile Number
                </FieldLabel>
                <Button size={"xs"} variant={"link"} className="text-xs">
                  <SquarePen className="size-3.5" />
                  Edit
                </Button>
              </FieldGroup>
              <Input className="p-5" id="phone" />
            </Field>
            <Field>
              <FieldGroup className="flex flex-row items-center justify-between">
                <FieldLabel htmlFor="email" className="font-normal">
                  Email Address
                </FieldLabel>
                <Button size={"xs"} variant={"link"} className="text-xs">
                  <SquarePen className="size-3.5" />
                  Edit
                </Button>
              </FieldGroup>
              <Input className="p-5" id="email" />
            </Field>
          </div>
          <PersonalDetailsForm />
        </CardContent>
      </Card>
    </>
  )
}
