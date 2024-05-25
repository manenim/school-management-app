import React from 'react'

const Teacher = () => {
  return (
    <div>
      <div className="title">
        <h2 className='text-center mt-8 py-4'>manis profile</h2>
      </div>
      <div className="wrapper bg-white border rounded-lg w-[60%] min-h-[60vh] mx-auto">
        <div className='px-8 mt-14'>
          <h3 className="py-4">National ID number: </h3>
          <h3 className="py-4">Title</h3>
          <h3 className="py-4">Name</h3>
          <h3 className="py-4">Surname</h3>
          <h3 className="py-4">Date Of Birth</h3>
          <h3 className="py-4">Teacher Number</h3>
          <h3 className="py-4">Salary</h3>
        </div>
      </div>
    </div>
  );
}

export default Teacher