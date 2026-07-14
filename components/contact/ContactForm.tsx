"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"name" | "email" | "message" | "interest", string>>;

export function ContactForm() {
  const t = useTranslations("contact");
  const searchParams = useSearchParams();
  const presetInterest = searchParams.get("interest") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(presetInterest);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const next: Errors = {};
    if (!name.trim()) next.name = t("formErrorRequired");
    if (!email.trim()) next.email = t("formErrorRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = t("formErrorEmail");
    if (!interest) next.interest = t("formErrorRequired");
    if (!message.trim()) next.message = t("formErrorRequired");
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
    }, 700);
  };

  if (success) {
    return (
      <div className="border border-brass/40 bg-cream-ivory px-5 py-14 text-center sm:px-8 sm:py-20">
        <div className="mx-auto mb-6 h-px w-12 bg-brass" />
        <p className="font-display text-2xl font-medium text-navy sm:text-3xl md:text-4xl">
          {t("formSuccessTitle")}
        </p>
        <p className="mt-5 text-sm text-navy/55 sm:text-base">{t("formSuccessText")}</p>
      </div>
    );
  }

  const field =
    "w-full border-b border-navy/15 bg-transparent py-3.5 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-brass";

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div>
        <label className="text-[11px] uppercase tracking-[0.16em] text-navy/50">
          {t("formName")}
        </label>
        <input
          className={cn(field, errors.name && "border-red-400")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name}</p>
        )}
      </div>
      <div>
        <label className="text-[11px] uppercase tracking-[0.16em] text-navy/50">
          {t("formEmail")}
        </label>
        <input
          type="email"
          className={cn(field, errors.email && "border-red-400")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>
      <div>
        <label className="text-[11px] uppercase tracking-[0.16em] text-navy/50">
          {t("formPhone")}
        </label>
        <input
          type="tel"
          className={field}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label className="text-[11px] uppercase tracking-[0.16em] text-navy/50">
          {t("formInterest")}
        </label>
        <select
          className={cn(field, "appearance-none", errors.interest && "border-red-400")}
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          <option value="">{t("formInterestPlaceholder")}</option>
          <option value="yachts">{t("interestYachts")}</option>
          <option value="villas">{t("interestVillas")}</option>
          <option value="rent">{t("interestRent")}</option>
          <option value="other">{t("interestOther")}</option>
        </select>
        {errors.interest && (
          <p className="mt-1 text-xs text-red-600">{errors.interest}</p>
        )}
      </div>
      <div>
        <label className="text-[11px] uppercase tracking-[0.16em] text-navy/50">
          {t("formMessage")}
        </label>
        <textarea
          rows={4}
          className={cn(field, "resize-none", errors.message && "border-red-400")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>
      <Button
        type="submit"
        variant="gold"
        disabled={sending}
        className="w-full sm:w-auto"
      >
        {sending ? t("formSending") : t("formSubmit")}
      </Button>
    </form>
  );
}
