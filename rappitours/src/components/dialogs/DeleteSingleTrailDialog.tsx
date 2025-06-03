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
} from "@/components/ui/alert-dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {toast} from "sonner";
import {TRAILS_KEY} from "@/components/MainContent.tsx";

export default function DeleteSingleTrailDialog({id, reloadTrails}: { id: string; reloadTrails: () => void }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive" className={"w-9/20"}>
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the trail and its data.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button variant="destructive" className={"px-7"} asChild>
                        <AlertDialogAction onClick={async () => {
                            await deleteById(id);
                            reloadTrails()
                        }}>
                            Delete
                        </AlertDialogAction>
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

async function deleteById(id: string) {
    if (!id) {
        toast.error("Trail ID is required!");
        return;
    }
    console.log(id)
    const storedTrails = localStorage.getItem(TRAILS_KEY);
    if (storedTrails) {

        const trails = JSON.parse(storedTrails);
        const trailsAfterDelete = [];
        for (let i = 0; i < trails.length; i++) {
            if (trails[i].id !== id) {
                trailsAfterDelete.push(trails[i]);
            }
        }
        localStorage.setItem(TRAILS_KEY, JSON.stringify(trailsAfterDelete));
        toast.success("Trail deleted successfully!");
        return;
    }
    toast.error("Trail not found!");
}