import { z } from "zod";
import { Equal, Expect } from "./helpers/type-utils";

/**
 * 🕵️‍♂️ Refactor this code below to reduce the duplication,
 * while also making sure the cases don't go red!
 */

const BaseSchema = z.object({
  id: z.string().uuid(),
});

const User = BaseSchema.extend({
  name: z.string(),
});

const Post = BaseSchema.merge(
  z.object({
    title: z.string(),
    body: z.string(),
  })
);

const Comment = z
  .object({
    text: z.string(),
  })
  .merge(BaseSchema);

type cases = [
  Expect<Equal<z.infer<typeof Comment>, { id: string; text: string }>>,
  Expect<Equal<z.infer<typeof Post>, { id: string; title: string; body: string }>>,
  Expect<Equal<z.infer<typeof User>, { id: string; name: string }>>
];
