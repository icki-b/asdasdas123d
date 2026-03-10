import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Czy lampka pasuje do każdego roweru?",
    answer: "Tak! Uchwyt jest uniwersalny i pasuje do kierownic o średnicy 22-35mm. Działa z rowerami MTB, szosowymi, crossowymi, miejskimi i elektrycznymi."
  },
  {
    question: "Jak jasna jest lampka? Czy 1000 lumenów to dużo?",
    answer: "1000 lumenów to bardzo mocne światło - oświetla drogę na dystansie do 200 metrów. Dla porównania, typowa lampka miejska ma 200-400lm. Nasza lampka sprawdzi się nawet na nieoświetlonych leśnych trasach."
  },
  {
    question: "Jak długo działa na jednym ładowaniu?",
    answer: "W trybie oszczędnym do 12 godzin, w trybie średnim ok. 5-6 godzin, a na pełnej mocy ok. 2-3 godziny. Wersja 5000mAh działa odpowiednio dłużej."
  },
  {
    question: "Czy mogę ładować telefon podczas jazdy?",
    answer: "Tak! Lampka posiada wyjście USB i działa jako powerbank. Możesz naładować telefon w trakcie jazdy, co jest szczególnie przydatne przy dłuższych trasach z nawigacją."
  },
  {
    question: "Czy jest wodoodporna?",
    answer: "Tak, lampka posiada klasę ochrony IPX5, co oznacza odporność na strugi wody z każdego kierunku. Możesz spokojnie jeździć w deszczu."
  },
  {
    question: "Co daje pilot zdalnego sterowania?",
    answer: "Pilot montowany na kierownicy pozwala zmieniać tryby świecenia bez zdejmowania rąk z kierownicy. Szczególnie wygodne podczas nocnych zjazdów i jazdy w grupie."
  },
  {
    question: "Jaki jest czas dostawy?",
    answer: "Zamówienia wysyłamy w ciągu 24 godzin. Standardowa dostawa to 3-7 dni roboczych. Oferujemy darmową wysyłkę przy każdym zamówieniu!"
  },
  {
    question: "Co jeśli produkt mi nie odpowiada?",
    answer: "Oferujemy 30-dniową gwarancję satysfakcji. Jeśli z jakiegokolwiek powodu produkt Ci nie odpowiada, zwrócimy Ci 100% pieniędzy - bez zadawania pytań."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Często Zadawane Pytania
          </h2>
          <p className="text-muted-foreground">
            Znajdź odpowiedzi na najczęściej zadawane pytania
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
