import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Zap, Target, Users, TrendingUp, Shield, ChevronRight, Sparkles, Menu } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string, type?: 'candidate' | 'recruiter') => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-talentai-neutral-dark via-talentai-primary to-talentai-neutral-dark">
      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-3 sm:w-5 h-3 sm:h-5 text-white" />
            </div>
            <span className="text-white text-lg sm:text-xl font-semibold">TalentAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-talentai-accent transition-colors text-sm hover-accent">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-talentai-accent transition-colors text-sm hover-accent">How It Works</a>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-talentai-accent text-sm px-2 sm:px-4 hover-accent">
              Sign In
            </Button>
            <div className="md:hidden">
              <Menu className="w-5 h-5 text-gray-300" />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* AI Neural Network Background Pattern */}
          <div className="absolute inset-0 opacity-10 sm:opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 800">
              <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6C63FF" />
                  <stop offset="100%" stopColor="#00E5A0" />
                </linearGradient>
              </defs>
              <g stroke="url(#neuralGradient)" strokeWidth="1" fill="url(#neuralGradient)" className="hidden sm:block">
                <line x1="100" y1="100" x2="200" y2="150" opacity="0.4" />
                <line x1="200" y1="150" x2="350" y2="120" opacity="0.4" />
                <line x1="350" y1="120" x2="500" y2="180" opacity="0.4" />
                <line x1="150" y1="200" x2="300" y2="250" opacity="0.4" />
                <line x1="300" y1="250" x2="450" y2="220" opacity="0.4" />
                <circle cx="100" cy="100" r="4" opacity="0.7" />
                <circle cx="200" cy="150" r="4" opacity="0.7" />
                <circle cx="350" cy="120" r="4" opacity="0.7" />
                <circle cx="500" cy="180" r="4" opacity="0.7" />
                <circle cx="150" cy="200" r="4" opacity="0.7" />
                <circle cx="300" cy="250" r="4" opacity="0.7" />
                <circle cx="450" cy="220" r="4" opacity="0.7" />
              </g>
            </svg>
          </div>

          <div className="relative z-10">
            <Badge className="mb-4 sm:mb-6 bg-talentai-secondary/20 text-talentai-secondary border-talentai-secondary/30 text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Talent Matching
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Where AI Talent
              <span className="block text-gradient-secondary">
                Meets Opportunity
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              The world's first AI-native marketplace connecting top ML engineers with cutting-edge opportunities.
              <span className="hidden sm:inline"> Smart matching. Fair evaluation. Record-breaking speed.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
              <Button 
                className="w-full sm:w-auto btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl"
                onClick={() => onNavigate('job-search', 'candidate')}
              >
                <Brain className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Find AI Jobs
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              </Button>
              
              <Button 
                className="w-full sm:w-auto btn-accent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl"
                onClick={() => onNavigate('recruiter-dashboard', 'recruiter')}
              >
                <Target className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Hire AI Talent
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
              </Button>
            </div>
            
            {/* Stats with new colors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-lg sm:max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-talentai-accent">100K+</div>
                <div className="text-gray-400 text-xs sm:text-sm">AI Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-talentai-secondary">5K+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-talentai-accent">98%</div>
                <div className="text-gray-400 text-xs sm:text-sm">Match Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-talentai-secondary">24h</div>
                <div className="text-gray-400 text-xs sm:text-sm">Avg. Hire Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with new palette */}
      <section id="features" className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              AI-First Hiring, Reimagined
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-0">
              Advanced machine learning creates perfect matches between AI talent and roles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Card className="bg-card border-border p-4 sm:p-6 hover:border-talentai-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-talentai-accent/20">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Smart Skill Validation</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Interactive challenges that test real AI/ML skills, not just theory.
              </p>
            </Card>
            
            <Card className="bg-card border-border p-4 sm:p-6 hover:border-talentai-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-talentai-accent/20">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Lightning-Fast Matching</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Perfect matches in minutes, not weeks using advanced AI algorithms.
              </p>
            </Card>
            
            <Card className="bg-card border-border p-4 sm:p-6 sm:col-span-2 lg:col-span-1 hover:border-talentai-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-talentai-accent/20">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-talentai-accent rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-talentai-neutral-dark" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Bias-Free Evaluation</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Fair, consistent evaluation based purely on technical merit and potential.
              </p>
            </Card>
            
            {/* Additional features - hidden on mobile */}
            <Card className="hidden lg:block bg-card border-border p-6 hover:border-talentai-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-talentai-accent/20">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Global Talent Pool</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access to 100K+ verified AI professionals across all specializations and regions.
              </p>
            </Card>
            
            <Card className="hidden lg:block bg-card border-border p-6 hover:border-talentai-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-talentai-accent/20">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Real-Time Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep insights into hiring performance, candidate quality, and market trends.
              </p>
            </Card>
            
            <Card className="hidden lg:block bg-card border-border p-6 hover:border-talentai-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-talentai-accent/20">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Precision Hiring</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced filtering by technical stack, industry experience, and preferences.
              </p>
            </Card>
          </div>
          
          {/* Show More Button on Mobile */}
          <div className="text-center mt-6 lg:hidden">
            <Button variant="outline" className="border-talentai-secondary text-talentai-secondary hover:bg-talentai-secondary/20 hover-accent">
              View All Features
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your AI Career?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0">
            Join thousands already using TalentAI to build the future of AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button 
              className="w-full sm:w-auto btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl"
              onClick={() => onNavigate('candidate-dashboard', 'candidate')}
            >
              Start as Candidate
            </Button>
            <Button 
              className="w-full sm:w-auto btn-accent px-6 sm:px-8 py-3 sm:py-4 rounded-xl"
              onClick={() => onNavigate('recruiter-dashboard', 'recruiter')}
            >
              Start as Recruiter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-5 sm:w-6 h-5 sm:h-6 bg-gradient-primary rounded-md flex items-center justify-center">
                <Brain className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm sm:text-base">TalentAI</span>
            </div>
            
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              © 2025 TalentAI. Building the future of AI talent.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}