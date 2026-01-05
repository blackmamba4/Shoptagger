type FooterProps = {
  variant?: 'dark' | 'light';
};

export function Footer({ variant = 'dark' }: FooterProps) {
  const isLight = variant === 'light';

  return (
    <footer
      className={`w-full py-6 mt-auto border-t ${
        isLight ? 'border-zinc-200 bg-white' : 'border-zinc-900/50'
      }`}
    >
      <div
        className={`container mx-auto px-6 flex justify-between items-center text-xs ${
          isLight ? 'text-zinc-600' : 'text-zinc-600'
        }`}
      >
        <p>&copy; 2024 LowkeyLab. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="#"
            className={`transition-colors ${isLight ? 'hover:text-zinc-800' : 'hover:text-zinc-400'}`}
          >
            Privacy
          </a>
          <a
            href="#"
            className={`transition-colors ${isLight ? 'hover:text-zinc-800' : 'hover:text-zinc-400'}`}
          >
            Terms
          </a>
          <a
            href="#"
            className={`transition-colors ${isLight ? 'hover:text-zinc-800' : 'hover:text-zinc-400'}`}
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
