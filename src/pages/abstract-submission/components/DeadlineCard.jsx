import React from 'react';
import Icon from '../../../components/AppIcon';

const DeadlineCard = ({ deadline }) => {
  const isUrgent = new Date(deadline.date) - new Date() < 7 * 24 * 60 * 60 * 1000; // 7 days

  return (
    <div className={`p-6 rounded-lg border-2 transition-smooth ${
      isUrgent 
        ? 'border-warning bg-warning/5' :'border-primary bg-primary/5'
    }`}>
      <div className="flex items-center mb-3">
        <div className={`p-2 rounded-lg mr-3 ${
          isUrgent ? 'bg-warning text-warning-foreground' : 'bg-primary text-primary-foreground'
        }`}>
          <Icon name="Calendar" size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{deadline?.title}</h3>
          <p className="text-sm text-muted-foreground">{deadline?.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Clock" size={16} className="text-muted-foreground" />
          <span className={`font-medium ${
            isUrgent ? 'text-warning' : 'text-primary'
          }`}>
            {deadline?.date}
          </span>
        </div>
        {isUrgent && (
          <span className="px-2 py-1 bg-warning text-warning-foreground text-xs font-medium rounded-full">
            Urgent
          </span>
        )}
      </div>
    </div>
  );
};

export default DeadlineCard;