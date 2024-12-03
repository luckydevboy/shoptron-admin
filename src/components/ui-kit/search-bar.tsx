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
        "flex items-center gap-x-2 px-4 h-10 border border-alice-blue rounded-full bg-white cursor-text has-[:focus]:border-jordy-blue",
      )}
    >
      <SearchIcon className="h-4 w-4 text-french-gray" strokeWidth={3} />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent placeholder:text-french-gray outline-none caret-french-gray text-payne-gray"
      />
    </div>
  );
};

export default SearchBar;
