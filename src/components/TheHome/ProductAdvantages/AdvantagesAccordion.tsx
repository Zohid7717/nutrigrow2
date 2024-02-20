'use client'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../styles/AdvantagesList.scss'


type AdvantagesAccordionProps = {
  advantagesList: {
    title: string;
    content: string;
  }[]
}

function AdvantagesAccordion({ advantagesList }: AdvantagesAccordionProps) {
  return (
    <Accordion allowZeroExpanded>
      {advantagesList.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>
              {item.title}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {item.content}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AdvantagesAccordion;