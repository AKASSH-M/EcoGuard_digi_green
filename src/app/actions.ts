'use server';

import { generatePersonalizedAlert, PersonalizedAlertInput } from '@/ai/flows/personalized-alerts';
import { z } from 'zod';

const PersonalizedAlertInputSchema = z.object({
  location: z.string().min(1, "Location is required."),
  condition: z.string().min(1, "Condition is required."),
  threshold: z.coerce.number().min(0, "Threshold must be a positive number."),
  currentValue: z.coerce.number().min(0, "Current value must be a positive number."),
});

export async function handleGenerateAlert(values: PersonalizedAlertInput) {
  const validatedFields = PersonalizedAlertInputSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid input.', details: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const result = await generatePersonalizedAlert(validatedFields.data);
    return { success: true, message: result.alertMessage };
  } catch (error) {
    console.error('Error generating alert:', error);
    return { error: 'Failed to generate alert. Please try again.' };
  }
}
