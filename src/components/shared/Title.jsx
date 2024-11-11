/* eslint-disable react/prop-types */
export default function Title({children, className}) {
  return (
    <>
        <h2 className={`${className}text-[#1D2939] text-[36px] font-bold`}>{children}</h2>
    </>
  )
}