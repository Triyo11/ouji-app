import Link from "next/link";

const DirectButton = ({ url, label }: { url: string; label: string }) => {
  return (
    <Link
      href={url}
      className="font-semibold text-[var(--foreground)] dark:text-[var(--background)] bg-[var(--background)] dark:bg-[var(--foreground)] hover:shadow-lg transition-all duration-300 rounded-lg px-4 py-2"
    >
      {label}
    </Link>
  );
};

export default DirectButton;
