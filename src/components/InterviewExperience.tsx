import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar } from './ui/avatar';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Share,
  MessageCircle,
  Code,
  Brain,
  Clock,
  Users,
  Monitor,
  Camera,
  Settings,
  ChevronRight,
  Send,
  FileText,
  Zap
} from 'lucide-react';

interface InterviewExperienceProps {
  onNavigate: (page: string, type?: 'candidate' | 'recruiter') => void;
}

export function InterviewExperience({ onNavigate }: InterviewExperienceProps) {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [codeSnippet, setCodeSnippet] = useState('');

  const interviewData = {
    company: 'DeepMind',
    position: 'Senior ML Engineer',
    interviewer: {
      name: 'Dr. Sarah Chen',
      role: 'Principal Research Scientist',
      avatar: 'SC'
    },
    duration: '60 minutes',
    type: 'Technical Interview',
    startTime: '3:00 PM PST',
    topics: ['Computer Vision', 'Model Architecture', 'System Design']
  };

  const aiInsights = [
    { type: 'speaking_pace', score: 85, feedback: 'Good pace, clear articulation' },
    { type: 'technical_accuracy', score: 92, feedback: 'Strong technical knowledge demonstrated' },
    { type: 'problem_solving', score: 78, feedback: 'Consider explaining approach before coding' },
    { type: 'communication', score: 88, feedback: 'Clear explanations, good engagement' }
  ];

  const chatMessages = [
    {
      sender: 'Dr. Sarah Chen',
      message: 'Hi! Ready to dive into some computer vision challenges?',
      time: '3:02 PM',
      type: 'text'
    },
    {
      sender: 'You',
      message: 'Absolutely! Looking forward to discussing the latest CV architectures.',
      time: '3:02 PM',
      type: 'text'
    },
    {
      sender: 'AI Assistant',
      message: 'Interview started. Current topic: Model Architecture Design',
      time: '3:03 PM',
      type: 'system'
    }
  ];

  const questions = [
    {
      id: 1,
      question: 'Design a computer vision model for real-time object detection in autonomous vehicles',
      status: 'completed',
      aiScore: 85,
      notes: 'Good understanding of trade-offs between accuracy and speed'
    },
    {
      id: 2,
      question: 'How would you handle class imbalance in a medical imaging dataset?',
      status: 'current',
      aiScore: null,
      notes: ''
    },
    {
      id: 3,
      question: 'Explain your approach to debugging a model that\'s overfitting',
      status: 'upcoming',
      aiScore: null,
      notes: ''
    }
  ];

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-xl font-bold text-white">{interviewData.position}</h1>
              <p className="text-blue-400">{interviewData.company} • {interviewData.type}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-red-500/20 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-400 text-sm font-medium">Live</span>
            </div>
            <Badge className="bg-slate-800 text-gray-300 border-slate-700">
              <Clock className="w-3 h-3 mr-1" />
              42:18
            </Badge>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Video Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video Conference */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
              <div className="relative">
                {/* Main Video (Interviewer) */}
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {isVideoOn ? (
                      <div className="relative w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                        <Avatar className="w-32 h-32">
                          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                            {interviewData.interviewer.avatar}
                          </div>
                        </Avatar>
                        <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-full">
                          <span className="text-white text-sm font-medium">{interviewData.interviewer.name}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-gray-400">
                        <VideoOff className="w-16 h-16 mb-2" />
                        <span>Video disabled</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Self Video (Picture-in-Picture) */}
                  <div className="absolute bottom-4 right-4 w-48 h-36 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-600 overflow-hidden">
                    {isVideoOn ? (
                      <div className="w-full h-full bg-gradient-to-br from-green-900 to-blue-900 flex items-center justify-center">
                        <Avatar className="w-16 h-16">
                          <div className="w-full h-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white text-lg font-bold">
                            You
                          </div>
                        </Avatar>
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <VideoOff className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="p-4 bg-slate-800/90 backdrop-blur-sm">
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      size="sm"
                      variant={isAudioOn ? "default" : "destructive"}
                      onClick={() => setIsAudioOn(!isAudioOn)}
                      className="rounded-full w-12 h-12"
                    >
                      {isAudioOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                    </Button>
                    
                    <Button
                      size="sm"
                      variant={isVideoOn ? "default" : "destructive"}
                      onClick={() => setIsVideoOn(!isVideoOn)}
                      className="rounded-full w-12 h-12"
                    >
                      {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                    </Button>
                    
                    <Button
                      size="sm"
                      variant={isScreenSharing ? "default" : "outline"}
                      onClick={() => setIsScreenSharing(!isScreenSharing)}
                      className="px-4"
                    >
                      <Monitor className="w-4 h-4 mr-2" />
                      {isScreenSharing ? 'Stop Sharing' : 'Share Screen'}
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => onNavigate('candidate-dashboard')}
                      className="px-4"
                    >
                      End Interview
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Collaborative Coding Space */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-400" />
                  Collaborative Code Editor
                </h3>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    <Users className="w-3 h-3 mr-1" />
                    2 Active
                  </Badge>
                </div>
              </div>
              
              <div className="relative">
                <Textarea
                  value={codeSnippet}
                  onChange={(e) => setCodeSnippet(e.target.value)}
                  placeholder="// Real-time collaborative coding space
// Both you and the interviewer can edit simultaneously

def detect_objects(image, model):
    # TODO: Implement real-time object detection
    pass"
                  className="font-mono text-sm bg-slate-900 border-slate-700 text-gray-100 min-h-[300px] resize-none"
                />
                
                {/* Collaborative cursors */}
                <div className="absolute top-20 left-40 w-0.5 h-6 bg-purple-400 animate-pulse"></div>
                <div className="absolute top-16 left-40 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                  Dr. Sarah Chen
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>Language: Python</span>
                  <span>•</span>
                  <span>Auto-save enabled</span>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                  <Share className="w-4 h-4 mr-2" />
                  Run Code
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Interview Info */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Interview Details</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{interviewData.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Started:</span>
                  <span className="text-white">{interviewData.startTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Interviewer:</span>
                  <span className="text-white">{interviewData.interviewer.name}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-2">Topics:</p>
                <div className="flex flex-wrap gap-1">
                  {interviewData.topics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="border-slate-600 text-gray-300 text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* AI Real-time Insights */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-400" />
                AI Insights
              </h3>
              
              <div className="space-y-3">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="p-3 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm capitalize">
                        {insight.type.replace('_', ' ')}
                      </span>
                      <Badge className={`${
                        insight.score >= 90 ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        insight.score >= 80 ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                        insight.score >= 70 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        'bg-red-500/20 text-red-400 border-red-500/30'
                      }`}>
                        {insight.score}%
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-xs">{insight.feedback}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interview Questions Progress */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Questions Progress</h3>
              
              <div className="space-y-3">
                {questions.map((q, index) => (
                  <div key={q.id} className="p-3 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">Q{q.id}</span>
                      <Badge className={`${
                        q.status === 'completed' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        q.status === 'current' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                        'bg-gray-500/20 text-gray-400 border-gray-500/30'
                      }`}>
                        {q.status}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-xs mb-2">{q.question}</p>
                    {q.aiScore && (
                      <div className="flex items-center text-xs">
                        <Zap className="w-3 h-3 mr-1 text-yellow-400" />
                        <span className="text-yellow-400">AI Score: {q.aiScore}%</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Chat */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
                Chat
              </h3>
              
              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex items-start space-x-2">
                      <span className={`font-medium ${
                        msg.sender === 'You' ? 'text-blue-400' :
                        msg.sender === 'AI Assistant' ? 'text-purple-400' :
                        'text-green-400'
                      }`}>
                        {msg.sender}:
                      </span>
                      <span className="text-gray-300 flex-1">{msg.message}</span>
                    </div>
                    <div className="text-gray-500 text-xs ml-0 mt-1">{msg.time}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && setChatMessage('')}
                />
                <Button size="sm" onClick={() => setChatMessage('')}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}