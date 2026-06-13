import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import google from "@/assets/google.webp"
import apple from "@/assets/apple.svg"
import { ChevronLeft, Mail } from "lucide-react"
import { useState } from "react"
import EmailForm from "../EmailForm"
import OtpForm from "../OtpForm"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type TScreen = "home" | "email" | "otp"

const MODAL_TITLES: Record<TScreen, string> = {
  home: "Get Started",
  email: "Login With Email",
  otp: "Verify your email address",
}

export default function SignInModal({ onOpenChange, open }: Props) {
  const [screen, setScreen] = useState<TScreen>("home")

  const handleScreen = (type: TScreen) => {
    setScreen(type)
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          {screen !== "home" && (
            <Button
              onClick={() => handleScreen("home")}
              variant={"ghost"}
              size={"icon"}
              className="h-fit w-fit"
            >
              <ChevronLeft />
            </Button>
          )}
          <DialogTitle className="m-0 p-0 text-center">
            {MODAL_TITLES[screen]}
          </DialogTitle>
        </DialogHeader>
        <div className="mx-auto my-10 min-h-72 w-full max-w-[80%] space-y-4">
          {screen === "home" && (
            <>
              <Button
                className="relative w-full cursor-pointer py-6"
                variant={"outline"}
              >
                <img
                  className="absolute left-4 size-6 object-contain"
                  src={google}
                  alt="Google Logo"
                />
                <span className="w-full text-center">Continue with Google</span>
              </Button>

              <Button
                className="relative w-full cursor-pointer py-6"
                variant={"outline"}
                onClick={() => handleScreen("email")}
              >
                <Mail className="absolute left-4 size-6" />
                <span className="w-full text-center">Continue with Email</span>
              </Button>

              <Button
                className="relative w-full cursor-pointer py-6"
                variant={"outline"}
              >
                <img
                  className="absolute left-4 size-6 object-contain"
                  src={apple}
                  alt="Apple Logo"
                />
                <span className="w-full text-center">Continue with Apple</span>
              </Button>
            </>
          )}
          {screen === "email" && (
            <EmailForm onSuccess={() => handleScreen("otp")} />
          )}
          {screen === "otp" && <OtpForm />}
        </div>
      </DialogContent>
    </Dialog>
  )
}
