/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YT52wej5oRI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center border-b p-4">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="Chatbot Avatar" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <p className="text-sm font-medium">Chatbot Assistant</p>
          <p className="text-xs text-muted-foreground">Online</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
            <p>Hello! How can I assist you today?</p>
          </div>
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
            <p>Hi there! I'm having some trouble with my account. Can you help me?</p>
          </div>
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
            <p>Absolutely, I'd be happy to help. Can you please provide me with your account number?</p>
          </div>
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
            <p>Sure, it's 123456789.</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <form className="flex items-center w-full space-x-2">
          <Input id="message" placeholder="Type your message..." className="flex-1" autoComplete="off" />
          <Button type="submit" size="icon">
            <SendIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}