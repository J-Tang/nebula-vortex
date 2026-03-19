"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants/site";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-4 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-nebula-core to-nebula-glow rounded-full blur group-hover:blur-xl transition-all duration-300" />
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-nebula-core to-nebula-glow flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                <Sparkles className="w-5 h-5 text-nebula-light" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-nebula-light to-nebula-dust bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </span>
              <span className="text-xs text-nebula-dust/70">
                {SITE_CONFIG.englishName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    isActive
                      ? "text-nebula-light"
                      : "text-nebula-dust hover:text-nebula-light"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-gradient-to-r from-nebula-core/20 to-nebula-glow/20 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:inline-flex"
            >
              登录
            </Button>
            <Button
              variant="primary"
              size="sm"
            >
              开始使用
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-nebula-dust hover:text-nebula-light hover:bg-gray-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-2 border-t border-gray-800/50 mt-4">
                {NAVIGATION.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                        isActive
                          ? "text-nebula-light bg-gradient-to-r from-nebula-core/20 to-nebula-glow/20"
                          : "text-nebula-dust hover:text-nebula-light hover:bg-gray-800/50"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-4 space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => setIsOpen(false)}
                  >
                    登录
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    onClick={() => setIsOpen(false)}
                  >
                    开始使用
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}