import { BrainCircuit, LightbulbIcon, Users2, Trophy } from 'lucide-react';

const features = [
  {
    icon: LightbulbIcon,
    title: 'Innovation',
    description: 'Develop groundbreaking ideas and turn them into reality through hands-on projects and workshops.',
  },
  {
    icon: Users2,
    title: 'Networking',
    description: 'Connect with like-minded students, mentors, and successful entrepreneurs in the industry.',
  },
  {
    icon: BrainCircuit,
    title: 'Skill Development',
    description: 'Learn essential business skills, from market research to pitch presentations.',
  },
  {
    icon: Trophy,
    title: 'Competitions',
    description: 'Participate in business competitions and pitch events to showcase your ideas.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Why Join Our Club?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}