import React from 'react'

export default function Header() {
  return (
    <div className='container'>
        <header className='header'>
                <div className='header__about'>
                    <div className='header__about__nav'>
                        <svg className='header__icon' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9.8335C9.38071 9.8335 10.5 8.71421 10.5 7.3335C10.5 5.95278 9.38071 4.8335 8 4.8335C6.61929 4.8335 5.5 5.95278 5.5 7.3335C5.5 8.71421 6.61929 9.8335 8 9.8335Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.99967 0.666748C6.23156 0.666748 4.53587 1.36913 3.28563 2.61937C2.03539 3.86961 1.33301 5.5653 1.33301 7.33342C1.33301 8.91008 1.66801 9.94175 2.58301 11.0834L7.99967 17.3334L13.4163 11.0834C14.3313 9.94175 14.6663 8.91008 14.6663 7.33342C14.6663 5.5653 13.964 3.86961 12.7137 2.61937C11.4635 1.36913 9.76778 0.666748 7.99967 0.666748V0.666748Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className='header__text'>г. Кокчетав, ул. Ж. Ташенова 129Б <br/><span>(Рынок Восточный)</span></p>
                    </div>
                    <div className='header__about__mail'>
                        <svg className='header__icon' width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.37533 0.333252H14.6253C15.3171 0.333207 15.9827 0.59788 16.4855 1.07298C16.9884 1.54808 17.2903 2.19758 17.3295 2.88825L17.3337 3.04158V10.9583C17.3337 11.65 17.069 12.3156 16.5939 12.8184C16.1188 13.3213 15.4693 13.6233 14.7787 13.6624L14.6253 13.6666H3.37533C2.68354 13.6666 2.01797 13.402 1.51513 12.9269C1.0123 12.4518 0.710324 11.8023 0.671159 11.1116L0.666992 10.9583V3.04158C0.666947 2.3498 0.931621 1.68423 1.40672 1.18139C1.88182 0.678558 2.53132 0.376584 3.22199 0.337419L3.37533 0.333252H14.6253H3.37533ZM16.0837 4.81075L9.29199 8.38575C9.21531 8.42626 9.13102 8.45037 9.04451 8.45654C8.958 8.46271 8.87115 8.4508 8.78949 8.42159L8.70949 8.38658L1.91699 4.81158V10.9583C1.91701 11.3242 2.05463 11.6768 2.30256 11.9461C2.55048 12.2153 2.89058 12.3815 3.25533 12.4116L3.37533 12.4166H14.6253C14.9915 12.4166 15.3442 12.2788 15.6134 12.0307C15.8827 11.7826 16.0487 11.4423 16.0787 11.0774L16.0837 10.9583V4.81075ZM14.6253 1.58325H3.37533C3.00933 1.58327 2.65673 1.72089 2.3875 1.96882C2.11827 2.21674 1.95211 2.55683 1.92199 2.92159L1.91699 3.04158V3.39908L9.00033 7.12659L16.0837 3.39825V3.04158C16.0836 2.67546 15.9459 2.32274 15.6978 2.0535C15.4497 1.78425 15.1094 1.61817 14.7445 1.58825L14.6253 1.58325Z" fill="#3F4E65"/>
                        </svg>
                        <p className='header__text'>opt.sultan@mail.ru <br/><span>На связи в любое время</span></p>
                    </div>
                </div>
                <div className='header__nav'>
                    <ul className='header__nav__links'>
                        <li className='nav__link'>О компании</li>
                        <li className='nav__link'>Доставка и оплата</li>
                        <li className='nav__link'>Возврат</li>
                        <li className='nav__link'>Контакты</li>
                    </ul>
                </div>
        </header>
    </div>
    
  )
}
