import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Add your login logic here
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative ">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 p-2 hover:bg-gray-50 rounded-full"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div className="w-full max-w-[450px] space-y-8 p-6">
        <div className="flex flex-col space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-base text-muted-foreground">
            Enter your credentials to sign in to your account
          </p>
        </div>

        <div className="grid gap-8">
          <form onSubmit={onSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Select
                  required
                  value={role}
                  onValueChange={setRole}
                  disabled={isLoading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    sideOffset={4}
                    align="center"
                    className="w-[--radix-select-trigger-width] min-w-[var(--radix-select-trigger-width)] z-[999] bg-white border shadow-md"
                    style={{ position: "relative" }}
                  >
                    <SelectItem
                      value="student"
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      Student
                    </SelectItem>
                    <SelectItem
                      value="teacher"
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      Teacher
                    </SelectItem>
                    <SelectItem
                      value="staff"
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      Staff
                    </SelectItem>
                    <SelectItem
                      value="admin"
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      Admin
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                  disabled={isLoading}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Input id="remember" type="checkbox" className="h-5 w-5" />
                  <label
                    htmlFor="remember"
                    className="text-base text-muted-foreground"
                  >
                    Remember me
                  </label>
                </div>
                <Button
                  variant="link"
                  className="px-0 font-normal"
                  type="button"
                >
                  Forgot password?
                </Button>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 text-lg bg-blue-500 hover:bg-blue-600 text-white"
              >
                {isLoading && (
                  <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-background" />
                )}
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
