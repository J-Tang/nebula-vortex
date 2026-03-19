"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, Phone, Globe } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // 3秒后重置状态
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "电子邮件",
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      description: "一般咨询和商务合作",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "在线聊天",
      value: "点击右下角聊天图标",
      href: "#",
      description: "实时在线支持（工作日 9:00-18:00）",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "联系电话",
      value: "+86 400-123-4567",
      href: "tel:+864001234567",
      description: "技术支持热线",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "办公地址",
      value: "北京市朝阳区",
      href: "#",
      description: "预约后可访问",
    },
  ];

  const faqs = [
    {
      question: "你们的服务流程是怎样的？",
      answer: "我们遵循'理解混沌→发现模式→设计秩序→实施演化→持续优化'的五步流程，确保每个项目都能从复杂中提炼出清晰的解决方案。",
    },
    {
      question: "项目通常需要多长时间？",
      answer: "项目时长取决于复杂度。小型项目2-4周，中型项目1-3个月，大型项目3-6个月或更长。我们建议从试点项目开始。",
    },
    {
      question: "如何确定项目的预算？",
      answer: "我们提供免费初步咨询，了解需求后给出详细报价。报价基于项目复杂度、技术要求和时间要求。",
    },
    {
      question: "你们支持哪些技术栈？",
      answer: "我们主要使用现代Web技术栈（Next.js, React, Node.js），但也支持多种后端技术（Python, Java, Go）和云平台（AWS, Azure, GCP）。",
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
            联系我们
          </h1>
          <p className="text-xl md:text-2xl text-nebula-dust max-w-3xl mx-auto leading-relaxed">
            每个伟大的合作都始于一次对话。告诉我们你的挑战，我们将一起探索解决方案。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-nebula-core/20 to-nebula-glow/20 rounded-3xl blur-xl" />
            <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-nebula-core to-nebula-glow bg-opacity-20">
                  <Send className="w-6 h-6 text-nebula-glow" />
                </div>
                <h2 className="text-2xl font-bold text-nebula-light">发送消息</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-nebula-dust mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800 text-nebula-light placeholder-nebula-dust/50 focus:outline-none focus:ring-2 focus:ring-nebula-glow focus:border-transparent transition-all"
                      placeholder="你的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-nebula-dust mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800 text-nebula-light placeholder-nebula-dust/50 focus:outline-none focus:ring-2 focus:ring-nebula-glow focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-nebula-dust mb-2">
                    主题 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800 text-nebula-light placeholder-nebula-dust/50 focus:outline-none focus:ring-2 focus:ring-nebula-glow focus:border-transparent transition-all"
                    placeholder="咨询主题"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-nebula-dust mb-2">
                    消息内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800 text-nebula-light placeholder-nebula-dust/50 focus:outline-none focus:ring-2 focus:ring-nebula-glow focus:border-transparent transition-all resize-none"
                    placeholder="请详细描述你的需求或问题..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-nebula-dust/70">
                    我们会在24小时内回复
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    {submitStatus === "success" ? "发送成功！" : "发送消息"}
                  </Button>
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30"
                  >
                    <p className="text-emerald-300 text-center">
                      🎉 消息发送成功！我们很快就会联系你。
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact methods */}
            <div>
              <h2 className="text-2xl font-bold text-nebula-light mb-6">联系方式</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="block p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-nebula-glow/50 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-nebula-core to-nebula-glow bg-opacity-20 group-hover:bg-opacity-30 transition-all">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-nebula-light mb-1">{method.title}</h3>
                        <p className="text-nebula-glow font-medium mb-2">{method.value}</p>
                        <p className="text-sm text-nebula-dust/70">{method.description}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-nebula-light mb-6">常见问题</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50"
                  >
                    <h3 className="font-semibold text-nebula-light mb-2">{faq.question}</h3>
                    <p className="text-nebula-dust text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-xl overflow-hidden border border-gray-800/50"
            >
              <div className="aspect-video bg-gradient-to-br from-nebula-dark to-nebula-core/30 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-12 h-12 text-nebula-glow mx-auto mb-4" />
                  <p className="text-nebula-light font-semibold">星云漩涡总部</p>
                  <p className="text-nebula-dust text-sm">北京市朝阳区</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

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
                准备好开始对话了吗？
              </h3>
              <p className="text-xl text-nebula-dust mb-10 max-w-2xl mx-auto">
                无论你有一个明确的想法，还是只有一个模糊的概念，我们都愿意倾听。
                真正的创新往往始于一次简单的对话。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="group"
                  onClick={() => document.getElementById("name")?.focus()}
                >
                  发送消息
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                >
                  预约会议
                </Button>
              </div>
              
              <p className="text-nebula-dust/70 mt-8 text-sm">
                🌀 我们相信，最好的解决方案来自深度的理解和持续的对话 🌀
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}