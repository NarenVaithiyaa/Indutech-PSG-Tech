import React from 'react';
import Icon from '../../../components/AppIcon';

const SocialMediaLinks = () => {
  const socialPlatforms = [
    {
      id: 1,
      name: 'LinkedIn',
      handle: '@indutech2025',
      url: 'https://linkedin.com/company/indutech2025',
      description: 'Professional networking and conference updates',
      icon: 'Linkedin',
      followers: '2.5K+'
    },
    {
      id: 2,
      name: 'Twitter',
      handle: '@INDUTECH_2025',
      url: 'https://twitter.com/indutech_2025',
      description: 'Real-time conference news and announcements',
      icon: 'Twitter',
      followers: '1.8K+'
    },
    {
      id: 3,
      name: 'YouTube',
      handle: 'INDUTECH Conference',
      url: 'https://youtube.com/@indutech2025',
      description: 'Conference recordings and speaker previews',
      icon: 'Youtube',
      followers: '950+'
    },
    {
      id: 4,
      name: 'Facebook',
      handle: 'INDUTECH 2025',
      url: 'https://facebook.com/indutech2025',
      description: 'Community discussions and photo galleries',
      icon: 'Facebook',
      followers: '3.2K+'
    }
  ];

  const communicationChannels = [
    {
      id: 1,
      name: 'Conference Newsletter',
      description: 'Monthly updates, speaker announcements, and important deadlines',
      action: 'Subscribe',
      icon: 'Mail',
      frequency: 'Monthly'
    },
    {
      id: 2,
      name: 'WhatsApp Updates',
      description: 'Instant notifications for urgent announcements and conference week updates',
      action: 'Join Group',
      icon: 'MessageSquare',
      frequency: 'As needed'
    },
    {
      id: 3,
      name: 'Telegram Channel',
      description: 'Official announcements and document sharing for registered participants',
      action: 'Join Channel',
      icon: 'Send',
      frequency: 'Daily during conference'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Social Media Platforms */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
            <Icon name="Share2" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Stay Connected</h2>
            <p className="text-sm text-muted-foreground">Follow us on social media for latest updates</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialPlatforms?.map((platform) => (
            <a
              key={platform?.id}
              href={platform?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-lg p-4 border border-border shadow-subtle hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-lg group-hover:bg-primary group-hover:text-white transition-smooth">
                  <Icon name={platform?.icon} size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-sm">
                    {platform?.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {platform?.followers} followers
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {platform?.description}
              </p>
              <p className="text-xs text-primary font-medium">
                {platform?.handle}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Communication Channels */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-lg">
            <Icon name="Bell" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Communication Channels</h2>
            <p className="text-sm text-muted-foreground">Choose your preferred way to receive updates</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communicationChannels?.map((channel) => (
            <div key={channel?.id} className="bg-card rounded-lg p-6 border border-border shadow-subtle">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-lg">
                  <Icon name={channel?.icon} size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-sm">
                    {channel?.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {channel?.frequency}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {channel?.description}
              </p>
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-smooth focus-ring">
                {channel?.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Conference Hashtag */}
      <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Icon name="Hash" size={24} className="text-primary" />
          <h3 className="text-xl font-heading font-bold text-primary">
            #INDUTECH2025
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Use our official hashtag when sharing conference-related content on social media. 
          Join the conversation and connect with fellow participants!
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
            #IndustrialTextiles
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
            #TechnicalTextiles
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
            #TextileInnovation
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
            #Conference2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;