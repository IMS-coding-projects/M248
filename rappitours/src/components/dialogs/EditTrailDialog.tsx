import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {toast} from "sonner";

export default function EditTrailDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"default"} className={"w-9/20"}>
                    Edit Trail
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create New Trail</DialogTitle>
                    <DialogDescription>
                        Edit the new trail details below.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4">
                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={(e) => {
                                e.preventDefault();
                                toast("Uh oh!", {description: "This feature is not implemented yet :("})
                            }}
                    >
                        Save
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cancel
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}