import Link from "next/link";
import { IoHome } from "react-icons/io5";

const Breadcrumb = ({ paths }: { paths: { href: string; name: string }[] }) => {
  return (
    <nav className="flex py-3" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {paths.map((path) => (
          <li key={path.href} className="inline-flex items-center">
            {path.href !== paths[paths.length - 1].href ? (
              <Link href={path.href} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                {path.name === 'Home' ? (
                  <div className="flex gap-2">
                    <IoHome className="text-xl"/>
                    <p className="text-base">{path.name}</p>
                  </div>
                ) : (
                  <p className="text-base">{path.name}</p>
                )}
              </Link>
            ) : (
              <span className="text-sm font-medium text-gray-500">
                {path.name === 'Home' ? (
                  <div className="flex gap-2">
                    <IoHome className="text-xl"/>
                    <p className="text-base">{path.name}</p>
                  </div>
                ) : (
                  <p className="text-base">{path.name}</p>
                )}
              </span>
            )}
            {path.href !== paths[paths.length - 1].href && (
              <svg
                className="w-4 h-4 mx-1 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
