import { useState, useCallback } from 'react'
import Input from './components/input'
import '../styles/global.css'

interface User {
  cep: string;
  cardNumber: number;
  mm: number;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>({} as User)

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ... user,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }, [user])

  return (
    <div className='bg-slate-200 w-screen h-screen'>
      <h1>Hellow World TS!</h1>

      <Input name='cep' mask="cep" onChange={handleChange} />

      <Input name='cardNumber' mask="cardNumber" onChange={handleChange} />

      <button 
        className='bg-[hsl(278,68%,11%)] text-white py-[2px] px-[5px] rounded' 
        onClick={() => console.log(user)}
      >Salvar!</button>
    </div>
  )
}

export default App

// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// import {
//   bgCardBack,
//   bgCardFront,
//   bgMainDektop,
//   bgMainMobile,
// } from './assets/images/index.js'
// import '../styles/globals.css'

// const schema = yup.object({
//   cardholderName: yup.string().required("Can't be blank"),
//   cardNumber: yup.string("Wrong format, numbers only").min(16, "Must be sixteen (16) digits").max(16, "Must be sixteen (16) digits").required("Can't be blank"),

//   mm: yup.string("Wrong format, numbers only").min(2, "Must be two (2) digits").max(2, "Must be two (2) digits").required("Can't be blank"),
//   yy: yup.string("Wrong format, numbers only").min(2, "Must be two (2) digits").max(2, "Must be two (2) digits").required("Can't be blank"),

//   cvc: yup.string("Wrong format, numbers only").min(3, "Must be three (3) digits").max(3, "Must be three (3) digits").required("Can't be blank"),
// }).required();

// function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm({
//     resolver: yupResolver(schema)
//   });

//   function onSubmit() {
//     e.preventDefault()
//   }

//   return (
//     <div className='font-space-grotesk bg-[hsl(0,0%,100%)]'>
//       <picture>
//         <source media="(min-width:640px)" srcset={bgMainDektop} className='h-screen' />
//         <img src={bgMainMobile} alt="" className='w-screen sm:w-auto sm:h-screen' />
//       </picture>

//       <main>
//         <div className='p-3 absolute top-0 left-0 text-white'>
//           <div className='relative w-full h-full'>
//             <img src={bgCardBack} alt="" className='w-[90%] h-[90%] ml-[30px] relative' />
//             <span className='absolute p-1 pl-[80%] -mt-[29%] w-[90%] text-white'>{watch("cvc", "000")}</span>
//           </div>

//           <div className='relative w-full h-full'>
//             <img src={bgCardFront} alt="" className='w-[90%] h-[90%] -mt-[60px]' />
//             <svg className=' absolute -mt-[45%] pl-[5%] w-full' width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" /><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" /></svg>

//             <span
//               className='absolute p-1 pl-[5%] -mt-[21%] w-[90%] text-[130%]'
//             >{watch("cardNumber", "0000 0000 0000 0000")}</span>

//             <span
//               className='absolute p-1 pl-[5%] -mt-[10%] w-[90%] text-[13px] tracking-[0.2em]'
//             >{watch("cardholderName", "JANE APPLESEED")}</span>

//             <span
//               className='absolute p-1 pl-[70%] -mt-[10%] w-[90%] text-[13px] text-[]'
//             >{watch("mm", "00")}</span>

//             <span
//               className='absolute p-1 pl-[76.3%] -mt-[10%] w-[90%] text-[13px] text-[]'
//             >/</span>

//             <span
//               className='absolute p-1 pl-[80%] -mt-[10%] w-[90%] text-[13px] text-[]'
//             >{watch("yy", "00")}</span>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start max-w-[300px] p-5 mt-[20%]">
//           <label className="font-medium text-xs mb-[15px]">
//             <strong className='text-[hsl(278,68%,11%)] tracking-widest'>CARDHOLDER NAME</strong>
//             <input className='border-[1px] border-[hsl(270,3%,87%)] placeholder-[hsl(270,3%,87%)] font-medium py-2 px-4 rounded-md mt-[5px] w-full' placeholder='e.g. Jane Appleseed' {...register("cardholderName", { required: true })} />
//             <span className='text-red-700'>{errors.cardholderName?.message}</span>
//           </label>

//           <label className="font-medium text-xs mb-[15px]">
//             <strong className='text-[hsl(278,68%,11%)] tracking-widest'>CARD NUMBER</strong>
//             <input className='border-[1px] border-[hsl(270,3%,87%)] placeholder-[hsl(270,3%,87%)] font-medium py-2 px-4 rounded-md mt-[5px] w-full' placeholder='e.g. 1234 5678 9123 0000' type="number" {...register("cardNumber", { required: true })} />
//             <span className='text-red-700'>{errors.cardNumber?.message}</span>
//           </label>

//           <label className="font-medium text-xs mb-[15px]">
//             <strong className='text-[hsl(278,68%,11%)] tracking-widest'>EXP. DATE (MM/YY)</strong>

//             <div className='flex gap-2'>
//               <div className='w-[67%]'>
//                 <input className='border-[1px] border-[hsl(270,3%,87%)] placeholder-[hsl(270,3%,87%)] font-medium py-2 px-4 rounded-md mt-[5px] w-full' placeholder='MM' type="number" {...register("mm", { required: true })} />
//                 <span className='text-red-700'>{errors.mm?.message}</span>
//               </div>
//               <div className='w-[67%]'>
//                 <input className='border-[1px] border-[hsl(270,3%,87%)] placeholder-[hsl(270,3%,87%)] font-medium py-2 px-4 rounded-md mt-[5px] w-full' placeholder='YY' type="number" {...register("yy", { required: true })} />
//                 <span className='text-red-700'>{errors.yy?.message}</span>
//               </div>

//               <label className="font-medium text-xs mt-[-20px] mb-[15px]">
//                 <strong className='text-[hsl(278,68%,11%)] tracking-widest'>CVC</strong>
//                 <input className='border-[1px] border-[hsl(270,3%,87%)] placeholder-[hsl(270,3%,87%)] font-medium py-2 px-4 rounded-md mt-[5px] w-full' placeholder='e.g. 123' type="number" {...register("cvc", { required: true })} />
//                 <span className='text-red-700'>{errors.cvc?.message}</span>
//               </label>
//             </div>
//           </label>
//           <button className='w-full py-3 bg-[hsl(278,68%,11%)] text-white rounded-lg'>Confirm</button>
//         </form>
//       </main>
//     </div>
//   )
// }

// export default App

// // const [isOpen, setIsOpen] = useState(false)
// // <button onClick={() => setIsOpen(!isOpen)}>Click</button>
// //       {isOpen && <div>Oláaaa</div>}

// {/* <div className="w-screen h-screen">

//   <button onClick={() => setIsOpen(!isOpen)}>Click</button>
//   {isOpen && <div>Oláaaa</div>}

//   <form action={() => setCompletedForm(!completedForm)}>
//     <input type="temail" name="email" id="email" placeholder='email' />
//     <button type='submit'>enviar</button>
//   </form>

//   {completedForm && <div className='bg-red-900 w-[200px] h-[200px]'>ENVIADO!</div>}
// </div> */}

// // ======================================================================================

// // 0000 0000 0000 0000
// // Jane Appleseed
// // 00/00

// // 000

// // Cardholder Name
// // e.g. Jane Appleseed

// // Card Number
// // e.g. 1234 5678 9123 0000

// // Exp. Date (MM/YY)
// // MM
// // YY

// // CVC
// // e.g. 123

// // Confirm

// // <!-- Completed state start -->

// // Thank you!
// // We've added your card details
// // Continue

// // <div class="attribution">
// //   Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
// //   Coded by <a href="#">Your Name Here</a>.
// // </div>



// // ULTIMOS TESTES:
// {/*
// <picture>
//   <source media="(min-width:640px)" srcset={bgMainDektop} className='h-screen' />
//   <img src={bgMainMobile} alt="" className='w-screen sm:w-auto sm:h-screen' />
// </picture>

// <div className='w-[320px] h-[320px] bg-slate-600'>
//   <div className='w-[300px]'>
//     <img src={bgCardFront} alt="" />
//   </div>

//   <div className='w-[300px]'>
//     <img src={bgCardBack} alt="" />
//   </div>
// </div>
// */}


// // ====================================================
// {/* <div className='w-screen h-screen bg-slate-100 flex flex-col justify-center items-center'>
//   <h2>Guga Form</h2>

//   <form onSubmit={submitValues} className='w-[500px] h-[500px] bg-red-900 text-white flex flex-col items-center'>
//     <label htmlFor="name">Name</label>
//     <input type="text" name="name" id="name" required onChange={(e) => setName(e.target.value)} />

//     <label htmlFor="cardNumber">cardNumber</label>
//     <input type="number" name="cardNumber" id="cardNumber" required onChange={(e) => setNumber(e.target.value)} />

//     <button type="submit">Enviar</button>

//     <br /><br />
//     <div>
//       {name}<br />
//       {number}
//     </div>
//   </form>
// </div> */}
