import './style.css'

export const Rodape = () =>{
  return(
    <div className='rodape-pg'>
      <div>
        <ul className='lista-rp'>
          <li>
            <img src='/imagens/imagens/fb.png' alt="facebook"/>
          </li>
          <li>
            <img src='/imagens/imagens/tw.png' alt="twitter"/>
          </li>
          <li>
            <img src='/imagens/imagens/ig.png' alt="instagram"/>
          </li>
        </ul>
      </div>

      <div className='logo-rp'>
        <img src="/imagens/imagens/logo.png" alt="Logo"></img>
      </div>
      
      <div className='text-rp'>
        <p>Desenvolvido por Alura</p>
      </div>
    </div>
  )
}