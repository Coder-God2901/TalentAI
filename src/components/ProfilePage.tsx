import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ProfileHeader } from './ProfileHeader';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { 
  profileData, 
  skills, 
  experience, 
  projects, 
  publications, 
  certifications 
} from './data/profileData';
import { 
  Download, 
  Share, 
  Edit, 
  Award,
  BookOpen,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: string, type?: 'candidate' | 'recruiter') => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
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
            <h1 className="text-2xl font-bold text-white">Profile</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="border-green-500/50 text-green-300 hover:bg-green-500/20">
              <Share className="w-4 h-4 mr-2" />
              Share Profile
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit className="w-4 h-4 mr-2" />
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>
        </header>

        {/* Profile Header */}
        <ProfileHeader profileData={profileData} />

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <SkillsSection skills={skills} />
          </TabsContent>

          <TabsContent value="experience">
            <ExperienceSection experience={experience} />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsSection projects={projects} />
          </TabsContent>

          <TabsContent value="publications">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-green-400" />
                Research Publications
              </h3>
              
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{pub.title}</h4>
                        <p className="text-blue-400 mb-2">{pub.venue}</p>
                        <p className="text-gray-300 text-sm mb-3">{pub.authors}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{pub.citations} citations</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-slate-600 text-gray-300 hover:bg-slate-800">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Paper
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="certifications">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                Certifications & Credentials
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                        <p className="text-blue-400">{cert.issuer}</p>
                        <p className="text-gray-400 text-sm">{cert.date}</p>
                      </div>
                      {cert.verified && (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}