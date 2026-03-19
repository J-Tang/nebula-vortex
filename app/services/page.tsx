"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Code, Cloud, Shield, BarChart, Users, Globe } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "系统架构设计",
      description: "基于星云漩涡哲学，设计可扩展、可维护的系统架构。从单体到微服务，从云原生到边缘计算。",
      features: ["模块化设计", "可扩展性规划", "技术选型咨询", "架构评审"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "智能系统开发",
      description: "构建具备自我学习能力的系统，在反馈中不断优化进化。机器学习、AI集成、自动化流程。",
      features: ["机器学习模型", "智能推荐系统", "自动化工作流", "预测分析"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "云原生解决方案",
      description: "充分利用云平台的优势，构建弹性、可靠、高效的云端系统。容器化、Serverless、多云策略。",
      features: ["容器编排", "Serverless架构", "多云部署", "成本优化"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "安全与合规",
      description: "从设计开始就考虑安全性，确保系统在复杂环境中的稳定运行。零信任架构、数据保护、合规审计。",
      features: ["安全架构设计", "数据加密方案", "合规性咨询", "安全测试"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "数据系统设计",
      description: "构建可靠的数据流水线，从采集、存储到分析和可视化。让数据成为决策的依据。",
      features: ["数据架构设计", "实时处理系统", "数据仓库", "BI系统"],
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "团队与流程咨询",
      description: "帮助团队建立高效的工作流程，从敏捷开发到DevOps，从代码规范到质量保证。",
      features: ["敏捷转型", "DevOps实践", "代码质量管理", "团队培训"],
      color: "from-indigo-500 to-violet-500",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "理解混沌",
      description: "深入理解你的业务现状、挑战和目标。我们相信每个看似混乱的系统都有其内在逻辑。",
    },
    {
      step: 2,
      title: "发现模式",
      description: "从复杂中提取关键模式，识别系统中的杠杆点。有时候，小的改变能带来大的影响。",
    },
    {
      step: 3,
      title: "设计秩序",
      description: "基于发现的模式，设计清晰、灵活的系统结构。秩序不是束缚，而是表达的可能性。",
    },
    {
      step: 4,
      title: "实施演化",
      description: "分阶段实施，在反馈中调整。系统不是一次性建成的，而是在使用中逐渐完善的。",
    },
    {
      step: 5,
      title: "持续优化",
      description: "建立反馈循环，让系统具备自我优化的能力。真正的系统是活着的，它在成长。",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 nebula-bg" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-nebula-light via-nebula-dust to-nebula-glow bg-clip-text text-transparent mb-6">
            我们的服务
          </h1>
          <p className="text-xl md:text-2xl text-nebula-dust max-w-3xl mx-auto leading-relaxed">
            我们不只是建造系统，我们帮助系统<span className="text-accent font-semibold">演化</span>。
            基于星云漩涡哲学，我们提供从混沌到秩序的完整解决方案。
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-nebula-light mb-12 flex items-center justify-center gap-3">
            <Zap className="w-8 h-8 text-nebula-glow" />
            专业服务
            <Zap className="w-8 h-8 text-nebula-glow" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 h-full flex flex-col">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-20 w-fit mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-nebula-light mb-3">
                    {service.title}
                  </h3>
                  <p className="text-nebula-dust leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-nebula-dust/70 mb-2">包含内容：</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-nebula-dust">
                        <div className="w-1.5 h-1.5 rounded-full bg-nebula-glow mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-6 w-full group"
                  >
                    了解更多
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-nebula-light mb-12">
            我们的工作流程
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-nebula-core via-nebula-glow to-nebula-dust hidden lg:block" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                    {/* Content */}
                    <div className="lg:w-1/2">
                      <div className={`p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <div className="inline-flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-nebula-core to-nebula-glow flex items-center justify-center">
                            <span className="text-nebula-light font-bold text-xl">{step.step}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-nebula-light">{step.title}</h3>
                        </div>
                        <p className="text-nebula-dust leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full bg-nebula-dark border-4 border-nebula-glow" />
                    </div>
                    
                    {/* Spacer for alignment */}
                    <div className="lg:w-1/2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="relative max-w-4xl mx-auto p-8 md:p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-nebula-core/10 via-nebula-glow/10 to-nebula-dust/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(109,40,217,0.3),transparent_50%)]" />
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-nebula-light mb-6">
                准备好开始你的系统演化之旅了吗？
              </h3>
              <p className="text-xl text-nebula-dust mb-10 max-w-2xl mx-auto">
                每个伟大的系统都始于一次对话。告诉我们你的挑战，我们将一起探索解决方案。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  预约咨询
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                >
                  查看案例
                </Button>
              </div>
              
              <p className="text-nebula-dust/70 mt-8 text-sm">
                🌀 最好的解决方案来自对复杂性的深刻理解，而不是对它的逃避 🌀
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}