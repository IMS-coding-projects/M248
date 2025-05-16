import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function NewTrailDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-primary/90">
                    New Trail
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create New Trail</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to create a new trail.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className="grid gap-4">
                        <div>
                            <Label htmlFor="trail-name">Trail Name</Label>
                            <Input id="trail-name" type="text" placeholder="Enter trail name" required />
                        </div>
                        <div>
                            <Label htmlFor="trail-description">Description</Label>
                            <Textarea id="trail-description" placeholder="Enter trail description" required />
                        </div>
                    </div>
                    <DialogFooter className="mt-4">
                        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Create
                        </Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Cancel
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}