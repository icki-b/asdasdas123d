import { features, featuresSection } from "@/config/product";

/**
 * Features Section - Template Component
 * 
 * SHOPIFY LIQUID CONVERSION:
 * - featuresSection.title → {{ section.settings.title }}
 * - featuresSection.description → {{ section.settings.description }}
 * - features → {% for block in section.blocks where type == 'feature' %}
 */

const Features = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        {/* Section Header */}
        {/* Shopify Liquid: {{ section.settings.title }}, {{ section.settings.description }} */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {featuresSection.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {featuresSection.description}
          </p>
        </div>

        {/* Features Grid */}
        {/* Shopify Liquid: {% for block in section.blocks where type == 'feature' %} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {/* Shopify Liquid: {% render 'icon', icon: block.settings.icon %} */}
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              {/* Shopify Liquid: {{ block.settings.title }} */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              {/* Shopify Liquid: {{ block.settings.description }} */}
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        {/* Shopify Liquid: {% endfor %} */}
      </div>
    </section>
  );
};

export default Features;
