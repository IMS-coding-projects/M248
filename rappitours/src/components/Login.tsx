import { LogInIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {toast} from "sonner";

export function Login() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"}
                        className={"border-0 bg-primary text-secondary hover:bg-primary hover:text-secondary dark:bg-primary dark:text-secondary dark:hover:bg-primary dark:hover:text-secondary hover:cursor-pointer"}
                        >
                    <LogInIcon/>Login
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                    <DialogDescription>
                        Continue with your account to manage your trails.
                    </DialogDescription>
                </DialogHeader>
                <LoginForm />
                <DialogFooter className="flex sm:justify-center">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" className={"hover:cursor-pointer"}>
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
    return (<form>
            <div className={cn("flex flex-col gap-3", className)} {...props}>
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
                    <Button type="submit" className="w-full hover:cursor-pointer">
                        Login
                    </Button>
                </div>
                <div className=" text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <a
                        onClick={() => {
                            toast("Uh oh!", {
                                description: "This feature is not implemented yet :(",
                                style: { color: "var(--primary)" }                            
                            }
                            )
                        }}
                        className="underline underline-offset-4">
                        Sign up
                    </a>
                </div>
            </div>
        </form>
    )
}

