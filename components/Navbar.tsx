"use client";

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { NAV_LINKS } from "@/constants"
import Button from "./Button"

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('');


  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>

        <div className="lg:flexCenter hidden">
            <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
            />
        </div>

        <div className="flex lg:hidden relative">
            <Image
                src={toggle ? "/exit.svg" : "/menu.svg"}
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer"
                onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? 'hidden' : 'flex'} flex-col gap-8 p-6 absolute top-5 right-0 mx-4 my-2 max-sm:w-[140px] w-[200px] z-100 rounded-xl shadow-xl`}>
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <li
                            key={link.key}
                            className={`${active === link.label ? 'bold-16' : 'regular-16'} cursor-pointer`}
                            onClick={() => {
                                setToggle(!toggle);
                                setActive(link.label)
                            }}
                        >
                            <a href={`#${link.key}`}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flexCenter w-full border-t border-gray-20 pt-4">
                    <Button
                        type="button"
                        title="Login"
                        icon="/user.svg"
                        variant="btn_dark_green"
                    />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar