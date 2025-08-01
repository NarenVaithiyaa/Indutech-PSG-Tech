import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ExpandableSection = ({ title, subtitle, content, isInitiallyExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-subtle overflow-hidden">
      <button
        onClick={toggleExpanded}
        className="w-full px-6 py-4 text-left hover:bg-muted transition-smooth focus-ring"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
          <div className="ml-4 flex-shrink-0">
            <Icon
              name={isExpanded ? "ChevronUp" : "ChevronDown"}
              size={20}
              className={`text-muted-foreground transition-transform duration-200 ${
                isExpanded ? 'rotate-0' : 'rotate-0'
              }`}
            />
          </div>
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded 
            ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-6 pt-2">
          <div className="prose prose-sm max-w-none text-foreground">
            {content?.split('\n')?.map((paragraph, index) => (
              <p key={index} className="mb-3 last:mb-0 text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableSection;