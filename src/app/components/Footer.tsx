export function Footer() {
  return (
    <footer className="w-full py-6 mt-auto border-t border-zinc-900/50">
      <div className="container mx-auto px-6 flex justify-between items-center text-xs text-zinc-600">
        <p>&copy; 2024 LowkeyLab. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
