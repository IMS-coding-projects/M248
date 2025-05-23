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
import * as React from "react";
import type {Trail} from "@/types/Trail.ts";
import {TRAILS_KEY} from "@/components/MainContent.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {DateTimePicker24h} from "@/components/ui/DateTimePicker24h.tsx";

export default function EditTrailDialog({disabled, id, reloadTrails }: { disabled?: boolean, id: string, reloadTrails: () => void }) {

    const formRef = React.useRef<HTMLFormElement>(null);
    const storedTrails = localStorage.getItem(TRAILS_KEY);
    const trails = storedTrails ? JSON.parse(storedTrails) : [];
    const trail = trails.find((trail: Trail) => trail.id === id);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dateTime, setDateTime] = React.useState<Date | undefined>(new Date(trail.timedate));
    if (!trail) {
        toast.error("Trail not found.");
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = formRef.current;
        if (form) {
            const name = form["trail-name"].value?.trim();
            const from = form["trail-from"].value?.trim();
            const to = form["trail-to"].value?.trim();

            if (!name || !from || !to || !dateTime) {
                toast.error("All fields are required.");
                return;
            }
            if (dateTime < new Date()) {
                toast.error("Date & Time cannot be in the past.");
                return;
            }

            const updatedTrail: Trail = {
                name,
                from,
                to,
                timedate: dateTime.toISOString(),
                id: trail.id
            };
            const updatedTrails = trails.map((t: Trail) => t.id === id ? updatedTrail : t);
            localStorage.setItem(TRAILS_KEY, JSON.stringify(updatedTrails));

            toast.success("Trail saved successfully!");
            setDialogOpen(false);
            form.reset();
            setDateTime(undefined);
            reloadTrails();
        }
    };

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button variant={"default"} className={"w-9/20"} disabled={disabled}>
                    Edit Trail
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Trail</DialogTitle>
                    <DialogDescription>
                        Edit the new trail details below.
                    </DialogDescription>
                </DialogHeader>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <EditTrail setDateTime={setDateTime} dateTime={dateTime} trail={trail} />
                    <DialogFooter className="mt-4">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Save
                        </Button>

                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function EditTrail({ dateTime, setDateTime, trail }: { dateTime?: Date, setDateTime: (date: Date) => void, trail: Trail }) {
    return (
        <div className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="trail-name">Trail Name</Label>
                <Input id="trail-name" type="text" placeholder="Enter trail name" required defaultValue={trail?.name} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="trail-from">From:</Label>
                <Input id="trail-from" type="text" placeholder="Origin" required defaultValue={trail?.from} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="trail-to">To:</Label>
                <Input id="trail-to" type="text" placeholder="Destination" required defaultValue={trail?.to} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="trail-date">Date & Time:</Label>
                <DateTimePicker24h selectedDate={dateTime} onDateChange={setDateTime} />
            </div>
        </div>
    );
}