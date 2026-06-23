import {
  BarChart3,
  Bot,
  CheckCircle2,
  Cpu,
  FileText,
  FolderKanban,
  Layers,
  LayoutDashboard,
  LucideIcon,
  MessageSquare,
  PieChart,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

export type FeatureItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export type FeatureModule = {
  title: string;
  summary: string;
  items: FeatureItem[];
};

export type StatItem = {
  value: string;
  label: string;
};

export type TrustBadge = {
  icon: LucideIcon;
  label: string;
  desc: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
};

export type WorkflowStep = {
  step: string;
  title: string;
  desc: string;
};

export const heroStats: StatItem[] = [
  { value: "10K+", label: "Active users" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "24/7", label: "Support" },
];

export const globalStats: StatItem[] = [
  { value: "50+", label: "Countries served" },
  { value: "1M+", label: "Messages per day" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "24/7", label: "Support coverage" },
];

export const trustBadges: TrustBadge[] = [
  { icon: ShieldCheck, label: "Meta verified", desc: "Built on the official WhatsApp Cloud API with compliant messaging workflows." },
  { icon: CheckCircle2, label: "Enterprise ready", desc: "Role-based access, multi-project workspaces, and team permissions." },
  { icon: Zap, label: "Real-time delivery", desc: "Live inbox updates, campaign tracking, and message status analytics." },
];

export const homeHighlights: FeatureItem[] = [
  {
    title: "Unified WhatsApp inbox",
    desc: "Manage customer chats in one workspace with filters, assignments, favourites, and rich media support.",
    icon: MessageSquare,
  },
  {
    title: "Campaign broadcasts",
    desc: "Send bulk WhatsApp campaigns to contacts, groups, Excel files, or Google Sheets with scheduling and analytics.",
    icon: Zap,
  },
  {
    title: "Template management",
    desc: "Create Marketing, Utility, and Authentication templates and track Meta approval status from your dashboard.",
    icon: FileText,
  },
  {
    title: "Audience & contacts",
    desc: "Import, segment, and organise contacts into groups for targeted outreach and reusable campaign audiences.",
    icon: Users,
  },
  {
    title: "Team & permissions",
    desc: "Invite agents, assign conversations, and control access with granular role-based permissions per project.",
    icon: ShieldCheck,
  },
  {
    title: "Developer API",
    desc: "Connect your apps and backends with secure project tokens and published API documentation.",
    icon: Cpu,
  },
];

export const featureModules: FeatureModule[] = [
  {
    title: "Inbox & customer support",
    summary: "Handle WhatsApp conversations and support cases without leaving the platform.",
    items: [
      {
        title: "Live Chat",
        desc: "Real-time WhatsApp inbox with unread badges, conversation filters, and encrypted connections. Support text, images, video, documents, location, and templates.",
        icon: MessageSquare,
      },
      {
        title: "Open Cases",
        desc: "Track customer issues as open or closed cases linked to phone numbers, with remarks and time-since-open visibility for your support queue.",
        icon: FolderKanban,
      },
      {
        title: "Chat assignment",
        desc: "Route conversations to the right agent and filter chats by assigned team members for organised handoffs.",
        icon: Users,
      },
    ],
  },
  {
    title: "Audience management",
    summary: "Build and maintain the contact lists that power your campaigns.",
    items: [
      {
        title: "Contact directory",
        desc: "Create, edit, search, and favourite contacts with firm details, email, website, and remarks. Import from Excel or Google Sheets.",
        icon: Users,
      },
      {
        title: "Contact groups",
        desc: "Organise contacts into reusable groups so you can target campaigns without re-selecting individuals each time.",
        icon: Layers,
      },
    ],
  },
  {
    title: "Messaging & campaigns",
    summary: "Design approved messages and launch broadcasts at scale.",
    items: [
      {
        title: "Template builder",
        desc: "Submit WhatsApp templates in Marketing, Utility, and Authentication categories. Monitor approved, pending, and rejected status.",
        icon: FileText,
      },
      {
        title: "Campaign manager",
        desc: "Build campaigns in two steps: choose your audience, then select a template. Schedule sends and track delivery, read, and failure rates.",
        icon: Zap,
      },
      {
        title: "Audience sources",
        desc: "Target contacts individually, via groups, Excel uploads, or Google Sheet links — including select-all for large lists.",
        icon: PieChart,
      },
    ],
  },
  {
    title: "Automation & intelligence",
    summary: "Reduce manual work with rules and insights.",
    items: [
      {
        title: "Auto reply rules",
        desc: "Respond automatically to incoming messages using keyword rules, match types, business hours, and priority-based follow-ups.",
        icon: Bot,
      },
      {
        title: "Flow builder",
        desc: "Visual conversation flows to guide customers through structured bot journeys (coming soon).",
        icon: Layers,
      },
      {
        title: "Dashboard analytics",
        desc: "View campaign performance, template approval rates, message volumes, and WhatsApp account health in one place.",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Projects, billing & API",
    summary: "Run multiple WhatsApp Business accounts with flexible billing and integrations.",
    items: [
      {
        title: "Multi-project workspaces",
        desc: "Create separate projects per WhatsApp Business number or brand. Switch instantly between owned and shared workspaces.",
        icon: LayoutDashboard,
      },
      {
        title: "Wallet & subscriptions",
        desc: "Prepaid wallet for messaging usage plus per-project monthly or yearly plans. Recharge online and download transaction receipts.",
        icon: Wallet,
      },
      {
        title: "Developer access",
        desc: "Generate project and user API tokens, enable integrations, and connect custom apps using the OneChatting API docs.",
        icon: Cpu,
      },
    ],
  },
];

export const campaignWorkflow: WorkflowStep[] = [
  {
    step: "01",
    title: "Connect your WhatsApp Business account",
    desc: "Create a project, complete embedded signup, and configure your business profile, display name, and messaging settings.",
  },
  {
    step: "02",
    title: "Build your audience & templates",
    desc: "Import contacts, create groups, and submit WhatsApp templates for Meta approval before you start broadcasting.",
  },
  {
    step: "03",
    title: "Launch campaigns or chat live",
    desc: "Schedule campaigns to thousands of contacts, assign agents to incoming chats, and monitor delivery analytics in real time.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Monthly",
    price: "500",
    period: "/month per project",
    features: [
      "Full platform access for one project",
      "Live chat, templates & campaigns",
      "Agent management & permissions",
      "Developer API access",
      "Email & chat support",
    ],
  },
  {
    name: "Yearly",
    price: "6000",
    period: "/year per project",
    popular: true,
    features: [
      "Everything in the monthly plan",
      "Save ₹12,000 compared to monthly",
      "Priority support",
      "Unlimited contacts & campaigns",
      "Transaction history & receipts",
    ],
  },
];

export const pricingNotes: string[] = [
  "Plans are billed per project (WhatsApp Business workspace).",
  "WhatsApp Cloud API message charges are billed separately based on Meta category rates.",
  "Wallet balance is used for messaging usage and can be recharged anytime from the portal.",
  "Add-on services and premium integrations may be available as paid extras.",
];

export const globalSections = [
  {
    title: "Official WhatsApp Cloud API",
    desc: "OneChatting is built on Meta's WhatsApp Business Platform so your messages follow approved templates, quality guidelines, and delivery standards.",
  },
  {
    title: "Built for growing teams",
    desc: "Whether you run a single brand or multiple WhatsApp numbers, project switching, agent permissions, and shared inboxes help teams scale support and marketing together.",
  },
  {
    title: "Secure & compliant",
    desc: "Encrypted chat connections, role-based access controls, and audit-friendly transaction records give businesses confidence as they expand customer communication.",
  },
];

// Flat list used where a simple grid is needed
export const features = featureModules.flatMap((m) => m.items);
