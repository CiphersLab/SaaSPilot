import CardWrapper from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

const ErrorCard = () => {
  const t = useTranslations("LoginFailedPage");
  return (
    <CardWrapper
      headerLabel={t("somethingWrong")}
      backButtonHref="/auth/login"
      backButtonLabel={t("backToLogin")}
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
