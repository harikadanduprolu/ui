
import { MainLayout } from "@/components/MainLayout";
import { sidebarItems } from "@/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CrownIcon, SparklesIcon, StarIcon, ZapIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const PremiumModelsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = [
    "Buttons", "Forms", "Cards", "Navigation", "Tables", 
    "Modals", "Charts", "Footers", "Headers", "All"
  ];
  
  // Premium model showcase items
  const premiumItems = [
    {
      title: "Glassmorphism Collection",
      description: "Modern transparent glass-like UI elements with blur effects",
      category: "Buttons",
      badge: "Popular",
      styles: 125,
      image: "https://placehold.co/300x200/e2e8f0/475569?text=Glassmorphism",
    },
    {
      title: "Neumorphism Suite",
      description: "Soft UI elements with subtle shadows and highlights",
      category: "Cards",
      badge: "Featured",
      styles: 84,
      image: "https://placehold.co/300x200/e2e8f0/475569?text=Neumorphism",
    },
    {
      title: "Gradient Masterclass",
      description: "Vibrant gradient styles for eye-catching elements",
      category: "Buttons",
      styles: 96,
      image: "https://placehold.co/300x200/e2e8f0/475569?text=Gradients",
    },
    {
      title: "3D Transform Pack",
      description: "Elements with realistic 3D effects and transitions",
      category: "Cards",
      badge: "New",
      styles: 42,
      image: "https://placehold.co/300x200/e2e8f0/475569?text=3D+Elements",
    },
    {
      title: "Dark Mode Elegance",
      description: "Sophisticated dark themed components with perfect contrast",
      category: "Navigation",
      styles: 118,
      image: "https://placehold.co/300x200/1e293b/f8fafc?text=Dark+Mode",
    },
    {
      title: "Neon Glow Collection",
      description: "Vibrant elements with eye-catching neon effects",
      category: "Buttons",
      badge: "Hot",
      styles: 67,
      image: "https://placehold.co/300x200/020617/a855f7?text=Neon+Glow",
    },
    {
      title: "Minimalist Design System",
      description: "Clean, simple interface elements with perfect whitespace",
      category: "Forms",
      styles: 153,
      image: "https://placehold.co/300x200/f8fafc/475569?text=Minimalist",
    },
    {
      title: "Animated Interactions",
      description: "Components with subtle, delightful micro-interactions",
      category: "Navigation",
      badge: "Premium",
      styles: 78,
      image: "https://placehold.co/300x200/e2e8f0/475569?text=Animations",
    },
  ];

  // Filter items based on search term and active category
  const filteredItems = premiumItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !activeCategory || activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const unlockPremium = () => {
    const dialog = document.getElementById('premium-dialog') as HTMLDialogElement;
    if (dialog) dialog.showModal();
  };

  return (
    <MainLayout items={sidebarItems}>
      <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold flex items-center gap-2">
              Premium UI Models <CrownIcon className="h-8 w-8 text-yellow-500" />
            </h1>
            <p className="text-muted-foreground mt-2">
              Discover over 1000 premium design variations for your UI components
            </p>
          </div>
          <Button onClick={unlockPremium} className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
            <SparklesIcon className="mr-2 h-4 w-4" />
            Unlock Premium
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex gap-4 mb-4">
            <div className="relative flex-grow">
              <Input
                placeholder="Search premium models..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80 transition-colors px-3 py-1"
                onClick={() => setActiveCategory(category === activeCategory ? null : category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all border border-border/60">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.badge && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary/90 hover:bg-primary">{item.badge}</Badge>
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <Badge variant="outline" className="flex items-center">
                    <StarIcon className="h-3 w-3 mr-1 fill-current" />
                    {item.styles} styles
                  </Badge>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-1">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={unlockPremium}
                >
                  <ZapIcon className="mr-2 h-4 w-4" />
                  Preview Styles
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <h3 className="text-xl font-medium mb-1">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default PremiumModelsPage;
