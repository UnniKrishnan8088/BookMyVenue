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

type Props = {
  selectedSession: any
}

const bookingFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^\+?[0-9\s\-().]{7,15}$/, {
      message: "Please enter a valid phone number.",
    }),
  capacity: z
    .string()
    .min(1, { message: "Capacity is required." })
    .refine((val) => !isNaN(Number(val)), {
      message: "Capacity must be a valid number.",
    })
    .refine((val) => Number.isInteger(Number(val)), {
      message: "Capacity must be a whole number.",
    })
    .refine((val) => Number(val) >= 1, {
      message: "Capacity must be at least 1.",
    })
    .refine((val) => Number(val) <= 1000, {
      message: "Capacity cannot exceed 1000.",
    }),
})

type BookingFormValues = z.infer<typeof bookingFormSchema>

export default function BookingForm({ selectedSession }: Props) {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      capacity: "",
    },
    mode: "onChange",
  })

  const {
    formState: { isValid, isSubmitting },
  } = form

  function onSubmit(values: BookingFormValues) {
    console.log(values)
    // capacity is still a string here; convert if needed:
    // const capacity = Number(values.capacity)
  }

  return (
    <div className="rounded-2xl border border-primary p-6">
      <h3 className="text-center font-semibold uppercase">
        Book for {selectedSession?.label}
      </h3>
      <p className="text-center text-xs text-black/60">
        {selectedSession?.time}
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8">
        <FieldGroup className="grid grid-cols-2">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="booking-name">Name</FieldLabel>
                <Input
                  {...field}
                  id="booking-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your full name"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="booking-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="booking-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="booking-phone">Phone</FieldLabel>
                <Input
                  {...field}
                  id="booking-phone"
                  type="tel"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your phone number"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="capacity"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="booking-capacity">Capacity</FieldLabel>
                <Input
                  {...field}
                  id="booking-capacity"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter capacity"
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
          size={"lg"}
        >
          Continue
        </Button>
      </form>
    </div>
  )
}
