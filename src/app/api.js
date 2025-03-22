import React, { useState } from "react";
    import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Link, Sparkles } from "lucide-react";

export default function Landing() {
    const [domain, setDomain] = useState("");
    const [affiliateLinks, setAffiliateLinks] = useState(["", "", ""]);
    const [blogType, setBlogType] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg flex items-center justify-center">
                        <span className="text-3xl sm:text-4xl text-white font-bold">B</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Bloggo</h2>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                        Create your new blog - within seconds!
                    </h1>
                    <p className="text-xl text-gray-600">
                        A complete AI blog generator for affiliate marketers.
                    </p>
                </div>

                <div className="space-y-12">
                    <Card className="p-6 backdrop-blur-sm bg-white/50">
                        <label className="block text-lg font-medium text-gray-700 mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-purple-500" />
                            Which domain would you like for your new blog?
                        </label>
                        <Input
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            placeholder="yourdomain.com"
                            className="text-lg"
                        />
                    </Card>

                    <Card className="p-6 backdrop-blur-sm bg-white/50">
                        <label className="block text-lg font-medium text-gray-700 mb-4 flex items-center gap-2">
                            <Link className="w-5 h-5 text-purple-500" />
                            Insert 3 links for affiliate products
                        </label>
                        <div className="space-y-4">
                            {affiliateLinks.map((link, index) => (
                                <Input
                                    key={index}
                                    value={link}
                                    onChange={(e) => {
                                        const newLinks = [...affiliateLinks];
                                        newLinks[index] = e.target.value;
                                        setAffiliateLinks(newLinks);
                                    }}
                                    placeholder={`Affiliate product ${index + 1} URL`}
                                />
                            ))}
                        </div>
                    </Card>

                    <Card className="p-6 backdrop-blur-sm bg-white/50">
                        <label className="block text-lg font-medium text-gray-700 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-500" />
                            What type of blog would you like to create?
                        </label>
                        <div className="relative">
              <textarea
                  value={blogType}
                  onChange={(e) => setBlogType(e.target.value)}
                  placeholder="Describe your ideal blog (e.g., 'A tech review blog focusing on smartphone accessories...')"
                  className="min-h-[100px] w-full rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500 p-4 text-gray-900 shadow-sm"
              />
                        </div>
                    </Card>

                    <Button
                        className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
                    >
                        <Sparkles className="w-5 h-5 mr-2" />
                        Generate My Blog
                    </Button>
                </div>
            </div>
        </div>
    );
}