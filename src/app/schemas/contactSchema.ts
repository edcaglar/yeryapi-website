// lib/contactSchema.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "İsim en az 2 karakter olmalı"),
  email: z.string().trim().email("Geçerli bir e-posta girin"),
  message: z.string().trim().min(10, "Mesaj en az 10 karakter olmalı"),
});

export type ContactPayload = z.infer<typeof contactSchema>;
