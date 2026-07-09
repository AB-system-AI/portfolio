import type {
  FocusArea,
  NavLink,
  SiteConfig,
} from "@/lib/content/types";

export const siteConfigAr: Pick<
  SiteConfig,
  "title" | "tagline" | "location" | "availability" | "education"
> = {
  title: "مطور ويب Full-Stack | مطور أنظمة أعمال",
  tagline: "أبني تطبيقات ويب وأنظمة أعمال حديثة تساعد الشركات على العمل بكفاءة أكبر.",
  location: "الإسكندرية، مصر",
  availability: "متاح للعمل الحر والعمل عن بُعد",
  education: {
    institution: "كلية الحاسبات والذكاء الاصطناعي",
    expectedGraduation: 2029,
  },
};

export const navLinksAr: NavLink[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عني" },
  { href: "/projects", label: "المشاريع" },
  { href: "/services", label: "الخدمات" },
  { href: "/skills", label: "المهارات" },
  { href: "/resume", label: "السيرة الذاتية" },
  { href: "/contact", label: "تواصل" },
];

export const focusAreasAr: FocusArea[] = [
  { value: "Web Apps", label: "تطبيقات قابلة للتوسع" },
  { value: "Business", label: "تطوير أنظمة الأعمال" },
  { value: "Cloud", label: "النشر والاستضافة" },
  { value: "Remote", label: "عمل حر وعن بُعد" },
];
