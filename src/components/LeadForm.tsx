import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  phone: z.string().min(8, "Telefone é obrigatório"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem muito curta"),
});

export function LeadForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada. Entraremos em contato em breve.",
        variant: "default",
      });
      form.reset();
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md bg-card p-8 rounded-2xl border border-border shadow-2xl relative overflow-hidden" data-testid="lead-form">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
        <div className="space-y-2 mb-6">
          <h3 className="text-2xl font-display font-bold text-foreground">Garanta seu espaço</h3>
          <p className="text-muted-foreground text-sm">Fale com um especialista Roque Imóveis e saia na frente.</p>
        </div>
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input placeholder="João Silva" className="bg-background border-border/50 focus:border-primary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="(11) 99999-9999" className="bg-background border-border/50 focus:border-primary" {...field} />
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
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="joao@exemplo.com" className="bg-background border-border/50 focus:border-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Como podemos ajudar você a se preparar para 2026?" className="bg-background border-border/50 focus:border-primary min-h-[100px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-lg font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
          {isSubmitting ? (
            <span className="flex items-center gap-2">Enviando...</span>
          ) : (
            <span className="flex items-center gap-2">Enviar Mensagem <Send className="w-4 h-4" /></span>
          )}
        </Button>
      </form>
    </Form>
  );
}
