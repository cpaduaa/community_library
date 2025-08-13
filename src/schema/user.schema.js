import { z } from 'zod';

const userSchema = z.object({
    userName: z.string().min(3, 'Username is required'),
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    avatar: z.string().url('Invalid URL').optional(),
})

export { userSchema };