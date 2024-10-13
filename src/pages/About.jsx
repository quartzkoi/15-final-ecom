const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          Let's get
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold'>
              Started
            </div>
          </div>
        </div>
      </div>

      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Think you have something to offer? Give us your details, and we'll get back to you soon. 
        We are currently taking applications for the following services: Household, Outdoor, and Automotive.
        If you have something else in mind, let us know!
      </p>

      <section className='mt-12'>
        <h2 className='text-3xl font-bold text-center'>
          Want to list your services? Let us know what you do best.
        </h2>

        <form className='mt-8 max-w-2xl mx-auto flex flex-col gap-y-4'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              name='name'
              className='input input-bordered'
              placeholder='Your name'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Contact Email</span>
            </label>
            <input
              type='email'
              name='email'
              className='input input-bordered'
              placeholder='Your email'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Contact Phone Number</span>
            </label>
            <input
              type='tel'
              name='phone'
              className='input input-bordered'
              placeholder='Your phone number'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Service Type</span>
            </label>
            <div className='flex flex-wrap gap-4'>
              <label className='cursor-pointer'>
                <input
                  type='radio'
                  name='serviceType'
                  value='household'
                  className='radio radio-primary'
                />
                <span className='ml-2'>Household</span>
              </label>
              <label className='cursor-pointer'>
                <input
                  type='radio'
                  name='serviceType'
                  value='outdoor'
                  className='radio radio-primary'
                />
                <span className='ml-2'>Outdoor</span>
              </label>
              <label className='cursor-pointer'>
                <input
                  type='radio'
                  name='serviceType'
                  value='automotive'
                  className='radio radio-primary'
                />
                <span className='ml-2'>Automotive</span>
              </label>
              <label className='cursor-pointer'>
                <input
                  type='radio'
                  name='serviceType'
                  value='other'
                  className='radio radio-primary'
                />
                <span className='ml-2'>Other</span>
              </label>
            </div>
            <input
              type='text'
              name='otherService'
              className='mt-2 input input-bordered'
              placeholder='If other, please specify'
            />
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>
              Submit your service
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default About;
