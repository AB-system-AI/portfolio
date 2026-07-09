"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useTransition,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  type Locale,
} from "@/lib/i18n/config";
import { getUi, type UiDictionary } from "@/lib/i18n/ui";
import {
  getAbout,
  getAllExperience,
  getAllProjects,
  getAllServices,
  getAllSkills,
  getClientProjectsDisclaimer,
  getClientProjectsFootnote,
  getFeaturedProjects,
  getFocusAreas,
  getNavLinks,
  getPortfolioStats,
  getResumeAvailability,
  getResumeSummary,
  getServicesIntro,
  getSiteConfig,
  socialLinks,
} from "@/lib/i18n/localized-content";

interface LocaleContextValue {
  locale: Locale;
  ui: UiDictionary;
  siteConfig: ReturnType<typeof getSiteConfig>;
  navLinks: ReturnType<typeof getNavLinks>;
  focusAreas: ReturnType<typeof getFocusAreas>;
  about: ReturnType<typeof getAbout>;
  services: ReturnType<typeof getAllServices>;
  servicesIntro: string;
  skills: ReturnType<typeof getAllSkills>;
  experience: ReturnType<typeof getAllExperience>;
  projects: ReturnType<typeof getAllProjects>;
  featuredProjects: ReturnType<typeof getFeaturedProjects>;
  portfolioStats: ReturnType<typeof getPortfolioStats>;
  resumeAvailability: string;
  resumeSummary: string;
  clientProjectsDisclaimer: string;
  clientProjectsFootnote: string;
  socialLinks: typeof socialLinks;
  setLocale: (locale: Locale) => void;
  isRtl: boolean;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === locale) return;
      setLocaleCookie(nextLocale);
      startTransition(() => {
        router.refresh();
      });
    },
    [locale, router]
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      ui: getUi(locale),
      siteConfig: getSiteConfig(locale),
      navLinks: getNavLinks(locale),
      focusAreas: getFocusAreas(locale),
      about: getAbout(locale),
      services: getAllServices(locale),
      servicesIntro: getServicesIntro(locale),
      skills: getAllSkills(locale),
      experience: getAllExperience(locale),
      projects: getAllProjects(locale),
      featuredProjects: getFeaturedProjects(locale),
      portfolioStats: getPortfolioStats(locale),
      resumeAvailability: getResumeAvailability(locale),
      resumeSummary: getResumeSummary(locale),
      clientProjectsDisclaimer: getClientProjectsDisclaimer(locale),
      clientProjectsFootnote: getClientProjectsFootnote(locale),
      socialLinks,
      setLocale,
      isRtl: locale === "ar",
    }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

export function useOptionalLocale() {
  return useContext(LocaleContext);
}

export function getDefaultLocaleContext(): LocaleContextValue {
  const locale = DEFAULT_LOCALE;
  return {
    locale,
    ui: getUi(locale),
    siteConfig: getSiteConfig(locale),
    navLinks: getNavLinks(locale),
    focusAreas: getFocusAreas(locale),
    about: getAbout(locale),
    services: getAllServices(locale),
    servicesIntro: getServicesIntro(locale),
    skills: getAllSkills(locale),
    experience: getAllExperience(locale),
    projects: getAllProjects(locale),
    featuredProjects: getFeaturedProjects(locale),
    portfolioStats: getPortfolioStats(locale),
    resumeAvailability: getResumeAvailability(locale),
    resumeSummary: getResumeSummary(locale),
    clientProjectsDisclaimer: getClientProjectsDisclaimer(locale),
    clientProjectsFootnote: getClientProjectsFootnote(locale),
    socialLinks,
    setLocale: () => {},
    isRtl: false,
  };
}
