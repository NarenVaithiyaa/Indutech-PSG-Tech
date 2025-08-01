import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SpeakerCard = ({ speaker, onClick }) => {
  return (
    <div 
      className="bg-card rounded-xl shadow-subtle hover:shadow-elevated transition-smooth cursor-pointer card-hover p-6 border border-border"
      onClick={() => onClick(speaker)}
    >
      <div className="flex flex-col items-center text-center">
        {/* Speaker Image */}
        <div className="w-24 h-24 mb-4 overflow-hidden rounded-full bg-muted">
          <Image
            src={speaker?.image}
            alt={`${speaker?.name} - ${speaker?.title}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Speaker Name */}
        <h3 className="text-lg font-heading font-bold text-foreground mb-1">
          {speaker?.name}
        </h3>

        {/* Speaker Title */}
        <p className="text-sm font-medium text-primary mb-2">
          {speaker?.title}
        </p>

        {/* Institution */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {speaker?.institution}
        </p>

        {/* Expertise */}
        <div className="flex flex-wrap gap-1 mb-4">
          {speaker?.expertise?.slice(0, 2)?.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
          {speaker?.expertise?.length > 2 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{speaker?.expertise?.length - 2} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <div className="flex items-center text-primary text-sm font-medium">
          <span>View Details</span>
          <Icon name="ChevronRight" size={16} className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;