import Image from "next/image";

export default function HeaderBar() {
  return (
    <div className="bg-gray-800/40 p-4 flex items-center">
      <Image
        src="/images/Lake_Isabella.jpeg"
        alt="Image of me on a Rock at Lake Isabella"
        width={80}
        height={96}
        className="w-10 h-10 rounded-full object-cover mr-4"
      />
      <button className=" font-extrabold text-blue-600 text-lg cursor-pointer">
        Korbin Hillan
      </button>
      <div className="ml-auto flex-end space-x-6 pr-20 font-semibold">
        <button className="cursor-pointer">Home</button>
        <button className="cursor-pointer">About</button>
        <button className="cursor-pointer">Resume</button>
      </div>
    </div>
  );
}
