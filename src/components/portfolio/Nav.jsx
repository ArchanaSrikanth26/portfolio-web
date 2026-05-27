import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { LinkedInBadge } from "@/components/ui/social-icons";

const links = [
  { href: "#about", label: "About me" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const drawerLinks = links;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 bg-background/90 text-foreground backdrop-blur-xl transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all bg-card/80 backdrop-blur-xl border border-white/10 shadow-card-soft ${scrolled ? "shadow-lg" : ""}`}>
          <a href="#top" className="font-display font-semibold tracking-tight text-base sm:text-lg text-foreground">
            <span className="text-primary">Archana Srikanth</span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="mailto:actarchanas@gmail.com"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition"
            >
              Hire me
            </a>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  onClick={() => setMobileMenuOpen(true)}
                  className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-background/60 text-foreground transition hover:bg-accent"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[340px] bg-background/95 text-foreground border-l border-white/10">
                <div className="pt-10">
                  <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                      About me
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      Full Stack Developer building clean, scalable products with React, Java, Spring Boot,
                      Flutter, and AI-powered workflows.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <a
                        href="#about"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition"
                      >
                        Read more
                      </a>
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-primary hover:bg-white/5 hover:text-primary"
                      >
                        <LinkedInBadge />
                      </a>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-2">
                    {drawerLinks.map((l) => (
                      <SheetClose asChild key={l.href}>
                        <a
                          href={l.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-accent transition"
                        >
                          {l.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-6">
                    <SheetClose asChild>
                      <a
                        href="mailto:actarchanas@gmail.com"
                        onClick={() => setMobileMenuOpen(false)}
                        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
                      >
                        Hire me
                      </a>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
