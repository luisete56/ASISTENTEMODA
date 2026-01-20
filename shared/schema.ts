import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const clothingItems = pgTable("clothing_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nombre: text("nombre").notNull(),
  imagenReferencia: text("imagen_referencia"),
  embeddings: text("embeddings"),
  estado: text("estado").notNull().default("dentro"),
  imagenCuerpoUsuario: text("imagen_cuerpo_usuario"),
});

export const insertClothingItemSchema = createInsertSchema(clothingItems).omit({
  id: true,
});

export type InsertClothingItem = z.infer<typeof insertClothingItemSchema>;
export type ClothingItem = typeof clothingItems.$inferSelect;

export const chatMessageSchema = z.object({
  type: z.enum(["text", "image"]),
  content: z.string(),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;

export const chatRequestSchema = z.object({
  message: z.string().min(1, "El mensaje no puede estar vacío"),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;

export const wardrobeEventSchema = z.object({
  imagenCapturada: z.string().optional(),
  timestamp: z.string().optional(),
});

export type WardrobeEvent = z.infer<typeof wardrobeEventSchema>;

export const wardrobeEventResponseSchema = z.object({
  action: z.enum(["none", "prenda_detectada", "prenda_removida"]),
  prendaId: z.string().optional(),
});

export type WardrobeEventResponse = z.infer<typeof wardrobeEventResponseSchema>;
