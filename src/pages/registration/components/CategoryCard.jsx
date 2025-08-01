import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CategoryCard = ({ category, isSelected, onSelect }) => {
  const {
    id,
    title,
    description,
    price,
    originalPrice,
    features,
    badge,
    popular,
    icon
  } = category;

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div 
      className={`relative bg-card rounded-lg border-2 transition-all duration-300 cursor-pointer ${
        isSelected 
          ? 'border-primary shadow-elevated scale-105' 
          : 'border-border hover:border-primary/50 hover:shadow-subtle'
      } ${popular ? 'ring-2 ring-accent ring-opacity-50' : ''}`}
      onClick={() => onSelect(id)}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-medium">
            Most Popular
          </div>
        </div>
      )}
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-success text-success-foreground w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold">
            {discount}% OFF
          </div>
        </div>
      )}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
            isSelected ? 'bg-primary' : 'bg-muted'
          }`}>
            <Icon 
              name={icon} 
              size={24} 
              color={isSelected ? 'white' : 'var(--color-muted-foreground)'} 
            />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-foreground">{title}</h3>
            {badge && (
              <span className="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium mt-1">
                {badge}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-heading font-bold text-foreground">
              ₹{price?.toLocaleString('en-IN')}
            </span>
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ₹{originalPrice?.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Early bird pricing valid until 15th January 2025
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {features?.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon 
                name="Check" 
                size={16} 
                color="var(--color-success)" 
                strokeWidth={2.5}
              />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Select Button */}
        <Button
          variant={isSelected ? "default" : "outline"}
          fullWidth
          iconName={isSelected ? "CheckCircle" : "Circle"}
          iconPosition="left"
        >
          {isSelected ? 'Selected' : 'Select Category'}
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;