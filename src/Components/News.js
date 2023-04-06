import React, { useEffect, useState } from 'react';
import axios from 'axios';
import App from '../App';
import NewsList from './NewsList';
import newsimg from '../assets/news.jpg'

const News = () => {

    const [news, setNews] = useState([]);
    const [category, setCategory] = useState('');
    // const [country, setCountry] = useState('')

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3de441a4a8a64e389fcc7ab60f2e0f57`

    useEffect(() => {

        const getNews = async () => {
            const response = await axios.get(url)
            setNews(response.data.articles)
            console.log(news)
        }
        getNews()

        // axios.get(url).then((response) => {
        //     setNews(response.data.articles)
        //     console.log(news)
        // })
    }, [category])
    return (
        <div>
            <div className='bg-image flex-col '>
                <h1 className='sm:text-[80px] sm:pt-16 pt-[10rem] sm:font-extrabold font-semibold text-[60px] flex justify-center items-center p-4 text-[#F5F5F5]'>Todays News</h1>
                <label className='flex justify-center gap-2 items-center'>

                    <select value={category} onChange={(e) => { setCategory(e.target.value) }} className='sm:w-[25vw] h-sm:[7vh] p-2 sm:text-xl rounded-md'>
                        <option value="general">general</option>
                        <option value="sports">Sports</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="health">Health</option>
                        <option value="technology">Tech</option>
                        <option value="science">Science</option>
                        <option value="business">Business</option>
                    </select>

                </label>
            </div >
            <div className='sm:grid sm:grid-cols-3'>
                {news.map((items) => {
                    // console.log(items)
                    return (
                        <div key={items.id} >
                            <NewsList author={items.author} content={items.content} description={items.description} title={items.title} url={items.url} image={items.urlToImage} />
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default News;
