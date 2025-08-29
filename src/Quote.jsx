import { useState, useEffect } from 'react';

const Quote = () => {

  const [quoteData, setQuoteData] = useState({}); // Holds the quote object
  const [showCharacter, setShowCharacter] = useState(false); // Controls character visibility
  const [loading, setLoading] = useState(true);
  const [showQuotePage, setShowQuotePage] = useState(false);
  const [entering, setEntering] = useState(false);


  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
      const data = await response.json();
     setTimeout(() => {
        setQuoteData(data);
        setShowCharacter(false);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch quote on initial render
  }, []);
 

  const handleEnterClick = () => {
     setEntering(true);
  setTimeout(() => {
    setShowQuotePage(true); // Show quote page after delay
  }, 2500); // Delay in milliseconds
};

 if (!showQuotePage) {
  return (
    <div className="bg-[url('/throneroom.jpeg')] bg-cover bg-center min-h-screen text-white">
      <div className='border-2 border-amber-950/50 absolute right-4 p-8 mt-16 mx-8 bg-amber-900/5 rounded-lg backdrop-blur-md flex flex-col items-center hover:border-amber-950'>
      <h1 className='font-got text-2xl text-center'>Words from the Realm</h1>
      <p className='font-serif text-xl py-4 text-center'>Heed The Wisdom Of Kings And Fools</p>
      <button onClick={handleEnterClick} disabled={entering} className={`font-got text-[13px] border-2 p-2 ${entering ? 'bg-amber-600/50' : 'bg-sky-600/50'} m-8 rounded-sm transform duration-300 delay-150 ease-out hover:scale-110 active:bg-amber-600`}>
        {entering? "Entering the Realm..." : "Go Beyond The Wall"} {!entering && <i class="fa-regular fa-snowflake"></i>} </button>
      </div>
    </div>
  );
}


  return (
    <div className="bg-[url('/throneroom.jpeg')] bg-cover bg-center min-h-screen text-white flex flex-col justify-center items-center font-got">
      <div className='backdrop-blur-md bg-white/5 m-8 p-4 rounded-lg text-center'>
        <blockquote className='text-lg tracking-wider'>{quoteData.sentence}</blockquote>
      </div>
      <div className='text-sm m-4 text-center backdrop-blur-md bg-white/5 rounded-md'>
        {showCharacter && <div className='p-4'>{quoteData.character?.name}</div>}
        {showCharacter && <div className='p-4'>{quoteData.character?.house?.name}</div>}
        {!showCharacter && <button onClick={() => setShowCharacter(true)} className='font-got text-[13px] border-2 p-2 rounded-md transform duration-300 delay-150 ease-out hover:scale-110 bg-amber-900/70 active:bg-red-600 '>Declare the Wielder of These Words</button>}
      </div>
      
      
      
      <button onClick={fetchQuote} disabled={loading} className='font-got text-[13px] border-2 p-2 m-2 rounded-sm transform duration-300 delay-150 ease-out hover:scale-110 bg-sky-950/70 backdrop-blur-md active:bg-amber-600'>
        {loading ? 'The ravens are in flight...' : 'Summon Another Voice'}
      </button>
    </div>
  )

}

export default Quote;