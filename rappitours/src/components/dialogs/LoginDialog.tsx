import { LogInIcon } from "lucide-react"
import { cn } from "@/lib/utils.ts"
import { Button } from "@/components/ui/button.tsx"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import {toast} from "sonner";

export function LoginDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"}
                        className={"border-0 bg-primary text-secondary hover:bg-primary hover:text-secondary dark:bg-primary dark:text-secondary dark:hover:bg-primary dark:hover:text-secondary"}>
                    <LogInIcon/>Login
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                    <DialogDescription>
                        Login with your account to manage your trails.
                    </DialogDescription>
                </DialogHeader>
                <LoginForm />
                <DialogFooter className="flex sm:justify-center">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export function LoginForm({
                              className,
                              ...props
                          }: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-3", className)} {...props}>
            <form>
                <div className="flex flex-col gap-3">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="account@rappitours.ch"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <a
                                onClick={() => {
                                    toast("Uh oh!", {description: "This feature is not implemented yet :("})
                                }}
                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline hover:cursor-pointer"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" type="password" required/>
                    </div>
                    <Button type="submit" className="w-full"                        
                            onClick={(event) => {
                                event.preventDefault()
                                toast("Uh oh!", {
                                        description: "This feature is not implemented yet :(",
                                    }
                                )
                    }}>
                        Login
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <a
                        onClick={() => {
                            toast("Uh oh!", {
                                    description: "This feature is not implemented yet :(",
                                }
                            )
                        }}
                        className="underline underline-offset-4 hover:cursor-pointer">
                        Sign up
                    </a>
                </div>
            </form>
        </div>
    )
}

