import { motion } from "framer-motion";

export function SectionHeading({ index, title, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 max-w-3xl"
    >
      <div className="mb-4 flex items-center gap-3 text-xs font-mono font-semibold text-primary">
        <span className="rounded-full border border-white/20 bg-white/5 px-2 py-1 text-white">{index}</span>
        <span className="h-px w-10 bg-white/30" />
        <span className="uppercase tracking-[0.28em] text-muted-foreground">{kicker}</span>
      </div>
      <h2 className="font-display text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}

export function Section({ id, children }) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
