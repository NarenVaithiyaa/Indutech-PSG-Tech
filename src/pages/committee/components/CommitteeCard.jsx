import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CommitteeCard = ({ member }) => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-smooth card-hover border border-border">
      <div className="flex flex-col items-center text-center">
        {/* Member Photo */}
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
          <Image
            src={member?.photo}
            alt={`${member?.name} - ${member?.role}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Member Information */}
        <div className="space-y-2 mb-4">
          <h3 className="text-lg font-heading font-bold text-foreground">
            {member?.name}
          </h3>
          <p className="text-sm font-medium text-primary">
            {member?.title}
          </p>
          <p className="text-sm text-muted-foreground">
            {member?.institution}
          </p>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
            {member?.role}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-2 w-full">
          {member?.email && (
            <button
              onClick={() => handleEmailClick(member?.email)}
              className="flex items-center justify-center w-full px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-smooth focus-ring rounded-lg hover:bg-muted/50"
            >
              <Icon name="Mail" size={16} className="mr-2" />
              {member?.email}
            </button>
          )}
          {member?.phone && (
            <button
              onClick={() => handlePhoneClick(member?.phone)}
              className="flex items-center justify-center w-full px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-smooth focus-ring rounded-lg hover:bg-muted/50"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              {member?.phone}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommitteeCard;