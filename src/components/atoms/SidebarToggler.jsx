const SidebarToggler = ({ className="", isActive = false, setIsActive = null }) => {
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={toggleSidebar}
      className={`relative h-10 w-10 focus:outline-none ${className}`}
      aria-label="Toggle sidebar"
    >
      <span
        className={`bg-text-lite before:bg-text-lite after:bg-text-lite absolute top-1/2 left-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full transition-all duration-300 before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:transform before:rounded-full before:transition-all before:duration-300 before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:transform after:rounded-full after:transition-all after:duration-300 after:content-[''] ${isActive ? "bg-transparent before:-translate-x-2 before:translate-y-0 before:rotate-45 after:-top-[7px] after:-translate-2 after:-rotate-45" : ""}`}
      />
    </button>
  );
};

export default SidebarToggler;
