import Image from "next/image";

interface Props {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

const TestimonialCard = ({ text, imageSrc, name, username }: Props) => {
  return (
    <div
      key={name}
      className="max-w-[348px] w-full p-10 border border-black/15 rounded-3xl"
    >
      <div>{text}</div>

      <div className="flex items-center gap-2 mt-5">
        <Image
          priority
          unoptimized
          quality={100}
          src={imageSrc}
          alt={`${name}`}
          height={40}
          width={40}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5">{name}</div>
          <div className="leading-5 tracking-tight">{username}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
