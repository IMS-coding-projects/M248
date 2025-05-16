import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

export function DeleteTrailDialog() {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button variant="destructive" className="min-w-[125px] min-h-[16px] text-white rounded-lg shadow-md hover:bg-destructive/90">
                    Delete Trail
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="sm:max-w-md dark:bg-secondary">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the trail and its data.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}