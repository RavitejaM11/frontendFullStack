import Button from './compopnents/Button/Button'

// import { Component } from 'react'
const buttonTextArr = ['button1','button2','button3']
console.log(buttonTextArr)

// export class Foo extends Component {
//     constructor(props) {
//         super(props)
//        this.state = {
//         showButton: false
//        } 
//     }
//     render() {
//       return (
//         <div>
//           {this.state.showButton && <Button/>}
//         </div>
//       )
//     }
// }

export default function App(){
    return(
        <main>
            <header>
                <h1>Assembly:Endgame</h1>
            </header>
            <br />
            <section className='status-box-container'>
                <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
                <div>
                    <Button
                        text = {buttonTextArr}
                    />
                </div>                
            </section>
        </main>
    )
}