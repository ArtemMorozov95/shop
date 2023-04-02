import React from 'react'

export default function UpSort() {

    

  return (
    <div className='container'>
        <div className='upsort'>
            <div className='upsort__path'>
                <a href='#' className='path__text'>Главная</a>
                <a href='#' className='path__subtext'>Косметика и гигиена</a>
            </div>
            <div className='sort'>
                <h1 className='sort__text'>Косметика и гигиена</h1>
                <p className='sort__subtext'>Сортировка :  
                    <select className='sort__select'>
                        <option value='price'>По ценне</option>
                        <option value='name'>По названию</option>
                        <option value='max'>По возрастанию</option>
                        <option value='min'>По убыванию</option>
                    </select>
                </p>
            </div>
            <div className='sort__btns'>
                <button className='sort__btns-btn'>Уход<br/> за телом</button>
                <button className='sort__btns-btn'>Уход<br/> за руками</button>
                <button className='sort__btns-btn'>Уход<br/> за ногами</button>
                <button className='sort__btns-btn'>Уход<br/> за лицом</button>
                <button className='sort__btns-btn'>Уход<br/> за волосами</button>
                <button className='sort__btns-btn'>Средства<br/> для загара</button>
                <button className='sort__btns-btn'>Средства<br/> для бритья</button>
                <button className='sort__btns-btn'>Подарочные<br/> наборы</button>
                <button className='sort__btns-btn'>Гигиеническая<br/> продукция</button>
                <button className='sort__btns-btn'>Гигиена<br/> полости рта</button>
                <button className='sort__btns-btn'>Бумажная<br/> продукция</button>
            </div>
        </div>
    </div>
    
  )
}
