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
import { Button } from "@/components/ui/button.tsx";
import {toast} from "sonner";
import { TRAILS_KEY } from "@/components/MainContent.tsx";

export default function DeleteSingleTrailDialog({ reloadTrails, id, ...props }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive" className={"px-10 bg-secondary hover:bg-secondary/90"}>
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
                    <AlertDialogAction onClick={async () => {await deleteById(id); reloadTrails()}} asChild>
                        <Button variant={"destructive"}>
                            Delete
                        </Button>
                    </AlertDialogAction>
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
    let storedTrails = localStorage.getItem(TRAILS_KEY);
    debugger
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