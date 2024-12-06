import { SearchIcon } from "lucide-react";
import { useRef } from "react";
import { cx } from "class-variance-authority";

type Props = {
  className?: string;
};

const SearchBar = ({ className }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={cx(
        className,
        "flex items-center gap-x-2 px-4 h-10 border border-neutral-100 rounded-full bg-white cursor-text has-[:focus]:border-primary-300",
      )}
    >
      <SearchIcon className="h-4 w-4 text-neutral-200" strokeWidth={3} />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent placeholder:text-neutral-200 outline-none caret-neutral-200 text-neutral-300"
      />
    </div>
  );
};

export default SearchBar;
