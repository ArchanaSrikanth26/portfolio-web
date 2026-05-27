import { motion } from "framer-motion";

export function SectionHeading({ index, title, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 max-w-2xl"
    >
      <div className="mb-3 flex items-center gap-2.5 text-[10px] font-mono font-semibold text-primary/90 sm:text-xs">
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/95">{index}</span>
        <span className="h-px w-8 bg-white/18" />
        <span className="uppercase tracking-[0.28em] text-white/68">{kicker}</span>
      </div>
      <h2 className="font-display text-xl font-semibold tracking-tighter text-white sm:text-2xl lg:text-3xl">
        {title}
      </h2>
    </motion.div>
  );
}

export function Section({ id, children }) {
  return (
    <section id={id} className="relative py-18 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
