import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { InputCheckbox } from "../Icons"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "w-4 h-4 rounded-sm border-2 border-[#e6e6e6] flex justify-center items-center",
      className
    )}
    {...props}>
    <CheckboxPrimitive.Indicator className={cn("h-4 w-4")}>
      <InputCheckbox className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
