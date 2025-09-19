import { motion } from "framer-motion";
import { Hammer, Clock, Mail, Github } from "lucide-react";
import Squares from "./components/Squares";

export default function App() {
    return (
        <div className="relative h-dvh w-full">
            {/* animated aurora blobs */}
            <Aurora />

            <main className="relative z-10 h-full grid place-items-center p-6">
                <motion.section
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-xl w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-black/40"
                >
                    <header className="flex items-center gap-3 mb-6">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 border border-white/10 drop-shadow-glow">
                            <Hammer className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold tracking-tight">
                                Zhusha.dev
                            </h1>
                        </div>
                    </header>

                    <p className="text-base leading-7 text-white/80">
                        This site is under construction. Check back shortly — or
                        reach out if you need to contact us in the meantime.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <a
                            href="mailto:andzej200@gmail.com"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/15 active:translate-y-px"
                        >
                            <Mail className="h-4 w-4 transition group-hover:scale-110" />
                            Contact
                        </a>
                        <a
                            href="https://github.com/Zhusha7/"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-sm font-medium transition hover:from-white/15 hover:to-white/10 active:translate-y-px"
                        >
                            <Github className="h-4 w-4 transition group-hover:scale-110" />
                            GitHub
                        </a>
                    </div>

                    <footer className="mt-6 flex items-center gap-2 text-xs text-white/60">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Planned launch: Q1 2026</span>
                    </footer>
                </motion.section>
            </main>
        </div>
    );
}

function Aurora() {
    return (
        <div aria-hidden className="absolute inset-0 overflow-hidden">
            <Squares
                speed={0.5}
                squareSize={40}
                direction="diagonal" // up, down, left, right, diagonal
                borderColor="#fff"
                hoverFillColor="#222"
            />
            <motion.div
                className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(80,160,255,0.3), transparent)",
                }}
                animate={{ x: [0, 30, -20, 0], y: [0, -10, 20, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute -bottom-32 -right-24 h-[38rem] w-[38rem] rounded-full blur-3xl"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(200,120,255,0.25), transparent)",
                }}
                animate={{ x: [0, -25, 15, 0], y: [0, 15, -10, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            {/* glass shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
        </div>
    );
}
