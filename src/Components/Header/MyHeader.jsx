import { Link } from 'react-router-dom';


const MyHeader = () => {
    return (
       <>

          <header>
              <div className='py-1 bg-color d-flex align-items-center justify-content-between'>
                  <div className='px-4 t-w fs-1'>
                      Employee
                  </div>

                  <div className='pr-100'>
                       <Link className='px-4 text-decoration-none t-w fs-3' to='/'>DashBoard</Link>
                       <Link className='px-4 text-decoration-none t-w fs-3' to='/adddata'>Create</Link>
                  </div>
              </div>
          </header>
         
       </>
    );
};

export default MyHeader;