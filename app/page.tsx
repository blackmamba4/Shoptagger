"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle,
  Circle,
  Gem,
  Package,
  Palette,
  Shield,
  ShoppingBag,
  Sparkles,
  Store,
  Tags,
  Truck
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const heroRules = [
  { condition: "IF Order Total > £100", tag: "VIP" },
  { condition: "IF Customer Orders ≥ 3", tag: "Repeat Buyer" },
  { condition: "IF SKU starts “PRE-”", tag: "Preorder" },
  { condition: "IF Email contains “.edu”", tag: "Student" }
];

const valueHighlights = [
  {
    title: "Manual tagging drains time",
    body: "Picking, packing, and support teams shouldn’t be chasing missing tags. ShopTagger watches every Shopify order so fulfillment, CRM, and marketing stay aligned."
  },
  {
    title: "Flow feels like overkill",
    body: "Flow is powerful but heavy for busy merchants and agencies. ShopTagger gives you the tag automations you need without spending hours mapping Flow logic."
  },
  {
    title: "Rules stay readable",
    body: "Ops, marketing, and agency partners see exactly what a rule does in plain language. Choose a condition, pick a tag, and keep scaling."
  }
];

const popularRules = [
  {
    title: "Spot high-value orders",
    condition: "Order total ≥ £100",
    tag: "VIP",
    note: "Flag for special packing or post-purchase outreach."
  },
  {
    title: "Celebrate loyal buyers",
    condition: "Customer placed 3+ orders",
    tag: "Repeat Buyer",
    note: "Power retention campaigns without exporting lists."
  },
  {
    title: "Handle preorder items",
    condition: "SKU starts with “PRE-”",
    tag: "Preorder",
    note: "Keep fulfilment organised when launch days hit."
  },
  {
    title: "Student offers",
    condition: "Email domain includes “.edu”",
    tag: "Student",
    note: "Trigger academic discounts automatically."
  },
  {
    title: "Gift orders",
    condition: "Contains gift wrap SKU",
    tag: "Gift Purchase",
    note: "Cue handwritten notes or gift messaging."
  },
  {
    title: "Wholesale customers",
    condition: "Customer tag contains B2B",
    tag: "Wholesale",
    note: "Make sure wholesale orders sync to the right tools."
  }
];

const howItWorks = [
  {
    title: "Install ShopTagger from Shopify",
    description:
      "Add the app from your Shopify admin and we sync orders, customers, and existing tags instantly."
  },
  {
    title: "Choose rule templates",
    description:
      "Start with pre-built rule packs for fashion, subscription, dropship, or wholesale—or write your own in plain language."
  },
  {
    title: "Let it run quietly",
    description:
      "ShopTagger watches every new order and customer, applying tags instantly while logging everything."
  }
];

const foundingPerks = [
  "Lifetime free access for founding stores",
  "Priority onboarding and direct product feedback",
  "First look at industry rule packs (fashion, subscription, B2B)"
];

const trustSignals = [
  {
    title: "Shopify-native",
    copy: "Install via the Shopify App Store (launch day) and manage everything inside your familiar Shopify admin."
  },
  {
    title: "Respects your workflow",
    copy: "Rule templates for DTC, dropship, fashion, subscription, and wholesale teams—pause or tweak in seconds."
  },
  {
    title: "Secure by default",
    copy: "Built on Shopify best practices with least-access permissions and audit logs from day one."
  }
];

type MerchantUseCase = {
  title: string;
  body: string;
  points: string[];
  icon: LucideIcon;
};

const merchantUseCases: MerchantUseCase[] = [
  {
    title: "DTC & dropship brands",
    body: "Launch drops, bundles, and promos without touching Flow. Tags stay aligned across fulfillment, email, and support.",
    points: [
      "Flag VIP spenders for loyalty perks",
      "Auto-tag backorders and preorder SKUs",
      "Route support tickets the moment orders land"
    ],
    icon: ShoppingBag
  },
  {
    title: "Fashion & apparel labels",
    body: "Keep style, size, and season tags tidy so your team knows exactly what to prioritize in the studio or warehouse.",
    points: [
      "Group collections by launch window or season",
      "Tag exchanges to alert operations instantly",
      "Surface high-risk orders for manual review"
    ],
    icon: Palette
  },
  {
    title: "Subscription & membership stores",
    body: "Differentiate first-time subscribers from churned win-backs and keep fulfillment flows accurate.",
    points: [
      "Mark renewals vs. first-time boxes automatically",
      "Tag churned members when orders resume",
      "Sync segments into Klaviyo or Loop in real time"
    ],
    icon: Package
  },
  {
    title: "Wholesale & B2B operations",
    body: "Hand off clean B2B data to ERP, 3PL, and finance teams without manual tagging or spreadsheets.",
    points: [
      "Separate wholesale vs. retail orders instantly",
      "Tag PO-required shipments for finance",
      "Alert reps when large orders or credit issues appear"
    ],
    icon: Truck
  }
];

const faqs = [
  {
    question: "Do I need to learn Shopify Flow?",
    answer:
      "No. ShopTagger handles the logic for you. Select a rule, choose a tag, and turn it on in seconds."
  },
  {
    question: "Will it tag my past orders?",
    answer:
      "Yes. Run any rule against historical orders or customers to clean up your data set before launch."
  },
  {
    question: "Can agencies or multi-store brands use this?",
    answer:
      "Absolutely. Manage multiple Shopify stores, clone rule packs, and keep each merchant’s tagging in sync from one dashboard."
  },
  {
    question: "Can I test or tweak a rule before going live?",
    answer:
      "Preview mode shows exactly which orders match. Edit conditions, switch tags, or pause automations instantly."
  },
  {
    question: "How do I join the early access?",
    answer:
      "Join the waitlist below. We’ll email the Shopify install link, onboarding call slots, and the rule packs tailored to your vertical."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const floating = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-4, 4, -4],
    rotate: [-0.5, 0.5, -0.5],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleWaitlistSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("submitting");
    setFormMessage(null);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        const payload = (await response.json()) as {
          success?: boolean;
          message?: string;
        };
        setFormStatus("success");
        setIsSuccess(true);
        setFormMessage(payload?.message ?? null);
        form.reset();
        return;
      }

      const errorPayload = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;
      setFormStatus("error");
      setFormMessage(
        errorPayload?.message ??
          "We couldn’t add you just yet. Please try again or message hey@shoptagger.com."
      );
      setIsSuccess(false);
      return;
    } catch (error) {
      console.error("Loops form submission failed", error);
      setFormStatus("error");
      setFormMessage(
        "Something went wrong. Please try again or email hey@shoptagger.com."
      );
      setIsSuccess(false);
    }
  };

  return (
    <main className="relative">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-10 pt-8 md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-100 shadow-glow-brand">
            <Tags className="h-5 w-5" />
          </div>
          <div>
            <span className="text-lg font-semibold text-white">ShopTagger</span>
            <p className="text-sm text-slate-400">Simple Shopify tagging</p>
          </div>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Badge variant="neutral">Founding users get lifetime access</Badge>
          <Button variant="outline" asChild>
            <a href="#waitlist">Join early access</a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-x-0 -top-48 mx-auto h-72 max-w-5xl rounded-[120px] bg-gradient-to-b from-brand-500/20 via-transparent to-transparent blur-[110px]"
            initial={{ opacity: 0.1, scale: 0.95 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
        </div>
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <Badge variant="default" className="flex items-center gap-2 text-sm">
                <Store className="h-3.5 w-3.5" />
                Shopify app · Simple rule-based tagging
              </Badge>
              <span className="hidden text-sm text-slate-400 md:inline">
                Install from Shopify App Store soon — no Flow setup needed
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-tight">
              Automatic Shopify tags you can understand at a glance.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Install once, choose a plain-language rule, and ShopTagger keeps every Shopify order and customer organised.
              No Flow complexity, no manual double checks—just clean data running quietly for every vertical.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button className="w-full sm:w-auto" size="lg" asChild>
                <a href="#waitlist">
                  Join early access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Gem className="h-4 w-4 text-brand-200" />
                  Founding users lock in lifetime access
                </span>
                <span className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-brand-200" />
                  Built for DTC, dropship, fashion, subscription, and wholesale teams
                </span>
              </div>
            </div>
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              className="relative mt-6 w-full max-w-lg rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-glow-brand backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Circle className="h-2.5 w-2.5 fill-brand-400 text-brand-400" />
                  Live rules
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  Updating in real-time
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {heroRules.map((rule) => (
                  <motion.div
                    key={rule.tag}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-950/50 px-4 py-3 backdrop-blur"
                  >
                    <div className="flex flex-col text-sm text-slate-300">
                      <span className="font-medium text-slate-100">{rule.condition}</span>
                      <span className="text-xs uppercase tracking-wide text-slate-400">
                        THEN apply tag
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs font-semibold uppercase tracking-wide">
                      {rule.tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-slate-400">
                {[
                  "Fashion",
                  "Subscription",
                  "Dropship",
                  "Wholesale",
                  "Retail"
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-slate-800/60 bg-slate-950/70 px-3 py-1 text-slate-300"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            id="waitlist"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            custom={1}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-10 top-24 hidden h-32 w-32 rounded-full bg-brand-400/20 blur-3xl md:block" />
            <Card className="relative z-10 border border-brand-500/20 bg-slate-900/70 shadow-glow-brand/40 backdrop-blur">
              <CardHeader className="space-y-4 pb-4">
                <Badge variant="default" className="w-max text-sm">
                  Shopify merchants · Founding waitlist
                </Badge>
                <CardTitle className="text-2xl text-white leading-snug">
                  Be first to install ShopTagger for Shopify
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Secure your invite, get the Shopify install link before launch, and access rule packs for fashion, subscription, dropship, and wholesale stores.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4 shadow-surface-soft">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-200">
                    What you get as a founding Shopify merchant
                  </p>
                  <div className="mt-3 space-y-2.5 text-sm text-slate-200">
                    <div className="flex items-center gap-2">
                      <Store className="h-4 w-4 text-brand-300" />
                      Early Shopify install link and setup call
                    </div>
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-brand-300" />
                      Rule packs for fashion, subscription, dropship, wholesale
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-brand-300" />
                      Works with Klaviyo, Gorgias, and Flow alongside ShopTagger
                    </div>
                  </div>
                </div>
                {isSuccess ? (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 px-5 py-4 text-sm text-brand-50 shadow-glow-brand/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-brand-100" />
                        <div>
                          <p className="font-semibold text-white">
                            You’re on the founding waitlist!
                          </p>
                          <p className="mt-2 text-xs text-brand-100/80">
                            We’ll email the Shopify install link, onboarding call slots, and rule
                            pack previews as we roll them out. Keep an eye on your inbox.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-3 text-xs text-slate-300">
                      Next steps we’ll send:
                      <ul className="mt-2 space-y-2 text-slate-300">
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 text-brand-300" />
                          Install instructions and API scopes
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 text-brand-300" />
                          Rule pack templates for your vertical
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 text-brand-300" />
                          Option to book a quick onboarding call
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-400">
                      {[
                        "DTC brands",
                        "Fashion labels",
                        "Subscription boxes",
                        "Wholesale teams"
                      ].map((label) => (
                        <Badge
                          key={label}
                          variant="neutral"
                          className="bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300"
                        >
                          {label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <form
                      onSubmit={handleWaitlistSubmit}
                      method="POST"
                      className="space-y-4"
                      noValidate
                    >
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="waitlist-email"
                          className="text-sm font-medium text-slate-200"
                        >
                          Email
                        </label>
                        <input
                          id="waitlist-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@store.com"
                          autoComplete="email"
                          className="w-full rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 ring-brand-500/40 transition focus:border-brand-300 focus:outline-none focus:ring-2"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="waitlist-store"
                          className="text-sm font-medium text-slate-200"
                        >
                          Shopify store (optional)
                        </label>
                        <input
                          id="waitlist-store"
                          name="store"
                          type="text"
                          placeholder="yourstore.myshopify.com"
                          className="w-full rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 ring-brand-500/40 transition focus:border-brand-300 focus:outline-none focus:ring-2"
                        />
                      </div>
                      <div className="hidden" aria-hidden="true">
                        <input
                          type="text"
                          name="source"
                          tabIndex={-1}
                          autoComplete="off"
                          defaultValue="landing-page"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? "Submitting..." : "Join early access"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                    <div className="space-y-3 text-xs text-slate-400">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-brand-300" />
                          No spam—just beta invites and merchant playbooks.
                        </div>
                        <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-slate-500">
                          <Shield className="h-3.5 w-3.5 text-brand-400" />
                          GDPR & Shopify data policies respected
                        </div>
                      </div>
                      {formMessage && (
                        <p
                          className={cn(
                            "text-sm",
                            formStatus === "error"
                              ? "text-red-300"
                              : "text-slate-400"
                          )}
                        >
                          {formMessage}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {[
                          "DTC brands",
                          "Fashion labels",
                          "Subscription boxes",
                          "Wholesale teams"
                        ].map((label) => (
                          <Badge
                            key={label}
                            variant="neutral"
                            className="bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300"
                          >
                            {label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div
          className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 max-w-3xl rounded-full bg-brand-500/20 blur-[120px]"
          initial={{ opacity: 0.1, scale: 0.9 }}
          whileInView={{ opacity: 0.35, scale: 1.1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white">
            Why merchants switch to ShopTagger
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Tagging should be invisible. We built ShopTagger so your store stays organised without dedicating staff hours to admin or learning Flow from scratch.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {valueHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative h-full"
              variants={fadeIn}
              custom={index / 8}
            >
              <Card className="h-full border-slate-800/70 bg-slate-900/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:border-brand-500/40 group-hover:shadow-glow-brand/70">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-white">
                    <Sparkles className="h-4 w-4 text-brand-300" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300/90">
                    {item.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-x-0 top-1/2 mx-auto h-72 max-w-5xl -translate-y-1/2 rounded-full bg-brand-500/15 blur-[140px]"
            initial={{ opacity: 0.05, scale: 0.8 }}
            whileInView={{ opacity: 0.25, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mx-auto text-sm">
            For every Shopify merchant
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Built for every kind of Shopify business
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Whether you run a DTC brand, dropship storefront, fashion studio, subscription box, or wholesale channel,
            ShopTagger keeps the right tags in place so your team sees what matters.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {merchantUseCases.map((usecase, index) => {
            const Icon = usecase.icon;
            return (
              <motion.div
                key={usecase.title}
                variants={fadeIn}
                custom={index / 8}
                className="h-full"
              >
                <Card className="flex h-full flex-col border-slate-800/70 bg-slate-900/55 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-brand-500/45 hover:shadow-glow-brand/60">
                  <CardHeader className="space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl text-white">{usecase.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {usecase.body}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto space-y-3 text-sm text-slate-300">
                    <ul className="space-y-3">
                      {usecase.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-brand-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        className="relative border-y border-slate-800/80 bg-slate-950/80 py-20 backdrop-blur"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute left-1/3 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
          <div className="absolute right-1/4 bottom-10 h-52 w-52 rounded-full bg-sky-500/10 blur-[110px]" />
        </motion.div>
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Popular rule templates</h2>
              <p className="mt-3 max-w-xl text-base text-slate-300">
                Launch faster with ready-made rules that merchants reach for every week.
                Tweak the condition, keep the tag, and you’re live.
              </p>
            </div>
            <Badge variant="outline" className="text-sm">
              Add your own in seconds
            </Badge>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularRules.map((rule, index) => (
              <motion.div key={rule.title} variants={fadeIn} custom={index / 10}>
              <Card className="flex h-full flex-col border-slate-800/70 bg-slate-900/55 px-5 py-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-brand-500/45 hover:shadow-glow-brand/60">
                  <div className="space-y-2.5">
                    <CardTitle className="text-lg text-white">{rule.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-300">
                      {rule.note}
                    </CardDescription>
                  </div>
                  <div className="mt-6 space-y-3 text-sm text-slate-300">
                    <div className="rounded-2xl border border-brand-500/35 bg-brand-500/10 px-4 py-3 text-brand-100">
                      <div className="text-xs uppercase tracking-wide text-brand-200">
                        Condition
                      </div>
                      <div className="mt-1 font-medium text-brand-100">
                        {rule.condition}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 px-4 py-3">
                      <div className="text-xs uppercase tracking-wide text-slate-400">
                        Tag applied
                      </div>
                      <div className="mt-1 text-base font-semibold text-white">
                        {rule.tag}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative mx-auto w-full max-w-6xl px-6 py-20 md:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <div className="absolute right-20 top-10 h-48 w-48 rounded-full bg-brand-500/15 blur-[100px]" />
          <div className="absolute left-32 bottom-6 h-44 w-44 rounded-full bg-emerald-400/10 blur-[90px]" />
        </motion.div>
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-white">How ShopTagger fits in</h2>
            <p className="text-base text-slate-300">
              Keep your workflows simple. ShopTagger wraps your tagging into three straightforward steps so anyone on the team can manage automations.
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <BadgeCheck className="h-4 w-4 text-brand-300" />
              Works with Klaviyo, Gorgias, Loop, and your existing Shopify apps.
            </div>
          </div>
          <div className="space-y-5">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex gap-5 rounded-3xl border border-slate-800/70 bg-slate-900/50 p-6 backdrop-blur"
                variants={fadeIn}
                custom={index / 8}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/20 text-lg font-semibold text-brand-100">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative overflow-hidden py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />
        <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-60 w-[480px] rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="border-brand-500/30 bg-slate-900/50 shadow-glow-brand/60">
              <CardHeader className="space-y-3">
                <Badge variant="default" className="w-max text-sm">
                  Founding user perks
                </Badge>
                <CardTitle className="text-2xl text-white">
                  Early partners help set the roadmap
                </CardTitle>
                <CardDescription>
                  We’re inviting a handful of merchants who care about tidy data to steer our launch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-sm text-slate-300">
                  {foundingPerks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 text-brand-300" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="grid gap-6 sm:grid-cols-2">
              {trustSignals.map((signal, index) => (
                <motion.div
                  key={signal.title}
                  className="rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6 shadow-surface-soft"
                  variants={fadeIn}
                  custom={index / 10}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200">
                    {index === 0 ? (
                      <Store className="h-5 w-5" />
                    ) : index === 1 ? (
                      <BadgeCheck className="h-5 w-5" />
                    ) : (
                      <Shield className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {signal.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{signal.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto w-full max-w-5xl px-6 py-20 md:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeIn}
      >
        <h2 className="text-center text-3xl font-semibold text-white">Questions, answered</h2>
        <p className="mt-4 text-center text-base text-slate-300">
          If there’s a workflow you want us to cover, let us know when you join the waitlist.
        </p>
        <Accordion type="single" collapsible className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>

      <motion.section
        className="relative overflow-hidden pb-24 pt-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/15 via-transparent to-slate-950" />
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 0.35 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute inset-x-0 top-8 mx-auto h-72 max-w-5xl rounded-[120px] bg-gradient-to-br from-brand-500/20 via-transparent to-transparent blur-[120px]" />
        </motion.div>
        <div className="relative mx-auto w-full max-w-4xl rounded-3xl border border-brand-500/30 bg-slate-950/70 px-6 py-12 text-center shadow-glow-brand/60 backdrop-blur md:px-16">
          <div className="mx-auto flex max-w-2xl flex-col gap-5">
            <Badge variant="outline" className="mx-auto text-sm">
              Ready when you are
            </Badge>
            <h2 className="text-3xl font-semibold text-white">
              Tag smarter, ship faster, and keep your data clean.
            </h2>
            <p className="text-base text-slate-300">
              Join the waitlist to lock in lifetime access, be first to install the Shopify app, and tell us which industry rule packs you want next.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="shadow-glow-brand">
                <a href="#waitlist">
                  Join early access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#waitlist" className="flex items-center gap-2 text-sm">
                  Hold my lifetime spot
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
