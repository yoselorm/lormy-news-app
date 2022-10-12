import React from 'react';

const NewsList = (props) => {
    console.log(props)
    return (
        <div className='p-6 flex flex-row'>
            <div className='sm:max-h-fit sm:w-[32vw] w-[50vw]'>
                <img src={props.image} className='sm:h-[30vh] sm:w-[28vw]' />
                <a href={props.url} className='text-[#3F0071] text-md font-medium hover:text-[#D800A6]'>{props.title}</a>
                <p className='text-sm mt-2'>{props.description}</p>
            </div>
        </div>
    );
}

export default NewsList;
