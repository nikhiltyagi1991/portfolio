import './App.css';
import portfolio from './portfolio.json';

function App() {

  const commaSplitDesignation = portfolio.designation.split(',');
  return (
    <div className='dark:text-white dark:bg-black'>
      <div className="container mx-auto">
        <div className='py-8'>
          <div className='text-3xl'>{portfolio.initials}.</div>
        </div>
        <div className='flex items-center'>
          <div className='flex-1'>
            <div className='text-7xl'>
              <div>{portfolio.first_name}</div>
              <div>{portfolio.last_name}.</div>
            </div>
            <div className='mt-8 bg-black h-2 w-16 rounded-2xl dark:bg-white'></div>
          </div>
          <div className='flex-[2_1_0%]'>
            <img src={portfolio.own_pic} alt={portfolio.first_name} />
          </div>
          <div className='flex-1'>
            <div className='text-5xl'>
              {commaSplitDesignation.map((x,i) => <div key={x}>{x}{commaSplitDesignation.length===i+1?'':','}</div>)}
            </div>
            <div className='mt-8' dangerouslySetInnerHTML={{__html: portfolio.intro}}></div>
          </div>
        </div>
        <div className='flex items-center bg-gray-600 w-3/4 p-8 m-auto -mt-8'>
          <div>
            Meet My Recent Companies
          </div>
          <div className='flex gap-8 ml-16'>
            {
              portfolio.workexperience.map(x => <a href={x.link}>
                <img className='rounded-xl' width={128} height={128} src={x.icon} alt={x.Organization} title={x.Organization} />
                </a>
              )
            }
          </div>

        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
