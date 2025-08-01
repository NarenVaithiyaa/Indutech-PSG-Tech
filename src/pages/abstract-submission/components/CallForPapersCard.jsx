import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CallForPapersCard = ({ topic, isExpanded, onToggle }) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden transition-smooth hover:shadow-elevated">
      <div 
        className="p-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {topic?.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {topic?.brief}
            </p>
          </div>
          <div className="ml-4">
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className="text-muted-foreground transition-transform duration-200"
            />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-border">
          <div className="pt-4 space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Research Themes:</h4>
              <ul className="space-y-1">
                {topic?.themes?.map((theme, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <Icon name="Dot" size={16} className="mt-1 mr-1 flex-shrink-0" />
                    {theme}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-2">Submission Guidelines:</h4>
              <ul className="space-y-1">
                {topic?.guidelines?.map((guideline, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <Icon name="Check" size={14} className="mt-1 mr-2 flex-shrink-0 text-success" />
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-2">Review Criteria:</h4>
              <p className="text-sm text-muted-foreground">
                {topic?.reviewCriteria}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallForPapersCard;