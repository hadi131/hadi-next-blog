import Header from '../components/Header'
import Footer from '@/components/Footer'
import Formate from '@/layout/formate'
import Section1 from '@/components/section1'
import Section2 from '@/components/section2'
import Section3 from '@/components/section3'
import Section4 from '@/components/section4'

export default function Home({data}) {
  return (
   <>
   <Formate>
   <Section1 blog={data}></Section1>
   <Section2 props={data}></Section2>
   <Section3 pop= {data}></Section3>
   {/* <Section4 buss={data}></Section4> */}
   </Formate>
   </>
  )
}


export async function getServerSideProps(){
  const res = await fetch("https://hadi-blogging-app.vercel.app/api/getAllBlogs")
  const data = await res.json()
  return {props : {data}}
}