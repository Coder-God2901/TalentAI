import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Brain, 
  Clock, 
  Code, 
  Play, 
  Check, 
  X, 
  Target,
  Zap,
  Trophy,
  ChevronRight,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

interface SkillChallengePageProps {
  onNavigate: (page: string, type?: 'candidate' | 'recruiter') => void;
}

export function SkillChallengePage({ onNavigate }: SkillChallengePageProps) {
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const challenge = {
    title: 'Computer Vision Model Optimization',
    difficulty: 'Advanced',
    description: 'Optimize a PyTorch computer vision model for real-time inference while maintaining accuracy.',
    totalQuestions: 3,
    timeLimit: 45,
    skills: ['PyTorch', 'Computer Vision', 'Model Optimization', 'Performance Tuning']
  };

  const questions = [
    {
      id: 1,
      title: 'Model Architecture Optimization',
      description: 'Given a ResNet-50 model, optimize it for mobile inference while maintaining >85% of original accuracy.',
      initialCode: `import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import models

class OptimizedResNet(nn.Module):
    def __init__(self, num_classes=1000):
        super().__init__()
        # TODO: Implement optimized ResNet architecture
        pass
    
    def forward(self, x):
        # TODO: Implement forward pass
        pass

def optimize_model(original_model):
    """
    Optimize the given model for mobile inference
    Target: <10MB model size, <50ms inference time
    """
    # TODO: Implement optimization strategy
    pass`,
      testCases: [
        { input: 'model_size_mb < 10', expected: 'True', type: 'constraint' },
        { input: 'inference_time_ms < 50', expected: 'True', type: 'constraint' },
        { input: 'accuracy_retention > 0.85', expected: 'True', type: 'performance' }
      ],
      hints: [
        'Consider using depthwise separable convolutions',
        'Quantization can significantly reduce model size',
        'Pruning less important weights can maintain accuracy'
      ]
    },
    {
      id: 2,
      title: 'Data Pipeline Optimization',
      description: 'Create an efficient data loading pipeline for training with 1M+ images.',
      initialCode: `import torch
from torch.utils.data import Dataset, DataLoader
import multiprocessing as mp

class OptimizedImageDataset(Dataset):
    def __init__(self, image_paths, labels):
        self.image_paths = image_paths
        self.labels = labels
        # TODO: Implement efficient data loading
        
    def __len__(self):
        return len(self.image_paths)
    
    def __getitem__(self, idx):
        # TODO: Implement optimized data loading
        pass

def create_optimized_dataloader(dataset, batch_size=32):
    """
    Create optimized DataLoader for large-scale training
    Target: >90% GPU utilization, minimal I/O bottleneck
    """
    # TODO: Implement optimization
    pass`,
      testCases: [
        { input: 'gpu_utilization > 0.9', expected: 'True', type: 'performance' },
        { input: 'memory_usage < 16GB', expected: 'True', type: 'constraint' },
        { input: 'loading_speed > 1000_samples/sec', expected: 'True', type: 'performance' }
      ],
      hints: [
        'Use multiple workers for data loading',
        'Consider memory mapping for large datasets',
        'Prefetching can reduce I/O wait time'
      ]
    },
    {
      id: 3,
      title: 'Model Debugging',
      description: 'Debug a PyTorch model that\'s experiencing gradient explosion during training.',
      initialCode: `import torch
import torch.nn as nn
import torch.optim as optim

class ProblematicModel(nn.Module):
    def __init__(self):
        super().__init__()
        self.layers = nn.Sequential(
            nn.Linear(784, 512),
            nn.ReLU(),
            nn.Linear(512, 256),
            nn.ReLU(),
            nn.Linear(256, 10)
        )
    
    def forward(self, x):
        return self.layers(x)

def train_step(model, data, target):
    optimizer = optim.SGD(model.parameters(), lr=0.01)
    criterion = nn.CrossEntropyLoss()
    
    # TODO: Fix gradient explosion issue
    optimizer.zero_grad()
    output = model(data)
    loss = criterion(output, target)
    loss.backward()
    optimizer.step()
    
    return loss.item()`,
      testCases: [
        { input: 'gradient_norm < 10', expected: 'True', type: 'stability' },
        { input: 'loss_convergence', expected: 'True', type: 'training' },
        { input: 'no_nan_values', expected: 'True', type: 'stability' }
      ],
      hints: [
        'Check gradient norms and consider clipping',
        'Learning rate might be too high',
        'Weight initialization could be problematic'
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const runCode = () => {
    setIsRunning(true);
    
    // Simulate code execution and testing
    setTimeout(() => {
      const results = questions[currentQuestion].testCases.map((test, index) => ({
        ...test,
        passed: Math.random() > 0.3, // Simulate test results
        actualOutput: Math.random() > 0.5 ? test.expected : 'Failed'
      }));
      
      setTestResults(results);
      const passed = results.filter(r => r.passed).length;
      const newScore = score + (passed * 10);
      setScore(newScore);
      setIsRunning(false);
    }, 2000);
  };

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
            <div>
              <h1 className="text-2xl font-bold text-white">{challenge.title}</h1>
              <p className="text-gray-400">Advanced PyTorch & Computer Vision Challenge</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Timer */}
            <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <Clock className="w-5 h-5 text-orange-400" />
              <span className="text-white font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
            
            {/* Score */}
            <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">{score} pts</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Challenge Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Challenge Overview */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Challenge Overview</h3>
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                  {challenge.difficulty}
                </Badge>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {challenge.description}
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Questions:</span>
                  <span className="text-white">{challenge.totalQuestions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time Limit:</span>
                  <span className="text-white">{challenge.timeLimit} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current:</span>
                  <span className="text-white">{currentQuestion + 1} of {challenge.totalQuestions}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">{Math.round(((currentQuestion + 1) / challenge.totalQuestions) * 100)}%</span>
                </div>
                <Progress value={((currentQuestion + 1) / challenge.totalQuestions) * 100} />
              </div>
            </Card>

            {/* Skills Being Tested */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-blue-400" />
                Skills Tested
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {challenge.skills.map((skill, index) => (
                  <Badge key={index} className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Test Results */}
            {testResults.length > 0 && (
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Test Results</h3>
                
                <div className="space-y-3">
                  {testResults.map((result, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {result.passed ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <X className="w-5 h-5 text-red-400" />
                        )}
                        <div>
                          <div className="text-white text-sm">{result.input}</div>
                          <div className="text-gray-400 text-xs">{result.type}</div>
                        </div>
                      </div>
                      <Badge className={result.passed ? 
                        'bg-green-500/20 text-green-400 border-green-500/30' : 
                        'bg-red-500/20 text-red-400 border-red-500/30'
                      }>
                        {result.passed ? 'PASS' : 'FAIL'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Hints */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-400" />
                Hints
              </h3>
              
              <div className="space-y-2">
                {questions[currentQuestion].hints.map((hint, index) => (
                  <div key={index} className="flex items-start space-x-2 text-gray-300 text-sm">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{hint}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content - Code Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Question */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Question {currentQuestion + 1}: {questions[currentQuestion].title}
                </h3>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  <Code className="w-4 h-4 mr-1" />
                  PyTorch
                </Badge>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {questions[currentQuestion].description}
              </p>
            </Card>

            {/* Code Editor */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Code Editor</h3>
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-gray-300 hover:bg-slate-800"
                  >
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Reset Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    onClick={runCode}
                    disabled={isRunning}
                  >
                    {isRunning ? (
                      <>
                        <div className="animate-spin w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Run & Test
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Textarea
                  value={code || questions[currentQuestion].initialCode}
                  onChange={(e) => setCode(e.target.value)}
                  className="font-mono text-sm bg-slate-900 border-slate-700 text-gray-100 min-h-[400px] resize-none"
                  placeholder="Write your optimized code here..."
                />
                
                {/* Line numbers overlay */}
                <div className="absolute left-4 top-4 text-gray-500 text-sm font-mono leading-6 pointer-events-none">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="border-slate-600 text-gray-300 hover:bg-slate-800"
              >
                Previous Question
              </Button>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Question {currentQuestion + 1} of {challenge.totalQuestions}
                </p>
              </div>
              
              {currentQuestion < questions.length - 1 ? (
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                >
                  Next Question
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  onClick={() => onNavigate('candidate-dashboard')}
                >
                  Submit Challenge
                  <Check className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}