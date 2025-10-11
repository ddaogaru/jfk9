import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { CustomTitle } from "./custom/title";
import { CustomSubtitle } from "./custom/subtitle";
import { CustomBadge } from "./custom/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Level 1",
      price: "$99.00",
      period: "/month",
      description: "Essential maintenance and reinforcement training",
      features: [
        { text: "Weekly Group Class", checked: true },
        { text: "Private Lessons", checked: false },
        { text: "Boarding Nights", checked: false },
        { text: "Treadmill Access", checked: false },
        { text: "Pond Swims", checked: false },
        { text: "Pro Shop Discounts", checked: false },
      ],
      popular: false,
    },
    {
      name: "Level 2",
      price: "$199",
      period: "/month",
      description: "Comprehensive care and advanced training continuation",
      features: [
        { text: "Weekly Group Class", checked: true },
        { text: "Private Lessons", checked: true },
        { text: "Boarding Nights", checked: true },
        { text: "Treadmill Access", checked: true },
        { text: "Pond Swims", checked: true },
        { text: "Pro Shop Discounts", checked: true },
      ],
      popular: false,
    },
    {
      name: "Level 3",
      price: "$299",
      period: "/month",
      description: "Ultimate training maintenance and exclusive benefits",
      features: [
        { text: "Weekly Group Class", checked: true },
        { text: "Private Lessons", checked: true },
        { text: "Boarding Nights", checked: true },
        { text: "Treadmill Access", checked: true },
        { text: "Pond Swims", checked: true },
        { text: "Pro Shop Discounts", checked: true },
      ],
      popular: false,
    },
  ];

  return (
    <section id="memberships" className="bg-brand-navy w-full">
      <div className="container mx-auto px-15 py-15">
        {/* Header */}
        <div className="flex items-center justify-center flex-col text-center gap-15">
          <CustomBadge variant="red" className="text-white border-brand-red">
            Memberships
          </CustomBadge>

          <CustomTitle className="text-white">
            The Ultimate Dog Membership
          </CustomTitle>

          <CustomSubtitle className="mb-15 text-white">
            Tailored for dogs who&apos;ve completed Board & Train. Continue with
            structured care and ongoing training.
          </CustomSubtitle>

          {/* Removed toggle section */}
          <div className="mb-15"></div>
        </div>

        <div className="membership-grid grid grid-cols-1 md:grid-cols-3 gap-15 w-full mx-auto">
          {plans.map((plan) => (
            <div key={plan.name}>
              <Card className="membership-card h-full relative transition-all duration-300 group border-border hover:border-indigo-500">
                <CardHeader className="text-center py-[15px]">
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-15">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-end justify-center">
                    <div className="relative h-16 flex items-end">
                      <span className="text-5xl font-bold text-brand-red relative">
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-muted-foreground ms-1">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="">
                  <ul className="space-y-[15px]">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-center">
                        <Check
                          className={`h-5 w-5 mr-[15px] flex-shrink-0 ${feature.checked ? "text-brand-red" : "text-muted-foreground/30"}`}
                        />
                        <span className="text-muted-foreground">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-[15px] transition-transform duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]">
                    <Button
                      className="w-full cursor-pointer hover:bg-brand-red hover:text-white hover:border-brand-red px-15 py-15 text-xs md:text-sm lg:text-base"
                      size="lg"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
