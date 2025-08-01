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
    <div className="bg-card rounded-xl p-8 lg:p-10 shadow-subtle hover:shadow-elevated transition-smooth card-hover border border-border">
      <div className="flex flex-col items-center text-center">
        {/* Member Photo */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-6 border-4 border-primary/10">
          <Image
            src={member?.photo}
            alt={`${member?.name} - ${member?.role}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Member Information */}
        <div className="space-y-3 mb-6">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            {member?.name}
          </h3>
          <p className="text-lg sm:text-xl font-medium text-primary">
            {member?.title}
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {member?.institution}
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-lg font-medium">
            {member?.role}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 w-full">
          {member?.email && (
            <button
              onClick={() => handleEmailClick(member?.email)}
              className="flex items-center justify-center w-full px-4 py-3 text-lg text-muted-foreground hover:text-primary transition-smooth focus-ring rounded-lg hover:bg-muted/50"
            >
              <Icon name="Mail" size={20} className="mr-3" />
              {member?.email}
            </button>
          )}
          {member?.phone && (
            <button
              onClick={() => handlePhoneClick(member?.phone)}
              className="flex items-center justify-center w-full px-4 py-3 text-lg text-muted-foreground hover:text-primary transition-smooth focus-ring rounded-lg hover:bg-muted/50"
            >
              <Icon name="Phone" size={20} className="mr-3" />
              {member?.phone}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommitteeCard;