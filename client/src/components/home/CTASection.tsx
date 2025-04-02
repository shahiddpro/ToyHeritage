import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const newsletterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const CTASection = () => {
  const { toast } = useToast();
  
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  
  const onSubmit = (values: NewsletterFormValues) => {
    // In a real application, this would connect to an API
    console.log("Newsletter subscription:", values);
    
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    form.reset();
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-[#FFF8E1]">
      <div className="container mx-auto">
        <div className="bg-[#E64A19] rounded-xl overflow-hidden relative shadow-lg">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/banners/artisan-pattern.svg"
              alt="Artisan pattern background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Become a ToyCraft Partner</h2>
              <p className="text-white text-opacity-90 mb-6">
                Are you an artisan preserving traditional toy-making skills? Join our community to showcase your craft 
                to a global audience.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white text-opacity-90">Connect directly with buyers who value your craft</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white text-opacity-90">Get fair prices for your traditional handmade toys</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white text-opacity-90">Receive support for documentation and promotion</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="secondary" className="bg-white hover:bg-[#FFF8E1] text-[#E64A19]">
                  Apply as an Artisan
                </Button>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-medium text-xl mb-4 text-gray-900">Stay Connected</h3>
                <p className="text-gray-700 mb-6">
                  Subscribe to our newsletter for updates on new artisans, special collections, and the stories behind the toys.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#E64A19] hover:bg-[#BF360C] text-white"
                    >
                      Subscribe
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
