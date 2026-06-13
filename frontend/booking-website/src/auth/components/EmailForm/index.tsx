import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

const emailFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
})

type EmailFormValues = z.infer<typeof emailFormSchema>

type Props = {
  onSuccess: () => void
}

export default function EmailForm({onSuccess}: Props) {
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  })

  const {
    formState: { isValid, isSubmitting },
  } = form

  function onSubmit(values: EmailFormValues) {
    console.log(values) // { email: "user@example.com" }
   onSuccess()
  }
  return (
    <div className="w-full">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">Email</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="mt-10 w-full"
        >
          Continue
        </Button>
      </form>
    </div>
  )
}
