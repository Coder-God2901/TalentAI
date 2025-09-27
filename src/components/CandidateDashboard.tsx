import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar } from './ui/avatar';
import { 
  Brain, 
  Calendar, 
  TrendingUp, 
  Star, 
  Clock, 
  MapPin, 
  DollarSign,
  ChevronRight,
  Trophy,
  Target,
  Zap,
  BookOpen
} from 'lucide-react';

interface CandidateDashboardProps {
  onNavigate: (page: string, type?: 'candidate' | 'recruiter') => void;
}

export function CandidateDashboard({ onNavigate }: CandidateDashboardProps) {
  const profileCompletion = 78;
  const skillBadges = [
    { name: 'PyTorch Expert', level: 'Expert', color: 'bg-red-500' },
    { name: 'Computer Vision', level: 'Advanced', color: 'bg-blue-500' },
    { name: 'MLOps', level: 'Intermediate', color: 'bg-green-500' },
    { name: 'NLP', level: 'Advanced', color: 'bg-purple-500' },
  ];

  const recommendedJobs = [
    {
      title: 'Senior ML Engineer',
      company: 'DeepMind',
      location: 'London, UK',
      salary: '$180K - $220K',
      match: 95,
      tags: ['PyTorch', 'Computer Vision', 'Research'],
      posted: '2 hours ago'
    },
    {
      title: 'AI Research Scientist',
      company: 'OpenAI',
      location: 'San Francisco, CA',
      salary: '$200K - $280K',
      match: 92,
      tags: ['NLP', 'Transformers', 'Research'],
      posted: '5 hours ago'
    },
    {
      title: 'Computer Vision Engineer',
      company: 'Tesla',
      location: 'Austin, TX',
      salary: '$170K - $200K',
      match: 89,
      tags: ['PyTorch', 'Autonomous Driving', 'Edge AI'],
      posted: '1 day ago'
    }
  ];

  const upcomingInterviews = [
    {
      company: 'Anthropic',
      position: 'AI Safety Researcher',
      date: 'Today, 3:00 PM',
      type: 'Technical Interview',
      interviewer: 'Dr. Sarah Chen'
    },
    {
      company: 'Meta AI',
      position: 'ML Research Engineer',
      date: 'Tomorrow, 10:00 AM',
      type: 'System Design',
      interviewer: 'Alex Rodriguez'
    }
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white"
              onClick={() => onNavigate('landing')}
            >
              ← Back to Home
            </Button>
            <h1 className="text-2xl font-bold text-white">Candidate Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
              onClick={() => onNavigate('profile')}
            >
              View Profile
            </Button>
            <Avatar className="w-10 h-10">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                AK
              </div>
            </Avatar>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Quick Actions */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Profile Completion</h3>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  {profileCompletion}%
                </Badge>
              </div>
              
              <Progress value={profileCompletion} className="mb-4" />
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Basic Info</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Skills & Experience</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Portfolio Projects</span>
                  <span className="text-orange-400">2/3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Skill Challenges</span>
                  <span className="text-red-400">0/2</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                onClick={() => onNavigate('skill-challenge')}
              >
                <Target className="w-4 h-4 mr-2" />
                Complete Skill Challenge
              </Button>
            </Card>

            {/* Skill Badges */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                Skill Badges
              </h3>
              
              <div className="space-y-3">
                {skillBadges.map((badge, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${badge.color}`}></div>
                      <div>
                        <div className="text-white font-medium">{badge.name}</div>
                        <div className="text-gray-400 text-sm">{badge.level}</div>
                      </div>
                    </div>
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4 border-purple-500/50 text-purple-300 hover:bg-purple-500/20">
                <BookOpen className="w-4 h-4 mr-2" />
                Earn More Badges
              </Button>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Your Stats</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">47</div>
                  <div className="text-gray-400 text-sm">Profile Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">12</div>
                  <div className="text-gray-400 text-sm">Interview Requests</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">8.9</div>
                  <div className="text-gray-400 text-sm">Match Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">3</div>
                  <div className="text-gray-400 text-sm">Offers Pending</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Middle Column - Recommended Jobs */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Job Recommendations */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-400" />
                  AI-Recommended Jobs
                </h3>
                <Button 
                  variant="outline" 
                  className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20"
                  onClick={() => onNavigate('job-search')}
                >
                  View All Jobs
                </Button>
              </div>
              
              <div className="space-y-4">
                {recommendedJobs.map((job, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-all cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{job.title}</h4>
                        <p className="text-blue-400 font-medium">{job.company}</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {job.match}% Match
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-300 text-sm mb-3">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.posted}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="border-slate-600 text-gray-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                        Apply Now
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Interviews */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-400" />
                  Upcoming Interviews
                </h3>
                <Button variant="outline" className="border-green-500/50 text-green-300 hover:bg-green-500/20">
                  Schedule More
                </Button>
              </div>
              
              <div className="space-y-4">
                {upcomingInterviews.map((interview, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{interview.position}</h4>
                        <p className="text-blue-400">{interview.company}</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {interview.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-gray-300 text-sm mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {interview.date}
                      </div>
                      <div className="flex items-center">
                        Interviewer: {interview.interviewer}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                        onClick={() => onNavigate('interview')}
                      >
                        Join Interview
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-800">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
                Recent Activity
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white">Application approved for Senior ML Engineer at DeepMind</p>
                    <p className="text-gray-400 text-sm">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white">Skill challenge completed: Advanced PyTorch</p>
                    <p className="text-gray-400 text-sm">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white">Profile viewed by Tesla AI Team</p>
                    <p className="text-gray-400 text-sm">2 days ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}