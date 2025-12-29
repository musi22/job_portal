"use client";
import { auth_service, useAppData } from "@/context/AppContext";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { Label } from "@/components/ui/label";
import { ArrowRight, Briefcase, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loading from "@/components/loading";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const { isAuth, setUser, loading, setIsAuth } = useAppData();

  if (loading) return <Loading />;

  if (isAuth) return redirect("/");

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBtnLoading(true);
    const formData = new FormData();

    formData.append("role", role);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);

    if (role === "jobseeker") {
      formData.append("bio", bio);
      if (resume) {
        formData.append("file", resume);
      }
    }
    try {
      const { data } = await axios.post(
        `${auth_service}/api/auth/register`,
        formData
      );

      toast.success(data.message);

      Cookies.set("token", data.token, {
        expires: 15,
        secure: false,
        path: "/",
      });
      setUser(data.registeredUser);
      setIsAuth(true);
    } catch (error: any) {
      toast.error(error.response.data.message);
      setIsAuth(false);
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Join JobTaker
          </h1>
          <p className="text-blue-200/70">
            Create your account to start a new journey
          </p>
        </div>
        <div className="border border-blue-400/30 rounded-2xl p-8 shadow-2xl backdrop-blur-md bg-slate-800/40 hover:border-blue-400/50 transition-colors">
          <form onSubmit={submitHandler} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-semibold text-blue-200">
                I want to
              </Label>
              <div className="relative">
                <Briefcase className="icon-style text-blue-400" />
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 border-2 border-blue-400/30 rounded-lg bg-slate-700/50 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="jobseeker">Find a Job</option>
                  <option value="recruiter">Hire Talent</option>
                </select>
              </div>
            </div>

            {role && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-blue-200">
                    Full Name
                  </Label>
                  <div className="relative">
                    <Mail className="icon-style text-blue-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="pl-10 h-11 border-blue-400/30 bg-slate-700/50 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-blue-200">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="icon-style text-blue-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 h-11 border-blue-400/30 bg-slate-700/50 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-blue-200">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="icon-style text-blue-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-10 h-11 border-blue-400/30 bg-slate-700/50 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-blue-200">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Briefcase className="icon-style text-blue-400" />
                    <Input
                      id="phone"
                      type="number"
                      placeholder="+91 1234567890"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      className="pl-10 h-11 border-blue-400/30 bg-slate-700/50 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>

                {role === "jobseeker" && (
                  <div className="space-y-5 pt-4 border-t border-blue-400/20">
                    <div className="space-y-2">
                      <Label htmlFor="resume" className="text-sm font-semibold text-blue-200">
                        Resume (PDF)
                      </Label>
                      <div className="relative">
                        <Briefcase className="icon-style text-blue-400" />
                        <Input
                          id="resume"
                          type="file"
                          accept="application/pdf"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setResume(e.target.files[0]);
                            }
                          }}
                          className="h-11 cursor-pointer border-blue-400/30 bg-slate-700/50 text-white focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-sm font-semibold text-blue-200">
                        Bio
                      </Label>
                      <div className="relative">
                        <Mail className="icon-style text-blue-400" />
                        <Input
                          id="bio"
                          type="text"
                          placeholder="Tell us about yourself..."
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          required
                          className="pl-10 h-11 border-blue-400/30 bg-slate-700/50 text-white placeholder-gray-400 focus:border-blue-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <Button disabled={btnLoading} className="w-full h-11 mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-all">
                  {btnLoading ? "Please Wait..." : "Register"}
                  <ArrowRight size={18} />
                </Button>
              </div>
            )}
          </form>

          <div className="mt-6 pt-6 border-t border-blue-400/20">
            <p className="text-center text-sm text-blue-200/70">
              Already have an account?{" "}
              <Link
                href={"/login"}
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
