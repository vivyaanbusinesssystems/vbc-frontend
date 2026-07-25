import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
    return (
        <a
            href="https://wa.me/918000000000?text=Hi%20Vivyaan%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 transition-transform ring-4 ring-[#25D366]/20"
        >
            <MessageCircle className="h-7 w-7 fill-white" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-highlight animate-pulse" />
        </a>
    );
}