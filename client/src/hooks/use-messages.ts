import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: MessageInput) => {
      const validated = api.messages.create.input.parse(data);
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message");
      }
      
      return api.messages.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
