import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Czy pasuje do każdego samochodu?",
    answer: "Tak! Nasze oświetlenie LED jest uniwersalne i pasuje do każdego typu samochodu - osobowego, SUV, kombi, czy dostawczego. Elastyczna taśma dopasowuje się do każdego kształtu bagażnika."
  },
  {
    question: "Jak działa automatyczne włączanie?",
    answer: "Oświetlenie posiada wbudowany czujnik ruchu/wibracji. Gdy otwierasz bagażnik, światło automatycznie się zapala. Po zamknięciu gaśnie po kilku sekundach, oszczędzając baterię."
  },
  {
    question: "Czy wymaga podłączenia do instalacji elektrycznej?",
    answer: "Nie! To całkowicie bezprzewodowe rozwiązanie. Zasilane jest wbudowaną baterią, którą można ładować przez USB. Jedno ładowanie wystarcza na wiele miesięcy użytkowania."
  },
  {
    question: "Czy jest wodoodporne?",
    answer: "Tak, nasze oświetlenie posiada klasę szczelności IP65, co oznacza pełną odporność na kurz i rozbryzgi wody. Możesz je bezpiecznie używać nawet w deszczowe dni."
  },
  {
    question: "Jak zamontować oświetlenie?",
    answer: "Montaż jest banalnie prosty i zajmuje około 5 minut. Wystarczy oczyścić powierzchnię, odkleić folię ochronną z taśmy samoprzylepnej 3M i przykleić pasek LED w wybranym miejscu. Nie wymaga żadnych narzędzi ani wiercenia."
  },
  {
    question: "Jaki jest czas dostawy?",
    answer: "Zamówienia wysyłamy w ciągu 24 godzin. Standardowa dostawa to 3-5 dni roboczych. Oferujemy również darmową wysyłkę przy każdym zamówieniu!"
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
