"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteImages } from "@/data/images";
import { Ornament } from "@/components/ui/Ornament";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const t = useTranslations("home");
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    const play = () => {
      video.play().catch(() => {
        /* autoplay may be blocked; poster remains */
      });
    };
    play();
  }, [reduceMotion]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[520px] overflow-hidden bg-navy sm:min-h-[640px]"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* Poster always underneath for LCP / reduced motion */}
        <Image
          src={siteImages.hero}
          alt=""
          fill
          priority
          className="img-grade object-cover object-center"
          sizes="100vw"
        />

        {!reduceMotion && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={siteImages.hero}
            aria-hidden
          >
            <source src={siteImages.heroVideoWebm} type="video/webm" />
            <source src={siteImages.heroVideoMp4} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-royal-fade" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(6,14,24,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(201,168,108,0.08)_0%,transparent_55%)]" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-16 text-center sm:px-6 sm:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease }}
          className="mb-8"
        >
          <Ornament light className="max-w-[8rem]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease }}
          className="font-display text-display-xl font-medium text-cream"
        >
          KBC
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-4 font-sans text-[11px] uppercase tracking-royal text-brass-light md:text-xs"
        >
          Yachting
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75, ease }}
          className="mt-8"
        >
          <Ornament light className="max-w-[5rem]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease }}
          className="mt-6 max-w-lg px-2 font-display text-xl font-normal italic leading-snug text-cream/90 sm:mt-8 sm:text-2xl md:text-3xl"
        >
          {t("heroTagline")}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-12 sm:gap-4"
      >
        <span className="text-[10px] uppercase tracking-royal text-brass-light/70">
          {t("scrollCue")}
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-brass/20">
          <span className="scroll-cue-line absolute inset-x-0 top-0 h-full bg-gradient-to-b from-brass-light via-brass to-transparent" />
        </span>
      </motion.div>
    </section>
  );
}
