"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";


export default function BgLogin() {
  return (

    
<main className="flex h-screen items-center justify-center bg-gray-100 overflow-hidden">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Bem-vindo ao Carbon Track</h2>
        <p className="text-center text-gray-500">Você precisa se cadastrar para acessar o sistema.</p>
        
        <div className="mt-6">

          <button
            onClick={() => signIn("google", {callbackUrl: '/'})}
            className="w-full px-4 py-2 text-black bg-gray-200 hover:bg-blue-700 rounded-md shadow-md flex items-center justify-center gap-2"
          >
            <Image
              src='/google-48x48.png'
              alt="Google"
              className="h-5 w-5"
              width={100}
              height={100}
            />
            Entrar com o Google
          </button>
        </div>

     
      </div>
    </main>

  )
}

