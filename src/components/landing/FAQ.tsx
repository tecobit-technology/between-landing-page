 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 
 const faqItems = [
   {
     question: "What is this app used for?",
     answer:
       "This app helps users manage their activities efficiently, track progress, and access features securely from both mobile and web platforms.",
   },
   {
     question: "Is the app available on mobile devices?",
     answer:
       "Yes, the app is fully responsive and works smoothly on Android, iOS, tablets, and modern web browsers.",
   },
   {
     question: "How secure is my data?",
     answer:
       "We use industry-standard security practices including authentication, encrypted data storage, and secure APIs.",
   },
   {
     question: "Do I need to create an account to use the app?",
     answer:
       "Some features are available without login, but creating an account unlocks full functionality and personalized features.",
   },
   {
     question: "Who can I contact for support?",
     answer:
       "You can reach our support team directly through the in-app help section or via email.",
   },
 ];
 
 const FAQ = () => {
   return (
     <section className="section-padding bg-secondary/30">
       <div className="container-tight">
         <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
             Frequently Asked Questions
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Everything you need to know about Between
           </p>
         </div>
 
         <div className="max-w-3xl mx-auto">
           <Accordion type="single" collapsible className="w-full space-y-3">
             {faqItems.map((item, index) => (
               <AccordionItem
                 key={index}
                 value={`item-${index}`}
                 className="glass-card border-none px-6 data-[state=open]:shadow-lg transition-shadow duration-300"
               >
                 <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-5">
                   {item.question}
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                   {item.answer}
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
         </div>
       </div>
     </section>
   );
 };
 
 export default FAQ;