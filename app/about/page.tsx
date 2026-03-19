"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Cpu, GitBranch, Zap, Globe } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG, CORE_PRINCIPLES } from "@/lib/constants/site";

export default function AboutPage() {
  const philosophies = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "混沌与秩序",
      description: "我们认为混沌不是问题，而是可能性。秩序不是束缚，而是表达。真正的创造力发生在两者的边界上。",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "中心与边缘",
      description: "系统需要一个坚实的核心，但也需要灵活的边界。核心提供稳定性，边缘探索可能性。",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "演化与突变",
      description: "进步不是线性的。它包含缓慢的积累和突然的突破。我们为两种节奏都做好准备。",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      title: "分形与整体",
      description: "每个部分都包含着整体的模式。从最小的组件到最大的系统，同样的原则在不同尺度上重现。",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "能量与信息",
      description: "系统通过能量流动和信息交换来维持。优化这些流动，系统就自然趋向健康。",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "连接与独立",
      description: "万物相连，但每个部分也需要独立的空间。平衡连接与独立是系统健康的关键。",
      color: "from-indigo-500 to-violet-500",
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
            我们的哲学
          </h1>
          <p className="text-xl md:text-2xl text-nebula-dust max-w-3xl mx-auto leading-relaxed">
            星云漩涡不仅是一个技术系统，更是一种思考世界的方式。
            我们相信，最好的解决方案来自对复杂性的深刻理解，而不是对它的逃避。
          </p>
        </motion.div>

        {/* Philosophy intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-nebula-light mb-6">
                为什么是"星云漩涡"？
              </h2>
              <div className="space-y-4 text-nebula-dust leading-relaxed">
                <p>
                  <span className="text-accent font-semibold">星云</span>代表着混沌中的秩序，
                  无限的可能性，创生的源泉。它提醒我们，从看似混乱中能够诞生美丽和结构。
                </p>
                <p>
                  <span className="text-accent font-semibold">漩涡</span>代表着能量的流动，
                  引力的中心，向心的运动。它象征着系统如何自然组织自身，如何从分散走向凝聚。
                </p>
                <p>
                  结合在一起，<span className="text-nebula-glow font-semibold">星云漩涡</span>代表着一种动态的平衡：
                  在创造与结构之间，在自由与秩序之间，在探索与聚焦之间。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-nebula-core/20 to-nebula-glow/20 rounded-3xl blur-xl" />
              <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-nebula-dark to-nebula-core/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-block relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-nebula-core to-nebula-glow rounded-full blur-xl animate-pulse" />
                      <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-nebula-core to-nebula-glow flex items-center justify-center animate-spin-slow">
                        <div className="w-24 h-24 rounded-full bg-nebula-dark flex items-center justify-center">
                          <span className="text-2xl font-bold text-nebula-light">🌀</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-nebula-light text-lg">
                      混沌 → 秩序 → 演化
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core principles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-nebula-light mb-12">
            核心原则
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CORE_PRINCIPLES.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
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

        {/* Philosophies grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-nebula-light mb-12">
            哲学维度
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${philosophy.color} rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 h-full">
                  <div className="flex flex-col h-full">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${philosophy.color} bg-opacity-20 w-fit mb-6`}>
                      {philosophy.icon}
                    </div>
                    <h3 className="text-xl font-bold text-nebula-light mb-3">
                      {philosophy.title}
                    </h3>
                    <p className="text-nebula-dust leading-relaxed flex-1">
                      {philosophy.description}
                    </p>
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="relative max-w-4xl mx-auto p-8 md:p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-nebula-core/10 via-nebula-glow/10 to-nebula-dust/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(109,40,217,0.3),transparent_50%)]" />
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-nebula-light mb-6">
                哲学需要实践来验证
              </h3>
              <p className="text-xl text-nebula-dust mb-10 max-w-2xl mx-auto">
                我们的哲学不是在象牙塔中诞生的，而是在解决实际问题的过程中形成的。
                每一个原则都经过了实践的检验和迭代。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  开始实践
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                >
                  了解更多
                </Button>
              </div>
              
              <p className="text-nebula-dust/70 mt-8 text-sm">
                🌀 真正的智慧来自行动与反思的循环 🌀
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}