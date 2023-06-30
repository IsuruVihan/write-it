import {JSX} from "react";
import Image from "next/image";
import Link from "next/link";

import Avatar from "@/public/avatar.jpg";
import Star from "@/public/star.png";
import Bookmark from "@/public/bookmark.svg";
import Thumbnail from "@/public/post-thumbnail.jpg";

type Props = {
  no?: number,
  author: {
    name: string,
    // image
    link: string,
  },
  publication?: {
    name: string,
    // image
    link: string,
  },
  title: string,
  subtitle?: string,
  // thumbnail,
  category?: string,
  link: string,
  date: string,
  minutes: string,
  membersOnly: boolean,
  bookmarkingEnabled: boolean,
};

export default function TrendingPost(props: Props): JSX.Element {
  const {
    no,
    author,
    publication,
    title,
    subtitle,
    category,
    link,
    date,
    minutes,
    membersOnly,
    bookmarkingEnabled,
  } = props;

  return (
    <div className="flex flex-row">
      {no && <div className="flex-1 sm:flex-1 xl:flex-2 font-extrabold text-gray-200 text-3xl tracking-tighter">
        0{no}
      </div>}
      <div className="pt-1.5 flex-5 sm:flex-11 md:flex-5 lg:flex-7 xl:flex-11 border-2 border-solid border-amber-600">
        <div className="flex items-center gap-2 h-5 pb-3">
          <Link href={publication ? publication.link : author.link}>
            <Image className="rounded-full" src={Avatar} alt="Avatar" width={20} height={20}/>
          </Link>
          <p className="font-bold text-sm">
            <Link href={author.link}>
              <span>{author.name}</span>
            </Link>
            {publication && <>
              <span className="text-gray-500"> in </span>
              <Link href={publication.link}>
                <span>{publication.name}</span>
              </Link>
            </>}
          </p>
        </div>
        <Link href={link}>
          <p className="font-extrabold leading-snug">{title}</p>
        </Link>
        {subtitle && <Link href={link}>
          <p className="font-semibold leading-snug text-gray-500">{subtitle}</p>
        </Link>}
        <div className="flex flex-row justify-between pt-2">
          <div className="h-5 flex gap-2 items-center font-normal text-gray-500 text-sm">
            <p>{date}</p>
            <p>|</p>
            <p>{minutes} minute{parseInt(minutes) > 1 ? 's' : ''} read</p>
            {category && <p>|</p>}
            {category &&
              <Link href={"/"}>
                <p className="bg-gray-100 p-1 rounded-2xl hover:bg-gray-200 transition-colors duration-300 ease-in-out">
                  {category}
                </p>
              </Link>
            }
            {membersOnly && <div className="py-auto">
              <Image src={Star} alt="Members only" width={13} height={13}/>
            </div>}
          </div>
          {bookmarkingEnabled && <Image src={Bookmark} alt={"Add bookmark"} className="cursor-pointer" width={30}/>}
        </div>
      </div>
      {subtitle && <div className="flex-5 flex justify-center">
        <Image src={Thumbnail} alt={title} width={200}/>
      </div>}
    </div>
  );
}
