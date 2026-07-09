"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { siteConfig } from "@/lib/data";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PremiumCard } from "@/components/animations/premium-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  showHeader?: boolean;
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="rounded-full"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? "Copied" : "Copy email"}
    </Button>
  );
}

export function ContactForm({ showHeader = true }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showHeader && (
          <SectionHeader
            label="Contact"
            title="Let's work together"
            description="Have a project in mind or just want to say hello? I'd love to hear from you."
          />
        )}

        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2">
            <PremiumCard className="h-full p-6 sm:p-8">
              <div>
                <h2 className="text-lg font-semibold">Get in touch</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {siteConfig.availability}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-border/60 bg-muted/10 p-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-4 transition-colors hover:text-foreground"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                      <Mail className="size-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium group-hover:underline">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>
                  <div className="mt-3">
                    <CopyEmailButton />
                  </div>
                </div>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-xl border border-border/60 p-4 transition-colors hover:border-border hover:bg-muted/20"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                    <Phone className="size-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">{siteConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border/60 p-4 transition-colors hover:border-border hover:bg-muted/20"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                    <WhatsAppIcon className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="text-sm font-medium">Message on WhatsApp</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-border/60 p-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                    <MapPin className="size-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </PremiumCard>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" delay={0.15}>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  role="status"
                  aria-live="polite"
                  className="premium-card flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.15 }}
                  >
                    <CheckCircle className="size-12 text-foreground" aria-hidden="true" />
                  </motion.div>
                  <h3 className="mt-4 text-xl font-semibold">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="premium-card space-y-6 rounded-2xl p-8"
                  noValidate
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        autoComplete="name"
                        placeholder="John Doe"
                        required
                        className="h-11 rounded-xl bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@example.com"
                        required
                        className="h-11 rounded-xl bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      autoComplete="off"
                      placeholder="Project inquiry"
                      required
                      className="h-11 rounded-xl bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="resize-none rounded-xl bg-background/50"
                    />
                  </div>
                  <MagneticButton
                    type="submit"
                    size="xl"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full rounded-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Send Message
                      </>
                    )}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
