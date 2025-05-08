import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Page() {
  return (
    <div className="flex flex-col gap-y-4 rounded-lg">
      <div className="bg-background h-28 rounded-lg p-5">item</div>

      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="bg-background h-20 rounded-lg p-5">
          item
        </div>
      ))}
      <div className="bg-background rounded-lg p-5">
        {/* <Component/> */}

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
