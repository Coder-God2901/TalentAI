import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Brain } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const skillCategories = [...new Set(skills.map(s => s.category))];
  
  return (
    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <Brain className="w-5 h-5 mr-2 text-blue-400" />
        Skills & Expertise
      </h3>
      
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category}>
            <h4 className="text-lg font-semibold text-white mb-4">{category}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <Badge className={`${
                        skill.level >= 90 ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        skill.level >= 80 ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                        skill.level >= 70 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        'bg-gray-500/20 text-gray-400 border-gray-500/30'
                      }`}>
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}