import React from 'react';
import SpeakerCard from './SpeakerCard';

const SpeakerGrid = ({ speakers, onSpeakerClick, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 })?.map((_, index) => (
          <div key={index} className="bg-card rounded-xl p-6 border border-border animate-pulse">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-muted rounded-full mb-4"></div>
              <div className="h-4 bg-muted rounded w-32 mb-2"></div>
              <div className="h-3 bg-muted rounded w-24 mb-2"></div>
              <div className="h-3 bg-muted rounded w-40 mb-3"></div>
              <div className="flex gap-1 mb-4">
                <div className="h-6 bg-muted rounded-full w-16"></div>
                <div className="h-6 bg-muted rounded-full w-20"></div>
              </div>
              <div className="h-4 bg-muted rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (speakers?.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
          No speakers found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {speakers?.map((speaker) => (
        <SpeakerCard
          key={speaker?.id}
          speaker={speaker}
          onClick={onSpeakerClick}
        />
      ))}
    </div>
  );
};

export default SpeakerGrid;