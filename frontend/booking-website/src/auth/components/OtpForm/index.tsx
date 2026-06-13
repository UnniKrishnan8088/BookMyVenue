import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import useCountdown from "@/core/hooks/useCountdown"

type Props = {}

const OTP_LENGTH = 6

const otpFormSchema = z.object({
  otp: z
    .string()
    .length(OTP_LENGTH, {
      message: `Code must be exactly ${OTP_LENGTH} digits.`,
    })
    .regex(/^\d+$/, { message: "Code must contain digits only." }),
})

type OtpFormValues = z.infer<typeof otpFormSchema>

export default function OtpForm({}: Props) {
  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: { otp: "" },
    mode: "onChange",
  })

  const { timeLeft, isFinished } = useCountdown()

  const {
    formState: { isValid, isSubmitting },
  } = form

  function onSubmit(values: OtpFormValues) {
    console.log(values)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="otp"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-title">OTP</FieldLabel>
              <FieldDescription>
                Enter OTP sent to{" "}
                <span className="font-bold">prasannaunni@gmail.com</span>
              </FieldDescription>
              <InputOTP {...field} maxLength={OTP_LENGTH}>
                <InputOTPGroup className="flex items-center gap-3 rounded-none">
                  {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                    <InputOTPSlot
                      className="rounded-sm border-2 border-black p-5"
                      index={index}
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <div className="mt-10">
        {isFinished ? (
          <p className="text-center text-sm">
            Didn't receive OTP ?{" "}
            <span className="font-bold text-primary">Resend OTP</span>
          </p>
        ) : (
          <p className="text-center text-sm">
            Expect OTP in <span className="font-bold">{timeLeft}</span> seconds
          </p>
        )}
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="mt-1 w-full"
        >
          Continue
        </Button>
      </div>
    </form>
  )
}
