"use client"

import { SkeletonCard } from '@/components/skeletonCard';
import { useGetStudentByIdQuery } from '@/services/studentsApi';
import React, {Suspense} from 'react'

type Props = {
  params: {
    id: string;
  };
};

const Teacher = (props: Props) => {
  const id = props.params.id;
  const studId = Number(id)


  console.log(studId)
  const {
    data: student,
    error,
    isLoading,
  } = useGetStudentByIdQuery(studId);


  return (
    <div>
      {!student ? (
        <div>
          <SkeletonCard />
        </div>
      ) : (
        <Suspense
          fallback={
            <div>
              <SkeletonCard />
            </div>
          }>
          <div className="title">
            <h2 className="text-center mt-8 py-8 text-2xl font-bold">{student.name} {student.surname} profile</h2>
          </div>
          <div className="wrapper bg-white border rounded-lg w-[60%] min-h-[60vh] mx-auto">
            <div className="px-8 mt-14">
              <h3 className="py-4"><span className="font-bold">National ID number:</span> {student.nationalId}</h3>
              <h3 className="py-4">
                <span className="font-bold">Name:</span> {student.name}
              </h3>
              <h3 className="py-4"><span className="font-bold">Surname:</span> {student.surname}</h3>
                <h3 className="py-4"><span className="font-bold">Date Of Birth: </span>{new Date(student.dateOfBirth).toLocaleDateString()}</h3>
              <h3 className="py-4"><span className="font-bold">Student Number:</span> {student.studentNumber}</h3>
            </div>
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default Teacher