export default function Button(props) {
    const buttonEL = props.text
    const htmlEl = buttonEL.map((text,index) => <button key={index}>{text}</button>)
    console.log(htmlEl)
    return (htmlEl)
}