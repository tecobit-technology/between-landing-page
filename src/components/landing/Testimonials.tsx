 import { useState, useEffect, useCallback } from "react";
 import { Card, CardContent } from "@/components/ui/card";
 import { Avatar, AvatarFallback } from "@/components/ui/avatar";
 import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const testimonials = [
   {
     name: "Ramesh K.",
     role: "Daily User",
     quote:
       "This app has completely changed how I manage my daily tasks. The interface is clean, fast, and very easy to use.",
     story:
       "I started using the app casually, but now it has become a part of my daily routine. Everything is just one tap away.",
   },
   {
     name: "Anjali S.",
     role: "Business Owner",
     quote:
       "Reliable, smooth, and beautifully designed. I recommend this app to my entire team.",
     story:
       "We needed something simple yet powerful. This app helped us save time and stay organized without any training.",
   },
   {
     name: "David P.",
     role: "Student",
     quote:
       "Works perfectly on my phone and laptop. I love how responsive and fast it feels.",
     story:
       "Even on slow internet, the app performs well. The mobile experience is especially impressive.",
   },
 ];
 
 const Testimonials = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [touchStart, setTouchStart] = useState<number | null>(null);
   const [touchEnd, setTouchEnd] = useState<number | null>(null);
 
   const minSwipeDistance = 50;
 
   const nextSlide = useCallback(() => {
     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
   }, []);
 
   const prevSlide = useCallback(() => {
     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
   }, []);
 
   // Auto-advance carousel
   useEffect(() => {
     const timer = setInterval(nextSlide, 6000);
     return () => clearInterval(timer);
   }, [nextSlide]);
 
   // Touch handlers for swipe support
   const onTouchStart = (e: React.TouchEvent) => {
     setTouchEnd(null);
     setTouchStart(e.targetTouches[0].clientX);
   };
 
   const onTouchMove = (e: React.TouchEvent) => {
     setTouchEnd(e.targetTouches[0].clientX);
   };
 
   const onTouchEnd = () => {
     if (!touchStart || !touchEnd) return;
     const distance = touchStart - touchEnd;
     const isLeftSwipe = distance > minSwipeDistance;
     const isRightSwipe = distance < -minSwipeDistance;
 
     if (isLeftSwipe) nextSlide();
     if (isRightSwipe) prevSlide();
   };
 
   const getInitials = (name: string) => {
     return name
       .split(" ")
       .map((n) => n[0])
       .join("")
       .toUpperCase();
   };
 
   return (
     <section className="section-padding bg-background">
       <div className="container-tight">
         <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
             What Our Users Say
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Stories from couples who found their quiet space
           </p>
         </div>
 
         <div className="relative max-w-4xl mx-auto">
           {/* Navigation buttons - hidden on mobile, use swipe instead */}
           <Button
             variant="ghost"
             size="icon"
             onClick={prevSlide}
             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 hidden md:flex h-10 w-10 rounded-full bg-card shadow-md hover:bg-muted"
             aria-label="Previous testimonial"
           >
             <ChevronLeft className="h-5 w-5" />
           </Button>
 
           <Button
             variant="ghost"
             size="icon"
             onClick={nextSlide}
             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 hidden md:flex h-10 w-10 rounded-full bg-card shadow-md hover:bg-muted"
             aria-label="Next testimonial"
           >
             <ChevronRight className="h-5 w-5" />
           </Button>
 
           {/* Carousel container */}
           <div
             className="overflow-hidden"
             onTouchStart={onTouchStart}
             onTouchMove={onTouchMove}
             onTouchEnd={onTouchEnd}
           >
             <div
               className="flex transition-transform duration-500 ease-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
             >
               {testimonials.map((testimonial, index) => (
                 <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                   <Card className="glass-card border-none">
                     <CardContent className="p-6 md:p-10">
                       <Quote className="h-8 w-8 md:h-10 md:w-10 text-primary/40 mb-4 md:mb-6" />
                       
                       <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-4 md:mb-6">
                         "{testimonial.quote}"
                       </blockquote>
                       
                       <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                         {testimonial.story}
                       </p>
                       
                       <div className="flex items-center gap-4">
                         <Avatar className="h-12 w-12 md:h-14 md:w-14 bg-primary/10">
                           <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                             {getInitials(testimonial.name)}
                           </AvatarFallback>
                         </Avatar>
                         <div>
                           <p className="font-semibold text-foreground text-base md:text-lg">
                             {testimonial.name}
                           </p>
                           <p className="text-muted-foreground text-sm">
                             {testimonial.role}
                           </p>
                         </div>
                       </div>
                     </CardContent>
                   </Card>
                 </div>
               ))}
             </div>
           </div>
 
           {/* Dot indicators */}
           <div className="flex justify-center gap-2 mt-6 md:mt-8">
             {testimonials.map((_, index) => (
               <button
                 key={index}
                 onClick={() => setCurrentIndex(index)}
                 className={`h-2 rounded-full transition-all duration-300 ${
                   index === currentIndex
                     ? "w-8 bg-primary"
                     : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                 }`}
                 aria-label={`Go to testimonial ${index + 1}`}
               />
             ))}
           </div>
 
           {/* Swipe hint for mobile */}
           <p className="text-center text-muted-foreground/60 text-sm mt-4 md:hidden">
             Swipe to see more
           </p>
         </div>
       </div>
     </section>
   );
 };
 
 export default Testimonials;