import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Github, ExternalLink, TrendingUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  impact: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Featured Projects</h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <div className="text-gray-400 text-sm">Project Screenshot</div>
            </div>
            
            <div className="p-4">
              <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex items-center text-green-400 text-sm mb-4">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>{project.impact}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="border-slate-600 text-gray-300 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-800">
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-800">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Demo
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}