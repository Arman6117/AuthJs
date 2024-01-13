import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./Header";
import Social from "./Social";
import BackButton from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  showSocial?: boolean;
  backButtonLabel: string;
  backButtonHref: string;
}

const CardWrapper: FC<CardWrapperProps> = ({
  children,
  showSocial,
  backButtonLabel,
  backButtonHref,
  headerLabel,
}) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel}/>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
