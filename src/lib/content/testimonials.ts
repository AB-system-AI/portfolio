import type { Testimonial } from "./types";

/**
 * Add client testimonials here when ready.
 */
export const testimonials: Testimonial[] = [];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((testimonial) => testimonial.featured);
}
