
import { sidebarItems } from "@/navigation";
import { MainLayout } from "@/components/MainLayout";
import ComponentShowcase from "@/components/ComponentShowcase";
import ComponentCard from "@/components/ComponentCard";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">Calendar</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          A date picker component with support for selecting a single date or a range.
        </p>

        <ComponentShowcase title="Calendar Examples">
          <ComponentCard
            title="Basic Calendar"
            description="A simple calendar component for date picking."
            code={`const [date, setDate] = useState<Date | undefined>(new Date())\n\n<Calendar\n  mode="single"\n  selected={date}\n  onSelect={setDate}\n  className="rounded-md border"\n/>`}
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </ComponentCard>

          <ComponentCard
            title="Date Range Calendar"
            description="Calendar with date range selection."
            code={`const [dateRange, setDateRange] = useState<DateRange>({\n  from: new Date(),\n  to: addDays(new Date(), 7),\n})\n\n<Calendar\n  mode="range"\n  selected={dateRange}\n  onSelect={setDateRange}\n  className="rounded-md border"\n/>`}
          >
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              className="rounded-md border"
            />
          </ComponentCard>
        </ComponentShowcase>
      </div>
    </MainLayout>
  );
};

export default CalendarPage;
