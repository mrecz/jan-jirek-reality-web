export default function TestimonialDetail({
  testimonial,
  className,
  children,
  rotation,
}: {
  testimonial: {
    fullname: string;
    date?: string;
    channel?: string;
  };
  className?: string;
  children: React.ReactNode;
  rotation?: number;
}) {
  const channelIcon = (channel: string) => {
    switch (channel) {
      case "Twitter":
        return (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
            />
          </svg>
        );
      case "Google":
        return (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path d="M15.68 6.546H8.044v3.273h4.328c-.692 2.182-2.4 2.909-4.363 2.909a4.728 4.728 0 1 1 3.035-8.346l2.378-2.265A8 8 0 1 0 8.01 16.001c4.411 0 8.4-2.909 7.671-9.455Z"></path>
          </svg>
        );
      case "YouTube":
        return (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="13"
            fill="none"
          >
            <path d="M16.044 3.416c-.178-1.303-.762-2.213-2.158-2.438C11.693.54 8.294.48 8.294.48s-3.4-.059-5.606.303C1.284.958.568 1.846.446 3.143.223 4.44.19 6.34.19 6.34s-.033 1.9.144 3.203c.178 1.303.762 2.214 2.158 2.438 2.193.438 5.592.498 5.592.498s3.4.059 5.606-.303c1.405-.275 2.02-1.065 2.242-2.36.223-1.297.256-3.197.256-3.197s.033-1.9-.144-3.203ZM6.137 9.444l.105-5.999 4.946 3.087-5.051 2.912Z"></path>
          </svg>
        );
      default:
        return "";
    }
  };

  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${className}`}
      style={rotation ? { transform: `rotate(${rotation}deg)` } : undefined}
    >
      <header className="mb-4 flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <div className="font-bold">{testimonial.fullname}</div>
      </header>
      <div className="grow text-sm text-gray-700">{children}</div>
      <footer className="mt-4 flex items-center gap-2.5 text-gray-700">
        {testimonial.channel && channelIcon(testimonial.channel)}
        <div className="text-xs">{testimonial.date || ""}</div>
      </footer>
    </article>
  );
}
