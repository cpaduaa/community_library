import { z } from 'zod';

const userSchema = z.object({
    userName: z.string().min(3, { message: 'Username is required' }),
    email: z.string().email({ message: 'Invalid email format' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    avatar: z.string().url({ message: 'Invalid URL' }).optional(),
});

const userIdSchema = z.object({
    userId: z.coerce.number().int().positive({ message: 'user ID must be a positive integer' }),
});

export { userSchema, userIdSchema };
