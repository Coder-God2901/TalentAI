import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Avatar } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, 
  Filter, 
  Users, 
  TrendingUp, 
  Calendar, 
  Star, 
  MapPin, 
  Clock,
  Brain,
  Target,
  Zap,
  BarChart3,
  ChevronRight
} from 'lucide-react';

interface RecruiterDashboardProps {
  onNavigate: (page: string, type?: 'candidate' | 'recruiter') => void;
}

export function RecruiterDashboard({ onNavigate }: RecruiterDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const aiMatches = [
    {
      name: 'Alex Kumar',
      title: 'Senior ML Engineer',
      experience: '6 years',
      location: 'San Francisco, CA',
      match: 98,
      skills: ['PyTorch', 'Computer Vision', 'MLOps'],
      rating: 4.9,
      availability: 'Available now',
      lastActive: '2 hours ago',
      avatar: 'AK'
    },
    {
      name: 'Sarah Chen',
      title: 'AI Research Scientist',
      experience: '8 years',
      location: 'Cambridge, MA',
      match: 95,
      skills: ['NLP', 'Transformers', 'Research'],
      rating: 4.8,
      availability: '2 weeks notice',
      lastActive: '5 hours ago',
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Data Scientist',
      experience: '4 years',
      location: 'Austin, TX',
      match: 92,
      skills: ['Deep Learning', 'Python', 'Statistics'],
      rating: 4.7,
      availability: 'Available now',
      lastActive: '1 day ago',
      avatar: 'MR'
    }
  ];

  const recentInterviews = [
    {
      candidate: 'Emma Thompson',
      position: 'ML Engineer',
      date: 'Today, 2:00 PM',
      status: 'Scheduled',
      type: 'Technical Interview'
    },
    {
      candidate: 'David Park',
      position: 'Data Scientist',
      date: 'Tomorrow, 10:00 AM',
      status: 'Pending Confirmation',
      type: 'Behavioral Interview'
    },
    {
      candidate: 'Lisa Wang',
      position: 'AI Research Scientist',
      date: 'Jan 12, 3:00 PM',
      status: 'Completed',
      type: 'System Design'
    }
  ];

  const analytics = {
    totalCandidates: '2,847',
    avgMatchScore: '87%',
    interviewsScheduled: '45',
    successfulHires: '12'
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with light theme styling */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground hover-accent"
              onClick={() => onNavigate('landing')}
            >
              ← Back to Home
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Recruiter Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button className="btn-primary rounded-lg">
              Post New Job
            </Button>
            <Avatar className="w-10 h-10">
              <div className="w-full h-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                RC
              </div>
            </Avatar>
          </div>
        </header>

        {/* Analytics Overview with TalentAI colors */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border p-6 hover:shadow-lg hover:shadow-talentai-primary/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-talentai-primary text-sm font-medium">Total Candidates</p>
                <p className="text-3xl font-bold text-foreground">{analytics.totalCandidates}</p>
              </div>
              <Users className="w-8 h-8 text-talentai-primary" />
            </div>
            <p className="text-talentai-accent text-sm mt-2">+12% from last month</p>
          </Card>
          
          <Card className="bg-card border-border p-6 hover:shadow-lg hover:shadow-talentai-accent/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-talentai-accent text-sm font-medium">Avg Match Score</p>
                <p className="text-3xl font-bold text-foreground">{analytics.avgMatchScore}</p>
              </div>
              <Target className="w-8 h-8 text-talentai-accent" />
            </div>
            <p className="text-talentai-accent text-sm mt-2">+5% improvement</p>
          </Card>
          
          <Card className="bg-card border-border p-6 hover:shadow-lg hover:shadow-talentai-secondary/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-talentai-secondary text-sm font-medium">Interviews Scheduled</p>
                <p className="text-3xl font-bold text-foreground">{analytics.interviewsScheduled}</p>
              </div>
              <Calendar className="w-8 h-8 text-talentai-secondary" />
            </div>
            <p className="text-talentai-secondary text-sm mt-2">This week</p>
          </Card>
          
          <Card className="bg-card border-border p-6 hover:shadow-lg hover:shadow-talentai-accent/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-talentai-accent text-sm font-medium">Successful Hires</p>
                <p className="text-3xl font-bold text-foreground">{analytics.successfulHires}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-talentai-accent" />
            </div>
            <p className="text-talentai-accent text-sm mt-2">This quarter</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search & Filters - Light theme */}
          <div className="space-y-6">
            <Card className="bg-card border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-talentai-primary" />
                AI-Powered Search
              </h3>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="e.g., 'PyTorch expert with 5+ years experience'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-input border-border text-foreground"
                />
              </div>
              
              <Button className="w-full btn-primary rounded-lg">
                <Zap className="w-4 h-4 mr-2" />
                Smart Search
              </Button>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">Quick Filters:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-talentai-primary/50 text-talentai-primary hover:bg-talentai-primary/10 cursor-pointer hover-accent">
                    Remote OK
                  </Badge>
                  <Badge variant="outline" className="border-talentai-accent/50 text-talentai-accent hover:bg-talentai-accent/10 cursor-pointer hover-accent">
                    Available Now
                  </Badge>
                  <Badge variant="outline" className="border-talentai-secondary/50 text-talentai-secondary hover:bg-talentai-secondary/10 cursor-pointer hover-accent">
                    Senior Level
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Talent Pipeline */}
            <Card className="bg-card border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Talent Pipeline</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sourced</span>
                  <Badge className="bg-talentai-primary/20 text-talentai-primary border-talentai-primary/30">124</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Screening</span>
                  <Badge className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30">43</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Interviews</span>
                  <Badge className="bg-talentai-secondary/20 text-talentai-secondary border-talentai-secondary/30">18</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Final Round</span>
                  <Badge className="bg-orange-500/20 text-orange-600 border-orange-500/30">7</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Offers</span>
                  <Badge className="bg-talentai-accent/20 text-talentai-accent border-talentai-accent/30">3</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="matches" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted">
                <TabsTrigger value="matches">AI Matches</TabsTrigger>
                <TabsTrigger value="interviews">Interviews</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="matches" className="space-y-4">
                <Card className="bg-card border-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-foreground">Top AI Matches</h3>
                    <Badge className="bg-talentai-accent/20 text-talentai-accent border-talentai-accent/30">
                      98% Average Match
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    {aiMatches.map((candidate, index) => (
                      <div key={index} className="p-4 bg-muted/50 rounded-xl border border-border hover:border-talentai-accent/30 transition-all cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <Avatar className="w-12 h-12">
                              <div className="w-full h-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                                {candidate.avatar}
                              </div>
                            </Avatar>
                            <div>
                              <h4 className="text-lg font-semibold text-foreground">{candidate.name}</h4>
                              <p className="text-talentai-primary">{candidate.title}</p>
                              <div className="flex items-center space-x-4 text-muted-foreground text-sm mt-1">
                                <span>{candidate.experience}</span>
                                <span className="flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {candidate.location}
                                </span>
                                <span className="flex items-center">
                                  <Star className="w-3 h-3 mr-1 text-yellow-500" />
                                  {candidate.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-talentai-accent/20 text-talentai-accent border-talentai-accent/30">
                            {candidate.match}% Match
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {candidate.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="border-border text-muted-foreground">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="border-talentai-primary/50 text-talentai-primary hover:bg-talentai-primary/10 hover-accent">
                              View Profile
                            </Button>
                            <Button 
                              size="sm" 
                              className="btn-primary"
                              onClick={() => onNavigate('interview')}
                            >
                              Schedule Interview
                            </Button>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
                          <span>Availability: {candidate.availability}</span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            Active {candidate.lastActive}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="interviews">
                <Card className="bg-card border-border p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Interview Schedule</h3>
                  
                  <div className="space-y-4">
                    {recentInterviews.map((interview, index) => (
                      <div key={index} className="p-4 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-foreground">{interview.candidate}</h4>
                            <p className="text-talentai-primary">{interview.position}</p>
                          </div>
                          <Badge 
                            className={`${
                              interview.status === 'Scheduled' ? 'bg-talentai-accent/20 text-talentai-accent border-talentai-accent/30' :
                              interview.status === 'Pending Confirmation' ? 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30' :
                              'bg-muted text-muted-foreground border-border'
                            }`}
                          >
                            {interview.status}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between text-muted-foreground text-sm mb-3">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {interview.date}
                          </span>
                          <span>{interview.type}</span>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button 
                            size="sm" 
                            className="btn-accent"
                            onClick={() => onNavigate('interview')}
                          >
                            Join Interview
                          </Button>
                          <Button size="sm" variant="outline" className="border-border text-muted-foreground hover:bg-muted">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics">
                <Card className="bg-card border-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-foreground">Hiring Analytics</h3>
                    <BarChart3 className="w-6 h-6 text-talentai-secondary" />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-talentai-primary">24h</div>
                          <div className="text-muted-foreground text-sm">Avg. Response Time</div>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-talentai-accent">89%</div>
                          <div className="text-muted-foreground text-sm">Interview Show Rate</div>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-talentai-secondary">67%</div>
                          <div className="text-muted-foreground text-sm">Offer Acceptance Rate</div>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">3.2</div>
                          <div className="text-muted-foreground text-sm">Weeks to Hire</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Top Skills in Demand</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">PyTorch</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-32 h-2 bg-muted rounded-full">
                              <div className="w-4/5 h-full bg-gradient-primary rounded-full"></div>
                            </div>
                            <span className="text-talentai-primary text-sm">80%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Computer Vision</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-32 h-2 bg-muted rounded-full">
                              <div className="w-3/5 h-full bg-talentai-accent rounded-full"></div>
                            </div>
                            <span className="text-talentai-accent text-sm">65%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">NLP</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-32 h-2 bg-muted rounded-full">
                              <div className="w-2/4 h-full bg-gradient-secondary rounded-full"></div>
                            </div>
                            <span className="text-talentai-secondary text-sm">58%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}