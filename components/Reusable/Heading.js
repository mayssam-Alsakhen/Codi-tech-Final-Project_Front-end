
export default function Heading({text, text2, text3, text4}) {
  return (
    <div className=" text-primary capitalize text-6xl md:text-4xl sm:text-2xl font-bold flex justify-center pt-32 mb-20 md:mb-10 md:pt-32">
        <h1 className="first-letter:text-secondary">{text} </h1>
        <h1 className="first-letter:text-secondary ml-3">{text2}</h1>
        <h1 className="first-letter:text-secondary ml-3">{text3}</h1>
        <h1 className="first-letter:text-secondary ml-3">{text4}</h1>
    </div>
  )
}
