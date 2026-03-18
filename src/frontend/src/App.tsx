import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ChevronRight,
  ExternalLink,
  Film,
  Github,
  Globe,
  Heart,
  Instagram,
  Mail,
  Menu,
  MessageSquare,
  Play,
  Send,
  Star,
  Twitter,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { type MCUMovie, MCU_MOVIES, PHASE_LABELS } from "./data/movies";
import { useSubmitFeedback } from "./hooks/useQueries";

const queryClient = new QueryClient();

const PHASE_BADGE_COLORS: Record<number, string> = {
  1: "bg-yellow-600/80 text-yellow-100",
  2: "bg-red-700/80 text-red-100",
  3: "bg-purple-700/80 text-purple-100",
  4: "bg-blue-700/80 text-blue-100",
  5: "bg-green-700/80 text-green-100",
  6: "bg-orange-700/80 text-orange-100",
};

function MovieCard({
  movie,
  onClick,
}: { movie: MCUMovie; onClick: () => void }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative bg-card border border-border rounded-lg overflow-hidden card-glow transition-all duration-300">
        {/* Poster */}
        <div className="relative w-full aspect-[2/3] overflow-hidden">
          {movie.posterUrl && !imgError ? (
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.15 0 0) 0%, oklch(var(--maroon) / 0.5) 50%, oklch(0.10 0 0) 100%)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <Film className="w-10 h-10 text-gold mb-3 opacity-60" />
                <span className="text-center text-sm font-display font-bold text-gold-bright leading-tight">
                  {movie.title}
                </span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded ${PHASE_BADGE_COLORS[movie.phase]}`}
            >
              {PHASE_LABELS[movie.phase]}
            </span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-gold text-black rounded-full p-2">
              <Play className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-display font-bold text-sm text-foreground leading-tight line-clamp-2">
            {movie.title}
          </h3>
          <p className="text-muted-foreground text-xs mt-1">{movie.year}</p>
          <button
            type="button"
            className="mt-2 text-xs text-gold font-semibold tracking-wider uppercase hover:text-gold-bright transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function MovieModal({
  movie,
  onClose,
}: { movie: MCUMovie; onClose: () => void }) {
  const marvelUrl = `https://www.marvel.com/movies/${movie.marvelSlug}`;
  const sonyUrl = "https://www.sonypictures.com/movies/spiderman";

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl bg-card border-border text-foreground max-h-[90vh] overflow-y-auto"
        data-ocid="movie.dialog"
      >
        <DialogHeader>
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded ${PHASE_BADGE_COLORS[movie.phase]} mb-2 inline-block`}
              >
                {PHASE_LABELS[movie.phase]}
              </span>
              <DialogTitle className="font-display font-bold text-2xl text-gold-bright mt-1">
                {movie.title}
              </DialogTitle>
              <p className="text-muted-foreground text-sm mt-1">{movie.year}</p>
            </div>
            {movie.hasSony && (
              <Badge
                variant="secondary"
                className="text-xs bg-secondary text-muted-foreground shrink-0"
              >
                Sony/Marvel
              </Badge>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">
              Synopsis
            </h4>
            <p className="text-foreground/90 leading-relaxed text-sm">
              {movie.synopsis}
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">
              Cast
            </h4>
            <div className="flex flex-wrap gap-2">
              {movie.cast.map((actor) => (
                <span
                  key={actor}
                  className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground border border-border"
                >
                  {actor}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-3 border-t border-border">
            <a
              href={marvelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gold text-black font-bold text-sm rounded hover:bg-gold-bright transition-colors"
              data-ocid="movie.link"
            >
              <ExternalLink className="w-4 h-4" />
              Official Marvel Page
            </a>
            {movie.hasSony && (
              <a
                href={sonyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-gold/50 text-gold font-bold text-sm rounded hover:bg-gold/10 transition-colors"
                data-ocid="movie.secondary_button"
              >
                <ExternalLink className="w-4 h-4" />
                Sony Pictures
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { mutate: submitFeedback, isPending, isSuccess } = useSubmitFeedback();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    submitFeedback(
      { name, email, message },
      {
        onSuccess: () => {
          toast.success("Thank you! Your feedback has been submitted.");
          setName("");
          setEmail("");
          setMessage("");
        },
        onError: () => {
          toast.error("Failed to submit feedback. Please try again.");
        },
      },
    );
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8" data-ocid="feedback.success_state">
        <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto mb-4">
          <Star className="w-8 h-8 text-gold" />
        </div>
        <p className="text-gold font-display font-bold text-xl">
          Feedback Received!
        </p>
        <p className="text-muted-foreground mt-2 text-sm">
          Thank you for helping improve MCU Verse.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      data-ocid="feedback.panel"
    >
      <div>
        <Label
          htmlFor="fb-name"
          className="text-gold text-xs uppercase tracking-widest font-semibold mb-1.5 block"
        >
          <User className="inline w-3 h-3 mr-1" />
          Name
        </Label>
        <Input
          id="fb-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
          data-ocid="feedback.input"
        />
      </div>
      <div>
        <Label
          htmlFor="fb-email"
          className="text-gold text-xs uppercase tracking-widest font-semibold mb-1.5 block"
        >
          <Mail className="inline w-3 h-3 mr-1" />
          Email
        </Label>
        <Input
          id="fb-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
          data-ocid="feedback.input"
        />
      </div>
      <div>
        <Label
          htmlFor="fb-message"
          className="text-gold text-xs uppercase tracking-widest font-semibold mb-1.5 block"
        >
          <MessageSquare className="inline w-3 h-3 mr-1" />
          Message
        </Label>
        <Textarea
          id="fb-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share your thoughts about MCU Verse..."
          rows={4}
          className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
          data-ocid="feedback.textarea"
        />
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-gold text-black font-bold hover:bg-gold-bright transition-colors"
        data-ocid="feedback.submit_button"
      >
        {isPending ? (
          <span className="flex items-center gap-2">
            <span className="animate-spin">⟳</span> Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" /> Send Feedback
          </span>
        )}
      </Button>
    </form>
  );
}

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  width: ((i * 1.7) % 4) + 1,
  height: ((i * 2.3) % 4) + 1,
  left: (i * 17.3) % 100,
  top: (i * 13.7) % 100,
  lightness: 0.65 + (i % 5) * 0.04,
  hue: 55 + (i % 6) * 5,
  opacity: 0.4 + (i % 3) * 0.13,
}));

function AppInner() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MCUMovie | null>(null);
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const moviesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const developerRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const filteredMovies = activePhase
    ? MCU_MOVIES.filter((m) => m.phase === activePhase)
    : MCU_MOVIES;

  const phases = [1, 2, 3, 4, 5, 6];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ═══ NAVIGATION ═══ */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.25 0.12 20) 0%, oklch(0.32 0.14 20) 100%)",
          borderBottom: "1px solid oklch(0.73 0.13 75 / 0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gold flex items-center justify-center">
              <Star className="w-5 h-5 text-black fill-black" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-wide gold-gradient">
              MCU Verse
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              {
                label: "Home",
                action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
              },
              { label: "Movies", action: () => scrollTo(moviesRef) },
              { label: "About MCU", action: () => scrollTo(aboutRef) },
              { label: "Developer", action: () => scrollTo(developerRef) },
              { label: "Feedback", action: () => scrollTo(feedbackRef) },
            ].map(({ label, action }) => (
              <button
                type="button"
                key={label}
                onClick={action}
                className="text-foreground/80 hover:text-gold font-medium text-sm tracking-wide transition-colors hover:gold-underline"
                data-ocid="nav.link"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-ocid="nav.toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gold/20 overflow-hidden"
              style={{ background: "oklch(0.22 0.10 20)" }}
            >
              <div className="px-4 py-3 space-y-1">
                {[
                  {
                    label: "Home",
                    action: () =>
                      window.scrollTo({ top: 0, behavior: "smooth" }),
                  },
                  { label: "Movies", action: () => scrollTo(moviesRef) },
                  { label: "About MCU", action: () => scrollTo(aboutRef) },
                  { label: "Developer", action: () => scrollTo(developerRef) },
                  { label: "Feedback", action: () => scrollTo(feedbackRef) },
                ].map(({ label, action }) => (
                  <button
                    type="button"
                    key={label}
                    onClick={action}
                    className="block w-full text-left py-2 px-3 text-foreground/80 hover:text-gold rounded transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══ HERO SECTION ═══ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, oklch(0.35 0.15 20 / 0.4) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, oklch(0.55 0.18 40 / 0.15) 0%, transparent 50%), linear-gradient(180deg, oklch(0.07 0 0) 0%, oklch(0.09 0.02 20) 50%, oklch(0.07 0 0) 100%)",
        }}
      >
        {/* Particle/ember effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: `${p.width}px`,
                height: `${p.height}px`,
                left: `${p.left}%`,
                top: `${p.top}%`,
                background: `oklch(${p.lightness} 0.18 ${p.hue})`,
                opacity: p.opacity,
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
              ✦ The Ultimate Fan Hub
            </p>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-none mb-6">
              Explore the
              <span className="block gold-gradient">Cinematic</span>
              <span className="block">Multiverse</span>
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-md">
              Your definitive guide to the Marvel Cinematic Universe—30+ films,
              iconic heroes, epic battles, and the interconnected story that
              changed cinema forever.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo(moviesRef)}
                className="bg-gold text-black font-bold text-base px-8 py-3 h-auto hover:bg-gold-bright transition-all shadow-gold"
                data-ocid="hero.primary_button"
              >
                <Film className="w-5 h-5 mr-2" />
                Explore Movies
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo(aboutRef)}
                className="border-gold/50 text-gold font-bold text-base px-8 py-3 h-auto hover:bg-gold/10 hover:border-gold transition-all"
                data-ocid="hero.secondary_button"
              >
                About MCU
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div
              className="relative w-96 h-96"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.35 0.15 20 / 0.3) 0%, transparent 70%)",
              }}
            >
              {/* Decorative rings */}
              <div className="absolute inset-4 rounded-full border-2 border-gold/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-gold/30 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-20 rounded-full border border-gold/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-display font-extrabold gold-gradient">
                    M
                  </div>
                  <div className="text-gold text-sm font-bold uppercase tracking-[0.3em] mt-2">
                    MCU Verse
                  </div>
                  <div className="text-muted-foreground text-xs mt-1">
                    {MCU_MOVIES.length} Films
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div
          className="absolute bottom-0 left-0 right-0 border-t border-gold/20"
          style={{
            background: "oklch(0.09 0.02 20 / 0.8)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-3 sm:grid-cols-5 gap-4">
            {phases.map((phase) => (
              <div key={phase} className="text-center">
                <p className="text-gold font-display font-bold text-xl">
                  {MCU_MOVIES.filter((m) => m.phase === phase).length}
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">
                  Phase {phase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT MCU SECTION ═══ */}
      <section
        ref={aboutRef}
        className="py-20"
        style={{ background: "oklch(0.09 0 0)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              ✦ The Story Begins
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground">
              About the <span className="gold-gradient">MCU</span>
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5 text-foreground/80 leading-relaxed"
            >
              <p className="text-lg">
                The{" "}
                <span className="text-gold font-semibold">
                  Marvel Cinematic Universe (MCU)
                </span>{" "}
                is a groundbreaking American media franchise centered on a
                series of superhero films produced by Marvel Studios. It began
                in 2008 with the release of <em>Iron Man</em>—a film that
                forever changed the landscape of modern cinema.
              </p>
              <p>
                What started as a bold experiment became the{" "}
                <span className="text-gold font-semibold">
                  highest-grossing film franchise in history
                </span>
                , with interconnected storylines, beloved characters, and epic
                battles spanning multiple phases. Each phase builds upon the
                last, weaving an intricate tapestry of heroes, villains, and
                infinite possibilities across the multiverse.
              </p>
              <p>
                Over 30 films have been released across five phases, introducing
                audiences to Iron Man, Captain America, Thor, the Hulk, Black
                Panther, Spider-Man, and countless others—each hero with their
                own story, all united by a shared universe unlike anything ever
                created before.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  label: "Total Films",
                  value: `${MCU_MOVIES.length}+`,
                  sub: "and counting",
                },
                { label: "Phases", value: "5", sub: "completed" },
                { label: "Box Office", value: "$30B+", sub: "worldwide" },
                { label: "Since", value: "2008", sub: "Iron Man" },
              ].map(({ label, value, sub }) => (
                <div
                  key={label}
                  className="p-5 rounded-lg border border-border bg-card text-center card-glow transition-all duration-300"
                >
                  <p className="font-display font-extrabold text-3xl text-gold">
                    {value}
                  </p>
                  <p className="text-foreground font-semibold text-sm mt-1">
                    {label}
                  </p>
                  <p className="text-muted-foreground text-xs">{sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ DEVELOPER SECTION ═══ */}
      <section
        ref={developerRef}
        style={{ background: "oklch(0.96 0 0)" }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: "oklch(0.35 0.14 20)" }}
            >
              ✦ The Fan Behind the Site
            </p>
            <h2
              className="font-display font-extrabold text-4xl sm:text-5xl"
              style={{ color: "oklch(0.10 0 0)" }}
            >
              Meet the Developer
            </h2>
            <div
              className="w-24 h-0.5 mx-auto mt-4"
              style={{ background: "oklch(0.73 0.13 75)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 shadow-xl"
            style={{
              background: "white",
              border: "2px solid oklch(0.73 0.13 75 / 0.3)",
            }}
          >
            <div className="shrink-0">
              <div
                className="w-32 h-32 rounded-full overflow-hidden border-4"
                style={{ borderColor: "oklch(0.73 0.13 75)" }}
              >
                <img
                  src="/assets/generated/developer-alex.dim_200x200.jpg"
                  alt="Piyush Patil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3
                className="font-display font-extrabold text-2xl mb-1"
                style={{ color: "oklch(0.10 0 0)" }}
              >
                Piyush Patil
              </h3>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: "oklch(0.35 0.14 20)" }}
              >
                Passionate MCU Enthusiast & Web Developer
              </p>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "oklch(0.30 0 0)" }}
              >
                A lifelong Marvel fan who watched Iron Man in theaters in 2008
                and never looked back. Piyush built MCU Verse to create the
                ultimate fan resource—bringing together comprehensive
                information about every MCU film, connecting fans with official
                Marvel resources, and celebrating the franchise that changed
                storytelling forever.
              </p>
              <div className="flex gap-4 mt-5 justify-center sm:justify-start">
                {[
                  { icon: Github, href: "https://github.com" },
                  { icon: Twitter, href: "https://twitter.com" },
                  { icon: Instagram, href: "https://instagram.com" },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      background: "oklch(0.93 0 0)",
                      color: "oklch(0.30 0 0)",
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ MOVIES SECTION ═══ */}
      <section
        ref={moviesRef}
        className="py-20"
        style={{ background: "oklch(0.07 0 0)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              ✦ Complete Collection
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground">
              MCU Film <span className="gold-gradient">Collection</span>
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Every film in the Marvel Cinematic Universe, organized by phase.
              Click any card to explore details.
            </p>
          </motion.div>

          {/* Phase filter */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            data-ocid="movies.panel"
          >
            <button
              type="button"
              onClick={() => setActivePhase(null)}
              className={`px-4 py-2 rounded text-sm font-bold uppercase tracking-wider transition-all ${
                activePhase === null
                  ? "bg-gold text-black"
                  : "border border-gold/40 text-gold/80 hover:border-gold hover:text-gold"
              }`}
              data-ocid="movies.tab"
            >
              All ({MCU_MOVIES.length})
            </button>
            {phases.map((phase) => (
              <button
                type="button"
                key={phase}
                onClick={() => setActivePhase(phase)}
                className={`px-4 py-2 rounded text-sm font-bold uppercase tracking-wider transition-all ${
                  activePhase === phase
                    ? "bg-gold text-black"
                    : "border border-gold/40 text-gold/80 hover:border-gold hover:text-gold"
                }`}
                data-ocid="movies.tab"
              >
                Phase {phase} (
                {MCU_MOVIES.filter((m) => m.phase === phase).length})
              </button>
            ))}
          </div>

          {/* Movie grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            <AnimatePresence>
              {filteredMovies.map((movie, index) => (
                <motion.div
                  key={movie.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  data-ocid={`movies.item.${index + 1}`}
                >
                  <MovieCard
                    movie={movie}
                    onClick={() => setSelectedMovie(movie)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══ OFFICIAL LINKS ═══ */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.10 20) 0%, oklch(0.15 0.06 20) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, oklch(0.73 0.13 75) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              ✦ Official Destinations
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
              Visit Official Pages
            </h2>
            <p className="text-foreground/70 mb-10 max-w-lg mx-auto">
              Head directly to the official Marvel and Sony Pictures pages for
              news, trailers, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              {[
                {
                  href: "https://www.marvel.com",
                  label: "Marvel Official",
                  sub: "marvel.com",
                  icon: Globe,
                  primary: true,
                },
                {
                  href: "https://www.marvel.com/movies",
                  label: "Marvel Movies",
                  sub: "marvel.com/movies",
                  icon: Film,
                  primary: false,
                },
                {
                  href: "https://www.sonypictures.com",
                  label: "Sony Pictures",
                  sub: "sonypictures.com",
                  icon: ExternalLink,
                  primary: false,
                },
              ].map(({ href, label, sub, icon: Icon, primary }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-7 py-4 rounded-lg font-bold transition-all group ${
                    primary
                      ? "bg-gold text-black hover:bg-gold-bright shadow-gold"
                      : "border-2 border-gold/50 text-gold hover:bg-gold/10 hover:border-gold"
                  }`}
                  data-ocid="links.link"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-left">
                    <span className="block text-base">{label}</span>
                    <span className="block text-xs opacity-70 font-normal">
                      {sub}
                    </span>
                  </span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FEEDBACK SECTION ═══ */}
      <section
        ref={feedbackRef}
        className="py-20"
        style={{ background: "oklch(0.09 0 0)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              ✦ Your Voice Matters
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground">
              Share Your <span className="gold-gradient">Thoughts</span>
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
            <p className="text-muted-foreground mt-4">
              Have feedback, suggestions, or just want to talk Marvel? We'd love
              to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <FeedbackForm />
          </motion.div>
        </div>
      </section>

      {/* ═══ DISCLAIMER & CREDITS ═══ */}
      <section
        style={{
          background: "oklch(0.08 0.01 20)",
          borderTop: "1px solid oklch(0.73 0.13 75 / 0.15)",
        }}
        className="py-14"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              ✦ Legal & Credits
            </p>
            <h2 className="font-display font-extrabold text-3xl text-foreground">
              Disclaimer <span className="gold-gradient">&amp;</span> Credits
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-3" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-gold font-bold text-sm uppercase tracking-widest mb-3">
                Fan Site Disclaimer
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                MCU Verse is an independent fan site created for entertainment
                and informational purposes only. This site is{" "}
                <strong className="text-foreground">
                  not affiliated with, endorsed by, or connected to
                </strong>{" "}
                Marvel Entertainment, LLC, Marvel Studios, The Walt Disney
                Company, or Sony Pictures Entertainment Inc. in any way.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                All Marvel characters, names, logos, and related materials are
                trademarks and © Marvel Entertainment, LLC. Spider-Man related
                content is co-owned by Sony Pictures Entertainment Inc. All
                rights reserved.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-gold font-bold text-sm uppercase tracking-widest mb-3">
                Credits &amp; Sources
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="text-foreground font-semibold">
                    Site Created by:
                  </span>{" "}
                  Piyush Patil
                </li>
                <li>
                  <span className="text-foreground font-semibold">
                    Movie Data:
                  </span>{" "}
                  Official Marvel Studios &amp;{" "}
                  <a
                    href="https://www.themoviedb.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-bright transition-colors"
                  >
                    The Movie Database (TMDB)
                  </a>
                </li>
                <li>
                  <span className="text-foreground font-semibold">
                    Poster Images:
                  </span>{" "}
                  <a
                    href="https://www.themoviedb.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-bright transition-colors"
                  >
                    TMDB
                  </a>{" "}
                  — This product uses the TMDB API but is not endorsed or
                  certified by TMDB.
                </li>
                <li>
                  <span className="text-foreground font-semibold">
                    Official Source:
                  </span>{" "}
                  <a
                    href="https://www.marvel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-bright transition-colors"
                  >
                    marvel.com
                  </a>
                </li>
                <li>
                  <span className="text-foreground font-semibold">
                    Built with:
                  </span>{" "}
                  React, TypeScript &amp; caffeine.ai
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer
        style={{
          background: "oklch(0.07 0.02 20)",
          borderTop: "1px solid oklch(0.73 0.13 75 / 0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-10">
          {/* Col 1 – Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded bg-gold flex items-center justify-center">
                <Star className="w-4 h-4 text-black fill-black" />
              </div>
              <span className="font-display font-extrabold text-lg gold-gradient">
                MCU Verse
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The ultimate Marvel fan resource. Explore every film, discover the
              stories, and connect with the universe.
            </p>
          </div>

          {/* Col 2 – Site Links */}
          <div>
            <h4 className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Site Info
            </h4>
            <ul className="space-y-2">
              {[
                {
                  label: "Home",
                  action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                },
                { label: "Movies", action: () => scrollTo(moviesRef) },
                { label: "About MCU", action: () => scrollTo(aboutRef) },
                { label: "Developer", action: () => scrollTo(developerRef) },
                { label: "Feedback", action: () => scrollTo(feedbackRef) },
                { label: "Marvel Official", href: "https://www.marvel.com" },
                {
                  label: "Sony Pictures",
                  href: "https://www.sonypictures.com",
                },
              ].map(
                ({
                  label,
                  action,
                  href,
                }: { label: string; action?: () => void; href?: string }) =>
                  href ? (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-gold text-sm transition-colors flex items-center gap-1"
                      >
                        {label} <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  ) : (
                    <li key={label}>
                      <button
                        type="button"
                        onClick={action}
                        className="text-muted-foreground hover:text-gold text-sm transition-colors"
                      >
                        {label}
                      </button>
                    </li>
                  ),
              )}
            </ul>
          </div>

          {/* Col 3 – Quick Feedback Thoughts */}
          <div>
            <h4 className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Quick Thoughts
            </h4>
            <p className="text-muted-foreground text-sm mb-3">
              Drop a quick message or visit the feedback section above.
            </p>
            <button
              type="button"
              onClick={() => scrollTo(feedbackRef)}
              className="flex items-center gap-2 text-gold hover:text-gold-bright text-sm font-semibold transition-colors"
              data-ocid="footer.link"
            >
              <MessageSquare className="w-4 h-4" />
              Leave Feedback →
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{ borderTop: "1px solid oklch(0.73 0.13 75 / 0.15)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-xs text-center sm:text-left leading-relaxed">
              © {currentYear} MCU Verse Fan Site | Not affiliated with Marvel
              Entertainment, LLC or Sony Pictures Entertainment Inc.
              <br />
              Marvel, the Marvel logo, and all related character names and their
              distinctive likenesses are trademarks of Marvel Entertainment,
              LLC. All Rights Reserved.
            </p>
            <p className="text-muted-foreground text-xs shrink-0 flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-gold fill-gold" /> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-bright transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Movie Detail Modal */}
      <AnimatePresence>
        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </AnimatePresence>

      <Toaster richColors />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppInner />
    </QueryClientProvider>
  );
}
