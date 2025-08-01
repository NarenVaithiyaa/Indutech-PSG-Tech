import React from 'react';
import CommitteeCard from './CommitteeCard';

const CommitteeSection = ({ title, description, members }) => {
  return (
    <div className="mb-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {/* Committee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members?.map((member) => (
          <CommitteeCard key={member?.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default CommitteeSection;