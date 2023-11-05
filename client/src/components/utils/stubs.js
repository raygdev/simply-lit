let symArray = ['A','B','C','D','E','F','G','H','I','J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "!", "#", "$", "&", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]

let symbols = symArray.map(sym => ({ sym }))

export const letterStub = [
    {
        type: "Lighted",
        font: "Helvetica",
        size: "18X10X10",
        letters: symbols
    },
    {
        type: "Wood",
        font: "Times-Roman",
        size: "18X18X10",
        letters: symbols
    },
    {
        type: "Composite",
        font: "Times-Roman",
        size: "18X18X10",
        letters: symbols
    },
    {
        type: "Metal",
        font: "Times-Roman",
        size: "18X18X10",
        letters: symbols
    },
    {
        type: "Metal",
        font: "Times-Roman",
        size: "18X18X10",
        letters: symbols
    }
]