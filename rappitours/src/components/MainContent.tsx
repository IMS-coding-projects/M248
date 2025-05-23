import {useCallback, useEffect, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import NewTrailDialog from "@/components/dialogs/NewTrailDialog";
import DeleteMultipleTrailsDialog from "@/components/dialogs/DeleteMultipleTrailsDialog";
import DeleteSingleTrailDialog from "@/components/dialogs/DeleteSingleTrailDialog";
import defaultTrails from "@/components/data/defaultTrails";
import EditTrailDialog from "@/components/dialogs/EditTrailDialog";
import {Badge} from "@/components/ui/badge.tsx";
import type {Trail} from "@/types/Trail";

export const TRAILS_KEY = "trails";

export default function MainContent() {
    const [trails, setTrails] = useState<Array<Trail>>([]);

    const reloadTrails = useCallback(() => {
        const storedTrails = localStorage.getItem(TRAILS_KEY);
        if (storedTrails) {
            setTrails(JSON.parse(storedTrails));
        } else {
            const defaults = defaultTrails();
            localStorage.setItem(TRAILS_KEY, JSON.stringify(defaults));
            setTrails(defaults);
        }
    }, []);

    useEffect(() => {
        reloadTrails();
    }, [reloadTrails]);

    return (
        <main id="main" className="container mx-auto px-2 sm:px-6 pt-6 min-h-screen flex flex-col items-center w-full">
            <div className="mb-4 flex justify-between items-center w-full">
                <NewTrailDialog reloadTrails={reloadTrails}/>
                <DeleteMultipleTrailsDialog/>
            </div>
            <div id="trails" className="w-full flex flex-col items-center">
                <Accordion type="multiple" className="w-full max-w-2xl">
                    {trails.length === 0 && (
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <h2 className="text-lg font-semibold">No trails available</h2>
                            <p className="text-sm text-gray-500">Please create a new trail.</p>
                        </div>
                    )}

                    {trails
                        .sort((a, b) => {
                            return a.name.localeCompare(b.name); // Sort by name, ascending
                        })
                        .sort((a, b) => {
                            return new Date(a.timedate).getTime() - new Date(b.timedate).getTime(); // Sort by date, ascending
                        })
                        .map((trail) => {
                            const isPast = new Date(trail.timedate) < new Date();
                            return (
                                <AccordionItem
                                    className={`${isPast ? "bg-muted-foreground/10 dark:bg-foreground/20" : ""}`}
                                    key={trail.id} value={trail.id}>
                                    <AccordionTrigger className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            {trail.name}
                                            <span
                                                className="text-muted-foreground text-xs font-normal">({trail.id})</span>
                                        </div>
                                        {isPast ? <Badge variant={"destructive"} className={"w-17"}>Expired</Badge> :
                                            <Badge className={"bg-green-600 text-white w-17"}>Active</Badge>}
                                        <span>
                                        {new Date(trail.timedate).toLocaleString()}
                                    </span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex justify-between">
                                            <div>
                                                <div>{trail.from} to {trail.to}</div>
                                                <div>Rain Probability: {Math.floor(Math.random() * 100)}% [not
                                                     implemented yet]
                                                </div>
                                                <div>Snow Probability: {Math.floor(Math.random() * 100)}% [not
                                                     implemented yet]
                                                </div>
                                                <div>Ice Probability: {Math.floor(Math.random() * 100)}% [not
                                                     implemented yet]
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="flex flex-col gap-2">
                                                    <div
                                                        className={`w-full h-[90px] ${isPast ? "bg-secondary text-white" : "bg-primary"} text-black rounded-lg shadow-md flex mb-5 items-center justify-center text-center`}>
                                                        Picture or Map
                                                    </div>
                                                    <div className="gap-2 flex">
                                                        <EditTrailDialog disabled={isPast} id={trail.id}
                                                                         reloadTrails={reloadTrails}/>
                                                        <DeleteSingleTrailDialog id={trail.id}
                                                                                 reloadTrails={reloadTrails}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                </Accordion>
            </div>
        </main>
    );
}