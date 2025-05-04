import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from 'react'

export const Step2 = () => {
  return (
    <div className="flex flex-col gap-6">
<CardTitle className="text-[#09090B] text-6 font-semibold leading-8">
Please verify Your Email
</CardTitle>
<CardDescription>
We just sent an email to Test@gmail.com. Click the link in the email to verify your account.
</CardDescription>

<CardContent className="px-0 flex gap-4 flex-col">

</CardContent>
<Button   className="w-full">
        Resend email
        </Button>
</div>
 )
}
