let activeClass = "border-b-2 border-orange-400 px-2 py-1"
let inactiveClass = "hover:text-white hover:bg-orange-700 rounded-sm px-2 py-1 transition-all"

export const linkOptions = [
    {
        to: "/",
        activeClass,
        inactiveClass,
        title: "Home"
    },
    {
        to: "/about",
        activeClass,
        inactiveClass,
        title: "About"
    },
    {
        to: "/login",
        activeClass,
        inactiveClass,
        title: "Log In"
    },
]
