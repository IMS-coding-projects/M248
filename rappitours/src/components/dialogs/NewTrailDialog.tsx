import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { DateTimePicker24h } from "@/components/ui/DateTimePicker24h.tsx";
import { TRAILS_KEY } from "@/components/MainContent.tsx";
import type { Trail } from "@/types/Trail";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

export default function NewTrailDialog({ reloadTrails } : { reloadTrails: () => void }) {
    const [dateTime, setDateTime] = React.useState<Date>();
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const formRef = React.useRef<HTMLFormElement>(null);

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

            const trail: Trail = {
                name,
                from,
                to,
                timedate: dateTime.toISOString(),
                id: uuidv4()
            };
            const storedTrails = localStorage.getItem(TRAILS_KEY);
            if (storedTrails) {
                const trails = JSON.parse(storedTrails);
                trails.push(trail);
                localStorage.setItem(TRAILS_KEY, JSON.stringify(trails));
            } else {
                localStorage.setItem(TRAILS_KEY, JSON.stringify([trail]));
            }
            toast.success("Trail created successfully!");
            form.reset();
            setDateTime(undefined);
            setDialogOpen(false);
            reloadTrails()
        }
    };

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
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
                <form ref={formRef} onSubmit={handleSubmit}>
                    <NewTrail dateTime={dateTime} setDateTime={setDateTime} />
                    <DialogFooter className="mt-4">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Create
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function NewTrail({ dateTime, setDateTime }: { dateTime?: Date, setDateTime: (date: Date) => void }) {
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
                <DateTimePicker24h selectedDate={dateTime} onDateChange={setDateTime} />
            </div>
        </div>
    );
}