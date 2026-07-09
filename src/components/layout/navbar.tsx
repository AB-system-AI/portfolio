"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "@/components/ui/button";
import { MagneticLinkButton } from "@/components/ui/magnetic-button";
import { useLocale } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";
import { springSoft } from "@/lib/motion";

const menuId = "mobile-navigation-menu";

export function Navbar() {
  const pathname = usePathname();
  const { siteConfig, navLinks, ui } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => closeMenu());
    return () => cancelAnimationFrame(frame);
  }, [pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    focusable[0]?.focus();
  }, [isOpen]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        animate={{
          y: scrolled ? 0 : 0,
          boxShadow: scrolled
            ? "0 12px 40px -20px rgba(0,0,0,0.25)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={springSoft}
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-[background-color,border-color] duration-500 sm:px-6",
          scrolled
            ? "glass shadow-lg shadow-black/5 dark:shadow-black/20"
            : "border-transparent bg-transparent"
        )}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <motion.span
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={springSoft}
            className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background"
          >
            {siteConfig.name.charAt(0)}
          </motion.span>
          <span className="hidden sm:inline">{siteConfig.name.split(" ")[0]}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 -z-10 rounded-lg bg-muted"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:flex" />
          <ThemeToggle />
          <MagneticLinkButton
            href="/contact"
            size="sm"
            className="hidden rounded-full px-4 sm:inline-flex"
          >
            {ui.nav.letsTalk}
          </MagneticLinkButton>
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? ui.nav.closeMenu : ui.nav.openMenu}
            aria-expanded={isOpen}
            aria-controls={menuId}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label={ui.nav.mobileNav}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col p-4">
              <LanguageSwitcher className="mb-2 sm:hidden" />
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeMenu}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <MagneticLinkButton href="/contact" className="mt-4 rounded-full" onClick={closeMenu}>
                {ui.nav.letsTalk}
              </MagneticLinkButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
