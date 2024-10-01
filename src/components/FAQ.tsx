import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-7xl mt-16 px-4 lg:px-0">
      <h3 className="font-semibold text-2xl">FAQ</h3>

      <Accordion type="single" collapsible className="flex flex-col gap-2">
        <AccordionItem
          value="item-1"
          className="bg-[#FFFCE3] px-4 rounded-lg mt-4"
        >
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit
            amet non praesentium quibusdam, qui aliquid quam provident aliquam
            distinctio.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-[#FFFCE3] px-4 rounded-lg">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit
            amet non praesentium quibusdam, qui aliquid quam provident aliquam
            distinctio.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-[#FFFCE3] px-4 rounded-lg">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit
            amet non praesentium quibusdam, qui aliquid quam provident aliquam
            distinctio.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
