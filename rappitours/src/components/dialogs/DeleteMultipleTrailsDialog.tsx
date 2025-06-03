import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {toast} from "sonner";

export default function DeleteMultipleTrailsDialog() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">
                    Delete Trails
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete Multiple Trails</AlertDialogTitle>
                    <AlertDialogDescription>
                        Select the trails you want to delete from the list below. This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                {/* TODO: Show the list of trails and also make them selectable. */}
                <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                    </AlertDialogCancel>
                    <Button type="submit" variant={"destructive"}
                            onClick={(e) => {
                                e.preventDefault();
                                toast("Uh oh!", {description: "This feature is not implemented yet :("})
                            }}
                            asChild
                    >
                        <AlertDialogAction>
                            Delete
                        </AlertDialogAction>
                    </Button>

                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}