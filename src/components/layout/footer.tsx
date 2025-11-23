import Link from "next/link";
import { Zap, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl mb-4"
            >
              <div className="bg-brand-teal p-1 rounded-md text-white">
                <Zap size={16} fill="currentColor" />
              </div>
              FlowTask
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The AI-powered project management tool for teams that want to ship
              faster and argue less.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-teal">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>© 2025 FlowTask Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Twitter
              size={20}
              className="hover:text-foreground cursor-pointer"
            />
            <Github
              size={20}
              className="hover:text-foreground cursor-pointer"
            />
            <Linkedin
              size={20}
              className="hover:text-foreground cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
