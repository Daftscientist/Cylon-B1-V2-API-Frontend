import tw from "tailwind-styled-components"

const Button = tw.button`
    focus:ring-4 focus:outline-none 
    focus:ring-blue-300 font-medium 
    rounded-lg text-sm w-full sm:w-auto 
    px-5 py-2.5 text-center text-white
    ${props => props.color.background}
    ${props => props.color.hover}
    ${props => props.color.focus}
`;

Button.defaultProps = {
    color: {
        background: "bg-blue-600",
        hover: "bg-blue-700",
        focus: "bg-blue-800"
    }
}

export default Button