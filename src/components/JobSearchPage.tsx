import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Clock, 
  Filter, 
  Bookmark,
  ChevronRight,
  Brain,
  Sparkles,
  TrendingUp
} from 'lucide-react';

interface JobSearchPageProps {
  onNavigate: (page: string, type?: 'candidate' | 'recruiter') => void;
}

export function JobSearchPage({ onNavigate }: JobSearchPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior ML Engineer',
      company: 'DeepMind',
      logo: 'DM',
      location: 'London, UK',
      salary: '$180K - $220K',
      type: 'Full-time',
      remote: true,
      match: 95,
      posted: '2 hours ago',
      skills: ['PyTorch', 'Computer Vision', 'Research'],
      description: 'Join our world-class research team working on cutting-edge AI systems that can help solve humanity\'s greatest challenges.',
      requirements: ['PhD in ML/AI or equivalent experience', '5+ years in deep learning', 'Published research preferred'],
      benefits: ['Competitive salary', 'Research time', 'Conference budget'],
      trending: true
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      company: 'OpenAI',
      logo: 'OAI',
      location: 'San Francisco, CA',
      salary: '$200K - $280K',
      type: 'Full-time',
      remote: false,
      match: 92,
      posted: '5 hours ago',
      skills: ['NLP', 'Transformers', 'Research'],
      description: 'Help us build safe and beneficial artificial general intelligence. Work on breakthrough research in large language models.',
      requirements: ['Strong background in NLP/LLMs', 'Experience with large-scale training', 'Research publications'],
      benefits: ['Equity package', 'Health benefits', 'Research freedom'],
      trending: true
    },
    {
      id: 3,
      title: 'Computer Vision Engineer',
      company: 'Tesla',
      logo: 'T',
      location: 'Austin, TX',
      salary: '$170K - $200K',
      type: 'Full-time',
      remote: false,
      match: 89,
      posted: '1 day ago',
      skills: ['PyTorch', 'Autonomous Driving', 'Edge AI'],
      description: 'Work on Tesla\'s Full Self-Driving computer vision stack. Build models that will be deployed in millions of vehicles.',
      requirements: ['Computer vision expertise', 'Real-time systems experience', '3+ years ML engineering'],
      benefits: ['Stock options', 'Healthcare', 'Product discounts'],
      trending: false
    },
    {
      id: 4,
      title: 'ML Platform Engineer',
      company: 'Anthropic',
      logo: 'A',
      location: 'San Francisco, CA',
      salary: '$160K - $190K',
      type: 'Full-time',
      remote: true,
      match: 87,
      posted: '2 days ago',
      skills: ['MLOps', 'Kubernetes', 'Distributed Systems'],
      description: 'Build and scale the infrastructure that powers Claude and our constitutional AI research.',
      requirements: ['MLOps/Platform experience', 'Cloud infrastructure expertise', 'Python/Go proficiency'],
      benefits: ['Remote work', 'Learning budget', 'Impact-driven mission'],
      trending: false
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'Spotify',
      logo: 'S',
      location: 'Stockholm, Sweden',
      salary: '$140K - $170K',
      type: 'Full-time',
      remote: true,
      match: 84,
      posted: '3 days ago',
      skills: ['Python', 'Statistics', 'Recommendation Systems'],
      description: 'Leverage data to enhance music discovery and personalization for 400M+ users worldwide.',
      requirements: ['Statistics/ML background', 'Recommendation systems exp.', 'Product sense'],
      benefits: ['Music perks', 'Flexible work', 'International exposure'],
      trending: false
    }
  ];

  const trendingSearches = ['PyTorch Jobs', 'Remote ML Engineer', 'AI Research', 'Computer Vision', 'NLP Engineer'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = selectedLocation === 'all' || 
      job.location.includes(selectedLocation) ||
      (selectedLocation === 'remote' && job.remote);
    
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white"
              onClick={() => onNavigate('candidate-dashboard')}
            >
              ← Back to Dashboard
            </Button>
            <h1 className="text-2xl font-bold text-white">AI Job Search</h1>
          </div>
          
          <Button 
            variant="outline" 
            className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20"
            onClick={() => onNavigate('profile')}
          >
            View My Profile
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Search & Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI-Powered Search */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-blue-400" />
                Smart Search
              </h3>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="AI Engineer, PyTorch, etc."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-800 border-slate-600 text-white"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      <SelectItem value="all">All locations</SelectItem>
                      <SelectItem value="San Francisco">San Francisco, CA</SelectItem>
                      <SelectItem value="New York">New York, NY</SelectItem>
                      <SelectItem value="London">London, UK</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-gray-400 block mb-2">Experience Level</label>
                  <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="All levels" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      <SelectItem value="all">All levels</SelectItem>
                      <SelectItem value="entry">Entry (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid (2-5 years)</SelectItem>
                      <SelectItem value="senior">Senior (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Enhanced Search
              </Button>
            </Card>

            {/* Quick Filters */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Filters</h3>
              
              <div className="space-y-3">
                {['Remote Only', 'High Match (90%+)', 'Recently Posted', 'High Salary', 'Research Focus'].map((filter, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-slate-600" />
                    <span className="text-gray-300 text-sm">{filter}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trending Searches */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Trending
              </h3>
              
              <div className="space-y-2">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(search.replace(' Jobs', ''))}
                    className="block w-full text-left text-gray-300 hover:text-white text-sm py-1 hover:bg-slate-800/50 rounded px-2 transition-all"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content - Job Listings */}
          <div className="lg:col-span-3 space-y-6">
            {/* Results Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {filteredJobs.length} AI Jobs Found
                </h2>
                <p className="text-gray-400">Sorted by relevance and AI match score</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-40 bg-slate-800 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="relevance">Best Match</SelectItem>
                    <SelectItem value="date">Most Recent</SelectItem>
                    <SelectItem value="salary">Highest Salary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6 hover:border-blue-500/30 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${
                        job.company === 'DeepMind' ? 'from-blue-500 to-blue-600' :
                        job.company === 'OpenAI' ? 'from-green-500 to-green-600' :
                        job.company === 'Tesla' ? 'from-red-500 to-red-600' :
                        job.company === 'Anthropic' ? 'from-purple-500 to-purple-600' :
                        'from-orange-500 to-orange-600'
                      } rounded-lg flex items-center justify-center text-white font-semibold`}>
                        {job.logo}
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                          {job.trending && (
                            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        <p className="text-blue-400 font-medium mb-2">{job.company}</p>
                        <div className="flex items-center space-x-4 text-gray-300 text-sm">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                            {job.remote && <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30 text-xs">Remote</Badge>}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.posted}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {job.match}% Match
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Key Requirements:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="border-slate-600 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20"
                      >
                        Learn More
                      </Button>
                      <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                        Quick Apply
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-gray-400">
                        Benefits: {job.benefits.join(' • ')}
                      </div>
                      <div className="text-gray-400">
                        {job.type}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center py-8">
              <Button 
                variant="outline" 
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
              >
                Load More Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}