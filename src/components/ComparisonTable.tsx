import { Check, X } from "lucide-react";
import { comparisonConfig } from "@/config/theme";

/**
 * Comparison Table - Us vs Others
 * 
 * SHOPIFY LIQUID CONVERSION:
 * - comparisonConfig.title → {{ section.settings.title }}
 * - comparisonConfig.features → {% for block in section.blocks where type == 'comparison_row' %}
 */

const ComparisonTable = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Shopify Liquid: {{ section.settings.title }} */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {comparisonConfig.title}
          </h2>
          {/* Shopify Liquid: {{ section.settings.subtitle }} */}
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {comparisonConfig.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-left">
              <span className="text-sm font-medium text-muted-foreground">Funkcja</span>
            </div>
            <div className="text-center">
              {/* Shopify Liquid: {{ section.settings.us_label }} */}
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {comparisonConfig.usLabel}
              </span>
            </div>
            <div className="text-center">
              {/* Shopify Liquid: {{ section.settings.others_label }} */}
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-semibold">
                {comparisonConfig.othersLabel}
              </span>
            </div>
          </div>

          {/* Table Rows */}
          {/* Shopify Liquid: {% for block in section.blocks where type == 'comparison_row' %} */}
          <div className="space-y-2">
            {comparisonConfig.features.map((feature, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 gap-4 items-center px-4 py-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                {/* Shopify Liquid: {{ block.settings.feature_name }} */}
                <div className="text-foreground font-medium">
                  {feature.name}
                </div>
                
                {/* Shopify Liquid: {% if block.settings.us_has_feature %} */}
                <div className="flex justify-center">
                  {feature.us ? (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  )}
                </div>
                {/* Shopify Liquid: {% endif %} */}
                
                {/* Shopify Liquid: {% if block.settings.others_has_feature %} */}
                <div className="flex justify-center">
                  {feature.others ? (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
                {/* Shopify Liquid: {% endif %} */}
              </div>
            ))}
          </div>
          {/* Shopify Liquid: {% endfor %} */}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
