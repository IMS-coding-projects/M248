import * as React from "react";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";

interface DateTimePicker24hProps {
    selectedDate?: Date;
    onDateChange: (date: Date) => void;
}

export function DateTimePicker24h({selectedDate, onDateChange}: DateTimePicker24hProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const hours = Array.from({length: 24}, (_, i) => i);
    const handleDateSelect = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            onDateChange(selectedDate);
        }
    };

    const handleTimeChange = (type: "hour" | "minute", value: string) => {
        if (selectedDate) {
            const newDate = new Date(selectedDate);
            if (type === "hour") {
                newDate.setHours(parseInt(value));
            } else if (type === "minute") {
                newDate.setMinutes(parseInt(value));
            }
            onDateChange(newDate);
        }
    };

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4"/>
                    {selectedDate ? (
                        format(selectedDate, "MM/dd/yyyy HH:mm")
                    ) : (
                        <span>MM/DD/YYYY HH:mm</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <div className="sm:flex">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        initialFocus
                    />
                    <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                        <ScrollArea className="w-64 sm:w-auto">
                            <div className="flex sm:flex-col p-2">
                                {hours.map((hour) => (
                                    <Button
                                        key={hour}
                                        size="icon"
                                        variant={selectedDate && selectedDate.getHours() === hour ? "default" : "ghost"}
                                        className="sm:w-full shrink-0 aspect-square"
                                        onClick={() => handleTimeChange("hour", hour.toLocaleString())}
                                    >
                                        {hour}
                                    </Button>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" className="sm:hidden"/>
                        </ScrollArea>
                        <ScrollArea className="w-64 sm:w-auto">
                            <div className="flex sm:flex-col p-2">
                                {Array.from({length: 12}, (_, i) => i * 5).map((minute) => (
                                    <Button
                                        key={minute}
                                        size="icon"
                                        variant={selectedDate && selectedDate.getMinutes() === minute ? "default" : "ghost"}
                                        className="sm:w-full shrink-0 aspect-square"
                                        onClick={() => handleTimeChange("minute", minute.toString())}
                                    >
                                        {minute.toString().padStart(2, '0')}
                                    </Button>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" className="sm:hidden"/>
                        </ScrollArea>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
