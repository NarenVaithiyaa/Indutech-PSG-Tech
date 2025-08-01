import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SpeakerModal = ({ speaker, isOpen, onClose }) => {
  if (!isOpen || !speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-xl shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-heading font-bold text-foreground">
            Speaker Details
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Speaker Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 overflow-hidden rounded-xl bg-muted">
                <Image
                  src={speaker?.image}
                  alt={`${speaker?.name} - ${speaker?.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Speaker Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                {speaker?.name}
              </h3>
              <p className="text-lg font-medium text-primary mb-2">
                {speaker?.title}
              </p>
              <p className="text-muted-foreground mb-4">
                {speaker?.institution}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {speaker?.expertise?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Session Info */}
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  Session Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">Date:</span>
                    <span className="text-foreground">{speaker?.sessionDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">Time:</span>
                    <span className="text-foreground">{speaker?.sessionTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">Venue:</span>
                    <span className="text-foreground">{speaker?.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="mt-6">
            <h4 className="font-heading font-semibold text-foreground mb-3">
              Biography
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {speaker?.biography}
            </p>
          </div>

          {/* Session Topic */}
          <div className="mt-6">
            <h4 className="font-heading font-semibold text-foreground mb-3">
              Session Topic
            </h4>
            <p className="text-foreground font-medium mb-2">
              {speaker?.sessionTopic}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {speaker?.sessionDescription}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button variant="default">
            Add to Schedule
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;