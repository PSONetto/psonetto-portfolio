import { ImSpinner9 } from 'react-icons/im';

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-black to-gray-950 text-white text-[3rem]">
      <span className="animate-spin">
        <ImSpinner9 />
      </span>
    </div>
  );
}
