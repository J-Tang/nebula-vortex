"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Orbit, Zap, Infinity as InfinityIcon, ArrowRight, Code, Cpu, Globe } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "模块化架构",
      description: "像星云一样自由组合，每个模块独立又相互连接，实现无限扩展。",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "智能演化",
      description: "系统具备自我学习和适应能力，在反馈中不断优化进化。",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "宇宙视角",
      description: "从整体出发，理解每个部分在系统中的位置和价值。",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <InfinityIcon className="w-8 h-8" />,
      title: "无限可能",
      description: "在混沌中寻找秩序，在秩序中创造可能，永无止境。",
      color: "from-orange-500 to-red-500",
    },
  ];

  const principles = [
    "从简单开始，向复杂演化",
    "保持核心稳定，允许边缘自由",
    "在反馈中调整，在试错中成长",
    "每个部分都有其存在的理由",
    "系统大于各部分之和",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 nebula-bg"
          style={{
            backgroundPosition: `${mousePosition.x / 100}px ${mousePosition.y / 100}px`,
          }}
        />
        
        {/* Animated particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-nebula-glow/20 to-nebula-dust/10"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Logo/Title */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-nebula-core to-nebula-glow rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-nebula-core to-nebula-glow flex items-center justify-center animate-spin-slow">
                  <Orbit className="w-8 h-8 text-nebula-light" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-nebula-light via-nebula-dust to-nebula-glow bg-clip-text text-transparent">
                星云漩涡
              </h1>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-nebula-light">
              Nebula <span className="text-nebula-glow">Vortex</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-nebula-dust max-w-3xl mx-auto mb-10 leading-relaxed">
              从混沌中诞生<span className="text-accent font-semibold">秩序</span>，
              在漩涡中凝聚<span className="text-accent font-semibold">力量</span>。
              探索无限可能的<span className="text-accent font-semibold">数字宇宙</span>。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-nebula-core to-nebula-glow text-nebula-light font-semibold text-lg flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
                <span className="relative">开始探索</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-nebula-glow/50 text-nebula-glow font-semibold text-lg hover:bg-nebula-glow/10 transition-colors"
              >
                了解哲学
              </motion.button>
            </div>
          </motion.div>

          {/* Core principles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-nebula-light mb-10 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-nebula-glow" />
              核心原则
              <Sparkles className="w-8 h-8 text-nebula-glow" />
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-nebula-core/20 to-nebula-glow/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-nebula-core to-nebula-glow flex items-center justify-center">
                        <span className="text-nebula-light font-bold">{index + 1}</span>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-nebula-core to-transparent" />
                    </div>
                    <p className="text-nebula-light text-lg leading-relaxed">{principle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-nebula-light mb-10 flex items-center justify-center gap-3">
              <Zap className="w-8 h-8 text-nebula-glow" />
              系统特性
              <Zap className="w-8 h-8 text-nebula-glow" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300`} />
                  <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                    <div className="flex items-start gap-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-20`}>
                        <div className="text-nebula-light">{feature.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-nebula-light mb-3">
                          {feature.title}
                        </h4>
                        <p className="text-nebula-dust leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                  准备好开始你的星云之旅了吗？
                </h3>
                <p className="text-xl text-nebula-dust mb-10 max-w-2xl mx-auto">
                  加入我们，一起在数字宇宙中创造、探索、演化。
                  每一个伟大的系统都始于一个简单的想法。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-full bg-gradient-to-r from-nebula-core to-nebula-glow text-nebula-light font-bold text-lg flex items-center justify-center gap-3 group"
                  >
                    <span>立即开始</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-full border-2 border-nebula-glow text-nebula-glow font-bold text-lg hover:bg-nebula-glow/10 transition-colors"
                  >
                    了解更多
                  </motion.button>
                </div>
                
                <p className="text-nebula-dust/70 mt-8 text-sm">
                  🌀 哲学在行动中验证，系统在反馈中演化 🌀
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-nebula-dust/70">
            © {new Date().getFullYear()} 星云漩涡 · Nebula Vortex · 从混沌到秩序，从秩序到可能
          </p>
          <p className="text-nebula-dust/50 text-sm mt-2">
            本系统正在演化中 · 欢迎反馈与贡献
          </p>
        </div>
      </footer>

      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
