import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {NewTrailDialog} from "@/components/NewTrailDialog.tsx";
import {Sun} from "lucide-react";
import {Cloudy} from "lucide-react";
import {Button} from "@/components/ui/button";
import {DeleteTrailDialog} from "@/components/DeleteTrailDialog.tsx";

export default function Main() {
    return (
        <>
            <div className="container mx-auto p-4 h-screen flex flex-col items-center w-full">
                <div className="mb-4 flex justify-between items-center w-full">
                    <NewTrailDialog/>
                    <Button variant="destructive" className="px-4 py-2 bg-destructive text-white rounded-lg shadow-md hover:bg-destructive/90">
                        Delete Trails
                    </Button>
                </div>
                <Accordion type="multiple" >
                    <AccordionItem value="item-1" className="border rounded-lg shadow-md p-3 pt-0 pb-0 pl-4 pr-4 mb-4 bg-white dark:bg-secondary min-w-[550px] min-h-[0px] sm:min-w-[550px] sm:min-h-[0px] hover:no-underline">
                        <AccordionTrigger className="hover:cursor-pointer font-bold  text-lg flex items-center">
                            <div className="flex flex-col ">
                                <span>Trail 1</span>
                                <span className="text-xs text-muted-foreground">(UUID-1234)</span>
                            </div>
                            <span className="text-sm text-muted-foreground ml-auto">2023-10-01</span>
                        </AccordionTrigger>
                        <AccordionContent className="mt-2 text-sm text-muted-foreground flex justify-between items-start">
                            <div className="flex flex-col space-y-2">
                                <div>[From] - [To]</div>
                                <div>Rain Probability: [Rpr]</div>
                                <div>Snow Probability: [Snpr]</div>
                                <div>Rain Probability: [Iceepr]</div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <Sun className="min-w-[75px] min-h-[75px]" />
                                <DeleteTrailDialog/>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border rounded-lg shadow-md p-3 pt-0 pb-0 pl-4 pr-4 mb-4 bg-white dark:bg-secondary min-w-[550px] min-h-[0px] sm:min-w-[550px] sm:min-h-[0px]">
                        <AccordionTrigger className="font-bold text-lg flex items-center">
                            <div className="flex flex-col">
                                <span>Trail 2</span>
                                <span className="text-xs text-muted-foreground">(UUID-1234)</span>
                            </div>
                            <span className="text-sm text-muted-foreground ml-auto">2025-02-05</span>
                        </AccordionTrigger>
                        <AccordionContent className="mt-2 text-sm text-muted-foreground flex justify-between items-start">
                            <div className="flex flex-col space-y-2">
                                <div>[From] - [To]</div>
                                <div>Rain Probability: [Rpr]</div>
                                <div>Snow Probability: [Snpr]</div>
                                <div>Rain Probability: [Iceepr]</div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <Cloudy className="min-w-[75px] min-h-[75px]" />
                                <DeleteTrailDialog/>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}

