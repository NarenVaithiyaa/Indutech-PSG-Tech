import React from 'react';
import CommitteeCard from './CommitteeCard';

const CommitteeSection = ({ title, description, members }) => {
  return (
    <div className="mb-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {/* Committee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {members?.map((member) => (
          <CommitteeCard key={member?.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default CommitteeSection;