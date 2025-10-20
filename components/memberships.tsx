
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { CustomTitle } from './custom/title';
import { CustomBadge } from './custom/badge';
import MembershipCtaButton from './membership-cta-button';

const Pricing = () => {
  const plans = [
    {
      name: 'Level 1',
      price: '$99',
      period: '/month',
      description: 'Essential maintenance & reinforcement training',
      features: [
        { text: 'Weekly Group Class', checked: true },
        { text: 'Private Lessons', checked: false },
        { text: 'Boarding Nights', checked: false },
        { text: 'Treadmill Access', checked: false },
        { text: 'Pond Swims', checked: false },
        { text: 'Pro Shop Discounts', checked: false }
      ],
      popular: false
    },
    {
      name: 'Level 2',
      price: '$199',
      period: '/month',
      description: 'Comprehensive care & advanced training',
      features: [
        { text: 'Weekly Group Class', checked: true },
        { text: 'Private Lessons', checked: true },
        { text: 'Boarding Nights', checked: true },
        { text: 'Treadmill Access', checked: true },
  { text: 'Pond Swims', checked: false },
        { text: 'Pro Shop Discounts', checked: true }
      ],
      popular: false
    },
    {
      name: 'Level 3',
      price: '$299',
      period: '/month',
      description: 'Ultimate training maintenance & exclusive benefits',
      features: [
        { text: 'Weekly Group Class', checked: true },
        { text: 'Private Lessons', checked: true },
        { text: 'Boarding Nights', checked: true },
        { text: 'Treadmill Access', checked: true },
        { text: 'Pond Swims', checked: true },
        { text: 'Pro Shop Discounts', checked: true }
      ],
      popular: false
    }
  ];

  return (
    <section id="memberships" className="bg-brand-navy">
      <div className="content-shell flow">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center flow">
          <CustomBadge variant="red" className="text-white border-brand-red">
            Memberships
          </CustomBadge>

          <CustomTitle className="text-white">
            The Ultimate Dog Membership
          </CustomTitle>
          
          <p className="w-full max-w-4xl text-center text-lg text-white md:max-w-none md:text-xl">
            Tailored for dogs who&apos;ve completed Board & Train. Continue with structured care and ongoing training.
          </p>

          {/* Removed toggle section */}
          <div></div>
        </div>

        <div className="grid w-full grid-cols-1 gap-15 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index}>
              <Card className="h-full relative transition-all duration-300 group border-border hover:border-indigo-500">
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-end justify-center">
                    <div className="relative h-16 flex items-end">
                      <div className="flex items-end">
                        <span className="text-muted-foreground text-sm me-1">starting at </span>
                        <span className="text-5xl font-bold text-brand-red relative">
                          {plan.price}
                        </span>
                      </div>
                    </div>
                    <span className="text-muted-foreground ms-1 mb-1">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="flow">
                  <ul className="text-center flow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-15">
                        <Check className={`h-5 w-5 flex-shrink-0 ${feature.checked ? 'text-brand-red' : 'text-muted-foreground/30'}`} />
                        <span className="text-muted-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="transition-transform duration-200 group-hover:scale-[1.02] group-active:scale-[0.98] flow">
                    <MembershipCtaButton
                      planName={plan.name}
                      variant={plan.popular ? 'accent' : 'outlineAccent'}
                    />
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
