import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG, NAVIGATION } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "产品",
      links: [
        { label: "功能", href: "/#features" },
        { label: "定价", href: "/pricing" },
        { label: "案例", href: "/cases" },
        { label: "更新日志", href: "/changelog" },
      ],
    },
    {
      title: "资源",
      links: [
        { label: "文档", href: "/docs" },
        { label: "教程", href: "/tutorials" },
        { label: "博客", href: "/blog" },
        { label: "API", href: "/api" },
      ],
    },
    {
      title: "公司",
      links: [
        { label: "关于", href: "/about" },
        { label: "团队", href: "/team" },
        { label: "职业", href: "/careers" },
        { label: "联系", href: "/contact" },
      ],
    },
    {
      title: "法律",
      links: [
        { label: "隐私政策", href: "/privacy" },
        { label: "服务条款", href: "/terms" },
        { label: "Cookie政策", href: "/cookies" },
        { label: "安全", href: "/security" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: SITE_CONFIG.social.github, label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: SITE_CONFIG.social.twitter, label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: `mailto:${SITE_CONFIG.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-nebula-dark/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-nebula-core to-nebula-glow rounded-full blur group-hover:blur-xl transition-all duration-300" />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-nebula-core to-nebula-glow flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                  <Sparkles className="w-6 h-6 text-nebula-light" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-nebula-light to-nebula-dust bg-clip-text text-transparent">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-sm text-nebula-dust/70">
                  {SITE_CONFIG.englishName}
                </span>
              </div>
            </Link>
            <p className="text-nebula-dust max-w-md leading-relaxed">
              {SITE_CONFIG.description}
              我们致力于构建理解复杂性的工具，帮助人们在数字宇宙中导航、创造和演化。
            </p>
            
            {/* Social links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-nebula-dust hover:text-nebula-light hover:bg-gray-800/50 transition-colors group"
                  aria-label={social.label}
                >
                  <span className="group-hover:scale-110 transition-transform block">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h3 className="text-lg font-semibold text-nebula-light mb-4">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-nebula-dust hover:text-nebula-light hover:translate-x-1 transition-all duration-300 inline-flex items-center"
                        >
                          <span className="mr-2">›</span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-nebula-dust/70">
              © {currentYear} {SITE_CONFIG.name}. 保留所有权利。
            </p>
            <p className="text-nebula-dust/50 text-sm mt-1">
              本网站正在持续演化中 · 欢迎反馈与贡献
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-nebula-dust/70 hover:text-nebula-light transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Philosophy note */}
        <div className="mt-8 text-center">
          <p className="text-nebula-dust/50 text-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            从混沌到秩序，从秩序到可能
            <Sparkles className="w-4 h-4" />
          </p>
        </div>
      </div>
    </footer>
  );
}