import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';
import { 
  MapPin, 
  Mail, 
  Globe,
  Calendar,
  Github,
  Linkedin,
  TrendingUp
} from 'lucide-react';

interface ProfileHeaderProps {
  profileData: {
    name: string;
    title: string;
    location: string;
    email: string;
    website: string;
    experience: string;
    profileViews: number;
    matchScore: number;
    responseRate: number;
    summary: string;
  };
}

export function ProfileHeader({ profileData }: ProfileHeaderProps) {
  return (
    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8 mb-8">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-6">
          <Avatar className="w-24 h-24">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              AK
            </div>
          </Avatar>
          
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-2">{profileData.name}</h2>
            <p className="text-xl text-blue-400 mb-4">{profileData.title}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                {profileData.location}
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                {profileData.email}
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-gray-400" />
                {profileData.website}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                {profileData.experience} experience
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mt-4">
              <Button variant="outline" size="sm" className="border-slate-600 text-gray-300 hover:bg-slate-800">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="border-slate-600 text-gray-300 hover:bg-slate-800">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-right space-y-4">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{profileData.profileViews}</div>
              <div className="text-gray-400 text-sm">Profile Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{profileData.matchScore}%</div>
              <div className="text-gray-400 text-sm">AI Match Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{profileData.responseRate}%</div>
              <div className="text-gray-400 text-sm">Response Rate</div>
            </div>
          </div>
          
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <TrendingUp className="w-3 h-3 mr-1" />
            Highly Sought After
          </Badge>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">Professional Summary</h3>
        <p className="text-gray-300 leading-relaxed">{profileData.summary}</p>
      </div>
    </Card>
  );
}