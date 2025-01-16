import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  const t = useTranslations("Auth");
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>🔐 {t('title')}</h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
