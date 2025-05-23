import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction
} from "@/components/ui/alert-dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import { toast } from "sonner";

export default function DeleteMultipleTrailsDialog() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive" >
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
                    <AlertDialogAction asChild>
                        <Button type="submit" className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toast("Uh oh!", {description: "This feature is not implemented yet :("})
                                }}
                        >
                            Delete
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}