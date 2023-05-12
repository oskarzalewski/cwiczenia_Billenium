import React from 'react'
import '../style.css'


function Footer() {
  return (
    <div className=" w-full footer ">
        <table className="table">
            <tr>
                <td>
                    <a href='#'>Strona główna</a>
                </td>
                <td>
                    <a href='#'>NFZ</a>
                </td>
                <td>
                    <a href='#'>Polityka Prywatności</a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href='#'>Zespół medyczny</a>
                </td>
                <td>
                    <a href='#'>Regulamin</a>
                </td>
                <td>
                    <a href='#'>Warunki korzystania</a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href='#'>Usługi</a>
                </td>
                <td>
                    <a href='#'>Skontaktuj się z nami</a>
                </td>
                <td>
                    <a href='#'>Polityka Cookies</a>
                </td>
            </tr>
            <tr>
                <td>
                    <p>UWMEDIC</p>
                </td>
                <td>
                    UWMEDIC&copy;2023
                </td>
                <td>
                    <a href='#'><img src={require('../images/ellipse1.png')}></img></a>
                    <a href='#'><img src={require('../images/ellipse2.png')}></img></a>
                    <a href='#'><img src={require('../images/ellipse3.png')}></img></a>
                    <a href='#'><img src={require('../images/ellipse4.png')}></img></a>
                    <a href='#'><img src={require('../images/ellipse5.png')}></img></a>
                </td>
            </tr>
        </table>
    </div>

                
  )
}

export default Footer
