
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizTopic } from "../pages/Index";
import { Code, Database, Package, Globe, Zap, ArrowRight } from "lucide-react";

interface HomePageProps {
  onTopicSelect: (topic: QuizTopic) => void;
}

const topics = [
  {
    id: 'python_basics' as QuizTopic,
    title: 'Python Basics',
    description: 'Variables, data types, control structures, and fundamental concepts',
    icon: Code,
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600'
  },
  {
    id: 'data_structures' as QuizTopic,
    title: 'Data Structures',
    description: 'Lists, tuples, dictionaries, sets and their operations',
    icon: Database,
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600'
  },
  {
    id: 'object_oriented_python' as QuizTopic,
    title: 'Object-Oriented Python',
    description: 'Classes, objects, inheritance, and OOP principles',
    icon: Package,
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600'
  },
  {
    id: 'web_development_python' as QuizTopic,
    title: 'Web Development',
    description: 'Django, Flask, APIs, and web frameworks',
    icon: Globe,
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600'
  },
  {
    id: 'advanced_python_concepts' as QuizTopic,
    title: 'Advanced Concepts',
    description: 'Decorators, generators, async programming, and advanced features',
    icon: Zap,
    color: 'bg-pink-50 border-pink-200',
    iconColor: 'text-pink-600'
  }
];

const HomePage = ({ onTopicSelect }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 
            className="text-5xl md:text-6xl font-bold text-black mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Select a Topic
          </h1>
          <p className="text-xl text-[#a9a9a9] max-w-2xl mx-auto">
            Choose your Python challenge. Each topic contains 10 carefully crafted questions 
            to test your knowledge and skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card 
                key={topic.id}
                className={`${topic.color} hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group border-2 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => onTopicSelect(topic.id)}
              >
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <Icon className={`w-8 h-8 ${topic.iconColor}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-black mb-2 group-hover:text-[#6695b2] transition-colors">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-[#a9a9a9] text-base leading-relaxed mb-6">
                    {topic.description}
                  </CardDescription>
                  <Button 
                    className="bg-[#6695b2] hover:bg-[#5a8199] text-white w-full group-hover:bg-[#5a8199] transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTopicSelect(topic.id);
                    }}
                  >
                    Start Challenge
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12 text-[#a9a9a9]">
          <p className="text-lg">Ready to test your Python expertise?</p>
          <p className="text-sm mt-2">Each quiz contains 10 questions with real-time scoring</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
