

export default function Sport({ sport, children }) {
    return (
      <div key={sport.id} className='sport' tabIndex={0}>
        <span className='sport-container'>
          <h3 className='sport-name'>{sport.name}</h3>
          <div className='image-container'>
            <img src={sport.allSportsData} alt='' className='sport-image' />
          </div>
        </span>
        {children}
      </div>
    );
  }