import { Phone, Linkedin } from "lucide-react";
import { MY_GITHUB_PROFILE } from "@/contsants";

export default function Footer() {
  return (
    <section className="w-full section">
      <p className="text-small w-full text-center text-white-100 underline mb-2">
        <a href={MY_GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
          © Natanaël RALAIVOAVY
        </a>
      </p>

      <div className="flex justify-center gap-6 text-white-100">
        <a
          href="tel:+261388732917"
          className="flex items-center gap-2 hover:underline"
          aria-label="Phone Number"
        >
          <Phone size={16} />
          +261 38 87 329 17
        </a>

        <a
          href="https://www.linkedin.com/in/natana%C3%ABl-ralaivoavy-694447283/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
