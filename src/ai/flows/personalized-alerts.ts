// src/ai/flows/personalized-alerts.ts
'use server';
/**
 * @fileOverview A flow for generating personalized environmental alerts based on user-defined locations and conditions.
 *
 * - generatePersonalizedAlert - A function that generates a personalized alert message.
 * - PersonalizedAlertInput - The input type for the generatePersonalizedAlert function.
 * - PersonalizedAlertOutput - The return type for the generatePersonalizedAlert function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedAlertInputSchema = z.object({
  location: z.string().describe('The location for which the alert is configured.'),
  condition: z.string().describe('The environmental condition to monitor (e.g., air quality index).'),
  threshold: z.number().describe('The threshold value for the condition that triggers the alert.'),
  currentValue: z.number().describe('The current value of the environmental condition.'),
});
export type PersonalizedAlertInput = z.infer<typeof PersonalizedAlertInputSchema>;

const PersonalizedAlertOutputSchema = z.object({
  alertMessage: z.string().describe('The personalized alert message to send to the user.'),
});
export type PersonalizedAlertOutput = z.infer<typeof PersonalizedAlertOutputSchema>;

export async function generatePersonalizedAlert(input: PersonalizedAlertInput): Promise<PersonalizedAlertOutput> {
  return personalizedAlertFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedAlertPrompt',
  input: {schema: PersonalizedAlertInputSchema},
  output: {schema: PersonalizedAlertOutputSchema},
  prompt: `You are an environmental alert system.

  Generate a personalized alert message for a user based on their specified location, condition, threshold, and the current value of the condition.

  Location: {{{location}}}
  Condition: {{{condition}}}
  Threshold: {{{threshold}}}
  Current Value: {{{currentValue}}}

  Alert Message:`,
});

const personalizedAlertFlow = ai.defineFlow(
  {
    name: 'personalizedAlertFlow',
    inputSchema: PersonalizedAlertInputSchema,
    outputSchema: PersonalizedAlertOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
