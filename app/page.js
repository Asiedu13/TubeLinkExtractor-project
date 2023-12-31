"use client";
import Image from "next/image";
import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";

import {CustomBtn} from './components/Registration/CustomBtn';
import { SubmitButton } from "./components/Registration/SubmitBtn";
import { TextInput } from "./components/Registration/TextInput";

export default function Home() {
  const { data: session } = useSession();

  if ( session ) {
    console.log( session );
    // return (
    //   <main className="">
    //    <div className="w-full h-screen flex flex-col justify-center items-center">
    //     <div className="w-44 h-44 relative mb-4">
    //     <Image
    //       src={session.user?.image}
    //       fill
    //       alt=""
    //       className="object-cover rounded-full"
    //     />
    //     </div>
    //     <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
    //     <p className="font-bold mb-4">{session.user?.email}</p>
    //     <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button>
    //   </div>
  
    //   </main>
    return (
      <section className="flex flex-col justify-center items-center  h-screen">
        <h1 className="mb-[40px] font-semibold">Bookings.com</h1>
        <div className="max-w-[100%] w-[440px] h-[519px] shadow-md rounded-2xl bg-[#fff] p-10 ">
          {/* Greetingd */}
          <header className="flex flex-col justify-center items-center ">
            <h1 className={` text-3xl font-black mb-[16px]`}>Welcome back</h1>
            <div id="a_bit_lost" className="flex justify-center items-center ">
              <p className="text-[#AAAFAE] text-sm">New to bookings.com?</p>
              <span>
                <Link
                  href="/sign_up"
                  className="font-semibold text-sm flex justify-center items-center"
                >
                  {" "}
                  &nbsp; Create an account
                </Link>
              </span>
            </div>
          </header>

          {/******* Sign in content ***********/}
          <section className="w-[97%] h-[364px] mt-[32px] ">
            {/* Signing in with google */}
            <Link
              href="##"
              onClick={(e) => {
                e.preventDefault();
                signIn("google", { callbackUrl: "/me" });
              }}
            >
              <CustomBtn>
                <Image src="/imgs/googlelogo.svg" width={20} height={20} alt="Google logo" /> &nbsp;
                Sign in with Google
              </CustomBtn>
            </Link>

            {/* or */}
            <div className=" flex items-center justify-around relative mb-[10px]">
              <div className="float-left w-[40%] mr-2">
                <hr />
              </div>
              <p className="text-[#808785]">or</p>
              <div className="float-right ml-2 w-[40%]">
                <hr />
              </div>
            </div>

            {/********* Sign in the traditional way ************/}
            <TextInput
              name="Email"
              type="text"
              placeholder="johndoe@example.com"
              // onChange={handleChange}
              // value={userInfo.email}
            />
            <div>
              <TextInput
                name="Password"
                type="password"
                // visible={visible}
                // onChange={handleChange}
                // value={userInfo.password}
              >
                <Image
                  // src={visible ? '/imgs/eye-off.svg' : '/imgs/eye_icon.svg'}
                  src="/imgs/eye-off.svg"
                  alt="show hidden password icon"
                  width={20}
                  height={10}
                  // onClick={() => setVisible(!visible)}
                />
              </TextInput>
            </div>

            <Link
              href="/forgot"
              className="ml-[55%] font-semibold text-sm md:ml-[65%]"
            >
              Forgot password?
            </Link>

            <SubmitButton
              //onSubmit={handleSubmit}
            >Sign in</SubmitButton>
          </section>
        </div>
      </section>
    );
    
  }
  else {
    return (
      //   <div className="w-full h-screen flex flex-col justify-center items-center">
      //     <p className="text-2xl mb-2">Not Signed In</p>
      //     <button className="bg-blue-600 py-2 px-6 rounded-md mb-2" onClick={() => signIn('google')}>Sign in with google</button>
      //     <button className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2" onClick={() => signIn('github')}>Sign in with github</button>
      // </div>
      <section className="flex flex-col justify-center items-center  h-screen">
        <h1 className="mb-[40px] font-semibold">TubeLinkExtract.com</h1>
        <div className="max-w-[100%] w-[440px] h-[519px] shadow-md rounded-2xl bg-[#fff] p-10 ">
          {/* Greetingd */}
          <header className="flex flex-col justify-center items-center ">
            <h1 className={` text-3xl font-black mb-[16px]`}>Welcome back</h1>
            <div id="a_bit_lost" className="flex justify-center items-center ">
              <p className="text-[#AAAFAE] text-sm">New to bookings.com?</p>
              <span>
                <Link
                  href="/sign_up"
                  className="font-semibold text-sm flex justify-center items-center"
                >
                  {" "}
                  &nbsp; Create an account
                </Link>
              </span>
            </div>
          </header>

          {/******* Sign in content ***********/}
          <section className="w-[97%] h-[364px] mt-[32px] ">
            {/* Signing in with google */}
            <Link
              href="##"
              onClick={(e) => {
                e.preventDefault();
                signIn("google", { callbackUrl: "/me" });
              }}
            >
              <CustomBtn>
                <Image
                  src="/imgs/googlelogo.svg"
                  width={20}
                  height={20}
                  alt="Google logo"
                />{" "}
                &nbsp; Sign in with Google
              </CustomBtn>
            </Link>

            {/* or */}
            <div className=" flex items-center justify-around relative mb-[10px]">
              <div className="float-left w-[40%] mr-2">
                <hr />
              </div>
              <p className="text-[#808785]">or</p>
              <div className="float-right ml-2 w-[40%]">
                <hr />
              </div>
            </div>

            {/********* Sign in the traditional way ************/}
            <TextInput
              name="Email"
              type="text"
              placeholder="johndoe@example.com"
              // onChange={handleChange}
              // value={userInfo.email}
            />
            <div>
              <TextInput
                name="Password"
                type="password"
                // visible={visible}
                // onChange={handleChange}
                // value={userInfo.password}
              >
                <Image
                  // src={visible ? '/imgs/eye-off.svg' : '/imgs/eye_icon.svg'}
                  src="/imgs/eye-off.svg"
                  alt="show hidden password icon"
                  width={20}
                  height={10}
                  // onClick={() => setVisible(!visible)}
                />
              </TextInput>
            </div>

            <Link
              href="/forgot"
              className="ml-[55%] font-semibold text-sm md:ml-[65%]"
            >
              Forgot password?
            </Link>

            <SubmitButton
            //onSubmit={handleSubmit}
            >
              Sign in
            </SubmitButton>
          </section>
        </div>
      </section>
    );
  }
}
