import { ArrowRight, Briefcase, Search, TrendingUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-5 py-20 md:py-32 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/10 backdrop-blur-md hover:bg-blue-400/20 transition-colors">
              <TrendingUp size={16} className="text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">
                🚀 #1 Job Platform in India
              </span>
            </div>

            {/* main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
              Find Your <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-red-500 bg-clip-text text-transparent">
                Dream Job
              </span>{" "}
              at{" "}
              <span className="inline-block bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                JobTaker
              </span>
            </h1>

            {/* descripiton */}
            <p className="text-lg md:text-xl leading-relaxed text-blue-100/80 max-w-2xl">
              Connect with top employers and discover opportunities that match
              your skills. Whether you're a job seeker or recruiter, we've got
              you covered with powerful tools and seamless experience.
            </p>

            {/* stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 py-6">
              <div className="text-center md:text-left p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">10k+</p>
                <p className="text-sm text-blue-200/70">Active Jobs</p>
              </div>
              <div className="text-center md:text-left p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">5k+</p>
                <p className="text-sm text-blue-200/70">Companies</p>
              </div>
              <div className="text-center md:text-left p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">50k+</p>
                <p className="text-sm text-blue-200/70">Job Seekers</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href={"/jobs"}>
                <Button
                  size={"lg"}
                  className="text-base px-8 h-12 gap-2 group transition-all bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50"
                >
                  <Search size={18} />
                  Browse Jobs{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="text-base px-8 h-12 gap-2 border-blue-400/50 hover:bg-blue-500/10 text-blue-100"
                >
                  <Briefcase size={18} />
                  Learn More
                </Button>
              </Link>
            </div>

            {/* trust indicator section */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200/70 pt-6">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Free to use</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Verified employers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Secure platform</span>
              </div>
            </div>
          </div>

          {/* image section */}
          <div className="flex-1 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-red-500 opacity-30 blur-xl group-hover:opacity-40 transition-opacity rounded-2xl"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400/30 hover:border-blue-400/60 transition-colors">
                <img
                  src="/about.jpg"
                  className="object-cover object-center w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  alt="Hero section"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
