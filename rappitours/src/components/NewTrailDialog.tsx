import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { DateTimePicker24h } from "@/components/ui/DateTimePicker24h";
import {toast} from "sonner"; // Import the new DateTimePicker24h component

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
                    <NewTrail/>
                    <DialogFooter className="mt-4">
                        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toast("Uh oh!", {description: "This feature is not implemented yet :("})
                                }}
                        >
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

function NewTrail() {
    const [date, setDate] = React.useState<Date>();

    return (
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="trail-name">Trail Name</Label>
                    <Input id="trail-name" type="text" placeholder="Enter trail name" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="trail-from">From:</Label>
                    <Input id="trail-from" type="text" placeholder="Origin" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="trail-to">To:</Label>
                    <Input id="trail-to" type="text" placeholder="Destination" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="trail-date">Date & Time:</Label>
                    <DateTimePicker24h selectedDate={date} onDateChange={setDate} />
                </div>
            </div>
    );
}
