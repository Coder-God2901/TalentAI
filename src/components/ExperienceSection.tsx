import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Professional Experience</h3>
      
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="relative">
            {index < experience.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-32 bg-slate-700"></div>
            )}
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
                {exp.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
              </div>
              
              <div className="flex-1 p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-white font-medium mb-2">Key Achievements:</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="border-slate-600 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}