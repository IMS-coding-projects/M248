import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {NewTrailDialog} from "@/components/NewTrailDialogue.tsx";

function Main() {
    return (
        <>
            <div className="container mx-auto p-4 h-screen flex flex-col items-center w-full">
                <div className="mb-4 flex justify-between items-center w-full">
                    <NewTrailDialog/>

                    <button className="px-4 py-2 bg-destructive text-white rounded-lg shadow-md hover:bg-destructive/90">
                        Delete Trails
                    </button>
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem
                        value="item-1"
                        className="border rounded-lg shadow-md p-4 mb-4 bg-white dark:bg-secondary min-w-[400px] min-h-[10px] sm:min-w-[400px] sm:min-h-[0px]">
                        <AccordionTrigger className="font-bold text-lg">Section 1</AccordionTrigger>
                        <AccordionContent className="mt-2 text-sm text-muted-foreground">
                            Content for section 1.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border rounded-lg shadow-md p-4 mb-4 bg-white dark:bg-secondary">
                        <AccordionTrigger className="font-bold text-lg">Section 2</AccordionTrigger>
                        <AccordionContent className="mt-2 text-sm text-muted-foreground">
                            Content for section 2.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border rounded-lg shadow-md p-4 mb-4 bg-white dark:bg-secondary">
                        <AccordionTrigger className="font-bold text-lg">Section 3</AccordionTrigger>
                        <AccordionContent className="mt-2 text-sm text-muted-foreground">
                            Content for section 3.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}

export default Main;