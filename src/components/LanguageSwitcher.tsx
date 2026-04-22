import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SUPPORTED_LANGUAGES } from "@/i18n";

interface LanguageSwitcherProps {
  variant?: "default" | "ghost";
  showLabel?: boolean;
}

const LanguageSwitcher = ({ variant = "ghost", showLabel = false }: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation();
  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language.split("-")[0]) ?? SUPPORTED_LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-body font-medium transition-colors ${
          variant === "ghost"
            ? "text-muted-foreground hover:text-primary hover:bg-muted/50"
            : "border border-border bg-background hover:bg-muted/50 text-foreground"
        }`}
        aria-label={t("common.selectLanguage")}
      >
        <Globe size={16} />
        <span className="text-base leading-none">{currentLang.flag}</span>
        {showLabel && <span className="hidden sm:inline">{currentLang.name}</span>}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px] z-[60]">
        {SUPPORTED_LANGUAGES.map((lang) => {
          const active = currentLang.code === lang.code;
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className="flex items-center justify-between gap-2 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="font-body">{lang.name}</span>
              </span>
              {active && <Check size={14} className="text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
