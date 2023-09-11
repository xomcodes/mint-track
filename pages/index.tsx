import { Inter } from "next/font/google";

import { ArrowLeft2, Moon, Sun1 } from "iconsax-react";
import { useRouter } from "next/router";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { Circle, Google } from "@/sign-in";

// import * as yup from "yup";

const inter = Inter({ subsets: ["latin"] });

const footerList = ["Marketplace", "License", "Terms of Use", "Blog"];
export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [user, setUser] = useState();
  const [logedUser, setLogedUser] = useState({});

  const { back } = useRouter();
  return (
    <section className=" flex bg-white dark:bg-horizon-dark-primary01 h-screen">
      <div className="flex-1 justify-between items-center py-10 flex flex-col min-w-[502px]">
        <div onClick={() => back()} className="flex gap-[6px] w-[410px]">
          <ArrowLeft2 size="24" color="#A3AED0" />
          <p className=" text-horizon-light-secondary01">Back to dashboard</p>
        </div>
        <div className="flex flex-col gap-[36px] w-[410px]">
          <div className="flex flex-col gap-[36px]">
            <div className="flex flex-col gap-2">
              <h2 className=" text-horizon-light-primary01 dark:text-white font-bold text-[36px]">
                Sign In
              </h2>
              <p className=" text-horizon-light-secondary01 text-[16px] font-normal">
                Enter your email and password to sign in!
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex gap-[9px] py-[14px] items-center justify-center bg-horizon-light-secondary03 dark:bg-horizon-dark-primary03  rounded-2xl">
                <Google />
                <p className="text-sm font-medium text-horizon-light-primary01 dark:text-white">
                  Sign in with Google
                </p>
              </div>

              <div className="flex justify-between items-center  w-full">
                <span className="bg-[#E0E5F2] dark:bg-[rgba(255,255,255,0.10)] w-[43%] h-[1.8px]"></span>
                <p className=" text-horizon-light-secondary01 text-sm font-medium ">
                  or
                </p>
                <span className="bg-[#E0E5F2] dark:bg-[rgba(255,255,255,0.10)] w-[43%]  h-[1.8px]"></span>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-[33px]">
            <div className="flex flex-col gap-[31px]">
              <div className="flex flex-col gap-6">
                <TextInput
                  placeholder="mail@simmmple.com"
                  label="Email"
                  withAsterisk
                  classNames={{
                    input:
                      "text-horizon-light-primary01 dark:text-white rounded-2xl h-[50px] placeholder:text-horizon-light-secondary01 placeholder:pl-2  bg-[#E0E5F2] dark:bg-[#0B1437] border-[#E0E5F2] dark:border-[rgba(255,255,255,0.10)] ",
                    label:
                      "pb-[13px] text-horizon-light-primary01 dark:text-white font-medium",
                    root: "pb-7",
                  }}
                />
                <PasswordInput
                  placeholder="Min. 8 characters"
                  label="Password"
                  required
                  classNames={{
                    input:
                      "rounded-2xl h-[50px]  placeholder:text-horizon-light-secondary01  placeholder:pl-2 bg-[#E0E5F2] dark:bg-[#0B1437] border-[#E0E5F2] dark:border-[rgba(255,255,255,0.10)]",
                    label:
                      "pb-[13px] text-horizon-light-primary01 dark:text-white",
                    innerInput:
                      "h-[50px] text-horizon-light-primary01 dark:text-white  ",
                  }}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[11px] items-center">
                  <input type="checkbox" />
                  <p className="text-sm font-normal text-horizon-light-primary01 dark:text-white">
                    Keep me logged in
                  </p>
                </div>
                <p className="text-[#4318FF] dark:text-white">
                  Forget password
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[26px] ">
              <Button
                type="submit"
                className=" bg-[#4318FF] hover:bg-blue-700  dark:bg-[#7551FF]  dark:hover:bg-violet-700 w-[410px] h-[54px] rounded-2xl"
              >
                Submit
              </Button>

              <p className="text-sm font-normal text-[#2B3674] dark:text-horizon-light-secondary01 pl-1">
                Not registered yet?
                <span className="font-bold text-[#4318FF ] dark:text-white">
                  Create an Account
                </span>
              </p>
            </div>
          </form>
        </div>

        <div className="text-horizon-light-secondary01 dark:text-white font-medium  text-sm">
          © 2022 MintTrack. All Rights Reserved. Made with love by Xommy!
        </div>
      </div>
      <div
        style={{ backgroundImage: "url('/sign-bg.png')" }}
        className=" bg-cover bg-no-repeat bg-[center_top]  h-screen flex flex-col flex-1 items-center justify-center rounded-bl-[12em] relative max-[1000px]:hidden"
      >
        <div className="flex  flex-col items-center ">
          <div className="flex flex-col gap-[102px]  ">
            <div className="flex flex-col gap-[23px] justify-center items-center">
              <Circle />
              {/* <HorizonLogo /> */}
            </div>
            <div className="flex flex-col gap-[7px] py-[31px] px-[110px]  items-center justify-center border-[2.198px] border-[rgba(255,255,255,0.20)] rounded-[12.512px]">
              <p className="font-normal text-[clamp(13px,0.9vw,18px) text-white">
                Learn more about MintTrack UI on
              </p>
              <h4 className="text-[clamp(13px,1.53vw,29.3px)] font-bold text-white ">
                Mint-Track.com
              </h4>
            </div>
          </div>

          <footer className="flex justify-between items-center absolute bottom-3 w-full pr-[30px] ">
            <div></div>

            <div className="flex gap-[clamp(20px,2.1vw,42px)] ">
              {footerList.map((item) => (
                <p
                  key={item}
                  className="text-white font-medium text-[clamp(11px,0.7vw,14px)]"
                >
                  {item}
                </p>
              ))}
            </div>
            {/* <ThemeControl /> */}
            <div
              className="w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#868CFF 0%,#4318FF 100%",
              }}
            >
              {resolvedTheme === "light" ? (
                <Moon
                  color="#fff"
                  variant="Bold"
                  size={24}
                  onClick={() => setTheme("dark")}
                />
              ) : (
                <Sun1
                  onClick={() => setTheme("light")}
                  color="#fff"
                  variant="Bold"
                  size={24}
                />
              )}
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
