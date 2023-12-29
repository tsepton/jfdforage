import ContactIcon from "@/components/contact_icon";
import SectionCard from "@/components/section_card";
import Envelope from "@/icons/envelope";
import Phone from "@/icons/phone";
import QuestionMarkCircle from "@/icons/question_mark_circle";
import trans from "@/translations/translator";
import Section from "../components/section";
import { content, title } from "./shared_classes";

export default function ContactSection(props: any) {
  return (
    <Section id={props.id} className={props.className}>
      <SectionCard>
        <div className="flex flex-col md:flex-row md:flex-row gap-[2em] md:gap-[5em]">
          <div>
            <h1 className={title}>{trans.get("sections.contact.title")}</h1>
            <span className={content}>
              <p className="text-justify pb-5">
                {trans.get("sections.contact.content1")}
              </p>
              <p className="text-justify">
                {trans.get("sections.contact.content2")}
              </p>
            </span>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:pt-1">
            <span>
              <ContactIcon
                icon={<Phone />}
                text="+32.476.48.32.99"
                number
              ></ContactIcon>
              <hr className="my-2	dark:border-gray-700" />
              <ContactIcon
                icon={<Envelope />}
                text="info@jfdforage.be"
                mail
              ></ContactIcon>
            </span>
            <hr className="my-5 border-gray-600" />
            <a
              className="text-2xl font-light text-gray-900"
              href="http://maps.google.com/?q=Rue de la Ferme 7B, 5377 NOISEUX (Belgique)"
              target="_blank"
            >
              <p>Rue de la Ferme 7B,</p>
              <p>5377 NOISEUX (Belgique)</p>
            </a>
          </div>
        </div>
      </SectionCard>
    </Section>
  );
}
