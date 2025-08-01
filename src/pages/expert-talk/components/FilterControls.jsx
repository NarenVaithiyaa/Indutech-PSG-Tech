import React from 'react';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const FilterControls = ({ 
  sortBy, 
  setSortBy, 
  filterBy, 
  setFilterBy, 
  searchTerm, 
  setSearchTerm 
}) => {
  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'institution', label: 'Institution' },
    { value: 'expertise', label: 'Expertise Area' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Speakers' },
    { value: 'textile-engineering', label: 'Textile Engineering' },
    { value: 'composite-materials', label: 'Composite Materials' },
    { value: 'technical-textiles', label: 'Technical Textiles' },
    { value: 'automotive', label: 'Automotive Applications' },
    { value: 'sustainability', label: 'Sustainability' },
    { value: 'innovation', label: 'Innovation & Research' }
  ];

  return (
    <div className="bg-card p-6 rounded-xl border border-border mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
        {/* Search */}
        <div className="flex-1 w-full lg:w-auto">
          <label className="block text-sm font-medium text-foreground mb-2">
            Search Speakers
          </label>
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
            />
            <input
              type="text"
              placeholder="Search by name, institution, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        </div>

        {/* Filter by Expertise */}
        <div className="w-full lg:w-64">
          <Select
            label="Filter by Expertise"
            options={filterOptions}
            value={filterBy}
            onChange={setFilterBy}
            placeholder="Select expertise area"
          />
        </div>

        {/* Sort by */}
        <div className="w-full lg:w-48">
          <Select
            label="Sort by"
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
            placeholder="Select sort option"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterControls;