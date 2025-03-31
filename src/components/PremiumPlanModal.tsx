
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CrownIcon, CheckIcon, XIcon } from "lucide-react";

export function PremiumPlanModal() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const verifyCode = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (code.trim().toUpperCase() === "HAARI507248") {
        toast.success("Premium access granted!", {
          description: "You now have access to all premium models."
        });
        const dialog = document.getElementById('premium-dialog') as HTMLDialogElement;
        if (dialog) dialog.close();
        // In a real app, you would update user's premium status in a state manager or backend
      } else {
        toast.error("Invalid activation code", {
          description: "Please check your code and try again."
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <dialog id="premium-dialog" className="modal bg-background/80 backdrop-blur-sm">
      <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center">
            <CrownIcon className="mr-2 h-6 w-6 text-yellow-500" />
            Premium Access
          </h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => {
              const dialog = document.getElementById('premium-dialog') as HTMLDialogElement;
              if (dialog) dialog.close();
            }}
          >
            <XIcon className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Unlock Premium Features</h3>
          <p className="text-muted-foreground">
            Enter your activation code to unlock premium UI models and components.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="activation-code" className="text-sm font-medium">
              Activation Code
            </label>
            <Input 
              id="activation-code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your code (e.g., HAARI507248)"
              className="w-full"
            />
          </div>
          
          <Button 
            className="w-full" 
            onClick={verifyCode}
            disabled={isLoading || !code.trim()}
          >
            {isLoading ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                </span>
                Verifying...
              </>
            ) : (
              <>Unlock Premium</>
            )}
          </Button>
        </div>
        
        <div className="mt-6 pt-6 border-t">
          <h4 className="font-medium mb-2">Premium Benefits:</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-sm">
              <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
              Access to all premium UI component styles
            </li>
            <li className="flex items-center text-sm">
              <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
              Download source code for all components
            </li>
            <li className="flex items-center text-sm">
              <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
              Priority support and updates
            </li>
          </ul>
        </div>
      </div>
    </dialog>
  );
}
