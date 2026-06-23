import {
  BarChart3,
  Bot,
  CheckCircle2,
  Cpu,
  FileText,
  Layers,
  LayoutDashboard,
  MessageSquare,
  PieChart,
  QrCode,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type FeatureItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export type StatItem = {
  value: string;
  label: string;
};

export type TrustBadge = {
  icon: LucideIcon;
  label: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
};

export const features: FeatureItem[] = [
  { title: "Embedded Signup", desc: "Integrated system that makes customer onboarding effortless.", icon: LayoutDashboard },
  { title: "Integrated WhatsApp Chat", desc: "Seamlessly connect with customers through a unified chat interface.", icon: MessageSquare },
  { title: "QR Code", desc: "Quickly generate QR codes for your WhatsApp number with ease.", icon: QrCode },
  { title: "Chat-Bot", desc: "Engage customers 24/7 with intelligent automated responses.", icon: Bot },
  { title: "Manage Templates", desc: "Create and manage Meta templates directly inside our portal.", icon: FileText },
  { title: "Flow Maker", desc: "Build bot conversions easily with our advanced Flow Maker.", icon: Layers },
  { title: "API Integration", desc: "Enable smooth data sharing between your existing services.", icon: Cpu },
  { title: "Live Analysis", desc: "Get real-time status updates on your campaigns and messages.", icon: BarChart3 },
  { title: "Assign Agents", desc: "Route chats to team members with the granular Agents feature.", icon: Users },
  { title: "Campaigns", desc: "Effortlessly manage bulk marketing and broadcast schedules.", icon: Zap },
  { title: "AI Chatbot", desc: "Leverage advanced AI to automate complex customer interactions.", icon: Sparkles },
  { title: "Chat Report", desc: "Generate comprehensive analytics on all communications.", icon: PieChart },
];

export const heroStats: StatItem[] = [
  { value: "10K+", label: "Active Users" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

export const globalStats: StatItem[] = [
  { value: "50+", label: "Countries" },
  { value: "1M+", label: "Messages/Day" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export const trustBadges: TrustBadge[] = [
  { icon: ShieldCheck, label: "Meta Verified" },
  { icon: CheckCircle2, label: "Enterprise Ready" },
  { icon: Zap, label: "Lightning Fast" },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Monthly",
    price: "500",
    period: "/month",
    features: ["All Features Included", "Unlimited Contacts", "Unlimited Campaigns", "24/7 Support"],
  },
  {
    name: "Yearly",
    price: "6000",
    period: "/year",
    popular: true,
    features: ["All Features Included", "Save ₹12,000/year", "Unlimited Campaigns", "Priority Support"],
  },
];
